export const sections = [
  { id: "cover", title: "(주)콜리테크놀로지" },
  { id: "company", title: "기업 현황" },
  { id: "history", title: "연혁" },
  { id: "robot-caddie", title: "기술 개발 실적 - Physical AI Robot Caddie" },
  { id: "putting-simulator", title: "기술 개발 실적 - Digital Putting Simulator" },
  { id: "analyzers", title: "기술 개발 실적 - 스윙분석단말기 & 비거리 탄도 분석기" },
  { id: "sales", title: "제품 판매 실적" },
  { id: "ip-list", title: "지식재산권 인정·인증서" },
  { id: "press", title: "홍보 기사" },
] as const;

const navigationIds = ["company", "robot-caddie", "putting-simulator", "ip-list", "press"];
export const navigation = sections.filter((section) => navigationIds.includes(section.id));
