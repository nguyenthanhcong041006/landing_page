'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Target elements: classes with fu*, scroll-reveal, business-card-container, shop-card, news-list1, etc.
    const selector = '.scroll-reveal, [class*="fu"], .fu10, [data-reveal], .reveal-on-scroll, .business-card-container, .shop-card, .news-list1';
    const elements = document.querySelectorAll(selector);

    if (elements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.05,
      }
    );

    elements.forEach(el => {
      // Check if element is already within or near viewport on mount
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        setTimeout(() => el.classList.add('is-visible'), 50);
      } else {
        observer.observe(el);
      }
    });

    // Safety fallback: ensure all elements become visible after 1.2s
    const fallbackTimer = setTimeout(() => {
      elements.forEach(el => el.classList.add('is-visible'));
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [pathname]);

  return null;
}
