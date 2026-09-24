'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';

export default function FunctionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => setIsPlaying(false);

  return (
    <section id="02" className="top-mv">
      <div className="inner-min">
        <div className="howto-movie fu03">
          <video
            ref={videoRef}
            poster="/images/howto_thm.png"
            className="video-ht"
            playsInline
            controls={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          >
            <source src="/videos/howto-fold.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ phát video hướng dẫn.
          </video>

          <Image
            src="/icons/icon_play.svg"
            className={`play-btn ${isPlaying ? 'active' : ''}`}
            alt="Phát video hướng dẫn"
            width={120}
            height={120}
            onClick={togglePlay}
          />
        </div>
      </div>
    </section>
  );
}
