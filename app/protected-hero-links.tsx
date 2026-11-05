const links = [
  { href: "/mini-green", label: "mini green" },
  { href: "/technology#ax-control", label: "Robot Caddie & AX" },
] as const;

export function ProtectedHeroLinks() {
  return (
    <div className="hero-links">
      {links.map((link) => (
        <a href={link.href} key={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
