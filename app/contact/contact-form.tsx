"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `[홈페이지 문의] ${String(form.get("subject") || "문의드립니다")}`;
    const body = [
      `성함 / 회사명: ${String(form.get("name") || "")}`,
      `이메일: ${String(form.get("email") || "")}`,
      `연락처: ${String(form.get("phone") || "미입력")}`,
      `문의 유형: ${String(form.get("type") || "")}`,
      `기존 고객 여부: ${String(form.get("customer") || "")}`,
      `제품 / 프로젝트: ${String(form.get("product") || "미입력")}`,
      "",
      "문의 내용",
      String(form.get("description") || ""),
    ].join("\n");

    window.location.assign(
      `mailto:james.park@collietech.co.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
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
      <p className="contact-form-note">파일 첨부가 필요한 경우 이메일 창이 열린 후 직접 첨부해 주세요.</p>
      <button className="contact-submit" type="submit">이메일로 문의 보내기</button>
    </form>
  );
}
