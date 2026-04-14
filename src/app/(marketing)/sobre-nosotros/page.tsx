import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Sobre Asecuritech",
  description: "Contexto de marca, tesis y posicionamiento.",
  path: "/sobre-nosotros",
  keywords: ["sobre asecuritech"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Compañía"
        title="Sobre Asecuritech"
        description="Contexto de marca, tesis y posicionamiento."
        bullets={["Visi\u00f3n", "Tesis de mercado", "Arquitectura de crecimiento"]}
        ctaLabel="Contactar"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
