import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "LoRa y conectividad",
  description: "Página para explicar conectividad de baja energía y cobertura en escenarios específicos.",
  path: "/tecnologia/lora",
  keywords: ["lora seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="LoRa"
        title="LoRa y conectividad"
        description="Página para explicar conectividad de baja energía y cobertura en escenarios específicos."
        bullets={["Cobertura", "Consumo bajo", "Escenarios remotos"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
