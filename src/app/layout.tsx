import type { Metadata } from 'next';
import '@/styles/globals.css';
import PageLoader from '@/components/common/PageLoader';
import FloatingContact from '@/components/common/FloatingContact';

export const metadata: Metadata = {
  title: 'foxx chair - Định chuẩn giá trị thư giãn mới',
  description: 'foxx chair là dòng ghế xếp thư giãn cao cấp phong cách Nhật Bản. Thiết kế cơ chế gập gọn tức thì giúp bạn kiến tạo không gian thư thái riêng biệt mọi nơi trong ngôi nhà.',
  icons: {
    icon: '/icons/logo_bk.svg',
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
      </head>
      <body>
        <PageLoader />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
