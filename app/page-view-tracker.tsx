"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { analyticsPages } from "./analytics-paths";

export function PageViewTracker() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || !(pathname in analyticsPages) || lastPath.current === pathname) return;
    lastPath.current = pathname;
    void fetch("/api/analytics/view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => { /* Statistics must not interrupt browsing. */ });
  }, [pathname]);

  return null;
}
