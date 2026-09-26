'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

interface OnlineStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnlineStoreModal({ isOpen, onClose }: OnlineStoreModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('overflow-hidden');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="store-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-modal-title"
    >
      <div
        className="store-modal-wrapper"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="store-modal-close"
          onClick={onClose}
          aria-label="Đóng"
        >
          &times;
        </button>

        {/* Modal Header */}
        <div className="store-modal-header">
          <h2 id="store-modal-title" className="store-modal-title">
            CỬA HÀNG TRỰC TUYẾN
          </h2>
          <p className="store-modal-subtitle">
            Tính năng sẽ sớm được ra mắt. Liên hệ với chúng tôi để tìm hiểu thêm về sản phẩm
          </p>
        </div>

        {/* Business Card Section */}
        <div className="store-card-container">
          {/* Logo Left */}
          <div className="store-card-logo">
            <Image
              src="/images/triace-logo-trans.png"
              alt="Triace Logo"
              width={125}
              height={125}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Content Right */}
          <div className="store-card-content">
            <h3 className="store-company-name">
              CÔNG TY TNHH TRIACE VIỆT NAM
            </h3>

            <div className="store-rep-name">
              Nguyễn Lê Đắc Duy
            </div>

            <div className="store-rep-position">
              Nhân viên kinh doanh
            </div>

            <div className="store-address-block">
              <div>Phòng 1202, tầng 2, tòa nhà New Wing</div>
              <div>Số 12 Mạc Đĩnh Chi, Phường Sài Gòn,</div>
              <div>TP. Hồ Chí Minh, Việt Nam</div>
            </div>

            <div className="store-contact-block">
              <div>
                <strong>MST:</strong> 0315940649
              </div>
              <div>
                <strong>ĐT:</strong>{' '}
                <a href="tel:+842838221263">
                  (84-28) 3822 1263
                </a>
              </div>
              <div>
                <strong>DĐ:</strong>{' '}
                <a href="tel:+84945391292" className="store-phone-bold">
                  84-(0) 945 391 292
                </a>
              </div>
              <div>
                <strong>E-mail:</strong>{' '}
                <a href="mailto:duy@triace-ltd.com" className="store-link-underline">
                  duy@triace-ltd.com
                </a>
              </div>
              <div>
                <strong>Trang web:</strong>{' '}
                <a
                  href="https://www.sanyeicorp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-link-underline"
                >
                  www.sanyeicorp.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button: ĐÃ HIỂU */}
        <div className="store-modal-footer">
          <button
            type="button"
            className="store-btn-understood"
            onClick={onClose}
          >
            ĐÃ HIỂU
          </button>
        </div>
      </div>

      <style jsx>{`
        .store-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 9999;
          background-color: rgba(30, 30, 30, 0.72);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          overflow-y: auto;
          animation: storeFadeIn 0.25s ease-out forwards;
        }

        .store-modal-wrapper {
          position: relative;
          background: #ffffff;
          border-radius: 16px;
          max-width: 820px;
          width: 100%;
          padding: 44px 44px 38px;
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.28);
          animation: storeScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-sizing: border-box;
          margin: auto;
        }

        .store-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #f1f1f1;
          color: #555555;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, transform 0.15s, color 0.2s;
        }

        .store-modal-close:hover {
          background-color: #e2e2e2;
          color: #000000;
          transform: scale(1.08);
        }

        .store-modal-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .store-modal-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.4rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #000000;
          margin: 0 0 8px 0;
        }

        .store-modal-subtitle {
          font-family: 'Poppins', sans-serif;
          font-size: 1.45rem;
          color: #555555;
          margin: 0;
        }

        .store-card-container {
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 36px 40px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          font-family: 'Poppins', sans-serif;
          color: #000000;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 36px;
          box-sizing: border-box;
        }

        .store-card-logo {
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 6px;
        }

        .store-card-content {
          flex: 1;
          min-width: 0;
        }

        .store-company-name {
          font-family: 'Poppins', sans-serif;
          font-size: 1.9rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #000000;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .store-rep-name {
          font-family: 'Poppins', sans-serif;
          font-size: 2.4rem;
          font-style: italic;
          fontWeight: 500;
          color: #000000;
          margin: 0 0 2px 0;
          line-height: 1.3;
        }

        .store-rep-position {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          color: #222222;
          font-weight: 400;
          margin-bottom: 24px;
        }

        .store-address-block {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.45rem;
          color: #000000;
          line-height: 1.7;
        }

        .store-contact-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.45rem;
          color: #000000;
          line-height: 1.7;
        }

        .store-contact-block a {
          color: #000000;
          text-decoration: none;
        }

        .store-phone-bold {
          font-weight: 600;
        }

        .store-link-underline {
          text-decoration: underline !important;
        }

        .store-modal-footer {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }

        .store-btn-understood {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          padding: 14px 48px;
          background-color: #000000;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transition: opacity 0.2s ease, transform 0.15s ease;
        }

        .store-btn-understood:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        .store-btn-understood:active {
          transform: translateY(1px);
        }

        @keyframes storeFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes storeScaleUp {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media screen and (max-width: 640px) {
          .store-modal-wrapper {
            padding: 32px 20px 28px;
          }

          .store-modal-title {
            font-size: 2rem;
          }

          .store-card-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 24px 16px !important;
            gap: 20px !important;
          }

          .store-card-content {
            text-align: left !important;
            width: 100% !important;
          }

          .store-btn-understood {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
