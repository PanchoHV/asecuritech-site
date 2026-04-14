import PageIntro from "@/components/sections/PageIntro";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import { commonProblems, commonSolutions } from "@/lib/page-data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Seguridad de datos",
  description: "Explicación de principios de tratamiento, privacidad y seguridad.",
  path: "/tecnologia/seguridad-datos",
  keywords: ["seguridad datos ecuador"]
});

export default function Page() {
  return (
    <main>
      <PageIntro
        eyebrow="Seguridad de datos"
        title="Seguridad de datos"
        description="Explicación de principios de tratamiento, privacidad y seguridad."
        bullets={["LOPDP", "Trazabilidad", "Principios de protecci\u00f3n"]}
        ctaLabel="Hablar con el equipo"
        ctaHref="/contacto"
      />
      <Problem items={commonProblems} />
      <Solution items={commonSolutions} />
    </main>
  );
}
