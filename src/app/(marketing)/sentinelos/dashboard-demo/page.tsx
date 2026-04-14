import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Dashboard demo SentinelOS",
  description: "Página visual para explicar la promesa del dashboard sin mostrar producto real aún.",
  path: "/sentinelos/dashboard-demo",
  keywords: ["dashboard seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Visual demo"
        title="Dashboard demo SentinelOS"
        description="Página visual para explicar la promesa del dashboard sin mostrar producto real aún."
        bullets={["KPIs operativos", "Alertas priorizadas", "Mapa de incidentes"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
