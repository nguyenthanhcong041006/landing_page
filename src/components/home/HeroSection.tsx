'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero hero-full">
      <video
        poster="/images/hero_thm.jpg"
        playsInline
        loop
        autoPlay
        muted
      >
        <source src="/videos/hero-banner.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ phát video nền.
      </video>
    </section>
  );
}
