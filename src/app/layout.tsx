import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import { defaultKeywords, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Asecuritech | Seguridad inteligente que convierte protección en acción",
    template: "%s | Asecuritech"
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Asecuritech | Seguridad inteligente que convierte protección en acción",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "es_EC"
  },
  twitter: {
    card: "summary_large_image",
    title: "Asecuritech | Seguridad inteligente",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <GoogleTagManager gtmId={siteConfig.gtmId} />
        <Navbar />
        {children}
        <Footer />
        <StickyMobileCTA />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
