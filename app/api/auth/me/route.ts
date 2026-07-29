import { eq } from "drizzle-orm";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { readSession } from "@/app/kakao-auth";

export async function GET() {
  try {
    const session = await readSession();
    if (!session) return Response.json({ user: null });
    const [user] = await getDb()
      .select({
        email: users.email,
        nickname: users.nickname,
        profileImageUrl: users.profileImageUrl,
      })
      .from(users)
      .where(eq(users.id, session.userId))
      .limit(1);
    return Response.json({ user: user || null });
  } catch {
    return Response.json({ user: null });
  }
}
