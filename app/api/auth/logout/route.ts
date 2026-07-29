import { NextResponse } from "next/server";
import { KAKAO_SESSION_COOKIE } from "@/app/kakao-auth";

export async function POST(request: Request) {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(KAKAO_SESSION_COOKIE, "", {
    expires: new Date(0),
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: new URL(request.url).protocol === "https:",
  });
  return response;
}
