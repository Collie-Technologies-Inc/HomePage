import Image from "next/image";
import { Fragment } from "react";
import { sections } from "./data";

const pressArticles = [
  {
    source: "전자신문",
    date: "2023.12.13",
    title: "[유니콘 원포인트⑧] '골프를 넘어 일상 AI캐디를 빚는 이들' 콜리테크놀로지",
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
    title: "[2022 호반혁신기술공모전] 우수상에 콜리테크놀로지",
    href: "https://www.etnews.com/20221130000300",
    image: "/assets/news/hoban-award.jpg",
  },
] as const;

export default function Page() {
  return (
    <div className="document" aria-label="주식회사 콜리테크놀로지 회사소개서">
      <section className="home-hero" id="cover" aria-label="주식회사 콜리테크놀로지">
        <div className="hero-copy">
          <p className="hero-kicker">PHYSICAL AI · GOLF COURSE AX<br />DIGITAL PUTTING</p>
          <h1>골프장의 운영과 연습을 잇는<br /><em>Smart Golf Solution</em></h1>
          <p className="hero-description">
            ㈜콜리테크놀로지는 Physical AI Robot Caddie 기반 골프장 AX Solution과 Digital Putting 연습기를 개발합니다.
            다중 센서융합·자율주행·클라우드 관제로 골프장 운영을 혁신하고, 디지털 퍼팅 기술로 정밀한 연습 경험을 제공합니다.
          </p>
          <div className="hero-links">
            <a href="#robot-caddie">Robot Caddie & AX</a>
            <a href="#putting-simulator">Digital Putting</a>
          </div>
          <ul className="hero-tech" aria-label="핵심 기술">
            <li className="hero-tech-primary">RTK-GPS&nbsp;&nbsp;|&nbsp;&nbsp;UWB&nbsp;&nbsp;|&nbsp;&nbsp;Radar&nbsp;&nbsp;|&nbsp;&nbsp;AI Vision&nbsp;&nbsp;|&nbsp;&nbsp;ROS2&nbsp;&nbsp;|&nbsp;&nbsp;Motor Control</li>
            <li>Golf Dynamics&nbsp;&nbsp;|&nbsp;&nbsp;Impact &amp; Departure Sensor</li>
          </ul>
        </div>
        <div className="hero-visual">
          <article className="hero-product robot-product">
            <div className="hero-product-image"><Image src="/assets/hero-robot-caddie.png" alt="Physical AI Robot Caddie 기반 골프장 AX Solution" fill priority sizes="(max-width: 860px) 100vw, 54vw" /></div>
            <div className="hero-product-label"><span>01</span><strong>Physical AI Robot Caddie<br />Golf Course AX Solution</strong></div>
          </article>
          <article className="hero-product putting-product">
            <div className="hero-product-image"><Image src="/assets/hero-digital-putting.png" alt="mini green Digital Putting 연습기" fill priority sizes="(max-width: 860px) 100vw, 54vw" /></div>
            <div className="hero-product-label"><span>02</span><strong>mini green<br />Digital Putting</strong></div>
          </article>
        </div>
      </section>
      {sections.slice(1).map((section, index) => (
        <Fragment key={section.id}>
          {section.id === "company" && (
            <section className="company-overview" id="company" aria-label="기업 현황">
              <div className="company-overview-inner">
                <div className="company-overview-heading">
                  <h2>기업 현황</h2>
                  <p>“IT &amp; Sports 융합 서비스”를 개발, 일상에서 보다 쉽고 편리하게 다양한 스포츠를 즐길 수 있도록 하기 위해 2021년 설립</p>
                </div>
                <div className="company-overview-layout">
                  <dl className="company-facts">
                    <div><dt>기업명</dt><dd>주식회사 콜리테크놀로지</dd></div>
                    <div><dt>대표자명</dt><dd>박인환</dd></div>
                    <div><dt>기업형태</dt><dd>법인사업자</dd></div>
                    <div><dt>임직원 수</dt><dd>3명 (2026.07.27 현재)</dd></div>
                    <div><dt>주요 아이템</dt><dd>Physical AI (Robot Caddie) 기반 골프장 AX 관제 솔루션,<br />퍼팅 시뮬레이터, L.A.B. Putter, Stewart Trolley</dd></div>
                    <div><dt>설립일</dt><dd>2021.03.15</dd></div>
                    <div><dt>자본금</dt><dd>₩56,250,000</dd></div>
                    <div><dt>본점 소재지</dt><dd>경기도 안산시 상록구 한양대학로 55<br />한양대학교 벤처창업관(창업보육센터) 604호</dd></div>
                  </dl>
                  <div className="company-history" aria-label="연혁">
                    <h3>연혁</h3>
                    <div className="company-history-columns">
                      <div>
                        <h4>2021-2022</h4>
                        <ul>
                          <li><time>2021.03</time><span>주식회사 콜리테크놀로지 설립</span></li>
                          <li><time>2021.05</time><span>청봉 제1호 개인투자조합 1억 투자 유치</span></li>
                          <li><time>2021.11</time><span>한양대학교 에리카 창업보육센터 사업장 이전</span></li>
                          <li><time>2021.12</time><span>중진공 정책자금 1억 약정</span></li>
                          <li><time>2022.03</time><span>기술보증기금 투자옵션부 보증 2억 약정</span></li>
                          <li><time>2022.03</time><span>벤처기업확인 (투자유형)</span></li>
                          <li><time>2022.05</time><span>스포츠 엑셀러레이팅 프로그램 상상이비즈 협약</span></li>
                          <li><time>2022.05</time><span>산업통상자원부 중견기업 상생혁신산업 과제 협약</span></li>
                          <li><time>2022.05</time><span>㈜콜리테크놀로지 연구소 기업부설연구소 인정</span></li>
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
            <section className="pdf-page ax-control-page" id="ax-control" aria-label="사업 개요 및 핵심 요약 - 골프장 AX 관제 Solution">
              <Image
                src="/assets/ax-control-system.webp"
                alt="Physical AI Robot Caddie 기반 골프장 AX 관제 Solution Architecture"
                width={1280}
                height={720}
                loading="lazy"
                sizes="100vw"
              />
              <div className="ax-control-title">
                Physical AI Robot Caddie 기반 골프장 AX 관제 Solution Architecture
              </div>
              <div className="ax-control-caption">
                Physical AI Robot Caddie 기반 골프장 AX 관제 Solution Architecture
              </div>
              <div className="ax-control-bottom-mask" aria-hidden="true" />
            </section>
            <section className="pdf-page ax-detail-page" id="ax-sensor" aria-label="Sensor-based Physical AI Robot Caddie">
              <Image
                src="/assets/ax-sensor-physical-ai.jpg"
                alt="Sensor-based Physical AI Robot Caddie"
                width={1280}
                height={720}
                loading="lazy"
                sizes="100vw"
              />
              <div className="ax-detail-line-mask" aria-hidden="true" />
              <div className="ax-detail-caption ax-sensor-caption">
                Sensor-based Physical AI (Robot Caddie)
              </div>
              <div className="ax-page-number-mask" aria-hidden="true" />
            </section>
            <section className="pdf-page ax-detail-page" id="ax-operation" aria-label="골프장 AX 관제">
              <Image
                src="/assets/ax-golf-course-control.jpg"
                alt="골프장 AX 관제"
                width={1280}
                height={720}
                loading="lazy"
                sizes="100vw"
              />
              <div className="ax-detail-line-mask" aria-hidden="true" />
              <div className="ax-detail-caption ax-operation-caption">골프장 AX 관제</div>
              <div className="ax-page-number-mask" aria-hidden="true" />
            </section>
            <section className="pdf-page ax-detail-page" id="ax-experience" aria-label="AI 기반 차세대 골프 경험">
              <Image
                src="/assets/ax-ai-golf-experience.jpg"
                alt="AI 기반 차세대 골프 경험"
                width={1280}
                height={720}
                loading="lazy"
                sizes="100vw"
              />
              <div className="ax-detail-line-mask" aria-hidden="true" />
              <div className="ax-page-number-mask" aria-hidden="true" />
            </section>
            <section className="field-experience-page" id="field-experience" aria-label="필드 경험">
              <div className="field-experience-copy">
                <p className="field-experience-kicker">FIELD EXPERIENCE</p>
                <h2>걷고 싶을 때는 함께 걷고, 이동할 때는 먼저 준비합니다.</h2>
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
                    src="/assets/field-experience-walking.png"
                    alt="페어웨이에서 골퍼와 함께 이동하는 로봇 캐디"
                    fill
                    loading="lazy"
                    sizes="(max-width: 860px) 100vw, 40vw"
                  />
                </div>
                <div className="field-experience-photo-item">
                  <Image
                    src="/assets/field-experience-golf-course.png"
                    alt="골프장의 로봇 캐디와 4인용 승용 카트"
                    fill
                    loading="lazy"
                    sizes="(max-width: 860px) 100vw, 40vw"
                  />
                </div>
              </div>
            </section>
            </>
          )}
          {section.id === "putting-simulator" && (
            <>
            <section className="digital-putting-intro" id="putting-simulator" aria-label="Digital Putting 연습기">
              <div className="digital-putting-content">
                <p className="digital-putting-kicker">Digital Putting 연습기</p>
                <ul>
                  <li>
                    <strong>그린의 빠르기(Stimpmeter)</strong>와 <strong>마찰력 계수</strong>를 환경 변수로 설정하고,
                    <strong> 세로 1400 mm, 가로 330 mm의 Compact한 Mat</strong>에서 Putting을 하면,
                    ㈜콜리테크놀로지가 개발한 <strong>골프 공 감지 센서와 방향 감지 센서</strong>가 골프 공의 움직임을 파악하여,
                    골프 공의 위치, 속도, 방향을 골프 Dynamics에 의하여 정확하게 분석하여, <strong>최대 25 m</strong>까지의 Putting 연습을 할 수 있다.
                  </li>
                  <li>평면뿐 아니라, 경사, 굴곡이 있는 그린까지 연습할 수 있으며, 두 사람이 Putting 대결 게임도 가능하다.</li>
                  <li>스마트 폰의 App과 Bluetooth로 연결하면, <strong>실제 그린의 모습을 TV화면으로 보면서 연습</strong>할 수 있다.</li>
                </ul>
              </div>
              <div className="digital-putting-visual">
                <Image
                  src="/assets/digital-putting-practice.png"
                  alt="mini green Digital Putting 연습기와 골프 공 감지 센서 및 방향 감지 센서"
                  width={1484}
                  height={408}
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </section>
            <section className="digital-putting-design" id="putting-design" aria-label="Digital Putting 연습기 디자인">
              <div className="digital-putting-design-inner">
                <h2>디자인</h2>
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
                <h2>Device User Interface</h2>
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
                <h2>App User Interface</h2>
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
            </>
          )}
          {section.id === "press" ? (
            <section className="press-page" id="press" aria-label="홍보 기사">
              <div className="press-heading">
                <p>COLLIE IN THE NEWS</p>
                <h2>홍보 기사</h2>
                <span>콜리테크놀로지의 기술과 성장을 소개한 주요 보도입니다.</span>
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
          ) : section.id !== "company" && section.id !== "history" && section.id !== "robot-caddie" && section.id !== "putting-simulator" && section.id !== "analyzers" && section.id !== "sales" ? (
            <section className="pdf-page" id={section.id} aria-label={section.title}>
              <Image
                src={`/assets/pages/page-${String((section.id === "people" ? 8 : section.id === "organization" ? 9 : section.id === "technology" ? 10 : section.id === "ip-list" ? 11 : section.id === "ip" ? 12 : section.id === "venture" ? 13 : section.id === "iso" ? 14 : section.id === "awards" ? 15 : index + 2)).padStart(2, "0")}.webp`}
                alt={`${section.title} - 주식회사 콜리테크놀로지 회사소개서 ${index + 2}페이지`}
                width={1754}
                height={1240}
                loading="lazy"
                sizes="100vw"
              />
            </section>
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}
