"use client";

import { useRef, useState } from "react";

type PuttingVideoCardProps = {
  label: string;
  src: string;
};

export function PuttingVideoCard({ label, src }: PuttingVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  async function playVideo() {
    setStarted(true);
    await videoRef.current?.play();
  }

  return (
    <article className={`putting-video-card${started ? " is-playing" : ""}`}>
      <video ref={videoRef} controls={started} playsInline preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
      {!started && (
        <button type="button" onClick={playVideo} aria-label={`${label} 재생`}>
          <span aria-hidden="true" />
        </button>
      )}
      <h3>{label}</h3>
    </article>
  );
}
