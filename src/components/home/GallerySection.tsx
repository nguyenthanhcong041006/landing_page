'use client';

import React from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Không gian phòng khách cùng foxx chair' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Thư giãn bên khung cửa sổ ngập nắng' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Chi tiết gỗ sồi và da bò tự nhiên nguyên tấm' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Gấp gọn tinh tế tôn vinh vẻ đẹp tối giản' },
];

export default function GallerySection() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedImages = [...galleryImages, ...galleryImages, ...galleryImages];

  return (
    <section id="03" className="top-slider">
      <div className="gallery-track-container fu04">
        <div className="gallery-track">
          {duplicatedImages.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={480}
                height={300}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
