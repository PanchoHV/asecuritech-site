import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Tecnología Asecuritech",
  description: "Infraestructura, arquitectura y enfoque de seguridad de datos.",
  path: "/tecnologia",
  keywords: ["tecnologia seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Infraestructura"
        title="Tecnología Asecuritech"
        description="Infraestructura, arquitectura y enfoque de seguridad de datos."
        bullets={["LoRa", "IA PathMat", "Seguridad de datos"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
