import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Arquitectura técnica",
  description: "Página de alto nivel para explicar capas del sistema.",
  path: "/tecnologia/arquitectura",
  keywords: ["arquitectura tecnica"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Arquitectura"
        title="Arquitectura técnica"
        description="Página de alto nivel para explicar capas del sistema."
        bullets={["Frontend", "Eventos", "Control operacional"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
