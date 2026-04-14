import { buildMetadata } from "@/lib/metadata";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacto comercial, soporte y consultas sobre protección, integraciones o despliegues institucionales.",
  path: "/contacto"
});

export default function ContactPage() {
  return (
    <main className="section-space">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="prose-copy">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contacto</h1>
          <p>
            Aquí centralizamos ventas, soporte y conversaciones estratégicas. Luego podemos separar flujos
            por B2C, B2B, B2G e integradores.
          </p>
          <h2>Canales actuales</h2>
          <p>WhatsApp, correo, formulario y agenda de demo.</p>
          <h2>Objetivo real</h2>
          <p>Reducir fricción para iniciar conversación, clasificar intención y empujar siguiente paso.</p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
