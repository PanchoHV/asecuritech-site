import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Planes Zephira",
  description: "Comparador inicial de planes para convertir intención en descarga o contacto.",
  path: "/zephira/planes",
  keywords: ["planes seguridad familiar"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Comparador de planes"
        title="Planes Zephira"
        description="Comparador inicial de planes para convertir intención en descarga o contacto."
        bullets={["Plan personal", "Plan familiar", "Plan premium con soporte preferente"]}
        ctaLabel="Descargar app"
        ctaHref="/zephira/descargar"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
