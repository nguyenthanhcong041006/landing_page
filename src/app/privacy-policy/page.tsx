'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header isUnderPage={true} />
      <main className="under">
        <section className="contact-hd">
          <div className="tl-mds">
            <h2>CHÍNH SÁCH BẢO MẬT THÔNG TIN</h2>
            <p>Cam kết bảo vệ quyền riêng tư &amp; dữ liệu cá nhân của quý khách hàng</p>
          </div>
        </section>

        <section style={{ maxWidth: '780px', margin: '48px auto 100px', padding: '0 24px', lineHeight: '1.9', fontSize: '1.5rem', color: '#555' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '12px' }}>1. Mục đích thu thập thông tin</h3>
          <p style={{ marginBottom: '24px' }}>
            Chúng tôi chỉ thu thập các thông tin cá nhân (như họ tên, email, số điện thoại, địa chỉ) khi quý khách chủ động gửi thông tin liên hệ hoặc yêu cầu hỗ trợ tư vấn sản phẩm. Các thông tin này chỉ được sử dụng để phản hồi, cung cấp dịch vụ hậu mãi và thông tin bảo hành chính hãng.
          </p>

          <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '12px' }}>2. Phạm vi sử dụng thông tin</h3>
          <p style={{ marginBottom: '24px' }}>
            Thông tin của quý khách được lưu trữ bảo mật trong hệ thống quản lý nội bộ của chúng tôi. Chúng tôi cam kết tuyệt đối không chia sẻ, mua bán hay chuyển giao thông tin cá nhân cho bên thứ ba, trừ trường hợp có yêu cầu từ cơ quan pháp luật có thẩm quyền theo quy định.
          </p>

          <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '12px' }}>3. Bảo mật và quyền của người dùng</h3>
          <p style={{ marginBottom: '24px' }}>
            Quý khách có toàn quyền yêu cầu chúng tôi kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ các dữ liệu thông tin cá nhân đã lưu trữ bất cứ lúc nào thông qua việc liên hệ với bộ phận chăm sóc khách hàng.
          </p>

          <h3 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '12px' }}>4. Thay đổi chính sách</h3>
          <p>
            Chính sách bảo mật này có thể được cập nhật định kỳ nhằm phù hợp với các quy định pháp luật hiện hành và sự phát triển của dịch vụ. Mọi điều chỉnh sẽ được công bố công khai trên trang web chính thức.
          </p>
        </section>
      </main>
      <Footer isUnder={true} />
    </>
  );
}
