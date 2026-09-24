'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroThreshold = 400;
      if (scrollPos > heroThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className={`contact-fixed ${isVisible ? 'up' : ''}`}
      aria-label="Liên hệ với chúng tôi"
    >
      <Image
        src="/icons/icon_mail.svg"
        alt="Thư liên hệ"
        width={18}
        height={18}
      />
      <span>Liên hệ với chúng tôi</span>
    </Link>
  );
}
