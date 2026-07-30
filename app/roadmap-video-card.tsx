"use client";

import { useRef, useState } from "react";

type RoadmapVideoCardProps = {
  className: string;
  label: string;
  src: string;
};

export function RoadmapVideoCard({ className, label, src }: RoadmapVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  async function playVideo() {
    setStarted(true);
    await videoRef.current?.play();
  }

  return (
    <div className={`roadmap-video-card ${className}${started ? " is-playing" : ""}`}>
      <video ref={videoRef} controls={started} playsInline preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
      {!started && (
        <button type="button" onClick={playVideo} aria-label={label}>
          <span aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
