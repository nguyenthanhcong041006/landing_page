'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OnlineStoreModal from './OnlineStoreModal';

interface HeaderProps {
  isUnderPage?: boolean;
}

export default function Header({ isUnderPage = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDark, setIsScrolledDark] = useState(isUnderPage);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenStore = () => setIsStoreModalOpen(true);
    window.addEventListener('open-online-store', handleOpenStore);
    return () => window.removeEventListener('open-online-store', handleOpenStore);
  }, []);

  useEffect(() => {
    if (isUnderPage) {
      setIsScrolledDark(true);
      return;
    }

    const handleScroll = () => {
      const heroBtm = document.getElementById('01');
      if (heroBtm) {
        const objTop = heroBtm.offsetTop;
        if (window.scrollY >= objTop - 50) {
          setIsScrolledDark(true);
        } else {
          setIsScrolledDark(false);
        }
      } else {
        if (window.scrollY > 300) {
          setIsScrolledDark(true);
        } else {
          setIsScrolledDark(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
      <h1 id="fadeup-a" className="logo">
        <Link href="/" onClick={closeMenu}>
          <Image
            src={isUnderPage ? "/icons/logo_bk.svg" : "/icons/logo.svg"}
            alt="foxx chair"
            width={210}
            height={33}
            priority
          />
        </Link>
      </h1>

      {/* Hamburger Menu Toggle Button (3 lines matching foxxchair.jp web gốc) */}
      <div
        className={`menu-btn ${isScrolledDark ? 'bk' : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
        role="button"
        tabIndex={0}
      >
        <span />
        <span />
        <span />
      </div>

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
                Ý TƯỞNG THIẾT KẾ
              </Link>
            </li>
            <li>
              <Link href="/#02" className="menulink" onClick={closeMenu}>
                CÔNG NĂNG
              </Link>
            </li>
            <li>
              <Link href="/#03" className="menulink" onClick={closeMenu}>
                BỘ SƯU TẬP
              </Link>
            </li>
            <li>
              <Link href="/#04" className="menulink" onClick={closeMenu}>
                SẢN PHẨM
              </Link>
            </li>
            <li>
              <Link href="/news" className="menulink" onClick={closeMenu}>
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link href="/shop-list" className="menulink" onClick={closeMenu}>
                ĐIỂM BÁN
              </Link>
            </li>
            <li>
              <Link href="/contact" className="menulink" onClick={closeMenu}>
                LIÊN HỆ
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

      {/* Header Cart / Store Quick Button */}
      <button
        type="button"
        onClick={() => setIsStoreModalOpen(true)}
        className="icon hd-storelink"
        title="Cửa hàng trực tuyến"
        aria-label="Cửa hàng trực tuyến"
      >
        <Image
          src="/icons/icon_cart.svg"
          alt="Giỏ hàng"
          width={18}
          height={18}
        />
        <span>Cửa hàng trực tuyến</span>
      </button>

      {/* Online Store Popup Modal */}
      <OnlineStoreModal
        isOpen={isStoreModalOpen}
        onClose={() => setIsStoreModalOpen(false)}
      />
    </header>
  );
}
