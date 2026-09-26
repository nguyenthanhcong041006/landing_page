'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function FunctionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            setIsPlaying(false);
            const tryPlay = () => {
              if (video) {
                video.muted = true;
                video.play()
                  .then(() => setIsPlaying(true))
                  .catch(() => {});
              }
              window.removeEventListener('click', tryPlay);
              window.removeEventListener('touchstart', tryPlay);
              window.removeEventListener('scroll', tryPlay);
            };
            window.addEventListener('click', tryPlay, { once: true });
            window.addEventListener('touchstart', tryPlay, { once: true });
            window.addEventListener('scroll', tryPlay, { once: true });
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <section id="02" className="top-mv">
      <div className="inner-min">
        <div className="howto-movie fu03" onClick={togglePlay} style={{ cursor: 'pointer' }}>
          <video
            ref={videoRef}
            poster="/images/howto_thm.png"
            className="video-ht"
            playsInline
            autoPlay
            loop
            muted
            preload="auto"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          >
            <source src="/videos/howto-fold.mp4" type="video/mp4" />
            <source src="https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/movie/foxxchair_howtoMUTE_fin2.mp4" type="video/mp4" />
          </video>
          <Image
            src="/icons/icon_play.svg"
            className={`play-btn ${isPlaying ? 'active' : ''}`}
            alt="Phát video"
            width={120}
            height={120}
          />
        </div>
      </div>
    </section>
  );
}
