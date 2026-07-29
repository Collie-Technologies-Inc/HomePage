import { isAdminKakaoId, readSession } from "@/app/kakao-auth";

export async function GET() {
  try {
    const session = await readSession();
    if (!session) return Response.json({ user: null });
    return Response.json({
      user: session.nickname ? {
        email: session.email || null,
        isAdmin: isAdminKakaoId(session.kakaoId),
        kakaoId: session.kakaoId,
        nickname: session.nickname,
        profileImageUrl: session.profileImageUrl || null,
      } : null,
    });
  } catch {
    return Response.json({ user: null });
  }
}
