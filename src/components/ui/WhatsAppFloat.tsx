import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <Link
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 inline-flex min-h-[56px] min-w-[56px] items-center justify-center rounded-full bg-green-600 text-sm font-semibold text-white shadow-soft transition hover:bg-green-500"
      aria-label="Abrir WhatsApp"
    >
      WA
    </Link>
  );
}
