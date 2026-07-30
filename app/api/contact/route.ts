import { NextResponse } from "next/server";
import { readSession } from "@/app/kakao-auth";

export const runtime = "edge";

const recipient = "james.park@collietech.co.kr";

async function runtimeEnv(name: string) {
  try {
    const { env: cloudflareEnv } = await import("cloudflare:workers");
    const directWorkerValue = (cloudflareEnv as Record<string, unknown>)[name];
    if (typeof directWorkerValue === "string" && directWorkerValue) return directWorkerValue;
  } catch {
    // Local Next.js builds do not provide the Cloudflare runtime module.
  }
  const workerEnv = (globalThis as typeof globalThis & {
    __sitesEnv?: Record<string, unknown>;
  }).__sitesEnv;
  const workerValue = workerEnv?.[name];
  return typeof workerValue === "string" && workerValue ? workerValue : process.env[name];
}

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const session = await readSession();
  if (!session) return NextResponse.json({ error: "로그인 후 문의해 주세요." }, { status: 401 });

  const apiKey = await runtimeEnv("RESEND_API_KEY");
  if (!apiKey) return NextResponse.json({ error: "메일 발송 설정이 아직 완료되지 않았습니다." }, { status: 503 });

  const data = (await request.json()) as Record<string, unknown>;
  const email = text(data.email, 200);
  const name = text(data.name, 120);
  const subject = text(data.subject, 200);
  const description = text(data.description, 5000);
  if (!email || !name || !subject || !description || !email.includes("@")) {
    return NextResponse.json({ error: "필수 입력 내용을 확인해 주세요." }, { status: 400 });
  }

  const body = [
    `성함 / 회사명: ${name}`,
    `이메일: ${email}`,
    `연락처: ${text(data.phone, 60) || "미입력"}`,
    `문의 유형: ${text(data.type, 100)}`,
    `기존 고객 여부: ${text(data.customer, 100)}`,
    `제품 / 프로젝트: ${text(data.product, 100) || "미입력"}`,
    "",
    "문의 내용",
    description,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({
      from: (await runtimeEnv("CONTACT_FROM_EMAIL")) || "Collie Technologies <website@collietech.co.kr>",
      to: [recipient],
      reply_to: email,
      subject: `[홈페이지 문의] ${subject}`,
      text: body,
    }),
  });

  if (!response.ok) {
    console.error("Contact email delivery failed", response.status, await response.text());
    return NextResponse.json({ error: "메일 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
