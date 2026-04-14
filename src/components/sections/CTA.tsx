import Button from "@/components/ui/Button";

type CTAProps = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CTA({ title, description, primary, secondary }: CTAProps) {
  return (
    <section className="section-space border-t border-slate-200">
      <div className="container-page">
        <div className="rounded-[32px] bg-slate-950 px-6 py-10 text-white sm:px-10">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary ? (
              <Button href={secondary.href} variant="secondary" className="border-white/20 bg-white text-slate-950 hover:bg-slate-100">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
