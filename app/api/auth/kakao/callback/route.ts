import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { callbackUrl, createSessionToken, KAKAO_SESSION_COOKIE, KAKAO_STATE_COOKIE, secureCookie } from "@/app/kakao-auth";

type KakaoToken = { access_token?: string; error?: string; error_description?: string };
type KakaoUser = {
  id: number;
  kakao_account?: {
    email?: string;
    profile?: { nickname?: string; profile_image_url?: string };
  };
  properties?: { nickname?: string; profile_image?: string };
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const appUrl = new URL(callbackUrl(request));
  appUrl.pathname = "/";
  appUrl.search = "";
  appUrl.hash = "";
  const stateCookie = request.headers.get("cookie")?.match(/(?:^|; )collie_kakao_state=([^;]+)/)?.[1];
  if (!url.searchParams.get("code") || !url.searchParams.get("state") || url.searchParams.get("state") !== stateCookie) {
    appUrl.searchParams.set("auth_error", "invalid_state");
    return NextResponse.redirect(appUrl);
  }

  const clientId = process.env.KAKAO_REST_API_KEY;
  if (!clientId) return Response.json({ error: "Kakao login is not configured." }, { status: 503 });
  const body = new URLSearchParams({
    client_id: clientId,
    code: url.searchParams.get("code")!,
    grant_type: "authorization_code",
    redirect_uri: callbackUrl(request),
  });
  if (process.env.KAKAO_CLIENT_SECRET) body.set("client_secret", process.env.KAKAO_CLIENT_SECRET);

  const tokenResponse = await fetch("https://kauth.kakao.com/oauth/token", {
    body,
    headers: { "content-type": "application/x-www-form-urlencoded;charset=utf-8" },
    method: "POST",
  });
  const token = (await tokenResponse.json()) as KakaoToken;
  if (!tokenResponse.ok || !token.access_token) {
    appUrl.searchParams.set("auth_error", "token");
    return NextResponse.redirect(appUrl);
  }

  const profileResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  if (!profileResponse.ok) {
    appUrl.searchParams.set("auth_error", "profile");
    return NextResponse.redirect(appUrl);
  }
  const kakaoUser = (await profileResponse.json()) as KakaoUser;
  const kakaoId = String(kakaoUser.id);
  const nickname = kakaoUser.kakao_account?.profile?.nickname || kakaoUser.properties?.nickname || "카카오 사용자";
  const profileImageUrl = kakaoUser.kakao_account?.profile?.profile_image_url || kakaoUser.properties?.profile_image || null;
  const email = kakaoUser.kakao_account?.email || null;

  let userId = 0;
  if (process.env.DATABASE_URL) {
    const db = getDb();
    await db.insert(users).values({ email, kakaoId, nickname, profileImageUrl }).onConflictDoUpdate({
      target: users.kakaoId,
      set: { email, lastLoginAt: new Date().toISOString(), nickname, profileImageUrl, updatedAt: new Date().toISOString() },
    });
    const [user] = await db.select().from(users).where(eq(users.kakaoId, kakaoId)).limit(1);
    if (!user) {
      appUrl.searchParams.set("auth_error", "storage");
      return NextResponse.redirect(appUrl);
    }
    userId = user.id;
  }

  appUrl.searchParams.set("login", "kakao");
  const response = NextResponse.redirect(appUrl);
  response.cookies.delete(KAKAO_STATE_COOKIE);
  response.cookies.set(KAKAO_SESSION_COOKIE, await createSessionToken(userId, kakaoId, { email, nickname, profileImageUrl }), {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
    sameSite: "lax",
    secure: secureCookie(request),
  });
  return response;
}
