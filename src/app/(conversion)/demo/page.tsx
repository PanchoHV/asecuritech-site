import { buildMetadata } from "@/lib/metadata";
import ContactForm from "@/components/forms/ContactForm";
import Button from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Solicitar demo",
  description:
    "Agenda una demostración de SentinelOS o conversa sobre despliegues para empresas, gobierno o integradores.",
  path: "/demo"
});

export default function DemoPage() {
  return (
    <main className="section-space">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="inline-flex min-h-[48px] items-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700">
            Conversión B2B / B2G
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Solicita una demo y conversemos sobre operación, integración y despliegue.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Esta página está pensada para convertir pipeline real. Luego la conectamos a CRM,
            Calendly y secuencias de seguimiento.
          </p>
          <div className="mt-8">
            <Button href="/contacto" variant="secondary">Ir a contacto</Button>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
