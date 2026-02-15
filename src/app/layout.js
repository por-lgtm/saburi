import { Noto_Serif_JP, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "700"],
});

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  variable: "--font-shippori",
  weight: ["400", "500", "600", "700", "800"],
});

import { Yuji_Syuku } from "next/font/google";
const yujiSyuku = Yuji_Syuku({
  subsets: ["latin"],
  variable: "--font-yuji",
  weight: ["400"],
});

export const metadata = {
  title: "和風中華 佐分利 (さぶり)",
  description: "京都府南丹市美山町にある和風中華佐分利の公式ホームページです。",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "和風中華 佐分利",
    "image": "https://saburi-restaurant.com/images/main-visual.jpg",
    "description": "京都府南丹市美山町にある和風中華佐分利の公式ホームページです。",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "美山町上平屋盆徳5−2",
      "addressLocality": "南丹市",
      "addressRegion": "京都府",
      "postalCode": "601-0721",
      "addressCountry": "JP"
    },
    "telephone": "070-1799-3780",
    "priceRange": "¥1,000-¥3,000",
    "servesCuisine": "Chinese",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "11:00",
        "closes": "22:00"
      }
    ]
  };

  return (
    <html lang="ja">
      <body className={`${notoSerif.variable} ${notoSans.variable} ${shipporiMincho.variable} ${yujiSyuku.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
