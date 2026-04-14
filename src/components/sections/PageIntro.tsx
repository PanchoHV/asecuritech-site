import CTA from "@/components/sections/CTA";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  bullets,
  ctaLabel = "Solicitar demo",
  ctaHref = "/demo"
}: PageIntroProps) {
  return (
    <>
      <section className="section-space">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex min-h-[48px] items-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700">
              {eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {description}
            </p>
          </div>

          <div className="card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Qué incluye
            </p>
            <ul className="mt-4 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="rounded-2xl bg-slate-50 p-4 text-base text-slate-700">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA
        title="La estructura ya está preparada para crecer sin rehacer el sitio."
        description="Aquí estamos priorizando claridad de mercado, SEO y conversión antes que complejidad innecesaria."
        primary={{ label: ctaLabel, href: ctaHref }}
        secondary={{ label: "Ir a contacto", href: "/contacto" }}
      />
    </>
  );
}
