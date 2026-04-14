import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Contenido educativo para posicionar Asecuritech en Google y motores de búsqueda con IA.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <main className="section-space">
      <div className="container-page">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Aquí construiremos autoridad para Google, ChatGPT, Gemini y Perplexity.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link href="/blog/categoria/seguridad" className="card">Categoría: Seguridad</Link>
          <Link href="/blog/categoria/tecnologia" className="card">Categoría: Tecnología</Link>
          <Link href="/blog/categoria/familia" className="card">Categoría: Familia</Link>
        </div>

        <div className="mt-8 grid gap-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {post.category}
              </p>
              <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex min-h-[48px] min-w-[48px] items-center text-sm font-semibold text-slate-950"
              >
                Leer artículo
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
