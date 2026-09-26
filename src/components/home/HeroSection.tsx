'use client';

import React, { useRef, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const tryPlay = () => {
            if (video) {
              video.play().catch(() => {});
            }
            window.removeEventListener('click', tryPlay);
            window.removeEventListener('touchstart', tryPlay);
          };
          window.addEventListener('click', tryPlay, { once: true });
          window.addEventListener('touchstart', tryPlay, { once: true });
        });
      }
    }
  }, []);

  return (
    <section className="hero hero-full">
      <video
        ref={videoRef}
        src="/videos/hero-banner.mp4"
        poster="/images/hero_thm.jpg"
        playsInline
        loop
        autoPlay
        muted
        preload="auto"
      >
        <source src="/videos/hero-banner.mp4" type="video/mp4" />
        <source src="https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/movie/foxxchair_imageMUTE_fin2.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ phát video nền.
      </video>
    </section>
  );
}
