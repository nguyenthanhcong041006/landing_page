'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsItems } from '@/data/news';

export default function NewsSection() {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className="top-news" style={{ padding: '80px 0 100px', backgroundColor: '#ffffff' }}>
      <div className="inner-min" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Centered Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }} className="fu09">
          <h2
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: '3.6rem',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#222222',
              margin: 0,
            }}
          >
            TIN TỨC &amp; SỰ KIỆN
          </h2>
        </div>

        {/* 3-Column News Grid */}
        <ul className="news-grid-list fu10">
          {latestNews.map(item => (
            <li key={item.id} className="news-grid-item">
              <Link href={`/news/${item.id}`} className="news-grid-link">
                <div className="news-grid-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="news-grid-txt">
                  <span className="news-grid-cat">{item.category}</span>
                  <h3 className="news-grid-title">{item.title}</h3>
                  <time className="news-grid-date">{item.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Centered Pill Button matching original Japanese design */}
        <div style={{ textAlign: 'center', marginTop: '54px' }}>
          <Link href="/news" className="btn-next">
            XEM TẤT CẢ TIN TỨC
          </Link>
        </div>
      </div>

      <style jsx>{`
        .news-grid-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .news-grid-item {
          display: flex;
          flex-direction: column;
        }

        .news-grid-link {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }

        .news-grid-img {
          width: 100%;
          aspect-ratio: 16 / 10;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          border: 1px solid #f0f0f0;
          background-color: #fafafa;
        }

        .news-grid-img :global(img) {
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .news-grid-link:hover .news-grid-img :global(img) {
          transform: scale(1.05);
          opacity: 0.92;
        }

        .news-grid-txt {
          padding-top: 18px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .news-grid-cat {
          font-family: 'Poppins', sans-serif;
          font-size: 1.3rem;
          color: #333333;
          font-weight: 500;
          border-bottom: 1px solid #555555;
          padding-bottom: 2px;
          display: inline-block;
          align-self: flex-start;
          line-height: 1.2;
        }

        .news-grid-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.55rem;
          font-weight: 500;
          color: #222222;
          line-height: 1.55;
          margin: 12px 0 10px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.2s ease;
        }

        .news-grid-link:hover .news-grid-title {
          color: #000000;
        }

        .news-grid-date {
          font-family: 'Poppins', sans-serif;
          font-size: 1.25rem;
          color: #888888;
        }

        .news-all-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 44px;
          border-radius: 999px;
          border: 1px solid #333333;
          background-color: #ffffff;
          color: #333333;
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: background-color 0.25s ease, color 0.25s ease, transform 0.15s ease, box-shadow 0.25s ease;
        }

        .news-all-btn:hover {
          background-color: #000000;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        @media screen and (max-width: 860px) {
          .news-grid-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media screen and (max-width: 600px) {
          .news-grid-list {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
}
