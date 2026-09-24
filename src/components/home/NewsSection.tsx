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
        <h2 className="fu09">TIN TỨC &amp; SỰ KIỆN</h2>
        <ul className="news-list1 fu10">
          {latestNews.map(item => (
            <li key={item.id}>
              <Link href={`/news/${item.id}`}>
                <div className="img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={230}
                    loading="lazy"
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

        <div className="tright" style={{ marginTop: '32px' }}>
          <Link href="/news" className="btn-next">
            Xem Tất Cả Tin Tức
          </Link>
        </div>
      </div>
    </section>
  );
}
