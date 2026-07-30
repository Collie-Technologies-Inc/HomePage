"use client";

import { FormEvent, useEffect, useState } from "react";

type User = {
  email: string | null;
  nickname: string;
  profileImageUrl: string | null;
  isAdmin: boolean;
};

const menuItems = [
  { href: "/#ceo-message", protected: true, title: "기업현황" },
  { href: "/#ax-control", protected: true, title: "기술개발" },
  { href: "/#research-development", protected: true, title: "연구개발" },
  { href: "/#press", protected: true, title: "뉴스 및 소식" },
  { href: "/contact", protected: true, title: "문의하기" },
] as const;

export function HeaderActions() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [showLoginNotice, setShowLoginNotice] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      .then((data: { user?: User | null }) => {
        const resolvedUser = data.user || null;
        setUser(resolvedUser);
        if (!resolvedUser && new URLSearchParams(window.location.search).get("contact") === "login-required") {
          setShowLoginNotice(true);
          window.history.replaceState(null, "", "/");
        }
      })
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    const showNotice = () => setShowLoginNotice(true);
    window.addEventListener("collie:login-required", showNotice);
    return () => window.removeEventListener("collie:login-required", showNotice);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (user !== null || window.location.pathname !== "/") return;
    const previousOverflow = document.body.style.overflow;
    window.scrollTo({ behavior: "auto", top: 0 });
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [user]);

  async function logout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const previousUser = user;
    window.scrollTo({ behavior: "auto", top: 0 });
    window.history.replaceState(null, "", "/");
    setShowLoginNotice(false);
    setUser(null);
    try {
      const response = await fetch("/api/auth/logout", {
        credentials: "same-origin",
        method: "POST",
      });
      if (!response.ok) {
        setUser(previousUser);
      } else if (window.location.pathname !== "/") {
        window.location.replace("/");
      }
    } catch {
      setUser(previousUser);
    }
  }

  return (
    <>
      <button
        aria-controls="site-navigation"
        aria-expanded={mobileMenuOpen}
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((open) => !open)}
        type="button"
      >
        <span aria-hidden="true">☰</span>
        메뉴
      </button>
      <nav className={`header-navigation${mobileMenuOpen ? " is-open" : ""}`} id="site-navigation" aria-label="웹사이트 주요 메뉴">
        {menuItems.map((item) => (
          <a
            href={item.href}
            key={item.href}
            onClick={(event) => {
              if (user) {
                setMobileMenuOpen(false);
                if (item.href.startsWith("/#") && window.location.pathname === "/") {
                  event.preventDefault();
                  const hash = item.href.slice(1);
                  window.history.pushState(null, "", hash);
                  document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "auto", block: "start" });
                }
                return;
              }
              event.preventDefault();
              setMobileMenuOpen(false);
              if (item.protected && user === null) setShowLoginNotice(true);
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
      {user === undefined ? (
        <span className="auth-loading" aria-label="로그인 상태 확인 중" />
      ) : !user ? (
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
          <form action="/api/auth/logout" method="post" onSubmit={logout}><button type="submit">로그아웃</button></form>
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
            <h2 id="login-required-title">로그인이 필요합니다</h2>
            <p id="login-required-description">메뉴를 이용하려면 오른쪽의 카카오 로그인 버튼으로 먼저 로그인해 주세요.</p>
            <div className="login-required-actions">
              <button className="login-required-confirm" onClick={() => setShowLoginNotice(false)} type="button">확인</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
