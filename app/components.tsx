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
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-heading">
          <strong>(주)콜리테크놀로지</strong>
          <span>Collie Technologies Inc.</span>
        </div>
        <div className="site-footer-info">
          <p>
            <span>대표 박인환</span>
            <span>사업자등록번호 210-88-02127</span>
            <a
              href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2108802127"
              target="_blank"
              rel="noreferrer"
            >
              사업자 정보 확인
            </a>
          </p>
          <p>
            <span>통신판매업 신고번호 확인 후 기재 예정</span>
            <span>고객센터 <a href="tel:0314003725">031-400-3725</a></span>
          </p>
          <p>
            <span>주소 경기도 안산시 상록구 한양대학로 55, 한양대학교 벤처창업관(창업보육센터) 604호</span>
          </p>
          <p>
            <span>제품·사업 문의 <a href="mailto:james.park@collietech.co.kr">james.park@collietech.co.kr</a></span>
          </p>
        </div>
        <p className="site-footer-copyright">© Collie Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
