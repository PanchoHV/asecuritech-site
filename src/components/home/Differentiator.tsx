const items = [
  {
    method: "WhatsApp",
    status: "Avisa, pero no coordina",
    problem:
      "Es útil para comunicar una emergencia, pero depende de que alguien lea, interprete y actúe a tiempo. Cuando cada segundo cuenta, la respuesta puede volverse lenta, confusa o improvisada.",
    tone: "warning",
  },
  {
    method: "Cámaras",
    status: "Observan, pero no activan",
    problem:
      "Aportan visibilidad y evidencia, pero por sí solas no convierten un incidente en una respuesta. Ven lo que pasa, pero no conectan automáticamente personas, contexto y acción.",
    tone: "warning",
  },
  {
    method: "Asecuritech",
    status: "Convierte alerta en respuesta",
    problem:
      "Asecuritech conecta la alerta con ubicación, actores clave y operación para activar una respuesta coordinada en tiempo real, no solo una notificación o un registro del incidente.",
    tone: "highlight",
  },
];

export default function Differentiator() {
  const legacyTools = items.filter((item) => item.tone === "warning");
  const asecuritech = items.find((item) => item.tone === "highlight");

  return (
    <section className="home-dark-section relative section-space overflow-hidden">
      <div className="differentiator-backdrop absolute inset-0" />

      <div className="container-page">
        <div className="max-w-3xl">
          <p className="home-section-eyebrow">Diferenciador</p>
          <h2 className="home-section-title">No solo detectamos incidentes: coordinamos respuesta inmediata.</h2>
          <p className="home-section-copy">
            El valor no esta solo en observar. Esta en activar comunidad y autoridades, coordinar respuesta y operacion cuando el tiempo importa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6">
            {legacyTools.map((item) => (
              <article key={item.method} className="differentiator-card rounded-[28px] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300/80 sm:text-xs">
                      {item.status}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">{item.method}</h3>
                  </div>
                  <div className="differentiator-icon-shell">
                    <span className="differentiator-icon-minus" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">{item.problem}</p>

                <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  <span className="h-px flex-1 bg-gradient-to-r from-amber-400/30 to-transparent" />
                  limite operativo
                </div>
              </article>
            ))}
          </div>

          <div className="differentiator-feature rounded-[32px] p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
                    {asecuritech?.status}
                  </p>
                  <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                    {asecuritech?.method}
                  </h3>
                </div>

                <div className="differentiator-icon-shell differentiator-icon-shell-active">
                  <span className="differentiator-icon-plus" />
                </div>
              </div>

              <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                {asecuritech?.problem}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="differentiator-signal rounded-[22px] px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                    Personas
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Activa familia, vecinos, equipo o red de apoyo sin depender de improvisacion.
                  </p>
                </div>

                <div className="differentiator-signal rounded-[22px] px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                    Contexto
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Conecta ubicacion, evento y escenario para que la respuesta tenga sentido real.
                  </p>
                </div>

                <div className="differentiator-signal rounded-[22px] px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-xs">
                    Operacion
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Orquesta la accion entre comunidad, monitoreo y capa institucional o privada.
                  </p>
                </div>
              </div>

              <div className="differentiator-ribbon rounded-[24px] px-5 py-4 text-sm leading-7 text-slate-200">
                Mientras otras herramientas observan o notifican, Asecuritech convierte la alerta en una cadena de respuesta que si se mueve.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
