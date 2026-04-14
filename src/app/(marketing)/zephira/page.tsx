import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Zephira",
  description: "Protección personal y familiar con activación simple, rutas seguras y acceso rápido a ayuda.",
  path: "/zephira",
  keywords: ["seguridad familiar app", "protecci\u00f3n personal LATAM"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Producto B2C"
        title="Zephira"
        description="Protección personal y familiar con activación simple, rutas seguras y acceso rápido a ayuda."
        bullets={["Bot\u00f3n de p\u00e1nico m\u00f3vil", "Protecci\u00f3n familiar", "Flujos pensados para urgencia"]}
        ctaLabel="Descargar app"
        ctaHref="/zephira/descargar"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
