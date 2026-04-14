import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seguridad para transporte",
  description: "Caso de uso específico para rutas, flotas y protección del personal.",
  path: "/empresas/transporte",
  keywords: ["seguridad para flotas"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Transporte"
        title="Seguridad para transporte"
        description="Caso de uso específico para rutas, flotas y protección del personal."
        bullets={["Protecci\u00f3n de choferes", "Eventos en ruta", "Respuesta y trazabilidad"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
