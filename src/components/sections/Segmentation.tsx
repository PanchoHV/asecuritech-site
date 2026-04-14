import Link from "next/link";

const segments = [
  {
    title: "B2C · Zephira",
    description: "Protección personal, familiar y en movilidad.",
    href: "/zephira"
  },
  {
    title: "B2B · Empresas",
    description: "Seguridad para flotas, retail, logística y operaciones distribuidas.",
    href: "/empresas"
  },
  {
    title: "B2G · Gobierno",
    description: "Smart cities, seguridad ciudadana y centros de monitoreo.",
    href: "/gobierno"
  },
  {
    title: "B2B2C · Integradores",
    description: "White-label, partners, APIs y SDKs para terceros.",
    href: "/integradores"
  }
];

export default function Segmentation() {
  return (
    <section className="section-space border-t border-slate-200 bg-slate-50">
      <div className="container-page">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Una plataforma. Cuatro vectores de crecimiento.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {segments.map((segment) => (
            <Link key={segment.href} href={segment.href} className="card transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold">{segment.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{segment.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
