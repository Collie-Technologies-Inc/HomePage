import Image from "next/image";
import { RoadmapVideoCard } from "./roadmap-video-card";
import { PuttingVideoCard } from "./putting-video-card";
import { Fragment } from "react";
import { sections } from "./data";
import { ProtectedHeroLinks } from "./protected-hero-links";

const pressArticles = [
  {
    source: "전자신문",
    date: "2023.12.13",
    title: "[유니콘 원포인트⑧] '골프를 넘어 일상 AI캐디를 빚는 이들' (주)콜리테크놀로지",
    href: "https://www.etnews.com/20231213000107",
    image: "/assets/news/unicorn-etnews.jpg",
  },
  {
    source: "한국경제",
    date: "2023.11.23",
    title: "박인환 대표 \"'7번 잡으세요' 클럽까지 추천…AI 캐디 로봇 개발했죠\"",
    href: "https://www.hankyung.com/article/2023112397351",
    image: "/assets/news/hankyung-caddie.jpg",
  },
  {
    source: "AI타임스",
    date: "2023.09.15",
    title: "로봇·생성 AI·커머스·교육…한계 없는 스타트업의 도전 '트라이 에브리싱'",
    href: "https://www.aitimes.com/news/articleView.html?idxno=153683",
    image: "/assets/news/try-everything.jpg",
  },
  {
    source: "정책브리핑",
    date: "2023.12.14",
    title: "방통위, 위치정보 우수 비즈니스 모델 발굴",
    href: "https://www.korea.kr/briefing/pressReleaseView.do?newsId=156605301",
    image: "/assets/news/korea-policy-logo.svg",
  },
  {
    source: "전자신문",
    date: "2022.12.01",
    title: "[2022 호반혁신기술공모전] 우수상에 (주)콜리테크놀로지",
    href: "https://www.etnews.com/20221130000300",
    image: "/assets/news/hoban-award.jpg",
  },
] as const;

export default function Page() {
  return (
    <div className="document" aria-label="(주)콜리테크놀로지 회사소개서">
      <section className="home-hero" id="cover" aria-label="(주)콜리테크놀로지">
        <div className="hero-copy">
          <p className="hero-kicker">PHYSICAL AI · GOLF COURSE AX<br />DIGITAL PUTTING</p>
          <h1>
            <span>골프장의 운영과</span>
            <span>연습을 잇는</span>
            <em><span>Smart Golf</span><span>Solution</span></em>
          </h1>
          <p className="hero-description">
            (주)콜리테크놀로지는 Physical AI Robot Caddie 기반 골프장 AX Solution과 Digital Putting 연습기를 개발합니다.
            다중 센서융합·자율주행·클라우드 관제로 골프장 운영을 혁신하고, 디지털 퍼팅 기술로 정밀한 연습 경험을 제공합니다.
          </p>
          <ProtectedHeroLinks />
          <ul className="hero-tech" aria-label="핵심 기술">
            <li className="hero-tech-primary">RTK-GPS&nbsp;&nbsp;|&nbsp;&nbsp;UWB&nbsp;&nbsp;|&nbsp;&nbsp;Radar&nbsp;&nbsp;|&nbsp;&nbsp;AI Vision&nbsp;&nbsp;|&nbsp;&nbsp;ROS2&nbsp;&nbsp;|&nbsp;&nbsp;Motor Control</li>
            <li>Golf Dynamics&nbsp;&nbsp;|&nbsp;&nbsp;Impact &amp; Departure Sensor</li>
          </ul>
        </div>
        <div className="hero-visual">
          <article className="hero-product robot-product">
            <div className="hero-product-image"><Image src="/assets/hero-robot-caddie.webp" alt="Physical AI Robot Caddie 기반 골프장 AX Solution" fill priority sizes="(max-width: 860px) 100vw, 54vw" unoptimized /></div>
            <div className="hero-product-label"><span>01</span><strong>Physical AI Robot Caddie<br />Golf Course AX Solution</strong></div>
          </article>
          <article className="hero-product putting-product">
            <div className="hero-product-image"><Image src="/assets/hero-digital-putting.webp" alt="mini green Digital Putting 연습기" fill loading="lazy" sizes="(max-width: 860px) 100vw, 54vw" unoptimized /></div>
            <div className="hero-product-label"><span>02</span><strong>mini green<br />Digital Putting</strong></div>
          </article>
        </div>
      </section>
      <section className="ceo-message" id="ceo-message" aria-labelledby="ceo-message-title">
        <div className="ceo-message-inner">
          <div className="ceo-message-heading">
            <p>COLLIE TECHNOLOGIES</p>
            <h2 className="page-title" id="ceo-message-title">CEO Message</h2>
          </div>
          <div className="ceo-message-layout">
            <div className="ceo-message-body">
              <p>34년간 금성정밀, 삼성전자, LG전자에서 연구개발과 글로벌 제품 사업화를 수행하며 위성통신, 모바일, UWB, 정밀측위, AI 로보틱스 등 첨단 ICT 분야의 핵심 기술을 개발해 왔습니다.</p>
              <p>이러한 경험을 바탕으로 2021년 <strong>(주)콜리테크놀로지</strong>를 설립하여 <strong>위치기반 데이터 서비스와 Physical AI를 결합한 차세대 로봇 플랫폼</strong>을 개발하고 있습니다.</p>
              <p>(주)콜리테크놀로지는 골프장만을 위한 회사가 아닙니다. 사람과 로봇, 공간을 연결하는 위치기반 데이터 서비스를 기반으로 다양한 산업에서 활용 가능한 Physical AI 플랫폼을 만들어 가고 있습니다.</p>
              <p>현재 개발 중인 <strong>Physical AI Robot Caddie</strong>는 RTK-GPS, UWB, AI Vision, Radar, ROS2, 클라우드 기술을 융합하여 사람을 이해하고 공간을 인식하며 자율적으로 움직이는 차세대 AI 로봇입니다. 이를 통해 축적되는 위치 데이터와 행동 데이터는 새로운 디지털 자산이 되어 더욱 지능적인 서비스를 만들어 냅니다.</p>
              <p>우리는 기술을 만드는 데서 멈추지 않습니다. <strong>AI 로봇과 함께하는 새로운 체험과 즐거움</strong>, 그리고 <strong>SNS를 통해 자연스럽게 공유되는 혁신적인 경험</strong>을 제공하여 MZ세대가 먼저 찾고, 경험하고, 확산시키는 새로운 라이프스타일을 만들어 가고자 합니다.</p>
              <p><strong>Robot Caddie는 우리의 최종 목적이 아니라, 위치기반 데이터 서비스와 Physical AI 플랫폼을 실현하기 위한 첫 번째 베이스 모델입니다.</strong> 앞으로도 (주)콜리테크놀로지는 사람과 공간을 연결하는 AI 기술을 바탕으로 다양한 산업으로 확장하며, 글로벌 Physical AI 플랫폼 기업으로 성장해 나가겠습니다.</p>
              <p><strong>감사합니다.</strong></p>
            </div>
            <aside className="ceo-message-profile" aria-label="박인환 대표이사">
              <div className="ceo-message-photo">
                <Image
                  unoptimized
                  src="/assets/ceo-park-inhwan.jpg"
                  alt="(주)콜리테크놀로지 대표이사 박인환"
                  fill
                  sizes="(max-width: 860px) 82vw, 340px"
                />
              </div>
              <div className="ceo-message-signoff">
                <strong>(주)콜리테크놀로지 대표이사 박인환</strong>
                <Image src="/assets/ceo-signature.png" alt="박인환 대표이사 자필 서명" width={630} height={340} unoptimized />
              </div>
            </aside>
          </div>
        </div>
      </section>
      {sections.slice(1).map((section) => (
        <Fragment key={section.id}>
          {section.id === "company" && (
            <section className="company-overview" id="company" aria-label="기업 현황">
              <div className="company-overview-inner">
                <div className="company-overview-heading">
                  <h2 className="page-title">기업 현황</h2>
                  <p>“IT &amp; Sports 융합 서비스”를 개발, 일상에서 보다 쉽고 편리하게 다양한 스포츠를 즐길 수 있도록 하기 위해 2021년 설립</p>
                </div>
                <div className="company-overview-layout">
                  <dl className="company-facts">
                    <div><dt>기업명</dt><dd>(주)콜리테크놀로지</dd></div>
                    <div><dt>대표자명</dt><dd>박인환</dd></div>
                    <div><dt>기업형태</dt><dd>법인사업자</dd></div>
                    <div><dt>주요 아이템</dt><dd>Physical AI Robot Caddie<br />기반 골프장 AX 관제 솔루션,<br />퍼팅 시뮬레이터, L.A.B. Putter, Stewart Trolley</dd></div>
                    <div><dt>설립일</dt><dd>2021.03.15</dd></div>
                    <div><dt>본점 소재지</dt><dd>경기도 안산시 상록구 한양대학로 55<br />한양대학교 벤처창업관(창업보육센터) 604호</dd></div>
                  </dl>
                  <div className="company-history" aria-label="연혁">
                    <h3>연혁</h3>
                    <div className="company-history-columns">
                      <div>
                        <h4>2021-2022</h4>
                        <ul>
                          <li><time>2021.03</time><span>(주)콜리테크놀로지 설립</span></li>
                          <li><time>2021.05</time><span>청봉 제1호 개인투자조합 1억 투자 유치</span></li>
                          <li><time>2021.11</time><span>한양대학교 에리카 창업보육센터 사업장 이전</span></li>
                          <li><time>2021.12</time><span>중진공 정책자금 1억 약정</span></li>
                          <li><time>2022.03</time><span>기술보증기금 투자옵션부 보증 2억 약정</span></li>
                          <li><time>2022.03</time><span>벤처기업확인 (투자유형)</span></li>
                          <li><time>2022.05</time><span>스포츠 엑셀러레이팅 프로그램 상상이비즈 협약</span></li>
                          <li><time>2022.05</time><span>산업통상자원부 중견기업 상생혁신산업 과제 협약</span></li>
                          <li><time>2022.05</time><span>(주)콜리테크놀로지 연구소 기업부설연구소 인정</span></li>
                          <li><time>2022.08</time><span>위치정보 우수 비즈니스 모델 발굴 프로젝트 공모 당선</span></li>
                          <li><time>2022.11</time><span>호반혁신기술 공모전 “우수상” 수상</span></li>
                          <li><time>2022.12</time><span>한양대학교 ERICA 제3회 해동창업경진대회 “대상” 수상</span></li>
                        </ul>
                      </div>
                      <div>
                        <h4>2023-2025</h4>
                        <ul>
                          <li><time>2023.03</time><span>2020뉴스포츠그로쓰 사모투자 5억 투자 유치</span></li>
                          <li><time>2023.08</time><span>2024년 성장단계 스케일업 기술 사업화 선정</span></li>
                          <li><time>2023.12</time><span>위치정보 우수 비즈니스 모델 발굴 “장려상” 수상</span></li>
                          <li><time>2024.07</time><span>초정밀 GPS 사물인지 인공지능로봇캐디 워킹목업</span></li>
                          <li><time>2025.03</time><span>벤처기업확인 (연구개발유형)</span></li>
                          <li><time>2025.04</time><span>기업부설연구소 인정</span></li>
                          <li><time>2025.10</time><span>신용보증기금 3억 약정 (2억기보 대출 상환)</span></li>
                          <li><time>2025.11</time><span>디지털 퍼팅 연습기 시제품 개발 완료 양산준비 중</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.id === "robot-caddie" && (
            <>
            <section className="pdf-page ax-control-page" id="ax-control" aria-label="Physical AI Robot Caddie 기반 골프 AX Solution">
              <Image
                unoptimized
                src="/assets/ax-control-course-layout.jpg"
                alt="Physical AI Robot Caddie 기반 골프 AX Solution"
                width={1280}
                height={720}
                loading="lazy"
                sizes="100vw"
              />
              <div className="pdf-title-mask" aria-hidden="true" />
              <h2 className="pdf-rebuilt-title page-title ax-control-rebuilt-title">
                Physical AI Robot Caddie 기반 골프 AX Solution
              </h2>
            </section>
            <section className="robot-platform-page" id="ax-sensor" aria-labelledby="robot-platform-title">
              <div className="robot-platform-inner">
                <h2 className="page-title" id="robot-platform-title">Physical AI Robot Caddie</h2>
                <p className="robot-platform-heading">
                  단순한 로봇을 넘어, 골퍼와 골프장을 연결하는 데이터 플랫폼으로
                </p>
                <div className="robot-platform-diagram robot-platform-diagram--platform">
                  <Image
                    unoptimized
                    src="/assets/robot-caddie-data-platform-v2.png"
                    alt="골퍼와 골프장을 연결하는 Physical AI Robot Caddie 데이터 플랫폼"
                    width={3840}
                    height={2160}
                    loading="lazy"
                    sizes="(max-width: 860px) 92vw, 1200px"
                  />
                </div>
                <p className="robot-platform-heading robot-platform-heading--secondary">
                  캐디 보다 더 똑똑하게 움직이는 핵심 기술
                </p>
                <div className="robot-platform-diagram robot-platform-diagram--technology">
                  <Image
                    unoptimized
                    src="/assets/core-technology-0801.jpg"
                    alt="3D 지도 기반 자율주행과 지능형 장애물 회피 등 Robot Caddie 핵심 기술"
                    fill
                    loading="lazy"
                    sizes="(max-width: 860px) 92vw, 1200px"
                  />
                </div>
              </div>
            </section>
            <section className="golf-control-page" id="ax-operation" aria-label="골프장 AX 관제">
              <div className="golf-control-page-inner">
                <h2 className="golf-control-title page-title">골프장 AX 관제</h2>
                <p className="golf-control-lead">골프장의 안전, 운영, 고객 서비스를 통합 관리</p>
                <div className="golf-control-visual" aria-label="골프장 AX 관제 주요 기능">
                  <Image
                    unoptimized
                    src="/assets/golf-course-ax-control-content.png"
                    alt="디지털 펜스, 센서 융합 및 시설 관리, 골퍼와 로봇 캐디 간격 확인, 맞춤형 골프 정보 제공"
                    fill
                    loading="lazy"
                    sizes="(max-width: 860px) 92vw, 1420px"
                  />
                </div>
                <div className="golf-control-board" aria-hidden="true">
                  <article>
                    <span className="golf-control-index">01</span>
                    <div><h3>디지털 펜스</h3><ul><li>코스 내 해저드, 벙커, OB 구역 사전 설정</li><li>로봇 캐디가 설정 구역 접근 시 우회 또는 정지</li><li>코스 이탈, 전복 사고 등 안전사고 원천 차단</li><li>문제 발생 시 중앙 관제실 알림 및 장비 제어</li></ul></div>
                  </article>
                  <article>
                    <span className="golf-control-index">02</span>
                    <div><h3>센서 융합 &amp; 시설 관리</h3><ul><li>위험구간과 시설 이상 징후 파악</li><li>사고 예측 및 사전 차단</li><li>잔디와 시설물 상태 확인 및 점검</li><li>관리 유지 보수 효율화</li></ul></div>
                  </article>
                  <article>
                    <span className="golf-control-index">03</span>
                    <div><h3>골퍼·로봇 캐디·전후 팀 간격 확인</h3><ul><li>로봇 캐디 및 골퍼 위치 파악</li><li>팀별 위치를 파악해 샷 전 위험 경고</li><li>전후 팀 간격 확인 후 진행 관리</li><li>정체 홀 발생 시 Slow Play 경고 및 속도 조절</li></ul></div>
                  </article>
                  <article>
                    <span className="golf-control-index">04</span>
                    <div><h3>맞춤형 골프 정보 제공</h3><ul><li>골퍼의 경기 데이터 수집·분석</li><li>빅데이터 기반 정보 구성</li><li>맞춤형 골프 정보 제공</li><li>안전사고 감소와 운영비 절감</li></ul></div>
                  </article>
                </div>
              </div>
            </section>
            <section className="ai-coach-page" id="ax-experience" aria-labelledby="ai-coach-title">
              <div className="ai-coach-inner">
                <h2 className="page-title" id="ai-coach-title">
                  데이터 기반 &apos;AI 개인 코치&apos;로 진화하는 골프 플랫폼
                </h2>
                <div className="ai-coach-visual">
                  <Image
                    unoptimized
                    src="/assets/ai-personal-coach-platform-v2.jpg"
                    alt="현재의 AI 캐디 로봇 데이터 수집에서 미래의 AI 개인 코칭 서비스로 진화하는 골프 플랫폼"
                    width={1280}
                    height={720}
                    loading="lazy"
                    sizes="(max-width: 860px) 92vw, 1420px"
                  />
                </div>
              </div>
            </section>
            <section className="field-experience-page" id="field-experience" aria-label="필드 경험">
              <div className="field-experience-copy">
                <p className="field-experience-kicker page-title">Field Experience</p>
                <h2>
                  걷고 싶을 때는 함께 걷고,<br />
                  이동할 때는 먼저 준비합니다.
                </h2>
                <p className="field-experience-description">
                  고령의 시니어 골퍼도 페어웨이에서는 로봇 캐디와 함께 걸으며 플레이하고, 긴 카트길에서는 4인용 승용 카트로 편안하게 이동할 수 있습니다.
                </p>
                <div className="field-experience-steps">
                  <article>
                    <h3>페어웨이<br />동반 보행</h3>
                    <p>로봇 캐디가 골퍼를 추종하며 골프백을 운반하고 코스·거리·플레이 정보를 제공합니다.</p>
                  </article>
                  <article>
                    <h3>골퍼는<br />승용 카트 이동</h3>
                    <p>카트길이나 홀 간 장거리 구간에서는 골퍼들이 4인용 카트에 탑승해 체력 부담을 줄입니다.</p>
                  </article>
                  <article>
                    <h3>로봇은 다음 홀로<br />선행 이동</h3>
                    <p>로봇 캐디는 지정 경로를 따라 먼저 이동해 다음 티잉 구역에서 플레이를 준비합니다.</p>
                  </article>
                </div>
              </div>
              <div className="field-experience-photo">
                <div className="field-experience-photo-item">
                  <Image
                    unoptimized
                    src="/assets/field-experience-walking.png"
                    alt="페어웨이에서 골퍼와 함께 이동하는 로봇 캐디"
                    fill
                    loading="lazy"
                    sizes="(max-width: 860px) 100vw, 40vw"
                  />
                </div>
                <div className="field-experience-photo-item">
                  <Image
                    unoptimized
                    src="/assets/field-experience-golf-course.png"
                    alt="골프장의 로봇 캐디와 4인용 승용 카트"
                    fill
                    loading="lazy"
                    sizes="(max-width: 860px) 100vw, 40vw"
                  />
                </div>
              </div>
            </section>
            <section className="core-technology-roadmap-page" id="core-technology-roadmap" aria-label="핵심 기술 개발 성과 및 고도화 로드맵">
              <Image
                unoptimized
                src="/assets/core-technology-roadmap.jpg"
                alt="핵심 기술 개발 성과 및 고도화 로드맵"
                width={1280}
                height={720}
                loading="lazy"
                sizes="100vw"
              />
              <RoadmapVideoCard
                className="roadmap-video-card--second-row"
                label="Homepage2 영상 재생"
                src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/30eb2c07b7497a514eee001bd48d1ad1a61ad165/public/assets/homepage2.mp4"
              />
              <RoadmapVideoCard
                className="roadmap-video-card--third-row"
                label="Homepage1 영상 재생"
                src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/68f25e2f5f93060e7c895fd8fdffc3f9a5339fad/media/homepage1.mp4"
              />
            </section>
            </>
          )}
          {section.id === "putting-simulator" && (
            <>
            <section className="digital-putting-intro" id="putting-simulator" aria-label="Digital Putting 연습기">
              <div className="digital-putting-content">
                <p className="digital-putting-kicker page-title">Digital Putting 연습기</p>
                <ul>
                  <li>
                    <strong>그린의 빠르기(Stimpmeter)</strong>와 <strong>마찰력 계수</strong>를 환경 변수로 설정하고,
                    <strong> 세로 1400 mm, 가로 330 mm의 Compact한 Mat</strong>에서 Putting을 하면,
                    (주)콜리테크놀로지가 개발한 <strong>골프 공 감지 센서와 방향 감지 센서</strong>가 골프 공의 움직임을 파악하여,
                    골프 공의 위치, 속도, 방향을 골프 Dynamics에 의하여 정확하게 분석하여, <strong>최대 25 m</strong>까지의 Putting 연습을 할 수 있습니다.
                  </li>
                  <li>평면뿐 아니라, 경사, 굴곡이 있는 그린까지 연습할 수 있으며, 두 사람이 Putting 대결 게임도 가능합니다.</li>
                  <li>스마트 폰의 App과 Bluetooth로 연결하면, <strong>실제 그린의 모습을 TV화면으로 보면서 연습</strong>할 수 있습니다.</li>
                </ul>
              </div>
              <div className="digital-putting-visual">
                <Image
                  unoptimized
                  src="/assets/digital-putting-practice.png"
                  alt="mini green Digital Putting 연습기와 골프 공 감지 센서 및 방향 감지 센서"
                  width={1484}
                  height={408}
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </section>
            <section className="putting-dynamics-page" id="putting-dynamics" aria-labelledby="putting-dynamics-title">
              <div className="putting-dynamics-inner">
                <h2 className="page-title" id="putting-dynamics-title">
                  골프 동역학으로 검증된 Putting 거리∙방향을 예측하는 동역학 모델
                </h2>
                <Image
                  unoptimized
                  src="/assets/golf-dynamics.png"
                  alt="비행 운동과 미끄럼 및 구름 운동을 분석해 퍼팅 거리와 방향을 예측하는 골프 동역학 모델"
                  width={1185}
                  height={625}
                  loading="lazy"
                  sizes="(max-width: 860px) 92vw, 1420px"
                />
              </div>
            </section>
            <section className="digital-putting-design" id="putting-design" aria-label="Digital Putting 연습기 디자인">
              <div className="digital-putting-design-inner">
                <h2 className="page-title">디자인</h2>
                <div className="digital-putting-design-grid" aria-label="Digital Putting 연습기 디자인 이미지">
                  <div className="putting-design-photo putting-design-photo-1" role="img" aria-label="디스플레이와 함께 구성된 Digital Putting 연습기" />
                  <div className="putting-design-photo putting-design-photo-2" role="img" aria-label="Digital Putting 연습기 본체와 센서" />
                  <div className="putting-design-photo putting-design-photo-3" role="img" aria-label="Digital Putting 연습기 후면 연결부" />
                  <div className="putting-design-photo putting-design-photo-4" role="img" aria-label="퍼팅 매트와 결합된 Digital Putting 연습기 전체 디자인" />
                </div>
              </div>
            </section>
            <section className="digital-putting-ui" id="putting-device-ui" aria-label="Device User Interface">
              <div className="digital-putting-ui-inner">
                <h2 className="page-title">Device User Interface</h2>
                <div className="digital-putting-ui-grid" aria-label="Digital Putting 연습기 사용자 인터페이스">
                  <div className="putting-ui-screen putting-ui-screen-1" role="img" aria-label="mini green 시작 화면" />
                  <div className="putting-ui-screen putting-ui-screen-2" role="img" aria-label="그린 스피드 설정 화면" />
                  <div className="putting-ui-screen putting-ui-screen-3" role="img" aria-label="연습 및 게임 모드 선택 화면" />
                  <div className="putting-ui-screen putting-ui-screen-4" role="img" aria-label="경사 설정 화면" />
                  <div className="putting-ui-screen putting-ui-screen-5" role="img" aria-label="퍼팅 준비 화면" />
                  <div className="putting-ui-screen putting-ui-screen-6" role="img" aria-label="퍼팅 결과 화면" />
                </div>
              </div>
            </section>
            <section className="digital-putting-app-ui" id="putting-app-ui" aria-label="App User Interface">
              <div className="digital-putting-app-ui-inner">
                <h2 className="page-title">App User Interface</h2>
                <div className="digital-putting-app-ui-grid" aria-label="Digital Putting 연습기 애플리케이션 화면">
                  <div className="putting-app-screen putting-app-screen-1" role="img" aria-label="mini green 애플리케이션 시작 화면" />
                  <div className="putting-app-screen putting-app-screen-2" role="img" aria-label="mini green 연습 및 게임 모드 선택 화면" />
                  <div className="putting-app-screen putting-app-screen-3" role="img" aria-label="평지 퍼팅 연습 화면" />
                  <div className="putting-app-screen putting-app-screen-4" role="img" aria-label="경사 퍼팅 연습 화면" />
                  <div className="putting-app-screen putting-app-screen-5" role="img" aria-label="퍼팅 대결 모드 화면" />
                  <div className="putting-app-screen putting-app-screen-6" role="img" aria-label="mini green 애플리케이션 설정 화면" />
                </div>
              </div>
            </section>
            <section className="digital-putting-videos" id="putting-videos" aria-labelledby="putting-videos-title">
              <div className="digital-putting-videos-inner">
                <h2 className="page-title" id="putting-videos-title">영상으로 보는 Digital Putting 연습기</h2>
                <div className="digital-putting-video-grid">
                  <PuttingVideoCard
                    label="퍼팅 연습"
                    src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/main/media/putting-1.mp4"
                  />
                  <PuttingVideoCard
                    label="평지 연습"
                    src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/main/media/putting-2.mp4"
                  />
                  <PuttingVideoCard
                    label="경사 연습"
                    src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/main/media/putting-3-slope.mp4"
                  />
                  <PuttingVideoCard
                    label="TV 연동"
                    src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/main/media/putting-4-tv.mp4"
                  />
                </div>
              </div>
            </section>
            </>
          )}
          {section.id === "ip-list" ? (
            <>
            <section className="research-development-intro" id="research-development" aria-labelledby="research-development-title">
              <div className="research-development-inner">
                <h2 className="page-title" id="research-development-title">기술개발 실적</h2>
                <div className="research-device-grid" aria-label="기술개발 장비">
                  <article className="research-device-card research-device-card--swing">
                    <div className="research-device-photo research-device-photo--swing" role="img" aria-label="스윙 분석 단말기" />
                    <h3>스윙 분석 단말기</h3>
                  </article>
                  <article className="research-device-card research-device-card--radar">
                    <div className="research-device-photo research-device-photo--radar" role="img" aria-label="비거리 탄도 분석기" />
                    <h3>비거리 탄도 분석기</h3>
                  </article>
                </div>
                <div className="research-results-copy">
                  <p className="research-results-lead">
                    Physical AI 기반 골프장 AX 관제 솔루션에 적용하여 추가 데이터 서비스를 위한 스윙분석단말기와 비거리 탄도 분석기
                  </p>
                  <p className="research-results-project">
                    2023년 서울시 성장 단계 스케일 업 기술 사업화 지원 프로젝트의 개발 산출물 (Prototype 완성)
                  </p>
                  <dl className="research-results-details">
                    <div>
                      <dt>스윙 분석 단말기</dt>
                      <dd>FOV 170 어안렌즈 카메라, Jetson AGX, AWS를 이용하여 골퍼 스윙 Skeleton 추출 및 분석</dd>
                    </div>
                    <div>
                      <dt>비거리 탄도 분석기</dt>
                      <dd>K-LC7 Radar, STM32f429 Microprocessor를 사용하여 FFT 및 Doppler 해석, 골프장·실내·실외 연습장에서 비거리 탄도 분석</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
            <section className="ip-overview" id="ip-list" aria-label="지식 재산권 - 국내외 특허·디자인·상표">
              <div className="ip-overview-inner">
                <h2 className="page-title">지식 재산권 - 국내외 특허∙디자인∙상표</h2>
                <div className="ip-overview-visual">
                  <Image
                    unoptimized
                    src="/assets/intellectual-property-cropped.jpg"
                    alt="정밀 추종 및 제어 기술, 플랫폼 운영 및 디자인, 자율주행 및 코스 정보 시스템, 브랜드 지식 재산권 현황"
                    width={1256}
                    height={588}
                    loading="lazy"
                    sizes="(max-width: 860px) 92vw, 1420px"
                  />
                </div>
              </div>
            </section>
            <section className="rnd-capability-page" id="rnd-capability" aria-labelledby="rnd-capability-title">
              <div className="rnd-capability-inner">
                <h2 className="page-title" id="rnd-capability-title">
                  객관적으로 검증된 R&amp;D 역량과 경영 시스템
                </h2>
                <Image
                  unoptimized
                  src="/assets/rnd-capabilities.jpg"
                  alt="벤처기업 확인서, 기업부설 연구소 인정서, ISO 9001 품질경영시스템 및 ISO 14001 환경경영시스템 인증"
                  width={1664}
                  height={774}
                  loading="lazy"
                  sizes="(max-width: 860px) 92vw, 1420px"
                />
              </div>
            </section>
            </>
          ) : section.id === "press" ? (
            <section className="press-page" id="press" aria-label="홍보 기사">
              <div className="press-heading">
                <p className="page-title">Collie Technologies Inc. in the News</p>
                <span>(주)콜리테크놀로지의 기술과 성장을 소개한 주요 보도입니다.</span>
              </div>
              <div className="press-grid">
                {pressArticles.map((article) => (
                  <a
                    className="press-card"
                    href={article.href}
                    key={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${article.title} 원문 기사 보기`}
                  >
                    <div className={`press-card-image${article.source === "정책브리핑" ? " press-card-image--logo" : ""}`}>
                      <Image
                        unoptimized
                        src={article.image}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      />
                    </div>
                    <div className="press-card-body">
                      <h3>{article.title}</h3>
                      <div className="press-card-meta">
                        <strong>{article.source}</strong>
                        <time>{article.date}</time>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
