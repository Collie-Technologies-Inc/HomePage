"use client";

import { useRef } from "react";

export default function MiniGreenPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  function fitStoryHeight() {
    const frame = frameRef.current;
    const storyDocument = frame?.contentDocument;
    if (!frame || !storyDocument) return;

    const height = Math.max(
      storyDocument.documentElement.scrollHeight,
      storyDocument.body?.scrollHeight ?? 0,
    );
    frame.style.height = `${height}px`;
  }

  return (
    <section className="mini-green-story-page" aria-label="미니그린 소개">
      <iframe
        ref={frameRef}
        className="mini-green-story-frame"
        src="/assets/mini-green-story-v19.html"
        title="미니그린 와디즈 스토리"
        onLoad={fitStoryHeight}
      />
    </section>
  );
}
