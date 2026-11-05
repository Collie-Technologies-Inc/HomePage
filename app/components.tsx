import Image from "next/image";
import { isAdminKakaoId, readSession } from "./kakao-auth";
import { HeaderActions, type User } from "./kakao-auth-controls";

export async function Header() {
  let initialUser: User | null = null;

  try {
    const session = await readSession();
    if (session?.nickname) {
      initialUser = {
        email: session.email || null,
        isAdmin: isAdminKakaoId(session.kakaoId),
        nickname: session.nickname,
        profileImageUrl: session.profileImageUrl || null,
      };
    }
  } catch {
    initialUser = null;
  }

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="(주)콜리테크놀로지 처음으로">
        <Image src="/assets/logo.jpg" alt="Collie Technologies" width={156} height={54} priority unoptimized />
      </a>
      <HeaderActions initialUser={initialUser} />
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
          </p>
          <p>
            <span>통신판매업 신고번호 2022-경기안산-2097</span>
            <span>고객센터 <a href="tel:0314003720">031-400-3720</a></span>
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
