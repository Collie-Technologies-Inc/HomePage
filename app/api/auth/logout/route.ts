import { NextResponse } from "next/server";
import { KAKAO_SESSION_COOKIE } from "@/app/kakao-auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/", request.url), 303);
  response.cookies.delete(KAKAO_SESSION_COOKIE);
  return response;
}

