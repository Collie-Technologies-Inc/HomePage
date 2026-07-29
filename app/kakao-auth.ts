import { cookies } from "next/headers";

export const KAKAO_SESSION_COOKIE = "collie_kakao_session";
export const KAKAO_STATE_COOKIE = "collie_kakao_state";

type SessionPayload = {
  email?: string | null;
  exp: number;
  kakaoId: string;
  nickname?: string;
  profileImageUrl?: string | null;
  userId: number;
};

type SessionProfile = Pick<SessionPayload, "email" | "nickname" | "profileImageUrl">;

export function isAdminKakaoId(kakaoId: string) {
  return (process.env.ADMIN_KAKAO_IDS || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
    .includes(kakaoId);
}

function sessionSecret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 32) {
    throw new Error("SESSION_SECRET must contain at least 32 characters.");
  }
  return value;
}

function encode(value: string | ArrayBuffer) {
  const bytes = typeof value === "string" ? new TextEncoder().encode(value) : new Uint8Array(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decode(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(normalized + "=".repeat((4 - (normalized.length % 4)) % 4));
  return new TextDecoder().decode(Uint8Array.from(binary, (char) => char.charCodeAt(0)));
}

async function sign(value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(sessionSecret()),
    { hash: "SHA-256", name: "HMAC" },
    false,
    ["sign"],
  );
  return encode(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value)));
}

export async function createSessionToken(userId: number, kakaoId: string, profile: SessionProfile = {}) {
  const payload = encode(JSON.stringify({
    ...profile,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 14,
    kakaoId,
    userId,
  } satisfies SessionPayload));
  return `${payload}.${await sign(payload)}`;
}

export async function readSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(KAKAO_SESSION_COOKIE)?.value;
  if (!token) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature || signature !== (await sign(payload))) return null;
  try {
    const parsed = JSON.parse(decode(payload)) as SessionPayload;
    if (!Number.isInteger(parsed.userId) || parsed.exp <= Date.now() / 1000) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function callbackUrl(request: Request) {
  return process.env.KAKAO_REDIRECT_URI || new URL("/api/auth/kakao/callback", request.url).toString();
}

export function secureCookie(request: Request) {
  return new URL(request.url).protocol === "https:";
}
