import Link from "next/link";

const footerColumns = [
  {
    title: "Productos",
    links: [
      { label: "Zephira", href: "/zephira" },
      { label: "SentinelOS", href: "/sentinelos" },
      { label: "Test de seguridad", href: "/test-seguridad" }
    ]
  },
  {
    title: "Mercados",
    links: [
      { label: "Empresas", href: "/empresas" },
      { label: "Gobierno", href: "/gobierno" },
      { label: "Integradores", href: "/integradores" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/legal/privacidad" },
      { label: "Términos", href: "/legal/terminos" },
      { label: "Cookies", href: "/legal/cookies" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_2fr]">
        <div>
          <p className="text-lg font-semibold">Asecuritech</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
            Plataforma madre para protección personal, operaciones de seguridad,
            integraciones y analítica de respuesta.
          </p>
          <div className="mt-6 text-sm text-slate-600">
            <p>Quito, Ecuador</p>
            <p>privacidad@asecuritech.com</p>
            <p>+593 99 891 3384</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {column.title}
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-[48px] min-w-[48px] items-center text-sm text-slate-700 hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
