import Image from "next/image";
import { HeaderActions } from "./kakao-auth-controls";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#cover" aria-label="(주)콜리테크놀로지 처음으로">
        <Image src="/assets/logo.jpg" alt="Collie Technologies" width={156} height={54} priority unoptimized />
      </a>
      <HeaderActions />
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
