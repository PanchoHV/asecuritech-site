import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blog";

const staticRoutes = [
  "/",
  "/zephira",
  "/zephira/planes",
  "/zephira/como-funciona",
  "/zephira/seguridad-familiar",
  "/zephira/descargar",
  "/sentinelos",
  "/sentinelos/modulos",
  "/sentinelos/integraciones",
  "/sentinelos/dashboard-demo",
  "/sentinelos/arquitectura",
  "/empresas",
  "/empresas/transporte",
  "/empresas/logistica",
  "/empresas/retail",
  "/empresas/casos-uso",
  "/gobierno",
  "/gobierno/smart-cities",
  "/gobierno/seguridad-ciudadana",
  "/gobierno/propuesta-modelo",
  "/gobierno/impacto",
  "/integradores",
  "/integradores/modelo-negocio",
  "/integradores/white-label",
  "/integradores/api-sdk",
  "/integradores/partners",
  "/tecnologia",
  "/tecnologia/lora",
  "/tecnologia/ia-pathmat",
  "/tecnologia/arquitectura",
  "/tecnologia/seguridad-datos",
  "/test-seguridad",
  "/demo",
  "/contacto",
  "/sobre-nosotros",
  "/blog",
  "/blog/categoria/seguridad",
  "/blog/categoria/tecnologia",
  "/blog/categoria/familia",
  "/legal/privacidad",
  "/legal/terminos",
  "/legal/cookies"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "/" ? 1 : 0.7
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
