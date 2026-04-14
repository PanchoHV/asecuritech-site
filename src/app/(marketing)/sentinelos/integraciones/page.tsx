import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Integraciones SentinelOS",
  description: "APIs, SDKs y conectores para partners e integradores.",
  path: "/sentinelos/integraciones",
  keywords: ["api seguridad"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Integraciones"
        title="Integraciones SentinelOS"
        description="APIs, SDKs y conectores para partners e integradores."
        bullets={["APIs", "SDKs", "Webhooks y eventos"]}
        ctaLabel="Hablar con ventas"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
