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

        <section className="contact-wrap">
          <div className="inner" style={{ maxWidth: '640px' }}>
            <p style={{ marginBottom: '24px' }}>
              <strong>foxx chair</strong> là thương hiệu nội thất cao cấp chuyên nghiên cứu và sáng tạo các giải pháp thư giãn linh hoạt, giao thoa giữa tay nghề thủ công mộc truyền thống và công nghệ gia công cơ khí chính xác của Nhật Bản.
            </p>

            <table style={{ width: '100%', marginTop: '32px' }}>
              <tbody>
                <tr>
                  <th style={{ width: '140px', padding: '16px 0', borderBottom: '1px #555 solid' }}>Tên thương hiệu</th>
                  <td style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>foxx chair (フォックスチェア)</td>
                </tr>
                <tr>
                  <th style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Đơn vị vận hành</th>
                  <td style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Tập đoàn SANYEI Corporation</td>
                </tr>
                <tr>
                  <th style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Trụ sở chính</th>
                  <td style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>4-1-2 Kotobuki, Taito-ku, Tokyo, Nhật Bản</td>
                </tr>
                <tr>
                  <th style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Lĩnh vực hoạt động</th>
                  <td style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Thiết kế, chế tác và phân phối nội thất cao cấp, ghế bành thư giãn xếp gọn, bàn trà và phụ kiện phong cách sống tối giản.</td>
                </tr>
                <tr>
                  <th style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Giải thưởng tiêu biểu</th>
                  <td style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Giải thưởng thiết kế quốc tế Red Dot Design Award 2023 &amp; iF DESIGN AWARD 2023 (Cộng hòa Liên bang Đức)</td>
                </tr>
                <tr>
                  <th style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>Website chính thức</th>
                  <td style={{ padding: '16px 0', borderBottom: '1px #555 solid' }}>https://foxxchair.jp</td>
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
