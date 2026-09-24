import fs from 'fs';
import path from 'path';
import https from 'https';

const baseDir = process.cwd();

const assets = [
  // Videos
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/movie/foxxchair_imageMUTE_fin2.mp4',
    dest: 'public/videos/hero-banner.mp4'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/movie/foxxchair_howtoMUTE_fin2.mp4',
    dest: 'public/videos/howto-fold.mp4'
  },
  // Posters
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/hero_thm.jpg',
    dest: 'public/images/hero_thm.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/howto_thm.png',
    dest: 'public/images/howto_thm.png'
  },
  // SVGs & Icons
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/logo.svg',
    dest: 'public/icons/logo.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/logo_bk.svg',
    dest: 'public/icons/logo_bk.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_cart.svg',
    dest: 'public/icons/icon_cart.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_play.svg',
    dest: 'public/icons/icon_play.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_mail.svg',
    dest: 'public/icons/icon_mail.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_youtube.svg',
    dest: 'public/icons/icon_youtube.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_in.svg',
    dest: 'public/icons/icon_in.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_next.svg',
    dest: 'public/icons/icon_next.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/slider_prev.svg',
    dest: 'public/icons/slider_prev.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/slider_next.svg',
    dest: 'public/icons/slider_next.svg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/modal_close.svg',
    dest: 'public/icons/modal_close.svg'
  },
  // Gallery
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/08/7_foxxchair_AI%E9%80%95%E6%BB%93%E3%83%BBimage_250625-scaled.jpg',
    dest: 'public/images/gallery/gallery-1.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/08/foxxchair_AI%E9%80%95%E6%BB%93%E3%83%BBimage_250702-13-2-e1754029605289.jpg',
    dest: 'public/images/gallery/gallery-2.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/08/1_foxxchair_AI%E9%80%95%E6%BB%93%E3%83%BBimage_250625.jpg',
    dest: 'public/images/gallery/gallery-3.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/08/5_foxxchair_AI%E9%80%95%E6%BB%93%E3%83%BBimage_250625-scaled.jpg',
    dest: 'public/images/gallery/gallery-4.jpg'
  },
  // Product Thumbs
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/10/%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-56125-1-400x400.jpg',
    dest: 'public/images/products/lounge-chair/thumb.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_17-400x400.webp',
    dest: 'public/images/products/lounge-table/thumb.webp'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/10/side-table17-400x400.webp',
    dest: 'public/images/products/side-table/thumb.webp'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2025/10/magazin-bag01-400x400.webp',
    dest: 'public/images/products/magazin-bag/thumb.webp'
  },
  // News Images
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2026/02/65C08DCC-CF5A-40B4-A8A6-618DA911C9A0-400x229.jpg',
    dest: 'public/images/news/news-1.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2023/07/0726%E6%8A%95%E7%A8%BF-hiraya%E3%81%95%E3%82%93-400x267.jpg',
    dest: 'public/images/news/news-2.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2023/06/foxx-chair-online-shop-picture-400x281.jpg',
    dest: 'public/images/news/news-3.jpg'
  },
  {
    url: 'https://foxxchair.jp/wp-content/uploads/2023/05/PD2023_RD-400x234.png',
    dest: 'public/images/news/news-4.png'
  }
];

// Add Lounge Chair Slider (01-13) and size images
for (let i = 1; i <= 13; i++) {
  const pad = i < 10 ? `0${i}` : `${i}`;
  assets.push({
    url: `https://foxxchair.jp/wp-content/uploads/2025/10/lounge-chair${pad}.webp`,
    dest: `public/images/products/lounge-chair/slider-${pad}.webp`
  });
}
assets.push({
  url: 'https://foxxchair.jp/wp-content/uploads/2025/10/lounge-chair-size1.webp',
  dest: 'public/images/products/lounge-chair/size1.webp'
});
assets.push({
  url: 'https://foxxchair.jp/wp-content/uploads/2025/10/lounge-chair-size2.webp',
  dest: 'public/images/products/lounge-chair/size2.webp'
});

// Lounge Table Slider (01-17) and size images
for (let i = 1; i <= 17; i++) {
  const pad = i < 10 ? `0${i}` : `${i}`;
  assets.push({
    url: `https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_${pad}.webp`,
    dest: `public/images/products/lounge-table/slider-${pad}.webp`
  });
}
assets.push({
  url: 'https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_size1.webp',
  dest: 'public/images/products/lounge-table/size1.webp'
});
assets.push({
  url: 'https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_size2.webp',
  dest: 'public/images/products/lounge-table/size2.webp'
});

// Side Table Slider (01-17) and size images
for (let i = 1; i <= 17; i++) {
  const pad = i < 10 ? `0${i}` : `${i}`;
  assets.push({
    url: `https://foxxchair.jp/wp-content/uploads/2025/10/side-table${pad}.webp`,
    dest: `public/images/products/side-table/slider-${pad}.webp`
  });
}
assets.push({
  url: 'https://foxxchair.jp/wp-content/uploads/2025/10/side-table-size01.webp',
  dest: 'public/images/products/side-table/size1.webp'
});
assets.push({
  url: 'https://foxxchair.jp/wp-content/uploads/2025/10/side-table-size02.webp',
  dest: 'public/images/products/side-table/size2.webp'
});

// Magazine Bag Slider (01-03)
for (let i = 1; i <= 3; i++) {
  const pad = i < 10 ? `0${i}` : `${i}`;
  assets.push({
    url: `https://foxxchair.jp/wp-content/uploads/2025/10/magazin-bag${pad}.webp`,
    dest: `public/images/products/magazin-bag/slider-${pad}.webp`
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const fullDest = path.join(baseDir, destPath);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(fullDest) && fs.statSync(fullDest).size > 0) {
      console.log(`Already exists: ${destPath}`);
      return resolve();
    }

    console.log(`Downloading: ${url} -> ${destPath}`);
    const file = fs.createWriteStream(fullDest);

    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://foxxchair.jp/'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(fullDest);
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(fullDest)) fs.unlinkSync(fullDest);
        console.warn(`Failed (${res.statusCode}): ${url}`);
        return resolve(); // don't abort all
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved: ${destPath}`);
        resolve();
      });
    });

    req.on('error', (err) => {
      file.close();
      if (fs.existsSync(fullDest)) fs.unlinkSync(fullDest);
      console.warn(`Error on ${url}: ${err.message}`);
      resolve();
    });

    req.setTimeout(60000, () => {
      req.destroy();
      file.close();
      if (fs.existsSync(fullDest)) fs.unlinkSync(fullDest);
      console.warn(`Timeout downloading ${url}`);
      resolve();
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  // Run with concurrency limit of 5
  const concurrency = 5;
  for (let i = 0; i < assets.length; i += concurrency) {
    const batch = assets.slice(i, i + concurrency);
    await Promise.all(batch.map(item => downloadFile(item.url, item.dest)));
  }
  console.log('All downloads completed!');
}

run();
