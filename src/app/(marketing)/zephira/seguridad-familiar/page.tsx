import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seguridad familiar con Zephira",
  description: "Página SEO para captar búsquedas relacionadas con protección cotidiana y respuesta rápida.",
  path: "/zephira/seguridad-familiar",
  keywords: ["seguridad familiar app", "bot\u00f3n de p\u00e1nico Ecuador"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="SEO B2C"
        title="Seguridad familiar con Zephira"
        description="Página SEO para captar búsquedas relacionadas con protección cotidiana y respuesta rápida."
        bullets={["Protecci\u00f3n de hijos", "Rutinas de movilidad", "Alertas compartidas"]}
        ctaLabel="Descargar app"
        ctaHref="/zephira/descargar"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
