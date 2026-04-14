import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seguridad para retail",
  description: "Protección de tiendas, personal y protocolos de emergencia.",
  path: "/empresas/retail",
  keywords: ["seguridad retail"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Retail"
        title="Seguridad para retail"
        description="Protección de tiendas, personal y protocolos de emergencia."
        bullets={["Protecci\u00f3n de staff", "Siniestros", "Coordinaci\u00f3n r\u00e1pida"]}
        ctaLabel="Solicitar demo"
        ctaHref="/demo"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
