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
  // 2 identical halves for a seamless infinite marquee loop without stutter
  const singleSet = [...galleryImages, ...galleryImages];
  const duplicatedImages = [...singleSet, ...singleSet];

  return (
    <section id="03" className="top-slider">
      <div className="gallery-track-container fu04">
        <div className="gallery-track">
          {duplicatedImages.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                width={800}
                height={1200}
                sizes="(max-width: 768px) 50vw, 33.33vw"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
