import { NextResponse } from "next/server";
import { callbackUrl, KAKAO_STATE_COOKIE, secureCookie } from "@/app/kakao-auth";

export async function GET(request: Request) {
  const clientId = process.env.KAKAO_REST_API_KEY;
  if (!clientId) return Response.json({ error: "Kakao login is not configured." }, { status: 503 });

  const state = crypto.randomUUID();
  const authorizeUrl = new URL("https://kauth.kakao.com/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", callbackUrl(request));
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set(KAKAO_STATE_COOKIE, state, {
    httpOnly: true,
    maxAge: 600,
    path: "/",
    sameSite: "lax",
    secure: secureCookie(request),
  });
  return response;
}

