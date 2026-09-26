'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function ContactPage() {

  return (
    <>
      <Header isUnderPage={true} />

      <main className="under" style={{ backgroundColor: '#ffffff', minHeight: '85vh', paddingBottom: '120px' }}>
        {/* Page Header */}
        <section className="contact-hd">
          <div className="tl-mds">
            <h2 style={{ color: '#000000', fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
              LIÊN HỆ &amp; TƯ VẤN
            </h2>
            <p style={{ color: '#444444', fontFamily: 'Poppins, sans-serif', fontSize: '1.5rem', marginTop: '10px' }}>
              Thông tin liên hệ &amp; Đại diện kinh doanh foxx chair tại Việt Nam
            </p>
          </div>
        </section>

        {/* Business Card Section */}
        <section style={{ maxWidth: '780px', margin: '40px auto 0', padding: '0 20px' }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '44px 52px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
              fontFamily: '"Poppins", sans-serif',
              color: '#000000',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: '40px',
            }}
            className="business-card-container"
          >
            {/* Logo Left */}
            <div
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                paddingTop: '6px',
              }}
            >
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
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Company Name */}
              <h3
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '1.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  color: '#000000',
                  margin: '0 0 14px 0',
                  lineHeight: 1.35,
                }}
              >
                CÔNG TY TNHH TRIACE VIỆT NAM
              </h3>

              {/* Name */}
              <div
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '2.4rem',
                  fontStyle: 'italic',
                  fontWeight: 500,
                  color: '#000000',
                  margin: '0 0 4px 0',
                  lineHeight: 1.3,
                }}
              >
                Nguyễn Lê Đắc Duy
              </div>

              {/* Position */}
              <div
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '1.5rem',
                  color: '#222222',
                  fontWeight: 400,
                  marginBottom: '26px',
                }}
              >
                Nhân viên kinh doanh
              </div>

              {/* Address Block */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  marginBottom: '16px',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '1.45rem',
                  color: '#000000',
                  lineHeight: '1.7',
                }}
              >
                <div>Phòng 1202, tầng 2, tòa nhà New Wing</div>
                <div>Số 12 Mạc Đĩnh Chi, Phường Sài Gòn,</div>
                <div>TP. Hồ Chí Minh, Việt Nam</div>
              </div>

              {/* Contact Info Block */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: '1.45rem',
                  color: '#000000',
                  lineHeight: '1.7',
                }}
              >
                <div>
                  <strong>MST:</strong> 0315940649
                </div>
                <div>
                  <strong>ĐT:</strong>{' '}
                  <a
                    href="tel:+842838221263"
                    style={{ color: '#000000', textDecoration: 'none' }}
                  >
                    (84-28) 3822 1263
                  </a>
                </div>
                <div>
                  <strong>DĐ:</strong>{' '}
                  <a
                    href="tel:+84945391292"
                    style={{ color: '#000000', textDecoration: 'none', fontWeight: 600 }}
                  >
                    84-(0) 945 391 292
                  </a>
                </div>
                <div>
                  <strong>E-mail:</strong>{' '}
                  <a
                    href="mailto:duy@triace-ltd.com"
                    style={{ color: '#000000', textDecoration: 'underline' }}
                  >
                    duy@triace-ltd.com
                  </a>
                </div>
                <div>
                  <strong>Trang web:</strong>{' '}
                  <a
                    href="https://www.sanyeicorp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000000', textDecoration: 'underline' }}
                  >
                    www.sanyeicorp.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button: QUAY LẠI TRANG CHỦ */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '36px',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                minWidth: '240px',
                padding: '14px 44px',
                backgroundColor: '#000000',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontFamily: '"Poppins", sans-serif',
                fontSize: '1.5rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                transition: 'opacity 0.2s ease, transform 0.15s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseOut={e => (e.currentTarget.style.opacity = '1')}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>QUAY LẠI TRANG CHỦ</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer isUnder={true} />

      {/* Responsive Style */}
      <style jsx global>{`
        @media screen and (max-width: 640px) {
          .business-card-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 28px 20px !important;
            gap: 20px !important;
          }
          .business-card-container > div:last-child {
            text-align: left !important;
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
