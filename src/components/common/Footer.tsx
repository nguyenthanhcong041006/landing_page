'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  isUnder?: boolean;
}

export default function Footer({ isUnder = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={isUnder ? 'under' : ''}>
      <div className="inner">
        <Link href="/" className="logo">
          <Image
            src="/icons/logo_bk.svg"
            alt="foxx chair"
            width={180}
            height={30}
          />
        </Link>

        <ul className="sns">
          <li>
            <a
              href="https://www.youtube.com/channel/UC9sNxspoyKje-WGoO7ezCPQ"
              target="_blank"
              rel="noopener noreferrer"
              title="Kênh YouTube chính thức"
            >
              <Image
                src="/icons/icon_youtube.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/foxxchair_official"
              target="_blank"
              rel="noopener noreferrer"
              title="Trang Instagram chính thức"
            >
              <Image
                src="/icons/icon_in.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-last">
        <ul>
          <li>
            <Link href="/company">
              Giới thiệu doanh nghiệp
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              Chính sách bảo mật
            </Link>
          </li>
        </ul>
        <p className="copyright">
          &copy;foxxchair {currentYear} Toàn bộ bản quyền được bảo lưu.
        </p>
      </div>
    </footer>
  );
}
