import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Arquitectura de SentinelOS",
  description: "Explicación simplificada de la arquitectura técnica y de decisión.",
  path: "/sentinelos/arquitectura",
  keywords: ["arquitectura seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Arquitectura técnica"
        title="Arquitectura de SentinelOS"
        description="Explicación simplificada de la arquitectura técnica y de decisión."
        bullets={["Captura de eventos", "Priorizaci\u00f3n", "Tablero de control"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
