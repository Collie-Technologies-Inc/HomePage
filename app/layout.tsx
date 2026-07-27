import type { Metadata } from "next";
import { Footer, Header } from "./components";
import "./globals.css";

const title = "㈜콜리테크놀로지";
const description = "Physical AI (Robot Caddie), 골프 플랫폼 AX 관제 솔루션, 퍼팅 시뮬레이터, L.A.B. Putter, Stewart Trolley";

export const metadata: Metadata = {
  metadataBase: new URL("https://collietech.co.kr"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "ko_KR", images: [{ url: "/og.png", width: 1536, height: 1024 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  icons: { icon: "/assets/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body><Header /><main>{children}</main><Footer /></body></html>;
}
