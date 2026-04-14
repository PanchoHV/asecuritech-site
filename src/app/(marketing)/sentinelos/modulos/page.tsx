import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Módulos de SentinelOS",
  description: "Vista de módulos como PathMat, AudioCheck y futuras capacidades por sector.",
  path: "/sentinelos/modulos",
  keywords: ["modulos de seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Módulos"
        title="Módulos de SentinelOS"
        description="Vista de módulos como PathMat, AudioCheck y futuras capacidades por sector."
        bullets={["PathMat", "AudioCheck", "Workflows por vertical"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
