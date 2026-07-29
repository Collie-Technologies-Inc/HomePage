"use client";

import { useEffect, useState } from "react";

type User = { email: string | null; nickname: string };

export function KakaoAuthControls() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    fetch("/api/auth/me", { credentials: "same-origin" })
      .then((response) => response.json())
      .then((data: { user?: User | null }) => setUser(data.user || null))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <a className="kakao-login" href="/api/auth/kakao/start">카카오 로그인</a>;
  return (
    <div className="kakao-user">
      <span>{user.nickname}</span>
      <form action="/api/auth/logout" method="post"><button type="submit">로그아웃</button></form>
    </div>
  );
}

