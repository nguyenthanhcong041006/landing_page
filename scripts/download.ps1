$ErrorActionPreference = "Continue"

$assets = @(
    # Icons
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/logo.svg"; dest = "public/icons/logo.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/logo_bk.svg"; dest = "public/icons/logo_bk.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_cart.svg"; dest = "public/icons/icon_cart.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_play.svg"; dest = "public/icons/icon_play.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_mail.svg"; dest = "public/icons/icon_mail.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_youtube.svg"; dest = "public/icons/icon_youtube.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_in.svg"; dest = "public/icons/icon_in.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/icon_next.svg"; dest = "public/icons/icon_next.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/slider_prev.svg"; dest = "public/icons/slider_prev.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/slider_next.svg"; dest = "public/icons/slider_next.svg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/svg/modal_close.svg"; dest = "public/icons/modal_close.svg" },

    # Posters
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/hero_thm.jpg"; dest = "public/images/hero_thm.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/themes/wp-foxx/assets/images/howto_thm.png"; dest = "public/images/howto_thm.png" },

    # Gallery
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/08/7_foxxchair_AI%E9%81%BD%E6%B6%BC%E3%83%BBimage_250625-scaled.jpg"; dest = "public/images/gallery/gallery-1.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/08/foxxchair_AI%E9%81%BD%E6%B6%BC%E3%83%BBimage_250702-13-2-e1754029605289.jpg"; dest = "public/images/gallery/gallery-2.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/08/1_foxxchair_AI%E9%81%BD%E6%B6%BC%E3%83%BBimage_250625.jpg"; dest = "public/images/gallery/gallery-3.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/08/5_foxxchair_AI%E9%81%BD%E6%B6%BC%E3%83%BBimage_250625-scaled.jpg"; dest = "public/images/gallery/gallery-4.jpg" },

    # Product Thumbs
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-56125-1-400x400.jpg"; dest = "public/images/products/lounge-chair/thumb.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_17-400x400.webp"; dest = "public/images/products/lounge-table/thumb.webp" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/side-table17-400x400.webp"; dest = "public/images/products/side-table/thumb.webp" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/magazin-bag01-400x400.webp"; dest = "public/images/products/magazin-bag/thumb.webp" },

    # News
    @{ url = "https://foxxchair.jp/wp-content/uploads/2026/02/65C08DCC-CF5A-40B4-A8A6-618DA911C9A0-400x229.jpg"; dest = "public/images/news/news-1.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2023/07/0726%E6%8A%95%E7%A8%BF-hiraya%E3%81%95%E3%82%93-400x267.jpg"; dest = "public/images/news/news-2.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2023/06/foxx-chair-online-shop-picture-400x281.jpg"; dest = "public/images/news/news-3.jpg" },
    @{ url = "https://foxxchair.jp/wp-content/uploads/2023/05/PD2023_RD-400x234.png"; dest = "public/images/news/news-4.png" }
)

# Lounge Chair (01 to 13)
for ($i = 1; $i -le 13; $i++) {
    $pad = if ($i -lt 10) { "0$i" } else { "$i" }
    $assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-chair$pad.webp"; dest = "public/images/products/lounge-chair/slider-$pad.webp" }
}
$assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-chair-size1.webp"; dest = "public/images/products/lounge-chair/size1.webp" }
$assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-chair-size2.webp"; dest = "public/images/products/lounge-chair/size2.webp" }

# Lounge Table (01 to 17)
for ($i = 1; $i -le 17; $i++) {
    $pad = if ($i -lt 10) { "0$i" } else { "$i" }
    $assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_$pad.webp"; dest = "public/images/products/lounge-table/slider-$pad.webp" }
}
$assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_size1.webp"; dest = "public/images/products/lounge-table/size1.webp" }
$assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/lounge-table_size2.webp"; dest = "public/images/products/lounge-table/size2.webp" }

# Side Table (01 to 17)
for ($i = 1; $i -le 17; $i++) {
    $pad = if ($i -lt 10) { "0$i" } else { "$i" }
    $assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/side-table$pad.webp"; dest = "public/images/products/side-table/slider-$pad.webp" }
}
$assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/side-table-size01.webp"; dest = "public/images/products/side-table/size1.webp" }
$assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/side-table-size02.webp"; dest = "public/images/products/side-table/size2.webp" }

# Magazine Bag (01 to 03)
for ($i = 1; $i -le 3; $i++) {
    $pad = if ($i -lt 10) { "0$i" } else { "$i" }
    $assets += @{ url = "https://foxxchair.jp/wp-content/uploads/2025/10/magazin-bag$pad.webp"; dest = "public/images/products/magazin-bag/slider-$pad.webp" }
}

$webclient = New-Object System.Net.WebClient
$webclient.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
$webclient.Headers.Add("Referer", "https://foxxchair.jp/")

Write-Host "Total assets to process: $($assets.Count)"

foreach ($item in $assets) {
    $dest = $item.dest
    $url = $item.url
    $parent = Split-Path $dest -Parent
    if (!(Test-Path $parent)) {
        New-Item -ItemType Directory -Force -Path $parent | Out-Null
    }
    if ((Test-Path $dest) -and ((Get-Item $dest).Length -gt 0)) {
        Write-Host "Skipping (exists): $dest"
        continue
    }
    Write-Host "Downloading: $url -> $dest"
    try {
        $webclient.DownloadFile($url, $dest)
    } catch {
        Write-Host "Failed: $url"
    }
}
Write-Host "Download script finished!"
