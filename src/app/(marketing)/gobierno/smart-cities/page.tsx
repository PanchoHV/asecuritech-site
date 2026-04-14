import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Smart cities y seguridad",
  description: "Página de entrada para municipalidades y operaciones urbanas.",
  path: "/gobierno/smart-cities",
  keywords: ["smart city seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Smart cities"
        title="Smart cities y seguridad"
        description="Página de entrada para municipalidades y operaciones urbanas."
        bullets={["Coordinaci\u00f3n urbana", "Inteligencia operativa", "Escalamiento"]}
        ctaLabel="Agendar reunión"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
