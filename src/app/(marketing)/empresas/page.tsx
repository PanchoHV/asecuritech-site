import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Soluciones para empresas",
  description: "Oferta B2B para transporte, retail, logística y operaciones distribuidas.",
  path: "/empresas",
  keywords: ["seguridad para flotas"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="B2B"
        title="Soluciones para empresas"
        description="Oferta B2B para transporte, retail, logística y operaciones distribuidas."
        bullets={["Casos de uso por sector", "Seguridad para equipos y activos", "Visibilidad de respuesta"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
