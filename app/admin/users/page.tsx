import type { Metadata } from "next";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isAdminKakaoId, readSession } from "@/app/kakao-auth";
import { getDb } from "@/db";
import { users } from "@/db/schema";

export const metadata: Metadata = {
  title: "회원 관리 | 콜리테크놀로지",
  robots: { index: false, follow: false },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date(value));
}

export default async function AdminUsersPage() {
  const session = await readSession();
  if (!session) redirect("/?admin=login-required");
  if (!isAdminKakaoId(session.kakaoId)) notFound();

  const memberList = await getDb().select().from(users).orderBy(desc(users.lastLoginAt));

  return (
    <section className="admin-page">
      <div className="admin-shell">
        <header className="admin-heading">
          <div>
            <h1>카카오 로그인 회원</h1>
            <p>가입 정보와 최근 로그인 기록을 확인할 수 있습니다.</p>
          </div>
          <div className="admin-actions">
            <Link className="admin-home-link" href="/">홈페이지로 돌아가기</Link>
            <div className="admin-count">전체 {memberList.length}명</div>
          </div>
        </header>

        <div className="admin-table-wrap">
          {memberList.length ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>사용자</th>
                  <th>이메일</th>
                  <th>가입일</th>
                  <th>최근 로그인</th>
                </tr>
              </thead>
              <tbody>
                {memberList.map((member) => (
                  <tr key={member.id}>
                    <td>
                      <div className="admin-profile">
                        {member.profileImageUrl ? (
                          <img className="admin-avatar" src={member.profileImageUrl} alt="" referrerPolicy="no-referrer" />
                        ) : (
                          <span className="admin-avatar admin-avatar-fallback" aria-hidden="true">
                            {member.nickname.slice(0, 1)}
                          </span>
                        )}
                        <div>
                          <strong>{member.nickname}</strong>
                          <small>회원 #{member.id}</small>
                        </div>
                      </div>
                    </td>
                    <td>{member.email || "제공 동의 안 함"}</td>
                    <td>{formatDate(member.createdAt)}</td>
                    <td>{formatDate(member.lastLoginAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="admin-empty">아직 로그인한 회원이 없습니다.</div>
          )}
        </div>
      </div>
    </section>
  );
}
