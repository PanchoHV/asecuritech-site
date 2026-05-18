"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function StickyMobileCTA() {
  const pathname = usePathname();

  let href = "/demo";
  let label = "Solicitar demo";
  let className = "w-full";

  if (pathname.startsWith("/zephira")) {
    href = "/zephira/descargar";
    label = "Descargar Zephira";
  } else if (pathname.startsWith("/test-seguridad")) {
    href = "/test-seguridad#test";
    label = "Haz el test";
  } else if (pathname === "/") {
    href = "/contacto";
    label = "Solicitar demo";
    className = "w-full bg-[#0052CC] hover:bg-[#0B5ED7] text-white";
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
      <Button href={href} className={className}>
        {label}
      </Button>
    </div>
  );
}
