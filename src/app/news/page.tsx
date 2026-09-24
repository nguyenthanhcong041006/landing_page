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
            <h2>TIN TỨC &amp; SỰ KIỆN</h2>
            <p>Cập nhật những chuyển động mới nhất từ thương hiệu foxx chair</p>
          </div>
        </section>

        <section className="archive-layout">
          {/* Category Filter Navigation */}
          <nav>
            <h3>Bộ Lọc Danh Mục</h3>
            <ul className="cat">
              {categories.map(cat => (
                <li key={cat.id}>
                  <button
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? 'act' : ''}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                      color: selectedCategory === cat.id ? '#000' : '#666',
                      fontWeight: selectedCategory === cat.id ? '700' : '400',
                      padding: '4px 0'
                    }}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* News List */}
          <div className="archive-list">
            <ul className="archive-ul">
              {filteredNews.map(item => (
                <li key={item.id} className="post">
                  <Link href={`/news/${item.id}`}>
                    <div className="img">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={140}
                        height={84}
                        loading="lazy"
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
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
