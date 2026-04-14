import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Segmentation from "@/components/sections/Segmentation";
import CTA from "@/components/sections/CTA";
import AnalyticsBoundary from "@/components/AnalyticsBoundary";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Asecuritech HUB",
  description:
    "Hub comercial que conecta Zephira, SentinelOS, integraciones, blog y funnels de adquisición.",
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <AnalyticsBoundary />
      <Hero
        eyebrow="Plataforma madre"
        title="Seguridad inteligente para personas, empresas, gobiernos e integradores."
        description="Asecuritech no es solo una web. Es una arquitectura de adquisición, conversión y posicionamiento para vender protección B2C, generar pipeline B2B y abrir puerta B2G."
        primaryCta={{ label: "Haz el test de seguridad", href: "/test-seguridad" }}
        secondaryCta={{ label: "Solicitar demo", href: "/demo" }}
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
      <Segmentation />
      <CTA
        title="Arranca con subrutas hoy. Escala a productos y dashboards mañana."
        description="La decisión correcta aquí es simple: SEO fuerte, arquitectura clara y velocidad operacional. Sin complejidad prematura."
        primary={{ label: "Explorar Zephira", href: "/zephira" }}
        secondary={{ label: "Explorar SentinelOS", href: "/sentinelos" }}
      />
    </main>
  );
}
