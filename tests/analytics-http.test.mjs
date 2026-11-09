import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { spawn } from "node:child_process";

const origin = "http://127.0.0.1:3101";
const secret = "local-analytics-test-secret-not-for-production";
let server;
function cookie(kakaoId, email) {
  const payload = Buffer.from(JSON.stringify({
    userId: 1, kakaoId, email, exp: Math.floor(Date.now() / 1000) + 60,
  })).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `collie_kakao_session=${payload}.${signature}`;
}
before(async () => {
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-H", "127.0.0.1", "-p", "3101"], {
    env: { ...process.env, SESSION_SECRET: secret, ADMIN_KAKAO_IDS: "test-admin", DATABASE_URL: "" },
    stdio: "ignore",
  });
  for (let attempt = 0; attempt < 100; attempt++) {
    try { await fetch(origin); return; } catch { await new Promise((resolve) => setTimeout(resolve, 100)); }
  }
  throw new Error("Test server did not start");
});
after(() => server?.kill());

test("analytics requires login and rejects a signed non-admin session", async () => {
  const anonymous = await fetch(`${origin}/admin/analytics`, { redirect: "manual" });
  assert.equal(anonymous.status, 307);
  assert.match(anonymous.headers.get("location"), /admin=login-required/);
  const member = await fetch(`${origin}/admin/analytics`, { headers: { cookie: cookie("regular-member") } });
  assert.equal(member.status, 404);
});

test("admin sees an explicit unavailable state instead of fabricated zero counts", async () => {
  const response = await fetch(`${origin}/admin/analytics`, { headers: { cookie: cookie("test-admin") } });
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /통계를 불러올 수 없습니다/);
  assert.doesNotMatch(html, /첫 방문부터 집계됩니다/);
});

test("collection rejects cross-origin, malformed and unlisted page requests", async () => {
  const post = (body, source = origin) => fetch(`${origin}/api/analytics/view`, {
    method: "POST", headers: { origin: source, "content-type": "application/json" }, body,
  });
  assert.equal((await post('{"path":"/"}', "https://other.example")).status, 403);
  assert.equal((await post("{")).status, 400);
  assert.equal((await post('{"path":"/admin/users"}')).status, 400);
  assert.equal((await post('{"path":"toString"}')).status, 400);
  assert.equal((await post("x".repeat(300))).status, 413);
  assert.equal((await post('{"path":"/news"}')).status, 503);
});

test("collection excludes only the owner authenticated by a signed session", async () => {
  const post = (sessionCookie) => fetch(`${origin}/api/analytics/view`, {
    method: "POST",
    headers: { origin, "content-type": "application/json", cookie: sessionCookie },
    body: JSON.stringify({ path: "/" }),
  });
  assert.equal((await post(cookie("owner", "inhwan.park@kakao.com"))).status, 204);
  assert.equal((await post(cookie("owner", " INHWAN.PARK@KAKAO.COM "))).status, 204);
  assert.equal((await post(cookie("member", "member@example.com"))).status, 503);
  assert.equal((await post(`${cookie("owner", "inhwan.park@kakao.com")}invalid`)).status, 503);
});
