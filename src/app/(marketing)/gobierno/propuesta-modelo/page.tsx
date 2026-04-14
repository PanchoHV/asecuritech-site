import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Propuesta modelo para gobierno",
  description: "Marco inicial de propuesta comercial y técnica para sector público.",
  path: "/gobierno/propuesta-modelo",
  keywords: ["propuesta seguridad gobierno"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Propuesta modelo"
        title="Propuesta modelo para gobierno"
        description="Marco inicial de propuesta comercial y técnica para sector público."
        bullets={["Visi\u00f3n de despliegue", "Indicadores", "Integraci\u00f3n"]}
        ctaLabel="Agendar reunión"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
