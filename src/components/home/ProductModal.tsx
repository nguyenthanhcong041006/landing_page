'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [product]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (product) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [product]);

  if (!product) return null;

  const slides = product.sliderImages.length > 0 ? product.sliderImages : [product.thumbnail];

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  // Center mode transform calculation:
  // Desktop: slide width is 50%, side padding is 25%, so offset is (25 - 50 * index)%
  // Mobile: slide width is 100%, side padding is 0%, so offset is -100 * index%
  const trackTransform = isMobile
    ? `translateX(-${currentIndex * 100}%)`
    : `translateX(${25 - currentIndex * 50}%)`;

  return (
    <div
      className="modal-overlay open modal-overlay-over"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`modal-wrapper modal-wrapper-${product.id}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <span
          className="modal-cancel mclose"
          onClick={onClose}
          role="button"
          aria-label="Đóng"
          tabIndex={0}
        />

        {/* Carousel with centerMode and side peek */}
        <div className="md-slider-wrap">
          <div className="md-item-slider">
            <div className="md-item-slider-viewport">
              <div
                className="md-item-slider-track"
                style={{ transform: trackTransform }}
              >
                {slides.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className={`md-slider-slide ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    style={{ cursor: idx !== currentIndex ? 'pointer' : 'default' }}
                  >
                    <Image
                      src={imgSrc}
                      alt={`${product.name} - ảnh ${idx + 1}`}
                      width={800}
                      height={533}
                      priority={idx === 0}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev Arrow */}
            {slides.length > 1 && (
              <button
                type="button"
                className={`slick-arrow-btn prev-arrow ${currentIndex === 0 ? 'disabled' : ''}`}
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Ảnh trước"
              >
                <Image
                  src="/icons/slider_prev.svg"
                  alt="Trước"
                  width={88}
                  height={88}
                />
              </button>
            )}

            {/* Next Arrow */}
            {slides.length > 1 && (
              <button
                type="button"
                className={`slick-arrow-btn next-arrow ${currentIndex === slides.length - 1 ? 'disabled' : ''}`}
                onClick={nextSlide}
                disabled={currentIndex === slides.length - 1}
                aria-label="Ảnh tiếp theo"
              >
                <Image
                  src="/icons/slider_next.svg"
                  alt="Sau"
                  width={88}
                  height={88}
                />
              </button>
            )}
          </div>
        </div>

        {/* Specs and Technical Drawings Layout */}
        <div className="md-layout">
          <div className="txt">
            <div className="hd">
              <span>foxx chair</span>
              <h2>{product.name}</h2>
            </div>

            <table>
              <tbody>
                <tr>
                  <th>Kích thước</th>
                  <td>
                    {product.dimensions}
                    {product.seatHeight && (
                      <>
                        <br />Chiều cao mặt ngồi: {product.seatHeight}
                      </>
                    )}
                    {product.frontSeatHeight && (
                      <>
                        <br />Chiều cao mép trước mặt ngồi: {product.frontSeatHeight}
                      </>
                    )}
                    {product.foldedDimensions && (
                      <>
                        <br />Khi gập gọn: {product.foldedDimensions}
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Trọng lượng</th>
                  <td>{product.weight}</td>
                </tr>
                <tr>
                  <th>Cấu tạo</th>
                  <td>
                    {product.materials.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th>Màu sắc</th>
                  <td>{product.colors}</td>
                </tr>
                <tr>
                  <th>Xuất xứ</th>
                  <td>{product.origin}</td>
                </tr>
              </tbody>
            </table>

            {/* Desktop Store Button */}
            <div className="disp-pc">
              <button
                type="button"
                className="icon"
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('open-online-store'));
                }}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <Image
                  src="/icons/icon_cart.svg"
                  alt=""
                  width={26}
                  height={26}
                />
                <span>Cửa hàng trực tuyến</span>
              </button>
            </div>
          </div>

          {/* Technical Dimension Drawings */}
          {product.sizeImages.length > 0 && (
            <ul className="img">
              {product.sizeImages.map((sizeImg, idx) => (
                <li key={idx}>
                  <Image
                    src={sizeImg}
                    alt={`Kích thước ${product.name} ${idx + 1}`}
                    width={280}
                    height={200}
                  />
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Store Button */}
          <div className="disp-sp">
            <button
              type="button"
              className="icon"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('open-online-store'));
              }}
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <Image
                src="/icons/icon_cart.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>Cửa hàng trực tuyến</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
