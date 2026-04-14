import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "API y SDK",
  description: "Documentación comercial simplificada para partners técnicos.",
  path: "/integradores/api-sdk",
  keywords: ["api sdk seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="API y SDK"
        title="API y SDK"
        description="Documentación comercial simplificada para partners técnicos."
        bullets={["Endpoints", "SDKs", "Eventos"]}
        ctaLabel="Hablar de partnership"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
