'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  isUnderPage?: boolean;
}

export default function Header({ isUnderPage = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDark, setIsScrolledDark] = useState(isUnderPage);

  useEffect(() => {
    if (isUnderPage) {
      setIsScrolledDark(true);
      return;
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroThreshold = window.innerHeight - 100;
      if (scrollPos > heroThreshold) {
        setIsScrolledDark(true);
      } else {
        setIsScrolledDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isUnderPage]);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={isOpen ? 'open' : ''}>
      <h1 className="logo fadeup-a">
        <Link href="/" onClick={closeMenu}>
          <Image
            src={isUnderPage ? "/icons/logo_bk.svg" : "/icons/logo.svg"}
            alt="foxx chair"
            width={160}
            height={26}
            priority
          />
        </Link>
      </h1>

      {/* Hamburger Menu Toggle Button */}
      <div
        className={`menu-btn ${isScrolledDark ? 'bk' : ''}`}
        onClick={toggleMenu}
        aria-label="Mở danh mục điều hướng"
        role="button"
        tabIndex={0}
      />

      {/* Side Drawer Navigation Menu */}
      <div className="menu-wrap">
        <nav>
          <ul className="menu-list">
            <li>
              <Link href="/" className="menulink" onClick={closeMenu}>
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link href="/#01" className="menulink" onClick={closeMenu}>
                TRIẾT LÝ SẢN PHẨM
              </Link>
            </li>
            <li>
              <Link href="/#02" className="menulink" onClick={closeMenu}>
                CƠ CHẾ & TÍNH NĂNG
              </Link>
            </li>
            <li>
              <Link href="/#03" className="menulink" onClick={closeMenu}>
                KHÔNG GIAN SỐNG
              </Link>
            </li>
            <li>
              <Link href="/#04" className="menulink" onClick={closeMenu}>
                BỘ SƯU TẬP
              </Link>
            </li>
            <li>
              <Link href="/news" className="menulink" onClick={closeMenu}>
                TIN TỨC & SỰ KIỆN
              </Link>
            </li>
            <li>
              <Link href="/shop-list" className="menulink" onClick={closeMenu}>
                HỆ THỐNG CỬA HÀNG
              </Link>
            </li>
            <li>
              <Link href="/contact" className="menulink" onClick={closeMenu}>
                LIÊN HỆ & TƯ VẤN
              </Link>
            </li>
          </ul>

          <ul className="menu-list-sub">
            <li>
              <Link href="/company" onClick={closeMenu}>
                Giới thiệu doanh nghiệp
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" onClick={closeMenu}>
                Chính sách bảo mật
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Header Cart / Store Quick Link */}
      <a
        href="https://foxxchair.theshop.jp/"
        className="icon hd-storelink"
        target="_blank"
        rel="noopener noreferrer"
        title="Cửa hàng trực tuyến"
      >
        <Image
          src="/icons/icon_cart.svg"
          alt="Giỏ hàng"
          width={18}
          height={18}
        />
        <span>Cửa hàng trực tuyến</span>
      </a>
    </header>
  );
}
