import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { getPostsByCategory } from "@/lib/blog";

const posts = getPostsByCategory("familia");

export const metadata = buildMetadata({
  title: "Blog · Familia",
  description: "Artículos de la categoría familia.",
  path: "/blog/categoria/familia"
});

export default function CategoryPage() {
  return (
    <main className="section-space">
      <div className="container-page">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Categoría: Familia</h1>
        <div className="mt-8 grid gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
