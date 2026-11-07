import type { Metadata } from "next";
import Link from "next/link";
import { gte, sql } from "drizzle-orm";
import { notFound, redirect } from "next/navigation";
import { analyticsPages, koreaDate } from "@/app/analytics-paths";
import { isAdminKakaoId, readSession } from "@/app/kakao-auth";
import { getDb } from "@/db";
import { pageViews } from "@/db/schema";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "방문 통계 | 콜리테크놀로지",
  robots: { index: false, follow: false },
};
const number = new Intl.NumberFormat("ko-KR");

export default async function AdminAnalyticsPage() {
  const session = await readSession();
  if (!session) redirect("/?admin=login-required");
  if (!isAdminKakaoId(session.kakaoId)) notFound();

  const now = new Date();
  const today = koreaDate(now);
  const days = Array.from({ length: 30 }, (_, i) => koreaDate(new Date(now.getTime() - i * 86_400_000)));
  let totals: { views: number; since: string | null } | undefined;
  let recent: { day: string; path: string; views: number }[] = [];
  let unavailable = false;
  try {
    const db = getDb();
    const [summary, rows] = await Promise.all([
      db.select({
        views: sql<number>`coalesce(sum(${pageViews.views}), 0)`.mapWith(Number),
        since: sql<string | null>`min(${pageViews.day})`,
      }).from(pageViews),
      db.select().from(pageViews).where(gte(pageViews.day, days[29])),
    ]);
    totals = summary[0];
    recent = rows;
  } catch {
    unavailable = true;
    console.error("Admin analytics database is unavailable.");
  }
  const daily = new Map(days.map((day) => [day, 0]));
  const pages = new Map(Object.keys(analyticsPages).map((path) => [path, 0]));
  for (const row of recent) {
    daily.set(row.day, (daily.get(row.day) || 0) + row.views);
    pages.set(row.path, (pages.get(row.path) || 0) + row.views);
  }
  const recentTotal = recent.reduce((sum, row) => sum + row.views, 0);

  return (
    <section className="admin-page">
      <div className="admin-shell">
        <header className="admin-heading">
          <div><h1>방문 통계</h1><p>관리자 전용 · 한국 시간 기준</p></div>
          <div className="admin-actions">
            <Link className="admin-home-link" href="/admin/analytics">새로고침</Link>
            <Link className="admin-home-link" href="/admin/users">회원 관리</Link>
            <Link className="admin-home-link" href="/">홈페이지로 돌아가기</Link>
          </div>
        </header>
        {unavailable ? (
          <div className="admin-empty" role="status">통계를 불러올 수 없습니다. 데이터베이스 연결과 방문 통계 테이블 설정을 확인해 주세요.</div>
        ) : (
          <>
            <div className="analytics-summary">
              <article><h2>오늘 조회 수</h2><strong>{number.format(daily.get(today) || 0)}</strong><p>{today}</p></article>
              <article><h2>최근 30일 조회 수</h2><strong>{number.format(recentTotal)}</strong><p>오늘 포함</p></article>
              <article><h2>누적 조회 수</h2><strong>{number.format(totals?.views || 0)}</strong><p>{totals?.since ? `${totals.since}부터 집계` : "첫 방문부터 집계됩니다"}</p></article>
            </div>
            <p className="analytics-note">페이지를 열거나 새로고침할 때마다 1회로 집계합니다. 고유 방문자 수와는 다릅니다. 관리자 화면은 제외하며, IP 주소·이름·메일 주소는 저장하지 않습니다. 브라우저의 추적 차단이나 일부 자동 접속으로 실제 조회 수와 차이가 있을 수 있습니다.</p>
            <div className="analytics-tables">
              <div className="admin-table-wrap">
                <table className="admin-table"><caption>최근 30일 날짜별 조회 수</caption>
                  <thead><tr><th scope="col">날짜</th><th scope="col">조회 수</th></tr></thead>
                  <tbody>{days.map((day) => <tr key={day}><td>{day}</td><td>{number.format(daily.get(day) || 0)}</td></tr>)}</tbody>
                </table>
              </div>
              <div className="admin-table-wrap">
                <table className="admin-table"><caption>최근 30일 페이지별 조회 수</caption>
                  <thead><tr><th scope="col">페이지</th><th scope="col">조회 수</th></tr></thead>
                  <tbody>{[...pages].sort((a, b) => b[1] - a[1]).map(([path, count]) => (
                    <tr key={path}><td>{analyticsPages[path] || path}</td><td>{number.format(count)}</td></tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
