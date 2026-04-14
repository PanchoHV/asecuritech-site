import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "White-label",
  description: "Propuesta para desplegar la solución bajo marca del partner.",
  path: "/integradores/white-label",
  keywords: ["white label seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="White-label"
        title="White-label"
        description="Propuesta para desplegar la solución bajo marca del partner."
        bullets={["Marca propia", "Capas de integraci\u00f3n", "Control comercial"]}
        ctaLabel="Hablar de partnership"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
