export interface Product {
  id: string;
  name: string;
  subName: string;
  price: string;
  priceNum: number;
  dimensions: string;
  foldedDimensions?: string;
  seatHeight?: string;
  frontSeatHeight?: string;
  weight: string;
  materials: string;
  colors: string;
  origin: string;
  thumbnail: string;
  sliderImages: string[];
  sizeImages: string[];
  shopUrl: string;
  description?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
  excerpt?: string;
  tags?: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  postalCode: string;
  address: string;
  phone: string;
  url: string;
  area: string;
}
