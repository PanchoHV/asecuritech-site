import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Impacto y KPIs",
  description: "Página para argumentar retorno, trazabilidad e impacto esperado.",
  path: "/gobierno/impacto",
  keywords: ["impacto seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Impacto"
        title="Impacto y KPIs"
        description="Página para argumentar retorno, trazabilidad e impacto esperado."
        bullets={["KPIs", "Trazabilidad", "Toma de decisi\u00f3n"]}
        ctaLabel="Agendar reunión"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
