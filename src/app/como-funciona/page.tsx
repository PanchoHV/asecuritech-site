import { SectionShell } from "@/components/section-shell";

export default function Page() {
  return (
    <SectionShell
      eyebrow="Proceso"
      title="Cómo funciona Asecuritech"
      description="Explica el flujo Activación → Orquestación → Respuesta y la diferencia frente a WhatsApp o apps pasivas."
    >
      <div className="card-surface rounded-3xl p-8 text-white/75">
        <p>Aquí construiremos la explicación visual completa del sistema.</p>
      </div>
    </SectionShell>
  );
}
