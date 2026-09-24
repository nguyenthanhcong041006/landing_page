'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function CompanyPage() {
  return (
    <>
      <Header isUnderPage={true} />
      <main className="under">
        <section className="contact-hd">
          <div className="tl-mds">
            <h2>THÔNG TIN DOANH NGHIỆP</h2>
            <p>Hồ sơ năng lực &amp; triết lý phát triển thương hiệu foxx chair</p>
          </div>
        </section>

        <section style={{ maxWidth: '780px', margin: '48px auto 100px', padding: '0 24px' }}>
          <div style={{ lineHeight: '2', fontSize: '1.6rem', color: '#555' }}>
            <p style={{ marginBottom: '24px' }}>
              <strong>foxx chair</strong> là thương hiệu nội thất cao cấp chuyên nghiên cứu và sáng tạo các giải pháp thư giãn linh hoạt, giao thoa giữa tay nghề thủ công mộc truyền thống và công nghệ gia công kim loại chính xác của Nhật Bản.
            </p>

            <table style={{ width: '100%', marginTop: '32px', borderCollapse: 'collapse' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ width: '220px', padding: '16px 0', fontWeight: '600', color: '#333' }}>Tên thương hiệu</th>
                  <td style={{ padding: '16px 0' }}>foxx chair (フォックスチェア)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '16px 0', fontWeight: '600', color: '#333' }}>Đơn vị vận hành</th>
                  <td style={{ padding: '16px 0' }}>Tập đoàn SANYEI Corporation</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '16px 0', fontWeight: '600', color: '#333' }}>Trụ sở chính</th>
                  <td style={{ padding: '16px 0' }}>4-1-2 Kotobuki, Taito-ku, Tokyo, Nhật Bản</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '16px 0', fontWeight: '600', color: '#333' }}>Lĩnh vực hoạt động</th>
                  <td style={{ padding: '16px 0' }}>Thiết kế, chế tác và phân phối nội thất cao cấp, ghế bành thư giãn xếp gọn, bàn trà và phụ kiện phong cách sống tối giản.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '16px 0', fontWeight: '600', color: '#333' }}>Giải thưởng tiêu biểu</th>
                  <td style={{ padding: '16px 0' }}>Giải thưởng thiết kế quốc tế Red Dot Design Award 2023 (Cộng hòa Liên bang Đức)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #eee' }}>
                  <th style={{ padding: '16px 0', fontWeight: '600', color: '#333' }}>Website chính thức</th>
                  <td style={{ padding: '16px 0' }}>https://foxxchair.jp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
