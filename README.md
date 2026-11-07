# ㈜콜리테크놀로지 공식 기업 홈페이지

Physical AI Robot Caddie, Golf Course AX Platform, mini green을 소개하는 반응형 기업 홈페이지입니다.

## 실행

```bash
npm install
npm run dev
```

검수 명령은 `npm run lint`, `npm run build`, `npm test`입니다. 회사 정보와 콘텐츠는 `app/data.ts`에서 수정할 수 있습니다. 문의 양식은 UI 검증용이며 실제 전송 서버에 연결되어 있지 않습니다.

## 관리자 방문 통계

카카오 로그인 후 `ADMIN_KAKAO_IDS`에 등록된 관리자에게만 **방문 통계** 메뉴와
`/admin/analytics` 화면이 제공됩니다. 통계 조회 전 서버에서 관리자 권한을 검사합니다.

운영 적용 전에 기존 PostgreSQL 데이터베이스에
`drizzle-postgres/0001_graceful_leopardon.sql`을 실행해야 합니다. 기존 회원 테이블은
변경하지 않습니다. 애플리케이션에는 기존과 동일한 `DATABASE_URL`, `SESSION_SECRET`,
`ADMIN_KAKAO_IDS` 설정이 필요합니다. 로컬 `.env.local`은 `.env.example`을 참고하세요.
테이블이 없거나 연결에 실패하면 통계 화면에 설정 오류를 표시하고, 일반 페이지는 계속 열립니다.

한국 시간 기준 오늘·최근 30일·누적 페이지 조회 수를 표시합니다. 공개 페이지를 열거나
새로고침할 때마다 1회 집계하며, 관리자 페이지와 알려진 봇은 제외합니다.
이는 고유 방문자 수가 아니며 브라우저 차단·자동 접속의 영향으로 오차가 있을 수 있습니다.
과거 기록은 복원하지 않고 기능 적용 이후부터 누적합니다. 날짜·페이지 경로별 합계만
저장하며 IP·연락처·사용자 식별 쿠키를 저장하지 않습니다.

검증: `npm run build` 후 `node --test tests/analytics-http.test.mjs`.
HTTP 검증은 별도 로컬 포트 3101에서 로그인·관리자 권한, 잘못된 집계 요청,
DB 미설정 안내를 확인합니다. 운영 집계 검증은 테이블 적용 후 페이지를 열고 관리자
화면에서 해당 날짜와 페이지의 조회 수가 1 증가하는지 확인합니다.

Vercel 운영 배포에서는 `npm run build`가 먼저 `scripts/migrate-analytics.mjs`를 실행해
통계 테이블을 생성·확인합니다. 테이블이 이미 있으면 유지하고, DB 오류가 발생하면
새 배포를 중단합니다. 연결 정보는 서버 환경에서만 사용하고 로그에 출력하지 않습니다.
로컬·Preview 빌드에서는 이 마이그레이션을 건너뜁니다.
