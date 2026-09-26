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

      <main className="under">
        <section className="archive-hd">
          <div className="tl-mds">
            <h2>TIN TỨC</h2>
          </div>
        </section>

        <div className="archive-layout">
          <nav>
            <h3>Bộ lọc danh mục</h3>
            <ul className="cat">
              {categories.map(cat => {
                const isActive = selectedCategory === cat.id;
                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      className={isActive ? 'act' : ''}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="archive-list">
            <ul className="archive-ul">
              {filteredNews.map(item => (
                <li key={item.id}>
                  <Link href={`/news/${item.id}`}>
                    <div className="img">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          objectFit: item.category === 'Giải thưởng' ? 'contain' : 'cover',
                          padding: item.category === 'Giải thưởng' ? '4px' : '0',
                        }}
                      />
                    </div>
                    <div className="txt">
                      <div className="time">
                        <span>{item.category}</span>
                        <time>{item.date}</time>
                      </div>
                      <p>{item.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer isUnder={true} />
    </>
  );
}
