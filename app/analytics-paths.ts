export const analyticsPages: Record<string, string> = {
  "/": "홈",
  "/mini-green": "미니그린 소개",
  "/company": "기업현황",
  "/technology": "기술개발",
  "/research": "연구개발",
  "/news": "뉴스 및 소식",
  "/contact": "문의하기",
};

export function koreaDate(value = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit",
  }).format(value);
}
