import Link from "next/link";

const cards = [
  {
    title: "Seguridad Operativa",
    eyebrow: "Empresas",
    description:
      "Control de personal en campo, activos moviles y respuesta ante incidentes desde una sola plataforma.",
    cta: "Ver solucion para empresas",
    href: "/empresas",
    accent: "blue",
    image:
      "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-b2b.webp",
  },
  {
    title: "Protección Familiar",
    eyebrow: "Personas",
    description:
      "Acompanamiento inteligente y seguridad colaborativa para proteger a quienes mas te importan.",
    cta: "Ver proteccion familiar",
    href: "/personas",
    accent: "orange",
    image:
      "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-b2c.webp",
  },
];

export default function SegmentSelector() {
  return (
    <section className="home-dark-section section-space">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="home-section-eyebrow">Soluciones a tu medida</p>
          <h2 className="home-section-title">Asecuritech se adapta a distintos escenarios de seguridad.</h2>
          <p className="home-section-copy">
            Explora como funciona segun tu necesidad, desde proteccion familiar hasta seguridad operativa.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`segment-card group ${card.accent === "blue" ? "segment-card-blue" : "segment-card-orange"} ${
                index === 0 ? "segment-card-delay-b2b" : "segment-card-delay-b2c"
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="segment-card-image"
              />
              <div className="segment-card-overlay" />

              <div className="segment-card-content">
                <p className="segment-card-eyebrow">{card.eyebrow}</p>
                <h3 className="segment-card-title">{card.title}</h3>
                <p className="segment-card-copy">{card.description}</p>

                <Link
                  href={card.href}
                  className={`btn-segment ${
                    card.accent === "blue"
                      ? "btn-segment-blue"
                      : "btn-segment-orange"
                  }`}
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
