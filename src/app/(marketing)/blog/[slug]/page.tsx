import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Por qué importa ${post.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: post.excerpt
        }
      }
    ]
  };

  return (
    <main className="section-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-page max-w-4xl prose-copy">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {post.category}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="text-lg leading-8 text-slate-600">{post.excerpt}</p>
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
