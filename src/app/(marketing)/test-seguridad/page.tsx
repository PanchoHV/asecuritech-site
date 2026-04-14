import { buildMetadata } from "@/lib/metadata";
import TestSecurityForm from "@/components/test/TestSecurityForm";

export const metadata = buildMetadata({
  title: "Test de seguridad",
  description:
    "Funnel neuroconversivo para evaluar percepción de riesgo, vulnerabilidad y activar acción inmediata.",
  path: "/test-seguridad",
  keywords: ["test de seguridad", "botón de pánico Ecuador", "seguridad familiar app"]
});

export default function TestPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Para qué sirve este test?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sirve para que el usuario visualice su nivel de vulnerabilidad actual y evalúe si necesita una solución de protección más robusta."
        }
      },
      {
        "@type": "Question",
        name: "¿El resultado reemplaza una evaluación profesional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Es un mecanismo de concienciación y conversión, no un peritaje técnico."
        }
      }
    ]
  };

  return (
    <main className="section-space">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="inline-flex min-h-[48px] items-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700">
            Funnel clave
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Descubre si hoy estás realmente protegido o solo esperas que nunca te pase nada.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            El objetivo aquí no es adornar. Es confrontar una realidad: si no tienes protocolo, red y respuesta,
            tu nivel de protección puede ser más bajo de lo que crees.
          </p>
        </div>

        <div className="mt-10">
          <TestSecurityForm />
        </div>
      </div>
    </main>
  );
}
