import type { Metadata } from "next";
import { defaultKeywords, siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: MetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "es_EC"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
