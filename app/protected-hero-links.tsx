"use client";

import { MouseEvent } from "react";

const links = [
  { href: "#ax-control", label: "Robot Caddie & AX" },
  { href: "#putting-simulator", label: "Digital Putting" },
] as const;

export function ProtectedHeroLinks() {
  async function followLink(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    try {
      const response = await fetch("/api/auth/me", { credentials: "same-origin" });
      const data = (await response.json()) as { user?: unknown };
      if (response.ok && data.user) {
        window.history.pushState(null, "", href);
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "auto", block: "start" });
        return;
      }
    } catch {
      // Authentication failures use the same notice as the header menu.
    }
    window.dispatchEvent(new Event("collie:login-required"));
  }

  return (
    <div className="hero-links">
      {links.map((link) => (
        <a href={link.href} key={link.href} onClick={(event) => followLink(event, link.href)}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
