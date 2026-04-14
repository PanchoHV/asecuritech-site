import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SentinelOS",
  description: "Plataforma core para monitoreo, priorización de alertas e inteligencia operativa.",
  path: "/sentinelos",
  keywords: ["seguridad para flotas", "smart city seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Producto core"
        title="SentinelOS"
        description="Plataforma core para monitoreo, priorización de alertas e inteligencia operativa."
        bullets={["Tablero operacional", "Trazabilidad de incidentes", "Visi\u00f3n para operaciones"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
