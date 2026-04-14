import Button from "@/components/ui/Button";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta
}: HeroProps) {
  return (
    <section className="section-space">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <span className="inline-flex min-h-[48px] items-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
        <div className="card bg-slate-950 text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Arquitectura del sistema</p>
          <div className="mt-6 space-y-4 text-sm">
            <div className="rounded-2xl bg-white/10 p-4">Asecuritech HUB → posicionamiento y adquisición</div>
            <div className="rounded-2xl bg-white/10 p-4">Zephira → protección personal B2C</div>
            <div className="rounded-2xl bg-white/10 p-4">SentinelOS → inteligencia operativa B2B / B2G</div>
          </div>
        </div>
      </div>
    </section>
  );
}
