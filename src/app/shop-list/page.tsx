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
            <h2>HỆ THỐNG CỬA HÀNG &amp; SHOWROOM</h2>
            <p>Trực tiếp trải nghiệm độ êm ái, chất liệu da bò và cơ cấu gập xếp của foxx chair</p>
          </div>
        </section>

        <section style={{ maxWidth: '850px', margin: '48px auto 80px', padding: '0 24px' }}>
          {shops.map(shop => (
            <div key={shop.id} className="shop-card">
              <a
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ghé thăm website của ${shop.name}`}
              >
                <div className="shop-name">
                  {shop.name}
                  <span style={{ fontSize: '1.2rem', color: '#888', marginLeft: '10px', fontWeight: 'normal' }}>
                    [{shop.area}] ↗
                  </span>
                </div>
                <div className="shop-info">
                  {shop.postalCode} {shop.address}
                  <br />
                  <strong>Điện thoại:</strong> {shop.phone}
                </div>
              </a>
            </div>
          ))}

          <p style={{ marginTop: '36px', fontSize: '1.4rem', color: '#777', lineHeight: '1.8', textAlign: 'center' }}>
            ※ Các mẫu sản phẩm trưng bày và số lượng hàng sẵn có tại mỗi showroom có thể khác biệt.
            <br />
            Để có trải nghiệm tốt nhất, quý khách vui lòng liên hệ trực tiếp với showroom trước khi ghé thăm.
          </p>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
