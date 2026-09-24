'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { newsItems } from '@/data/news';

export default function NewsArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Tất cả bài viết' },
    { id: 'Thông báo', name: 'Thông báo' },
    { id: 'Giải thưởng', name: 'Giải thưởng' }
  ];

  const filteredNews = selectedCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header isUnderPage={true} />

      <main className="under" style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        {/* Page Header */}
        <section className="news-page-header">
          <div className="news-header-inner">
            <h1 className="news-main-title">TIN TỨC</h1>
            <p className="news-subtitle">
              Cập nhật những chuyển động mới nhất từ thương hiệu foxx chair
            </p>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="news-layout-wrapper">
          <div className="news-layout-container">
            {/* Left Sidebar Filter */}
            <aside className="news-sidebar">
              <div className="filter-header">
                <h3>Bộ lọc danh mục</h3>
              </div>
              <ul className="filter-list">
                {categories.map(cat => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`filter-btn ${isActive ? 'active' : ''}`}
                      >
                        {isActive && <span className="active-dot" />}
                        <span>{cat.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* Right News List */}
            <section className="news-list-section">
              {filteredNews.length === 0 ? (
                <div className="news-empty">
                  <p>Không có bài viết nào trong danh mục này.</p>
                </div>
              ) : (
                <div className="news-cards-list">
                  {filteredNews.map(item => (
                    <Link
                      key={item.id}
                      href={`/news/${item.id}`}
                      className="news-card-item"
                    >
                      <div className="news-card-thumb">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 180px"
                          style={{
                            objectFit: item.category === 'Giải thưởng' ? 'contain' : 'cover',
                            padding: item.category === 'Giải thưởng' ? '12px' : '0',
                          }}
                        />
                      </div>
                      <div className="news-card-body">
                        <div className="news-card-meta">
                          <span className="news-card-category">{item.category}</span>
                          <time className="news-card-date">{item.date}</time>
                        </div>
                        <h2 className="news-card-title">{item.title}</h2>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer isUnder={true} />

      <style jsx global>{`
        .news-page-header {
          padding: 60px 20px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .news-header-inner {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .news-main-title {
          font-family: 'Poppins', sans-serif;
          font-size: 4.4rem;
          font-weight: 300;
          letter-spacing: 0.1em;
          color: #222222;
          margin: 0 auto;
          text-align: center;
          line-height: 1.1;
        }

        .news-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          color: #777777;
          margin: 14px auto 0;
          text-align: center;
          letter-spacing: 0.02em;
        }

        .news-layout-wrapper {
          width: 100%;
          padding: 20px 24px 120px;
        }

        .news-layout-container {
          max-width: 1060px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        /* Sidebar */
        .news-sidebar {
          width: 200px;
          flex-shrink: 0;
        }

        .filter-header {
          border-bottom: 1px solid #1a1a1a;
          padding-bottom: 10px;
          margin-bottom: 16px;
        }

        .filter-header h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
          letter-spacing: 0.04em;
        }

        .filter-list {
          list-style: none;
          padding: 0 0 16px 0;
          margin: 0;
          border-bottom: 1px solid #1a1a1a;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .filter-btn {
          background: none;
          border: none;
          padding: 6px 0;
          font-family: 'Poppins', sans-serif;
          font-size: 1.45rem;
          font-weight: 400;
          color: #666666;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .filter-btn:hover {
          color: #000000;
        }

        .filter-btn.active {
          color: #000000;
          font-weight: 600;
        }

        .active-dot {
          width: 5px;
          height: 5px;
          background-color: #000000;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Right News List */
        .news-list-section {
          flex: 1;
          min-width: 0;
        }

        .news-empty {
          padding: 60px 20px;
          text-align: center;
          color: #888888;
          font-size: 1.5rem;
          font-family: 'Poppins', sans-serif;
          background: #fbfbfb;
          border-radius: 8px;
        }

        .news-cards-list {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .news-card-item {
          display: flex;
          align-items: center;
          gap: 30px;
          background-color: #ffffff;
          border-radius: 6px;
          padding: 24px 28px;
          text-decoration: none;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .news-card-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border-color: #e2e2e2;
        }

        .news-card-thumb {
          position: relative;
          width: 180px;
          height: 114px;
          flex-shrink: 0;
          border-radius: 4px;
          overflow: hidden;
          background-color: #f7f7f7;
          border: 1px solid #eeeeee;
        }

        .news-card-body {
          flex: 1;
          min-width: 0;
        }

        .news-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 10px;
        }

        .news-card-category {
          font-family: 'Poppins', sans-serif;
          font-size: 1.35rem;
          color: #222222;
          font-weight: 500;
          border-bottom: 1px solid #555555;
          padding-bottom: 1px;
          display: inline-block;
          line-height: 1.2;
        }

        .news-card-date {
          font-family: 'Poppins', sans-serif;
          font-size: 1.35rem;
          color: #888888;
        }

        .news-card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 1.65rem;
          font-weight: 500;
          color: #1a1a1a;
          line-height: 1.5;
          margin: 0;
          transition: color 0.2s ease;
        }

        .news-card-item:hover .news-card-title {
          color: #000000;
        }

        /* Responsive Design */
        @media screen and (max-width: 860px) {
          .news-layout-container {
            flex-direction: column;
            gap: 36px;
          }

          .news-sidebar {
            width: 100%;
          }

          .filter-list {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 16px;
          }

          .filter-btn {
            width: auto;
            padding: 4px 8px;
          }
        }

        @media screen and (max-width: 600px) {
          .news-main-title {
            font-size: 3.4rem;
          }

          .news-card-item {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
            gap: 18px;
          }

          .news-card-thumb {
            width: 100%;
            height: 180px;
          }

          .news-card-title {
            font-size: 1.55rem;
          }
        }
      `}</style>
    </>
  );
}
