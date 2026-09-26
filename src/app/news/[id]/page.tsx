import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { newsItems } from '@/data/news';

export function generateStaticParams() {
  return newsItems.map((item) => ({
    id: item.id,
  }));
}

export default function SingleNewsPage({ params }: { params: { id: string } }) {
  const id = params?.id;

  const currentIndex = newsItems.findIndex(item => item.id === id);
  if (currentIndex === -1) {
    notFound();
  }

  const article = newsItems[currentIndex];
  // In descending date order (index 0 is newest, index N-1 is oldest):
  // "Bài viết trước" (Previous / Older post) = currentIndex + 1
  const prevArticle = currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;
  // "Bài viết tiếp theo" (Next / Newer post) = currentIndex - 1
  const nextArticle = currentIndex > 0 ? newsItems[currentIndex - 1] : null;

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
                width={800}
                height={480}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '440px',
                  objectFit: article.category === 'Giải thưởng' ? 'contain' : 'cover',
                  padding: article.category === 'Giải thưởng' ? '16px' : '0',
                  display: 'block',
                }}
              />
            </div>

            {/* Header info */}
            <div className="single-hd">
              <span>{article.category}</span>
              <h1>{article.title}</h1>
              <div className="time">
                <time>{article.date}</time>
                <ul>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://foxxchair.jp/news/${article.id}`)}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      title="Chia sẻ trên X (Twitter)"
                    >
                      <img src="/icons/icon_tw.svg" alt="Twitter" width={22} height={22} style={{ width: '22px', height: '22px', display: 'block' }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://foxxchair.jp/news/${article.id}`)}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      title="Chia sẻ trên Facebook"
                    >
                      <img src="/icons/icon_fb2.svg" alt="Facebook" width={20} height={20} style={{ width: '20px', height: '20px', display: 'block' }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://foxxchair.jp/news/${article.id}`)}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      title="Chia sẻ trên LINE"
                    >
                      <img src="/icons/icon_line.svg" alt="LINE" width={20} height={20} style={{ width: '20px', height: '20px', display: 'block' }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Body Content */}
            <div
              className="single-main"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Share Section matching web gốc */}
            <ul className="single-share">
              <li><span>Chia sẻ bài viết này</span></li>
              <li>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://foxxchair.jp/news/${article.id}`)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Chia sẻ trên X (Twitter)"
                >
                  <img src="/icons/icon_tw.svg" alt="Twitter" width={22} height={22} style={{ width: '22px', height: '22px', display: 'block' }} />
                </a>
              </li>
              <li>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://foxxchair.jp/news/${article.id}`)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Chia sẻ trên Facebook"
                >
                  <img src="/icons/icon_fb2.svg" alt="Facebook" width={20} height={20} style={{ width: '20px', height: '20px', display: 'block' }} />
                </a>
              </li>
              <li>
                <a
                  href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(`https://foxxchair.jp/news/${article.id}`)}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title="Chia sẻ trên LINE"
                >
                  <img src="/icons/icon_line.svg" alt="LINE" width={20} height={20} style={{ width: '20px', height: '20px', display: 'block' }} />
                </a>
              </li>
            </ul>

            {/* Previous / Next Pager with thumbnail image matching web gốc */}
            <ul className="single-pager">
              <li className="prev">
                {prevArticle ? (
                  <Link href={`/news/${prevArticle.id}`}>
                    <span>Bài viết trước</span>
                    <div className="img">
                      <img
                        src={prevArticle.image}
                        alt={prevArticle.title}
                        style={{
                          objectFit: prevArticle.category === 'Giải thưởng' ? 'contain' : 'cover',
                          padding: prevArticle.category === 'Giải thưởng' ? '4px' : '0',
                        }}
                      />
                    </div>
                    <p>{prevArticle.title}</p>
                  </Link>
                ) : null}
              </li>
              <li className="next">
                {nextArticle ? (
                  <Link href={`/news/${nextArticle.id}`}>
                    <span>Bài viết tiếp theo</span>
                    <div className="img">
                      <img
                        src={nextArticle.image}
                        alt={nextArticle.title}
                        style={{
                          objectFit: nextArticle.category === 'Giải thưởng' ? 'contain' : 'cover',
                          padding: nextArticle.category === 'Giải thưởng' ? '4px' : '0',
                        }}
                      />
                    </div>
                    <p>{nextArticle.title}</p>
                  </Link>
                ) : null}
              </li>
            </ul>

            <div className="tcenter">
              <Link href="/news" className="btn-next">
                Danh sách tin tức
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
