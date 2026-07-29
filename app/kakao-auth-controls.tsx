"use client";

import { useEffect, useState } from "react";

type User = {
  email: string | null;
  nickname: string;
  profileImageUrl: string | null;
  isAdmin: boolean;
};

const menuItems = [
  { id: "ceo-message", title: "기업현황" },
  { id: "ax-control", title: "기술개발" },
  { id: "ip-list", title: "연구개발" },
  { id: "press", title: "뉴스 및 소식" },
] as const;

export function HeaderActions() {
  const [user, setUser] = useState<User | null>(null);
  const [showLoginNotice, setShowLoginNotice] = useState(false);

  function startKakaoLogin() {
    if (window.location.hostname === "localhost") {
      window.location.href = `http://127.0.0.1:${window.location.port || "3000"}/api/auth/kakao/start`;
      return;
    }
    window.location.href = `${window.location.origin}/api/auth/kakao/start`;
  }

  useEffect(() => {
    fetch("/api/auth/me", { credentials: "same-origin" })
      .then((response) => response.json())
      .then((data: { user?: User | null }) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, []);

  return (
    <>
      <nav className="header-navigation" id="site-navigation" aria-label="웹사이트 주요 메뉴">
        {menuItems.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            onClick={(event) => {
              if (user) return;
              event.preventDefault();
              setShowLoginNotice(true);
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
      {!user ? (
        <a
          className="kakao-login"
          href="/api/auth/kakao/start"
          onClick={(event) => {
            event.preventDefault();
            startKakaoLogin();
          }}
        >
          카카오 로그인
        </a>
      ) : (
        <div className="kakao-user">
          {user.profileImageUrl ? (
            <img
              className="kakao-profile-image"
              src={user.profileImageUrl}
              alt={`${user.nickname} 프로필 사진`}
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="kakao-profile-placeholder" aria-hidden="true">
              {user.nickname.slice(0, 1)}
            </span>
          )}
          <span>{user.nickname}</span>
          {user.isAdmin ? <a className="admin-link" href="/admin/users">회원 관리</a> : null}
          <form action="/api/auth/logout" method="post"><button type="submit">로그아웃</button></form>
        </div>
      )}
      {showLoginNotice ? (
        <div className="login-required-backdrop" role="presentation">
          <div
            aria-describedby="login-required-description"
            aria-labelledby="login-required-title"
            aria-modal="true"
            className="login-required-dialog"
            role="dialog"
          >
            <h2 id="login-required-title">collietech.co.kr의 메시지</h2>
            <p id="login-required-description">메뉴를 이용하려면 먼저 카카오 로그인이 필요합니다.</p>
            <div className="login-required-actions">
              <button className="login-required-confirm" onClick={startKakaoLogin} type="button">확인</button>
              <button className="login-required-cancel" onClick={() => setShowLoginNotice(false)} type="button">취소</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
