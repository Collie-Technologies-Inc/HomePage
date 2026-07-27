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
                      <div className="press-card-meta">
                        <strong>{article.source}</strong>
                        <time>{article.date}</time>
                      </div>
                      <h3>{article.title}</h3>
                      <span className="press-card-link">기사 원문 보기 <b aria-hidden="true">↗</b></span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ) : (
            <section className="pdf-page" id={section.id} aria-label={section.title}>
              <Image
                src={`/assets/pages/page-${String(index + 2).padStart(2, "0")}.webp`}
                alt={`${section.title} - 주식회사 콜리테크놀로지 회사소개서 ${index + 2}페이지`}
                width={1754}
                height={1240}
                loading="lazy"
                sizes="100vw"
              />
            </section>
          )}
        </Fragment>
      ))}
    </div>
  );
}
