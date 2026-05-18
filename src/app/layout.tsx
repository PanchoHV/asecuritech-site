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
  icons: {
    icon: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Vertical-Fondo-Blanco.webp",
    shortcut: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Vertical-Fondo-Blanco.webp",
    apple: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Vertical-Fondo-Blanco.webp"
  },
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
    locale: "es_EC",
    images: [
      {
        url: "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Generated%20Image%20April%2014%2C%202026%20-%206_24PM.webp",
        width: 1200,
        height: 630,
        alt: "Asecuritech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Asecuritech | Seguridad inteligente",
    description: siteConfig.description,
    images: [
      "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Generated%20Image%20April%2014%2C%202026%20-%206_24PM.webp"
    ]
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
