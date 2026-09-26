'use client';

import React from 'react';

const galleryImages = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'foxx chair' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'foxx chair' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'foxx chair' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'foxx chair' },
];

export default function GallerySection() {
  return (
    <section id="03" className="top-slider">
      <div className="gallery-track-container fu04">
        {/* Track 1 */}
        <div className="gallery-track">
          {galleryImages.map((item, index) => (
            <div key={`track1-${index}`} className="gallery-item">
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 2 - Seamless loop continuation */}
        <div className="gallery-track" aria-hidden="true">
          {galleryImages.map((item, index) => (
            <div key={`track2-${index}`} className="gallery-item">
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Track 3 - Infinite buffer */}
        <div className="gallery-track" aria-hidden="true">
          {galleryImages.map((item, index) => (
            <div key={`track3-${index}`} className="gallery-item">
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

