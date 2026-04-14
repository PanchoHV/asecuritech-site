import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Modelo de negocio para integradores",
  description: "Página para partners que evalúan distribución o revenue share.",
  path: "/integradores/modelo-negocio",
  keywords: ["modelo negocio integradores"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Modelo de negocio"
        title="Modelo de negocio para integradores"
        description="Página para partners que evalúan distribución o revenue share."
        bullets={["Revenue share", "Licencias", "Operaci\u00f3n conjunta"]}
        ctaLabel="Hablar de partnership"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
