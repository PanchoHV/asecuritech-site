export type BlogCategory = "seguridad" | "tecnologia" | "familia";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: BlogCategory;
  publishedAt: string;
  updatedAt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "boton-de-panico-ecuador-guia-practica",
    title: "Botón de pánico en Ecuador: qué debe tener una solución que sí sirva",
    excerpt:
      "No todo botón de pánico reduce fricción real. Esta guía explica qué buscar en una solución útil.",
    category: "seguridad",
    publishedAt: "2026-03-20",
    updatedAt: "2026-03-20",
    content: [
      "La mayoría de soluciones prometen rapidez, pero muy pocas reducen fricción en el momento crítico.",
      "Una herramienta útil debe responder incluso cuando la persona está bajo estrés, con mala señal o sin tiempo para explicar contexto.",
      "La ventaja de una plataforma bien diseñada es conectar evento, ubicación, evidencia y protocolo de respuesta."
    ]
  },
  {
    slug: "smart-city-seguridad-mas-alla-de-camaras",
    title: "Smart city y seguridad: por qué no basta con tener más cámaras",
    excerpt:
      "El problema no es solo capturar video. Es convertir señales dispersas en decisiones operativas.",
    category: "tecnologia",
    publishedAt: "2026-03-18",
    updatedAt: "2026-03-18",
    content: [
      "Una ciudad con muchas cámaras no necesariamente es una ciudad con mejor respuesta.",
      "Lo que cambia el resultado es la capa de inteligencia que prioriza alertas, reduce falsos positivos y ordena la coordinación.",
      "La arquitectura correcta combina monitoreo, eventos, trazabilidad y tableros de decisión."
    ]
  },
  {
    slug: "seguridad-familiar-digital-habitos-clave",
    title: "Seguridad familiar digital: hábitos clave para reducir exposición cotidiana",
    excerpt:
      "La seguridad familiar no depende solo de una app. Depende de rituales, protocolos y reacción.",
    category: "familia",
    publishedAt: "2026-03-16",
    updatedAt: "2026-03-16",
    content: [
      "El error común es suponer que el canal de mensajería será suficiente en un incidente real.",
      "La familia necesita rutas de contacto, confirmación de estado y un mecanismo simple de escalamiento.",
      "Las mejores plataformas no reemplazan criterio humano; lo amplifican con menor latencia."
    ]
  }
];

export function getPostsByCategory(category: BlogCategory) {
  return blogPosts.filter((post) => post.category === category);
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
