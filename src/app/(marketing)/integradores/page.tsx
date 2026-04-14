import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Integradores y white-label",
  description: "Oferta B2B2C para terceros que quieren vender seguridad con su propia marca.",
  path: "/integradores",
  keywords: ["white label seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="B2B2C"
        title="Integradores y white-label"
        description="Oferta B2B2C para terceros que quieren vender seguridad con su propia marca."
        bullets={["White-label", "Partners", "APIs"]}
        ctaLabel="Hablar de partnership"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
