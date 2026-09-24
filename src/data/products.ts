import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'lounge-chair',
    name: 'Ghế Thư Giãn Xếp Gọn',
    subName: 'Lounge Chair',
    price: '99.000 ¥',
    priceNum: 99000,
    dimensions: 'Rộng khoảng 665 × Sâu khoảng 612 × Cao khoảng 700 mm',
    foldedDimensions: 'Rộng khoảng 265 × Sâu khoảng 612 × Cao khoảng 700 mm',
    seatHeight: 'Khoảng 320 mm',
    frontSeatHeight: 'Khoảng 360 mm',
    weight: 'Khoảng 9.5 kg',
    materials: '[Khung] Gỗ sồi tự nhiên (Oak), hợp kim nhôm, thép chịu lực\n[Chất liệu bọc] Da bò tự nhiên nguyên tấm cao cấp',
    colors: 'Màu gỗ tự nhiên / Màu đen tuyền',
    origin: 'Tiêu chuẩn chất lượng Nhật Bản',
    thumbnail: '/images/products/lounge-chair/thumb.jpg',
    sliderImages: Array.from({ length: 13 }, (_, i) => {
      const pad = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
      return `/images/products/lounge-chair/slider-${pad}.webp`;
    }),
    sizeImages: [
      '/images/products/lounge-chair/size1.webp',
      '/images/products/lounge-chair/size2.webp'
    ],
    shopUrl: 'https://foxxchair.theshop.jp/items/115257448',
    description: 'foxx chair là dòng ghế thư giãn lounge chair thực thụ có khả năng gập gọn tức thì. Cho dù đọc sách bên ô cửa sổ đón nắng sớm, hay thưởng thức những thước phim ấm cúng cùng gia đình tại phòng khách, bạn đều có thể tìm thấy phong cách thư thái mới mẻ và khác biệt.'
  },
  {
    id: 'lounge-table',
    name: 'Bàn Trà Xếp Gọn',
    subName: 'Lounge Table',
    price: '66.000 ¥',
    priceNum: 66000,
    dimensions: 'Rộng khoảng 650 × Sâu khoảng 650 × Cao khoảng 400 mm',
    foldedDimensions: 'Rộng khoảng 120 × Sâu khoảng 650 × Cao khoảng 400 mm',
    weight: 'Khoảng 7.5 kg',
    materials: '[Khung] Gỗ sồi đỏ tự nhiên (Red Oak), hợp kim nhôm cao cấp',
    colors: 'Màu gỗ tự nhiên / Màu đen tuyền',
    origin: 'Tiêu chuẩn chất lượng Nhật Bản',
    thumbnail: '/images/products/lounge-table/thumb.webp',
    sliderImages: Array.from({ length: 17 }, (_, i) => {
      const pad = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
      return `/images/products/lounge-table/slider-${pad}.webp`;
    }),
    sizeImages: [
      '/images/products/lounge-table/size1.webp',
      '/images/products/lounge-table/size2.webp'
    ],
    shopUrl: 'https://foxxchair.theshop.jp/items/115397102',
    description: 'Thiết kế bàn cà phê kết hợp hoàn hảo cùng ghế foxx chair, mặt bàn vuông vắn vững chãi nhưng có thể gấp phẳng lại thành độ dày chỉ 12cm trong vài giây.'
  },
  {
    id: 'side-table',
    name: 'Bàn Trà Phụ Cạnh Ghế',
    subName: 'Side Table',
    price: '55.000 ¥',
    priceNum: 55000,
    dimensions: 'Rộng khoảng 486 × Sâu khoảng 486 × Cao khoảng 560 mm',
    foldedDimensions: 'Rộng khoảng 120 × Sâu khoảng 650 × Cao khoảng 400 mm',
    weight: 'Khoảng 7.5 kg',
    materials: '[Khung] Gỗ sồi tự nhiên (Oak), hợp kim nhôm',
    colors: 'Màu gỗ tự nhiên / Màu đen tuyền',
    origin: 'Tiêu chuẩn chất lượng Nhật Bản',
    thumbnail: '/images/products/side-table/thumb.webp',
    sliderImages: Array.from({ length: 17 }, (_, i) => {
      const pad = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
      return `/images/products/side-table/slider-${pad}.webp`;
    }),
    sizeImages: [
      '/images/products/side-table/size1.webp',
      '/images/products/side-table/size2.webp'
    ],
    shopUrl: 'https://foxxchair.theshop.jp/items/115397218',
    description: 'Bàn phụ đặt bên cạnh ghế nghỉ hoặc đầu giường ngủ, chiều cao chuẩn mực 560mm giúp thuận tiện đặt ly nước, tách cà phê hay quyển sách đang đọc dở.'
  },
  {
    id: 'magazin-bag',
    name: 'Túi Đựng Tạp Chí Chuyên Dụng',
    subName: 'Magazine Bag',
    price: '11.000 ¥',
    priceNum: 11000,
    dimensions: 'Rộng khoảng 442 × Dày khoảng 5 × Cao khoảng 345 mm',
    weight: 'Khoảng 0.3 kg',
    materials: 'Sợi Polyester dệt mật độ cao kháng nước & chống bám bẩn',
    colors: 'Xám than thanh lịch (Charcoal Grey)',
    origin: 'Tiêu chuẩn chất lượng Nhật Bản',
    thumbnail: '/images/products/magazin-bag/thumb.webp',
    sliderImages: Array.from({ length: 3 }, (_, i) => {
      const pad = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
      return `/images/products/magazin-bag/slider-${pad}.webp`;
    }),
    sizeImages: [],
    shopUrl: 'https://foxxchair.theshop.jp/items/115397264',
    description: 'Phụ kiện treo tinh tế vào thành ghế hoặc tay vịn của foxx chair, giữ cho không gian nghỉ ngơi luôn gọn gàng và ngăn nắp.'
  }
];
