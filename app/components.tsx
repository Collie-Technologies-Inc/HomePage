"use client";

import Image from "next/image";
import { useState } from "react";
import { navigation } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#cover" aria-label="주식회사 콜리테크놀로지 처음으로">
        <Image src="/assets/logo.jpg" alt="Collie Technologies" width={156} height={54} priority />
      </a>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
        {open ? "닫기" : "메뉴"}
      </button>
      <nav id="site-navigation" className={open ? "open" : ""} aria-label="회사소개서 목차">
        {navigation.map((item) => <a href={`#${item.id}`} key={item.id} onClick={() => setOpen(false)}>{item.title}</a>)}
        <a className="download" href="/Collie-Technologies-Company-Profile-2026.pdf" download>회사소개서</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return <footer><strong>Collie Technologies Inc.</strong><a href="mailto:james.park@collietech.co.kr">james.park@collietech.co.kr</a></footer>;
}
