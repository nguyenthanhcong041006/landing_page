'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Reset slide index when opening a new product
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [product]);

  // Lock body scroll when open
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

  const nextSlide = () => {
    setCurrentSlideIndex(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(prev => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="modal-overlay open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="modal-wrapper"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="modal-cancel"
          onClick={onClose}
          aria-label="Đóng cửa sổ"
        >
          <Image
            src="/icons/modal_close.svg"
            alt="Đóng"
            width={20}
            height={20}
          />
        </button>

        {/* Main Photo Slider */}
        <div className="modal-slider-container">
          <Image
            src={slides[currentSlideIndex]}
            alt={`${product.name} - ảnh ${currentSlideIndex + 1}`}
            fill
            className="main-slide"
            sizes="(max-width: 768px) 100vw, 750px"
            priority
          />

          {slides.length > 1 && (
            <>
              <button
                className="modal-arrow prev"
                onClick={prevSlide}
                aria-label="Ảnh trước"
              >
                <Image
                  src="/icons/slider_prev.svg"
                  alt="Trước"
                  width={16}
                  height={16}
                />
              </button>
              <button
                className="modal-arrow next"
                onClick={nextSlide}
                aria-label="Ảnh tiếp theo"
              >
                <Image
                  src="/icons/slider_next.svg"
                  alt="Sau"
                  width={16}
                  height={16}
                />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Selector */}
        {slides.length > 1 && (
          <div className="modal-thumbnails">
            {slides.map((imgUrl, idx) => (
              <button
                key={idx}
                className={`modal-thumb ${idx === currentSlideIndex ? 'active' : ''}`}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <Image
                  src={imgUrl}
                  alt={`Thumbnail ${idx + 1}`}
                  width={60}
                  height={45}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}

        {/* Product Details & Technical Drawings */}
        <div className="md-layout">
          <div className="txt">
            <div className="hd">
              <span>foxx chair</span>
              <h2>{product.subName} ({product.name})</h2>
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
                        <br />Khi gấp gọn: {product.foldedDimensions}
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Trọng lượng</th>
                  <td>{product.weight}</td>
                </tr>
                <tr>
                  <th>Vật liệu cấu tạo</th>
                  <td>{product.materials}</td>
                </tr>
                <tr>
                  <th>Màu sắc</th>
                  <td>{product.colors}</td>
                </tr>
                <tr>
                  <th>Xuất xứ</th>
                  <td>{product.origin}</td>
                </tr>
                <tr>
                  <th>Giá niêm yết</th>
                  <td>
                    <strong style={{ fontSize: '1.8rem', color: '#222' }}>
                      {product.price}
                    </strong>
                    <span style={{ fontSize: '1.3rem', color: '#888', marginLeft: '6px' }}>
                      (Đã bao gồm thuế)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Online Shop Order CTA Button */}
            <div className="disp-pc">
              <a
                href={product.shopUrl}
                className="icon-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/icon_cart.svg"
                  alt="Giỏ hàng"
                  width={20}
                  height={20}
                />
                <span>Đặt Mua Trên Cửa Hàng Trực Tuyến</span>
              </a>
            </div>
          </div>

          {/* Technical Dimension Drawings */}
          {product.sizeImages.length > 0 && (
            <ul className="img">
              {product.sizeImages.map((sizeImg, idx) => (
                <li key={idx}>
                  <Image
                    src={sizeImg}
                    alt={`Bản vẽ kích thước ${product.name} - ${idx + 1}`}
                    width={280}
                    height={200}
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="disp-sp" style={{ width: '100%', marginTop: '20px' }}>
            <a
              href={product.shopUrl}
              className="icon-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/icon_cart.svg"
                alt="Giỏ hàng"
                width={20}
                height={20}
              />
              <span>Đặt Mua Trên Cửa Hàng Trực Tuyến</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
