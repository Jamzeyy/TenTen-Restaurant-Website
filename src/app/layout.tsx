import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ten Ten Seafood & Dim Sum | Authentic Chinese Cuisine in Sunrise, FL",
  description:
    "Experience handcrafted dim sum and premium seafood at Ten Ten Seafood & Dim Sum Restaurant. Fresh ingredients, time-honored recipes, modern flavors. Sunrise, Florida.",
  keywords: [
    "dim sum",
    "seafood",
    "chinese restaurant",
    "sunrise florida",
    "authentic chinese food",
    "cantonese cuisine",
  ],
  openGraph: {
    title: "Ten Ten Seafood & Dim Sum",
    description:
      "Handcrafted dim sum & premium seafood. Where tradition meets modern flavor.",
    url: "https://www.tentenseafoodsunrise.com",
    siteName: "Ten Ten Seafood & Dim Sum",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {/* WCAG 2.2 2.4.1: Skip navigation link */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
