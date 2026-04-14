import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Descargar Zephira",
  description: "Página puente para deep links a stores y captura de intención de descarga.",
  path: "/zephira/descargar",
  keywords: ["descargar app seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Deep links"
        title="Descargar Zephira"
        description="Página puente para deep links a stores y captura de intención de descarga."
        bullets={["Descarga en stores", "Captura de intenci\u00f3n", "Tracking de conversi\u00f3n"]}
        ctaLabel="Ir a stores"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
