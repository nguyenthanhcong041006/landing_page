'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phoneticName: '',
    zipCode: '',
    province: '',
    district: '',
    street: '',
    building: '',
    email: '',
    phone: '',
    message: '',
    agreePolicy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePolicy) {
      alert('Vui lòng đánh dấu đồng ý với Chính sách bảo mật thông tin cá nhân.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Header isUnderPage={true} />
      <main className="under">
        <section className="contact-hd">
          <div className="tl-mds">
            <h2>LIÊN HỆ &amp; TƯ VẤN</h2>
            <p>Hòm thư tiếp nhận yêu cầu &amp; giải đáp thắc mắc</p>
          </div>
        </section>

        <section className="contact-wrap">
          <div className="inner" style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
            {submitted ? (
              <div
                style={{
                  padding: '48px 24px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid #e0e0e0'
                }}
              >
                <h3 style={{ fontSize: '2.4rem', color: '#222', marginBottom: '16px' }}>
                  Cảm ơn quý khách đã gửi thông tin liên hệ!
                </h3>
                <p style={{ fontSize: '1.6rem', color: '#555', lineHeight: '1.8' }}>
                  Chúng tôi đã tiếp nhận yêu cầu từ quý khách và sẽ liên hệ phản hồi trong vòng 2 ngày làm việc.
                  <br />
                  Kính chúc quý khách một ngày tràn ngập niềm vui và bình an!
                </p>
                <div style={{ marginTop: '32px' }}>
                  <Link href="/" className="btn-next">
                    Về Trang Chủ
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '1.5rem', color: '#555', lineHeight: '1.8' }}>
                  Quý khách vui lòng gửi thông tin theo biểu mẫu dưới đây.
                  <br />
                  Sau khi xác nhận thông tin, đội ngũ chăm sóc khách hàng của foxx chair sẽ phản hồi trong vòng 2 ngày làm việc.
                </p>
                <p style={{ fontSize: '1.4rem', color: '#777', marginTop: '16px', lineHeight: '1.6' }}>
                  Nếu chưa thấy thư phản hồi, xin vui lòng kiểm tra hộp thư rác (Spam) hoặc đảm bảo địa chỉ hộp thư có thể nhận email từ tên miền <strong>@foxxchair.jp</strong>.
                </p>
                <p style={{ fontSize: '1.4rem', color: '#e15554', marginTop: '16px', fontWeight: '500' }}>
                  ※ Các mục có dấu sao (*) là bắt buộc.
                </p>

                <form onSubmit={handleSubmit} style={{ marginTop: '32px' }}>
                  <dl className="form-wrap">
                    <dt>Họ và tên *</dt>
                    <dd>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ví dụ: Nguyễn Văn A"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Cách xưng hô / Phiên âm *</dt>
                    <dd>
                      <input
                        type="text"
                        name="phoneticName"
                        required
                        placeholder="Ví dụ: Anh Nguyễn / Chị An"
                        value={formData.phoneticName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Mã bưu điện / Mã vùng *</dt>
                    <dd>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        placeholder="Ví dụ: 700000"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="form-input"
                        style={{ maxWidth: '200px' }}
                      />
                    </dd>

                    <dt>Tỉnh / Thành phố *</dt>
                    <dd>
                      <input
                        type="text"
                        name="province"
                        required
                        placeholder="Ví dụ: TP. Hồ Chí Minh / Hà Nội"
                        value={formData.province}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Quận / Huyện *</dt>
                    <dd>
                      <input
                        type="text"
                        name="district"
                        required
                        placeholder="Ví dụ: Quận 1"
                        value={formData.district}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Địa chỉ đường / Số nhà *</dt>
                    <dd>
                      <input
                        type="text"
                        name="street"
                        required
                        placeholder="Ví dụ: 123 Đường Lê Lợi"
                        value={formData.street}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Tên tòa nhà / Căn hộ (Nếu có)</dt>
                    <dd>
                      <input
                        type="text"
                        name="building"
                        placeholder="Ví dụ: Tòa nhà Landmark, Tầng 15"
                        value={formData.building}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Địa chỉ Email *</dt>
                    <dd>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Số điện thoại *</dt>
                    <dd>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Ví dụ: 0901234567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt>Nội dung câu hỏi / Yêu cầu tư vấn *</dt>
                    <dd>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Xin vui lòng nhập thông tin quý khách cần tư vấn hoặc báo giá số lượng lớn..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </dd>

                    <dt style={{ marginTop: '24px' }}>Bảo mật thông tin cá nhân *</dt>
                    <dd style={{ marginTop: '12px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                        <input
                          type="checkbox"
                          name="agreePolicy"
                          required
                          checked={formData.agreePolicy}
                          onChange={handleChange}
                          style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '1.4rem', color: '#555' }}>
                          Tôi đã đọc và hoàn toàn đồng ý với{' '}
                          <Link href="/privacy-policy" target="_blank" style={{ textDecoration: 'underline', color: '#007feb' }}>
                            Chính sách bảo mật thông tin
                          </Link>
                        </span>
                      </label>
                    </dd>
                  </dl>

                  <button type="submit" className="submit-btn">
                    Gửi Thông Tin Liên Hệ
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
