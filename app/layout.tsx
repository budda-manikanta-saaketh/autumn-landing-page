import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autumnplazaapartments.com"),

  title: {
    default: "Autumn Towne – Luxury Senior Apartments in Murfreesboro, TN",
    template: "%s | Autumn Towne",
  },

  description:
    "Autumn Towne Senior Apartments offers luxury 1 & 2-bedroom floor plans, wellness center, secured dog park, gourmet coffee bar, billiards lounge, and community events in Murfreesboro, TN.",

  keywords: [
    "Senior apartments Murfreesboro TN",
    "55+ luxury apartments Tennessee",
    "Autumn Towne Senior Living",
    "1 bedroom senior apartments Murfreesboro",
    "2 bedroom senior apartments Murfreesboro",
    "Retirement apartments Tennessee",
    "Luxury senior housing Murfreesboro",
  ],

  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://autumnplazaapartments.com",
  },

  openGraph: {
    title: "Autumn Towne Luxury Senior Apartments",
    description:
      "Luxury 55+ senior community with spacious floor plans, wellness amenities, and a vibrant social lifestyle in Murfreesboro, Tennessee.",
    url: "https://autumnplazaapartments.com",
    siteName: "Autumn Towne Apartments",
    images: [
      {
        url: "/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autumn Towne Senior Apartments Exterior",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Autumn Towne Senior Apartments",
    description:
      "Discover luxury senior living with spacious floor plans, community events, and exceptional amenities.",
    images: ["/og/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "Autumn Towne Luxury Senior Apartments",
  image: "https://autumnplazaapartments.com/og/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "146 Autumn Towne Way",
    addressLocality: "Murfreesboro",
    addressRegion: "TN",
    postalCode: "37128",
    addressCountry: "US",
  },
  telephone: "+1-615-648-4099",
  url: "https://autumnplazaapartments.com",
  petsAllowed: "Yes",
  smokingAllowed: "No",
  description:
    "Luxury senior living community featuring modern floor plans, wellness center, secured dog park, billiards lounge, and social activities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="z-[1000]">
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
