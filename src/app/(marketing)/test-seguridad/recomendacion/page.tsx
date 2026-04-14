import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Recomendación de seguridad",
  description: "Ruta preparada para recomendaciones dinámicas posteriores al test.",
  path: "/test-seguridad/recomendacion"
});

export default function RecommendationPage() {
  return (
    <main className="section-space">
      <div className="container-page max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Recomendación personalizada</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Aquí luego conectaremos recomendaciones por segmento, CRM, remarketing y CTA condicionales.
        </p>
      </div>
    </main>
  );
}
