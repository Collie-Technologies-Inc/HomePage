import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { analyticsPages, koreaDate } from "@/app/analytics-paths";
import { getDb } from "@/db";
import { pageViews } from "@/db/schema";

export async function POST(request: Request) {
  // Use the incoming host: Next.js may normalize request.url to localhost.
  const origin = request.headers.get("origin");
  let sameHost = false;
  try {
    sameHost = !!origin && new URL(origin).host === request.headers.get("host");
  } catch { /* Invalid origins are rejected below. */ }
  if (!sameHost) {
    return new NextResponse(null, { status: 403 });
  }
  if (/bot|crawler|spider|headless/i.test(request.headers.get("user-agent") || "")) {
    return new NextResponse(null, { status: 204 });
  }
  let path: unknown;
  try {
    if (Number(request.headers.get("content-length")) > 256) {
      return new NextResponse(null, { status: 413 });
    }
    const body = await request.text();
    if (body.length > 256) return new NextResponse(null, { status: 413 });
    path = JSON.parse(body)?.path;
  } catch {
    return new NextResponse(null, { status: 400 });
  }
  if (typeof path !== "string" || !Object.hasOwn(analyticsPages, path)) {
    return new NextResponse(null, { status: 400 });
  }
  try {
    await getDb().insert(pageViews).values({ day: koreaDate(), path, views: 1 })
      .onConflictDoUpdate({
        target: [pageViews.day, pageViews.path],
        set: { views: sql`${pageViews.views} + 1` },
      });
    return new NextResponse(null, { status: 204 });
  } catch {
    console.error("Page view aggregate could not be recorded.");
    return new NextResponse(null, { status: 503 });
  }
}
