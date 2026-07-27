import Image from "next/image";
import { sections } from "./data";

export default function Page() {
  return (
    <div className="document" aria-label="주식회사 콜리테크놀로지 회사소개서">
      <section className="home-hero" id="cover" aria-label="주식회사 콜리테크놀로지">
        <div className="hero-copy">
          <p className="hero-kicker">PHYSICAL AI · GOLF COURSE AX · DIGITAL PUTTING</p>
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
            <div className="hero-product-label" style={{ left: 18, right: "auto", top: "auto", bottom: 18 }}><span>02</span><strong>mini green<br />Digital Putting</strong></div>
          </article>
        </div>
      </section>
      {sections.slice(1).map((section, index) => (
        <section className="pdf-page" id={section.id} key={section.id} aria-label={section.title}>
          <Image
            src={`/assets/pages/page-${String(index + 2).padStart(2, "0")}.webp`}
            alt={`${section.title} - 주식회사 콜리테크놀로지 회사소개서 ${index + 2}페이지`}
            width={1754}
            height={1240}
            loading="lazy"
            sizes="100vw"
          />
        </section>
      ))}
    </div>
  );
}
