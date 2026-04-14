type ProblemProps = {
  items: { title: string; description: string }[];
};

export default function Problem({ items }: ProblemProps) {
  return (
    <section className="section-space border-t border-slate-200 bg-slate-50">
      <div className="container-page">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          El problema no es solo la inseguridad. Es la demora, la incertidumbre y la falta de coordinación.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
