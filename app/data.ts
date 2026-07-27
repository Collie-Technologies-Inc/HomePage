export const sections = [
  { id: "cover", title: "주식회사 콜리테크놀로지" },
  { id: "company", title: "기업 현황" },
  { id: "history", title: "연혁" },
  { id: "robot-caddie", title: "기술 개발 실적 - Physical AI Robot Caddie" },
  { id: "putting-simulator", title: "기술 개발 실적 - Digital Putting Simulator" },
  { id: "analyzers", title: "기술 개발 실적 - 스윙분석단말기 & 비거리 탄도 분석기" },
  { id: "sales", title: "제품 판매 실적" },
  { id: "press", title: "홍보 기사" },
  { id: "people", title: "대표자 및 핵심 연구 인력" },
  { id: "organization", title: "조직도 및 인력 현황" },
  { id: "technology", title: "핵심 기술" },
  { id: "ip-list", title: "지식 재산권 및 인정·인증서" },
  { id: "ip", title: "지식 재산권 보유 현황" },
  { id: "venture", title: "벤처 및 기업부설연구소 인정" },
  { id: "iso", title: "인증" },
  { id: "awards", title: "수상 이력" },
] as const;

const navigationIds = ["company", "robot-caddie", "putting-simulator", "people", "technology", "ip-list", "venture", "press"];
export const navigation = sections.filter((section) => navigationIds.includes(section.id));
