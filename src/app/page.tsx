'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/home/HeroSection';
import ConceptSection from '@/components/home/ConceptSection';
import FunctionSection from '@/components/home/FunctionSection';
import GallerySection from '@/components/home/GallerySection';
import ProductsSection from '@/components/home/ProductsSection';
import NewsSection from '@/components/home/NewsSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <FunctionSection />
        <GallerySection />
        <ProductsSection />
        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
