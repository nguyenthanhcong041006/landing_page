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
      <main className="under">
        <section className="single-wrap">
          <div className="inner">
            {/* Featured Image */}
            <div className="icatch">
              <Image
                src={article.image}
                alt={article.title}
                width={640}
                height={380}
                priority
                style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
              />
            </div>

            {/* Header info */}
            <div className="single-hd">
              <span>{article.category}</span>
              <h1>{article.title}</h1>
              <div className="time">
                <time>{article.date}</time>
              </div>
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
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Previous / Next Pager */}
            <ul className="single-pager">
              <li className="prev">
                {prevArticle ? (
                  <Link href={`/news/${prevArticle.id}`}>
                    <span>Bài trước</span>
                    <p>{prevArticle.title}</p>
                  </Link>
                ) : (
                  <div style={{ opacity: 0.4 }}>
                    <span>Đầu danh sách</span>
                  </div>
                )}
              </li>
              <li className="next">
                {nextArticle ? (
                  <Link href={`/news/${nextArticle.id}`}>
                    <span>Bài tiếp theo</span>
                    <p>{nextArticle.title}</p>
                  </Link>
                ) : (
                  <div style={{ opacity: 0.4 }}>
                    <span>Cuối danh sách</span>
                  </div>
                )}
              </li>
            </ul>

            <div className="tcenter" style={{ marginTop: '48px' }}>
              <Link href="/news" className="btn-next">
                Quay Lại Tin Tức
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
