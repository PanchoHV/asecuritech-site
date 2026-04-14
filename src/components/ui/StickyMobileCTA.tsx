"use client";

import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

export default function StickyMobileCTA() {
  const pathname = usePathname();

  let href = "/demo";
  let label = "Solicitar demo";

  if (pathname.startsWith("/zephira")) {
    href = "/zephira/descargar";
    label = "Descargar Zephira";
  } else if (pathname.startsWith("/test-seguridad")) {
    href = "/test-seguridad#test";
    label = "Haz el test";
  } else if (pathname === "/") {
    href = "/test-seguridad";
    label = "Evalúa tu riesgo";
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden">
      <Button href={href} className="w-full">
        {label}
      </Button>
    </div>
  );
}
