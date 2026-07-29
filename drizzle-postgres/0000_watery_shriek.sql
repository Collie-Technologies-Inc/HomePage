CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"kakao_id" text NOT NULL,
	"nickname" text NOT NULL,
	"email" text,
	"profile_image_url" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_login_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "users_kakao_id_idx" ON "users" USING btree ("kakao_id");