'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsItems } from '@/data/news';

export default function NewsSection() {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className="top-news">
      <div className="inner-min">
        <h2 className="fu09">TIN TỨC</h2>
        <ul className="news-list1 fu10">
          {latestNews.map(item => (
            <li key={item.id}>
              <Link href={`/news/${item.id}`}>
                <div className="img">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      objectFit: item.category === 'Giải thưởng' ? 'contain' : 'cover',
                      padding: item.category === 'Giải thưởng' ? '8px' : '0',
                    }}
                  />
                </div>
                <div className="txt">
                  <span>{item.category}</span>
                  <p>{item.title}</p>
                  <time>{item.date}</time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="tright">
          <Link href="/news" className="btn-next">
            Xem tất cả tin tức
          </Link>
        </div>
      </div>
    </section>
  );
}
