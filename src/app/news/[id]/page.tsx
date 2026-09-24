'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { newsItems } from '@/data/news';

export default function SingleNewsPage() {
  const params = useParams();
  const id = params?.id as string;

  const currentIndex = newsItems.findIndex(item => item.id === id);
  if (currentIndex === -1) {
    notFound();
  }

  const article = newsItems[currentIndex];
  const prevArticle = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextArticle = currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;

  return (
    <>
      <Header isUnderPage={true} />
      <main className="under" style={{ backgroundColor: '#ffffff', minHeight: '85vh' }}>
        <section className="single-wrap">
          <div className="inner">
            {/* Featured Image */}
            <div className="icatch">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={480}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '440px',
                  objectFit: article.category === 'Giải thưởng' ? 'contain' : 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Header info */}
            <div className="single-hd">
              <div className="single-meta">
                <span className="single-category">{article.category}</span>
                <time className="single-date">{article.date}</time>
              </div>
              <h1 className="single-title">{article.title}</h1>
            </div>

            {/* Body Content */}
            <div
              className="single-main"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <ul className="tag-list single">
                {article.tags.map((tag, idx) => (
                  <li key={idx}>
                    <span>#{tag}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Previous / Next Pager */}
            <ul className="single-pager">
              <li className="prev">
                {prevArticle ? (
                  <Link href={`/news/${prevArticle.id}`} className="pager-link">
                    <span className="pager-label">← Bài trước</span>
                    <p className="pager-title">{prevArticle.title}</p>
                  </Link>
                ) : (
                  <div className="pager-disabled">
                    <span className="pager-label">Đầu danh sách</span>
                  </div>
                )}
              </li>
              <li className="next">
                {nextArticle ? (
                  <Link href={`/news/${nextArticle.id}`} className="pager-link">
                    <span className="pager-label">Bài tiếp theo →</span>
                    <p className="pager-title">{nextArticle.title}</p>
                  </Link>
                ) : (
                  <div className="pager-disabled">
                    <span className="pager-label">Cuối danh sách</span>
                  </div>
                )}
              </li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/news" className="btn-back-news">
                ← Quay lại danh sách tin tức
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer isUnder={true} />

      <style jsx global>{`
        .single-wrap {
          padding: 60px 24px 100px;
        }

        .single-wrap .inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .icatch {
          border-radius: 8px;
          overflow: hidden;
          background-color: #f7f7f7;
          border: 1px solid #f0f0f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 36px;
        }

        .single-hd {
          border-bottom: 1px solid #ebebeb;
          padding-bottom: 24px;
          margin-bottom: 36px;
        }

        .single-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .single-category {
          font-family: 'Poppins', sans-serif;
          font-size: 1.35rem;
          color: #222222;
          font-weight: 500;
          border-bottom: 1px solid #555555;
          padding-bottom: 1px;
        }

        .single-date {
          font-family: 'Poppins', sans-serif;
          font-size: 1.35rem;
          color: #888888;
        }

        .single-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.6rem;
          font-weight: 600;
          line-height: 1.45;
          color: #1a1a1a;
          margin: 0;
        }

        .single-main {
          font-family: 'Poppins', sans-serif;
          font-size: 1.6rem;
          line-height: 2.0;
          color: #333333;
          margin-bottom: 40px;
        }

        .single-main p {
          margin-bottom: 20px;
        }

        .single-main h3 {
          font-size: 1.9rem;
          font-weight: 600;
          margin: 36px 0 16px;
          padding-left: 12px;
          border-left: 3px solid #000000;
          color: #1a1a1a;
        }

        .single-main ul {
          padding-left: 24px;
          margin-bottom: 24px;
        }

        .single-main li {
          margin-bottom: 8px;
        }

        .tag-list.single {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }

        .tag-list.single span {
          display: inline-block;
          padding: 6px 14px;
          background-color: #f2f2f2;
          border-radius: 20px;
          font-size: 1.3rem;
          color: #555555;
          font-family: 'Poppins', sans-serif;
        }

        .single-pager {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid #ebebeb;
          padding-top: 32px;
          list-style: none;
          margin: 0;
        }

        .single-pager li {
          flex: 1;
          max-width: 48%;
        }

        .pager-link {
          display: block;
          padding: 16px 20px;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
          text-decoration: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          background: #ffffff;
        }

        .pager-link:hover {
          border-color: #1a1a1a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .pager-label {
          display: block;
          font-size: 1.25rem;
          color: #888888;
          margin-bottom: 6px;
          font-family: 'Poppins', sans-serif;
        }

        .pager-title {
          font-size: 1.4rem;
          font-weight: 500;
          color: #222222;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: 'Poppins', sans-serif;
        }

        .pager-disabled {
          padding: 16px 20px;
          border: 1px dashed #e0e0e0;
          border-radius: 6px;
          background: #fafafa;
          opacity: 0.6;
        }

        .btn-back-news {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          background-color: #000000;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.45rem;
          font-weight: 500;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          transition: opacity 0.2s ease, transform 0.15s ease;
        }

        .btn-back-news:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        @media screen and (max-width: 600px) {
          .single-title {
            font-size: 2.1rem;
          }

          .single-pager {
            flex-direction: column;
            gap: 12px;
          }

          .single-pager li {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
