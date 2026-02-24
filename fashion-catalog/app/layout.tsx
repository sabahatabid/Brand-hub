import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PakFashion - Discover Pakistani Fashion Brands",
  description: "Explore the finest collection of Pakistani fashion brands including Saaya, Sapphire, J., Ethnic, Beachtree, and more. Your one-stop destination for Pakistani fashion.",
  keywords: "Pakistani fashion, Saaya, Sapphire, J., Ethnic, Beachtree, Wardrobe, Agha Noor, Limelight, Alkaram, fashion brands Pakistan",
  authors: [{ name: "PakFashion" }],
  openGraph: {
    title: "PakFashion - Discover Pakistani Fashion Brands",
    description: "Explore the finest collection of Pakistani fashion brands all in one place",
    url: "https://pakfashion.vercel.app",
    siteName: "PakFashion",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "PakFashion - Pakistani Fashion Brands",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PakFashion - Discover Pakistani Fashion Brands",
    description: "Explore the finest collection of Pakistani fashion brands all in one place",
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
