const stats = [
  {
    value: "Donde la seguridad no depende de la señal",
    kicker: "Cobertura real",
    label: "Donde la red celular no llega o es inestable, desplegamos infraestructura propia para activar alertas y coordinar respuesta. Diseñamos redes de seguridad a medida para empresas y municipios, asegurando continuidad operativa incluso en zonas sin cobertura.",
    note: "Resiliencia operativa incluso en zonas sin cobertura.",
  },
  {
    value: "De la alerta a la acción en 11 segundos",
    kicker: "Tiempo de activacion",
    label: "Nuestra metrica de 11 segundos no es una estimacion; es el tiempo real en el que tu alerta moviliza a la comunidad y a las autoridades. Convertimos la alerta en una reaccion en cadena efectiva diseñada para entregar respuesta inmediata.",
    note: "Cada segundo cuenta cuando la respuesta no puede esperar.",
  },
  {
    value: "Infraestructura que ya activa tu ciudad",
    kicker: "Presencia activa",
    label: "Operamos con nodos de defensa activos en 5 países y más de 25 ciudades. Somos una red de respuesta humana y tecnológica que ya está protegiendo barrios y operaciones reales cerca de ti.",
    note: "Capacidad desplegada y validada en entornos reales.",
  },
];

export default function Proof() {
  return (
    <section className="home-dark-section relative section-space overflow-hidden">
      <div className="proof-backdrop absolute inset-0" />

      <div className="container-page relative">
        <div className="proof-shell rounded-[32px] p-6 sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <p className="home-section-eyebrow">Operacion real</p>
            <h2 className="home-section-title max-w-3xl">Infraestructura activa, operando en entornos reales.</h2>
            <p className="home-section-copy max-w-3xl">
              Tecnologia que ya esta cerca de ti. Una red pensada para escuchar, activar y coordinar ayuda real cuando más lo necesitas.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stats.map((item, index) => (
              <article
                key={item.value}
                className={`proof-card flex h-full flex-col rounded-[28px] p-6 sm:p-7 ${index === 1 ? "proof-card-featured" : ""}`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 sm:text-xs">
                  {item.kicker}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white">{item.value}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.label}</p>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-cyan-300/40 via-white/10 to-transparent" />
                  <p className="mt-4 text-xs leading-6 text-slate-400">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
