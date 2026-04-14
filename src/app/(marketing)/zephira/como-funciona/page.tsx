import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cómo funciona Zephira",
  description: "Explicación de flujo, activación, escalamiento y respuesta para reducir dudas antes de la descarga.",
  path: "/zephira/como-funciona",
  keywords: ["como funciona app seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Flujo explicado"
        title="Cómo funciona Zephira"
        description="Explicación de flujo, activación, escalamiento y respuesta para reducir dudas antes de la descarga."
        bullets={["Activaci\u00f3n del evento", "Compartici\u00f3n de contexto", "Escalamiento y monitoreo"]}
        ctaLabel="Descargar app"
        ctaHref="/zephira/descargar"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
