import Link from "next/link";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    title: "Explora",
    links: [
      { label: "Empresas", href: "/empresas" },
      { label: "Personas", href: "/personas" },
      { label: "¿Como funciona?", href: "/como-funciona" },
      { label: "Gobierno", href: "/gobierno" }
    ]
  },
  {
    title: "Conecta",
    links: [
      { label: "Solicitar demo", href: "/contacto" },
      { label: "Aliados", href: "/aliados" },
      { label: "WhatsApp", href: siteConfig.whatsappUrl },
      { label: "Calendly", href: siteConfig.calendlyUrl }
    ]
  },
  {
    title: "Confianza",
    links: [
      { label: "Sobre nosotros", href: "/sobre-nosotros" },
      { label: "Privacidad", href: "/legal/privacidad" },
      { label: "Terminos", href: "/legal/terminos" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05080D] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_26%),radial-gradient(circle_at_85%_20%,rgba(0,82,204,0.12),transparent_22%),linear-gradient(180deg,#05080D_0%,#0A0E14_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-20" />

      <div className="container-page relative py-12 sm:py-14 md:py-16">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_1.8fr]">
          <div className="min-w-0 space-y-6">
            <div className="max-w-md">
              <Link href="/" className="inline-flex items-center">
                <img
                  src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Horizontal-Fondo-Negro.webp"
                  alt="Asecuritech"
                  className="h-11 w-auto max-w-full sm:h-12 md:h-14"
                />
              </Link>
              <p className="mt-4 break-words text-xs leading-6 text-slate-300 sm:text-sm md:text-base">
                Seguridad coordinada para familias, equipos y operaciones que necesitan una respuesta real cuando el tiempo importa.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-[1.35fr_1fr]">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-5 md:px-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Contacto
                </p>
                <div className="mt-3 space-y-2.5 text-slate-200">
                  <p className="truncate text-xs sm:text-sm">Quito, Ecuador</p>
                  <a href="mailto:privacidad@asecuritech.com" className="block whitespace-nowrap text-[11px] leading-6 transition hover:text-cyan-300 sm:text-xs md:text-sm">
                    privacidad@asecuritech.com
                  </a>
                  <a href="tel:+593998913384" className="block text-xs transition hover:text-cyan-300 sm:text-sm">
                    +593 99 891 3384
                  </a>
                </div>
              </div>

              <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-5 sm:px-5 md:px-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Acceso rápido
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <Link
                    href="/contacto"
                    className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-[#0052CC] px-3 text-xs font-semibold text-white transition hover:bg-[#0B5ED7] sm:h-10 sm:text-sm"
                  >
                    Solicitar demo
                  </Link>
                  <Link
                    href="/personas"
                    className="inline-flex h-11 w-full items-center justify-center rounded-2xl border border-white/12 bg-white/[0.03] px-3 text-xs font-semibold text-white transition hover:bg-white/[0.08] sm:h-10 sm:text-sm"
                  >
                    Proteger familia
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="min-w-0 rounded-[22px] border border-white/10 bg-white/[0.03] px-6 py-5 sm:px-8"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {column.title}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {column.links.map((link) => {
                    const external = link.href.startsWith("http");

                    return (
                      <Link
                        key={`${column.title}-${link.href}-${link.label}`}
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="inline-flex h-10 items-center break-words text-xs text-slate-200 transition hover:text-cyan-300 sm:text-sm"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-6">
          <p className="break-words text-xs leading-5 text-slate-400 sm:max-w-2xl sm:leading-6">
            © 2026 Asecuritech. Seguridad coordinada para personas, familias y operaciones.
          </p>
          <div className="flex shrink-0 flex-wrap items-center gap-2 text-xs text-slate-300 sm:justify-end sm:gap-3">
            <Link
              href="/legal/privacidad"
              className="inline-flex min-h-[34px] items-center rounded-full border border-white/15 bg-white/[0.04] px-3 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Privacidad
            </Link>
            <Link
              href="/legal/terminos"
              className="inline-flex min-h-[34px] items-center rounded-full border border-white/15 bg-white/[0.04] px-3 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Términos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-[34px] items-center rounded-full border border-white/15 bg-white/[0.04] px-3 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
