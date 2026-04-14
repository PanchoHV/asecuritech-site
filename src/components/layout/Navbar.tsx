"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";
import { trackEvent } from "@/lib/tracking";

const navItems = [
  { label: "Zephira", href: "/zephira" },
  { label: "SentinelOS", href: "/sentinelos" },
  { label: "Empresas", href: "/empresas" },
  { label: "Gobierno", href: "/gobierno" },
  { label: "Integradores", href: "/integradores" },
  { label: "Blog", href: "/blog" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const cta = useMemo(() => {
    if (pathname.startsWith("/zephira")) {
      return { label: "Descargar app", href: "/zephira/descargar" };
    }
    if (pathname.startsWith("/sentinelos") || pathname.startsWith("/empresas") || pathname.startsWith("/gobierno") || pathname.startsWith("/integradores")) {
      return { label: "Solicitar demo", href: "/demo" };
    }
    if (pathname.startsWith("/test-seguridad")) {
      return { label: "Ver mi resultado", href: "/test-seguridad#test" };
    }
    return { label: "Haz el test", href: "/test-seguridad" };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex min-h-[72px] items-center justify-between gap-4">
        <Link href="/" className="inline-flex min-h-[48px] min-w-[48px] items-center text-lg font-semibold tracking-tight">
          Asecuritech
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
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
