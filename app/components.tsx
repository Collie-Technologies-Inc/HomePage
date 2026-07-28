import Image from "next/image";

const menuItems = [
  { id: "ceo-message", title: "기업현황" },
  { id: "ax-control", title: "기술개발" },
  { id: "ip-list", title: "연구개발" },
  { id: "press", title: "뉴스 및 소식" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#cover" aria-label="(주)콜리테크놀로지 처음으로">
        <Image src="/assets/logo.jpg" alt="Collie Technologies" width={156} height={54} priority unoptimized />
      </a>
      <details className="header-menu">
        <summary className="menu-button">메뉴</summary>
        <nav id="site-navigation" aria-label="웹사이트 주요 메뉴">
          {menuItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.title}
            </a>
          ))}
        </nav>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <strong>Collie Technologies Inc.</strong>
      <a href="mailto:james.park@collietech.co.kr">james.park@collietech.co.kr</a>
    </footer>
  );
}
