'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingContact() {
  const [isUp, setIsUp] = useState(false);
  const [isUpAdd, setIsUpAdd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const heroBtm = document.getElementById('01');
      const footer = document.querySelector('footer');
      const winHeight = window.innerHeight;

      if (heroBtm) {
        const objTop = heroBtm.offsetTop;
        if (scroll >= objTop - 50) {
          setIsUp(true);
        } else {
          setIsUp(false);
        }
      } else {
        if (scroll > 200) {
          setIsUp(true);
        } else {
          setIsUp(false);
        }
      }

      if (footer) {
        const objFot = footer.offsetTop;
        const objHei = footer.clientHeight - 100;
        if (scroll > objFot - winHeight + objHei) {
          setIsUpAdd(true);
        } else {
          setIsUpAdd(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const classNames = ['contact-fixed'];
  if (isUp) classNames.push('up');
  if (isUpAdd) classNames.push('up-add');

  return (
    <Link
      href="/contact"
      className={classNames.join(' ')}
      aria-label="Liên hệ"
    >
      <Image
        src="/icons/icon_mail.svg"
        alt=""
        width={18}
        height={18}
      />
      <span>Liên hệ</span>
    </Link>
  );
}
