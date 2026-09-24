'use client';

import React, { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="pageloading" className={loaded ? 'loaded' : ''}>
      <div className="in">
        <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </div>
  );
}
