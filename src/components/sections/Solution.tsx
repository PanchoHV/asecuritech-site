type SolutionProps = {
  items: { title: string; description: string }[];
};

export default function Solution({ items }: SolutionProps) {
  return (
    <section className="section-space border-t border-slate-200">
      <div className="container-page">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Convertimos protección en una respuesta más visible, medible y accionable.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Solución
              </p>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
