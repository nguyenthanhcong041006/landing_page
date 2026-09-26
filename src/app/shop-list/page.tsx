'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { shops } from '@/data/shops';

export default function ShopListPage() {
  return (
    <>
      <Header isUnderPage={true} />
      <main className="under">
        <section className="contact-hd">
          <div className="tl-mds">
            <h2>ĐIỂM BÁN</h2>
            <p>Danh sách các showroom &amp; đại lý phân phối chính hãng</p>
          </div>
        </section>

        <section className="contact-wrap">
          <div className="inner" style={{ maxWidth: '640px' }}>
            {shops.map(shop => (
              <div key={shop.id} className="shop-card">
                <a
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Ghé thăm website ${shop.name}`}
                >
                  <div className="shop-name">
                    {shop.name}
                  </div>
                  <div className="shop-info">
                    {shop.postalCode} {shop.address}
                    <br />
                    Điện thoại: {shop.phone}
                  </div>
                </a>
              </div>
            ))}

            <p style={{ marginTop: '36px', fontSize: '1.4rem', color: '#777', lineHeight: '1.8', textAlign: 'left' }}>
              ※ Các mẫu sản phẩm trưng bày và số lượng hàng sẵn có tại mỗi showroom có thể khác biệt.
              Để có trải nghiệm tốt nhất, quý khách vui lòng liên hệ trực tiếp với showroom trước khi ghé thăm.
            </p>
          </div>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
