import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "IA PathMat",
  description: "Explicación de PathMat como inteligencia de rutas y patrones.",
  path: "/tecnologia/ia-pathmat",
  keywords: ["ia pathmat"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="IA PathMat"
        title="IA PathMat"
        description="Explicación de PathMat como inteligencia de rutas y patrones."
        bullets={["Patrones", "Eventos", "Inteligencia aplicada"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
