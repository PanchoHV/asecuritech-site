import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Programa de partners",
  description: "Página para fabricantes, operadores y socios estratégicos.",
  path: "/integradores/partners",
  keywords: ["partners seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Partners"
        title="Programa de partners"
        description="Página para fabricantes, operadores y socios estratégicos."
        bullets={["Alianzas", "Co-branding", "Canal"]}
        ctaLabel="Hablar de partnership"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
