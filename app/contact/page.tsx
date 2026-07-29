import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { readSession } from "@/app/kakao-auth";
import { ContactForm } from "./contact-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "문의하기 | 콜리테크놀로지",
  description: "콜리테크놀로지의 제품, 기술, 사업 제휴 및 기업 관련 문의를 접수합니다.",
};

export default async function ContactPage() {
  const session = await readSession();
  if (!session) redirect("/?contact=login-required");

  return (
    <section className="contact-page">
      <div className="contact-shell">
        <div className="contact-intro">
          <h1>문의하기</h1>
          <p className="contact-lead">제품과 기술, 사업 제휴 및 도입에 관한 문의를 남겨 주세요. 내용을 확인한 후 담당자가 빠르게 답변드리겠습니다.</p>
          <div className="contact-guide">
            <h2>문의 안내</h2>
            <ul>
              <li>필수 항목을 정확하게 입력해 주세요.</li>
              <li>제품명과 문의 목적을 구체적으로 작성하면 더 빠르게 안내받을 수 있습니다.</li>
              <li>영업일 기준 1~2일 이내 답변을 원칙으로 합니다.</li>
            </ul>
            <a href="mailto:james.park@collietech.co.kr">james.park@collietech.co.kr</a>
          </div>
          <Link className="contact-home-link" href="/">홈으로 돌아가기</Link>
        </div>
        <div className="contact-form-card">
          <h2>문의 내용을 입력해 주세요</h2>
          <p><strong>필수</strong> 표시 항목은 반드시 입력해야 합니다.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
