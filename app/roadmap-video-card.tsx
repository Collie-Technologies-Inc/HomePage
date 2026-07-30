"use client";

import { useRef, useState } from "react";

export function RoadmapVideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  async function playVideo() {
    setStarted(true);
    await videoRef.current?.play();
  }

  return (
    <div className={`roadmap-video-card${started ? " is-playing" : ""}`}>
      <video ref={videoRef} controls={started} playsInline preload="metadata">
        <source src="https://media.githubusercontent.com/media/Collie-Technologies-Inc/HomePage/30eb2c07b7497a514eee001bd48d1ad1a61ad165/public/assets/homepage2.mp4" type="video/mp4" />
      </video>
      {!started && (
        <button type="button" onClick={playVideo} aria-label="홈페이지 소개 영상 재생">
          <span aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
