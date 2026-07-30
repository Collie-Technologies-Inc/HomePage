"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(formElement))),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "문의 전송에 실패했습니다.");
      formElement.reset();
      setStatus("sent");
      setMessage("문의가 정상적으로 전송되었습니다. 담당자가 확인 후 답변드리겠습니다.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <form className="contact-form" onSubmit={sendInquiry}>
      <div className="contact-field-grid">
        <label>
          <span>이메일 <strong>필수</strong></span>
          <input name="email" type="email" autoComplete="email" required placeholder="name@example.com" />
        </label>
        <label>
          <span>성함 / 회사명 <strong>필수</strong></span>
          <input name="name" type="text" autoComplete="name" required placeholder="홍길동 / 회사명" />
        </label>
        <label>
          <span>연락처 <small>선택</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="010-0000-0000" />
        </label>
        <label>
          <span>문의 유형 <strong>필수</strong></span>
          <select name="type" required defaultValue="">
            <option value="" disabled>문의 유형을 선택해 주세요</option>
            <option>제품 및 기술 문의</option>
            <option>사업 제휴 및 도입 문의</option>
            <option>투자 및 기업 문의</option>
            <option>언론 및 홍보 문의</option>
            <option>채용 문의</option>
            <option>기타 문의</option>
          </select>
        </label>
        <label>
          <span>기존 고객 여부 <strong>필수</strong></span>
          <select name="customer" required defaultValue="">
            <option value="" disabled>선택해 주세요</option>
            <option>예, 기존 고객입니다</option>
            <option>아니요, 처음 문의합니다</option>
          </select>
        </label>
        <label>
          <span>제품 / 프로젝트 <small>선택</small></span>
          <select name="product" defaultValue="">
            <option value="">관련 항목을 선택해 주세요</option>
            <option>Physical AI Robot Caddie</option>
            <option>골프장 AX 관제</option>
            <option>Digital Putting</option>
            <option>기타</option>
          </select>
        </label>
      </div>
      <label>
        <span>제목 <strong>필수</strong></span>
        <input name="subject" type="text" required placeholder="문의 제목을 입력해 주세요" />
      </label>
      <label>
        <span>상세 내용 <strong>필수</strong></span>
        <textarea name="description" required rows={8} placeholder="문의 목적과 필요한 내용을 자세히 입력해 주세요." />
      </label>
      <p className="contact-form-note">입력하신 내용은 문의 답변 목적으로만 사용됩니다.</p>
      {message ? <p className={`contact-form-status is-${status}`} role="status">{message}</p> : null}
      <button className="contact-submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "전송 중입니다..." : "문의 보내기"}
      </button>
    </form>
  );
}
