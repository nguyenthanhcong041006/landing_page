'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import { Product } from '@/types';
import ProductModal from './ProductModal';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="04" className="top-products">
        <div className="inner-min">
          <h2 className="fu06">BỘ SƯU TẬP SẢN PHẨM</h2>
          <ul className="top-products-list fu07">
            {products.map(item => (
              <li
                key={item.id}
                onClick={() => handleOpenModal(item)}
                title={`Nhấn để xem chi tiết ${item.name}`}
              >
                <div className="img">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    width={400}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="txt">
                  <div className="name">
                    <h3>
                      <span>foxx Chair</span>
                      {item.subName}
                    </h3>
                    <p className="price">
                      {item.price}
                      <span>(Đã bao gồm thuế)</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
