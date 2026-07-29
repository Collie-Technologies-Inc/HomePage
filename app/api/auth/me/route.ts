import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { isAdminKakaoId, readSession } from "@/app/kakao-auth";

export async function GET() {
  try {
    const session = await readSession();
    if (!session) return Response.json({ user: null });
    if (!process.env.DATABASE_URL) {
      return Response.json({
        user: session.nickname ? {
          email: session.email || null,
          isAdmin: isAdminKakaoId(session.kakaoId),
          nickname: session.nickname,
          profileImageUrl: session.profileImageUrl || null,
        } : null,
      });
    }
    const [user] = await getDb()
      .select({
        email: users.email,
        nickname: users.nickname,
        profileImageUrl: users.profileImageUrl,
      })
      .from(users)
      .where(eq(users.id, session.userId))
      .limit(1);
    return Response.json({
      user: user ? { ...user, isAdmin: isAdminKakaoId(session.kakaoId) } : null,
    });
  } catch {
    return Response.json({ user: null });
  }
}
