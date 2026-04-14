import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Soluciones para gobierno",
  description: "Oferta B2G orientada a seguridad ciudadana, smart cities y centros de monitoreo.",
  path: "/gobierno",
  keywords: ["smart city seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="B2G"
        title="Soluciones para gobierno"
        description="Oferta B2G orientada a seguridad ciudadana, smart cities y centros de monitoreo."
        bullets={["Smart cities", "Seguridad ciudadana", "Modelo de impacto"]}
        ctaLabel="Agendar reunión"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
