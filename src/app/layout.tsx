import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { business, suburbs } from "@/lib/business";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mobile Car Battery Replacement Gold Coast | Battery Hop | 24/7 Mobile Service",
  description:
    "Flat battery? Battery Hop comes to you across the Gold Coast — home, work or roadside. Mobile battery replacement & breakdown assist, upfront pricing from $149, 24/7. Call now for a fast quote.",
  keywords: [
    "car battery replacement near me",
    "mobile car battery replacement Gold Coast",
    "24 hour battery service Gold Coast",
    "emergency battery replacement",
    "mobile battery service",
  ],
  openGraph: {
    title: "Mobile Car Battery Replacement Gold Coast | Battery Hop",
    description:
      "We come to you — home, work or roadside. Mobile battery replacement & breakdown assist, upfront pricing from $149, 24/7 across the Gold Coast. Call now.",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

// LocalBusiness + Review structured data for Google (helps local ranking + rich results).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: business.name,
  description:
    "Mobile car battery replacement on the Gold Coast. We come to you — home, work or roadside. Available 24/7.",
  telephone: "+61404351359",
  areaServed: suburbs.map((s) => ({ "@type": "City", name: s })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "QLD",
    addressLocality: "Gold Coast",
    addressCountry: "AU",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
