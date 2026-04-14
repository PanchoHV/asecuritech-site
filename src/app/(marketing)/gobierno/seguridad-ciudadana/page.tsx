import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seguridad ciudadana",
  description: "Propuesta para mejorar tiempos de respuesta y visibilidad de incidentes.",
  path: "/gobierno/seguridad-ciudadana",
  keywords: ["seguridad ciudadana"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Seguridad ciudadana"
        title="Seguridad ciudadana"
        description="Propuesta para mejorar tiempos de respuesta y visibilidad de incidentes."
        bullets={["Alertas", "Centros de monitoreo", "Respuesta"]}
        ctaLabel="Agendar reunión"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
