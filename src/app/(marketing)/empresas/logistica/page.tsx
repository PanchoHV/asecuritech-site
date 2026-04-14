import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seguridad para logística",
  description: "Control de eventos y contingencias en operaciones logísticas.",
  path: "/empresas/logistica",
  keywords: ["seguridad logistica"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Logística"
        title="Seguridad para logística"
        description="Control de eventos y contingencias en operaciones logísticas."
        bullets={["Incidentes distribuidos", "Rastreo operativo", "Escalamiento"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
