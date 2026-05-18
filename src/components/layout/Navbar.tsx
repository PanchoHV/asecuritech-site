"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/tracking";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Empresas", href: "/empresas" },
  { label: "Personas", href: "/personas" },
  { label: "¿Cómo funciona?", href: "/como-funciona" },
  { label: "Aliados", href: "/aliados" },
  { label: "Gobierno", href: "/gobierno" },
  { label: "Contacto", href: "/contacto" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const cta = useMemo(() => {
    if (pathname.startsWith("/empresas")) {
      return { label: "Agendar demo", href: "/contacto" };
    }

    if (pathname.startsWith("/personas")) {
      return { label: "Probar gratis", href: "/personas" };
    }

    if (pathname.startsWith("/aliados")) {
      return { label: "Quiero ser aliado", href: "/contacto" };
    }

    if (pathname.startsWith("/gobierno")) {
      return { label: "Reunión institucional", href: "/contacto" };
    }

    return { label: "Obtener Protección", href: "/personas" };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-h-[48px] min-w-[48px] items-center">
          <img
            src="https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Logo-Asecuritech.webp"
            alt="Asecuritech"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-[48px] min-w-[48px] items-center rounded-xl px-4 text-sm font-medium transition ${
                  active ? "bg-slate-950 text-white" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href={cta.href}
            onClick={() => trackEvent("navbar_cta_click", { href: cta.href, page: pathname })}
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {cta.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl border border-slate-200 lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-[48px] min-w-[48px] items-center rounded-xl px-3 text-base font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="mt-2 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-slate-950 px-4 text-base font-semibold text-white"
              onClick={() => {
                trackEvent("mobile_navbar_cta_click", { href: cta.href, page: pathname });
                setOpen(false);
              }}
            >
              {cta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
