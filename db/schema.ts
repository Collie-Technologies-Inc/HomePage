import { date, integer, pgTable, primaryKey, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const pageViews = pgTable("page_views", {
  day: date("day", { mode: "string" }).notNull(),
  path: text("path").notNull(),
  views: integer("views").notNull().default(0),
}, (table) => [primaryKey({ columns: [table.day, table.path] })]);

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    kakaoId: text("kakao_id").notNull(),
    nickname: text("nickname").notNull(),
    email: text("email"),
    profileImageUrl: text("profile_image_url"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }).notNull().defaultNow(),
    lastLoginAt: timestamp("last_login_at", { withTimezone: true, mode: "string" }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("users_kakao_id_idx").on(table.kakaoId)],
);
