import type { Metadata } from 'next';
import '@/styles/globals.css';
import PageLoader from '@/components/common/PageLoader';
import FloatingContact from '@/components/common/FloatingContact';
import ScrollReveal from '@/components/common/ScrollReveal';

export const metadata: Metadata = {
  title: 'foxx chair - Định chuẩn giá trị thư giãn mới',
  description: 'foxx chair là dòng ghế xếp thư giãn cao cấp phong cách Nhật Bản. Thiết kế cơ chế gập gọn tức thì giúp bạn kiến tạo không gian thư thái riêng biệt mọi nơi trong ngôi nhà.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageLoader />
        <ScrollReveal />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
