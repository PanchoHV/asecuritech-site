import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Resultado del test de seguridad",
  description: "Pantalla de resultado para el funnel de riesgo y activación.",
  path: "/test-seguridad/resultado"
});

export default function ResultPage() {
  return (
    <main className="section-space">
      <div className="container-page max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Resultado del test</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Esta ruta queda preparada para una futura versión con persistencia, scoring y personalización.
        </p>
      </div>
    </main>
  );
}
