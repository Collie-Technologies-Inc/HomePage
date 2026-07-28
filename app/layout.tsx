import type { Metadata } from "next";
import { Footer, Header } from "./components";
import "./globals.css";

const title = "(주)콜리테크놀로지 | Physical AI Robot Caddie";
const description =
  "Physical AI Robot Caddie 기반 골프장 AX Solution과 Digital Putting 연습기를 개발하는 (주)콜리테크놀로지입니다.";
const socialImage = "/assets/hero-robot-caddie.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.collietech.co.kr"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.collietech.co.kr/",
    siteName: "(주)콜리테크놀로지",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1024,
        alt: "골프장에서 운용되는 Physical AI Robot Caddie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
  icons: { icon: "/assets/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
