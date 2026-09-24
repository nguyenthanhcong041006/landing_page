# Foxxchair Vietnam - Landing Page & Giới Thiệu Sản Phẩm

Website landing page giới thiệu sản phẩm nội thất cao cấp **foxxchair** (phiên bản Việt hóa từ Nhật Bản), được xây dựng bằng **Next.js 14 (App Router)**, **TypeScript** và **Vanilla CSS**.

---

## 📋 Mục lục
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Cài đặt và chạy dự án](#-cài-đặt-và-chạy-dự-án)
  - [1. Cài đặt thư viện](#1-cài-đặt-thư-viện)
  - [2. Chạy môi trường Development](#2-chạy-môi-trường-development)
  - [3. Build & chạy môi trường Production](#3-build--chạy-môi-trường-production)
- [Các lệnh có sẵn (Scripts)](#-các-lệnh-có-sẵn-scripts)
- [Tải tài nguyên Media](#-tải-tài-nguyên-media)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Các tính năng nổi bật](#-các-tính-năng-nổi-bật)

---

## 💻 Yêu cầu hệ thống

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt:
* **Node.js**: Phiên bản `18.17.0` trở lên (Khuyến nghị bản LTS như `v20.x` hoặc `v22.x`).
* **Trình quản lý gói**: `npm` (đi kèm Node.js), `yarn` hoặc `pnpm`.
* Trình duyệt web hiện đại (Chrome, Edge, Firefox, Safari).

Kiểm tra phiên bản Node.js và npm bằng terminal:
```bash
node -v
npm -v
```

---

## 🚀 Cài đặt và chạy dự án

### 1. Cài đặt thư viện
Mở terminal tại thư mục gốc của dự án (`web_japan_to_viet`) và chạy lệnh:

```bash
npm install
```

### 2. Chạy môi trường Development
Để khởi động máy chủ thử nghiệm cục bộ với tính năng Hot Reload:

```bash
npm run dev
```

Sau khi terminal hiển thị:
```text
  ▲ Next.js 14.2.35
  - Local:        http://localhost:3000
```
Mở trình duyệt và truy cập vào đường dẫn: **[http://localhost:3000](http://localhost:3000)**

### 3. Build & chạy môi trường Production
Trước khi đưa lên máy chủ hoặc kiểm tra tối ưu hóa production:

1. **Biên dịch dự án:**
   ```bash
   npm run build
   ```
2. **Khởi chạy ứng dụng:**
   ```bash
   npm run start
   ```
Ứng dụng sẽ chạy tại cổng mặc định `http://localhost:3000`.

---

## 🛠 Các lệnh có sẵn (Scripts)

| Lệnh | Ý nghĩa |
| :--- | :--- |
| `npm run dev` | Khởi chạy server phát triển trên `localhost:3000` (hỗ trợ Hot Module Replacement). |
| `npm run build` | Biên dịch và tối ưu mã nguồn cho môi trường production. |
| `npm run start` | Chạy ứng dụng production sau khi đã `build`. |
| `npm run lint` | Kiểm tra cú pháp và quy chuẩn mã nguồn (ESLint). |

---

## 📦 Tải tài nguyên Media (Tùy chọn)

Dự án có sẵn script tự động tải hình ảnh, video và icons gốc từ website chính:

* Sử dụng Node.js:
  ```bash
  node scripts/download-assets.mjs
  ```
* Hoặc sử dụng PowerShell (trên Windows):
  ```powershell
  powershell -ExecutionPolicy Bypass -File scripts/download.ps1
  ```

---

## 📁 Cấu trúc thư mục

```text
web_japan_to_viet/
├── public/                     # Tài nguyên tĩnh
│   ├── fonts/                  # Phông chữ nội bộ
│   ├── icons/                  # Các biểu tượng SVG
│   ├── images/                 # Hình ảnh sản phẩm, gallery, tin tức
│   │   ├── gallery/            # Ảnh slider triển lãm / không gian
│   │   ├── news/               # Ảnh bìa bài viết tin tức
│   │   └── products/           # Ảnh chi tiết sản phẩm và kích thước
│   └── videos/                 # Video banner và hướng dẫn gấp ghế
├── src/
│   ├── app/                    # Next.js App Router (Các trang chính)
│   │   ├── company/            # Trang giới thiệu công ty
│   │   ├── contact/            # Trang liên hệ
│   │   ├── news/               # Trang danh sách & chi tiết tin tức
│   │   ├── privacy-policy/     # Trang chính sách bảo mật
│   │   ├── shop-list/          # Trang danh sách cửa hàng & showroom
│   │   ├── layout.tsx          # Layout chung toàn trang
│   │   └── page.tsx            # Trang chủ (Home Page)
│   ├── components/             # Các React Components tái sử dụng
│   │   ├── common/             # Header, Footer, Navigation, Modal
│   │   └── home/               # HeroSection, ConceptSection, GallerySection,...
│   ├── data/                   # Dữ liệu tĩnh (danh sách sản phẩm, tin tức, cửa hàng)
│   ├── styles/                 # Toàn bộ CSS (globals.css, typography, layout,...)
│   └── types/                  # TypeScript interface và types định nghĩa
├── scripts/                    # Scripts tiện ích tải assets tự động
├── next.config.js              # Cấu hình Next.js
├── package.json                # Quản lý dependencies và scripts
└── tsconfig.json               # Cấu hình TypeScript
```

---

## ✨ Các tính năng nổi bật

1. **Hero Video Banner**: Video toàn màn hình tự động phát với hiệu ứng chuyển động mượt mà.
2. **Concept & How-To Section**: Giới thiệu triết lý không gian thứ 3 (*Third Place*) kết hợp video hướng dẫn gấp gọn.
3. **Gallery Slider**: Băng chuyền hình ảnh vô cực (Infinite Marquee) tự động chạy lặp liền mạch.
4. **Modal Chi Tiết Sản Phẩm**: Xem thư viện hình ảnh chi tiết, thông số kỹ thuật (kích thước, tải trọng, chất liệu gỗ sồi/da tự nhiên).
5. **Danh sách Tin tức & Cửa hàng**: Hỗ trợ xem thông tin showroom kèm bản đồ vị trí chỉ dẫn.
6. **Responsive Đa Nền Tảng**: Hiển thị tối ưu và đồng bộ trên cả PC, Tablet và Mobile.
