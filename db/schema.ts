import { pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

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
