import { readFile } from "node:fs/promises";

// Production builds apply this additive migration before the new app goes live.
// Local and preview builds never need production credentials.
if (process.env.VERCEL_ENV !== "production") {
  console.log("Analytics migration skipped outside Vercel production.");
} else {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("Production analytics migration requires DATABASE_URL.");
  try {
    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(connectionString);
    const migration = await readFile(new URL("../drizzle-postgres/0001_graceful_leopardon.sql", import.meta.url), "utf8");
    await sql.query(migration.replace('CREATE TABLE "page_views"', 'CREATE TABLE IF NOT EXISTS "page_views"'));
    // Validate the actual columns used by the app without reading personal data.
    await sql`SELECT day, path, views FROM page_views LIMIT 0`;
    console.log("Analytics table ready: page_views (day, path, views).");
  } catch {
    // Never leak connection URLs or database credentials through build logs.
    throw new Error("Analytics table migration failed; deployment stopped. Check database connectivity and permissions.");
  }
}
