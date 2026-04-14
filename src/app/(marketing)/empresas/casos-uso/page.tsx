import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Casos de uso empresariales",
  description: "Página de storytelling comercial para mostrar escenarios reales.",
  path: "/empresas/casos-uso",
  keywords: ["casos de uso seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Casos de uso"
        title="Casos de uso empresariales"
        description="Página de storytelling comercial para mostrar escenarios reales."
        bullets={["Flotas", "Operaciones de campo", "Cobertura geogr\u00e1fica"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
