import { SectionShell } from "@/components/section-shell";

export default function Page() {
  return (
    <SectionShell
      eyebrow="B2B2C"
      title="Programa de aliados"
      description="Canal para distribuidores, empresas de seguridad y esquemas marca blanca."
    >
      <div className="card-surface rounded-3xl p-8 text-white/75">
        <p>Aquí construiremos la propuesta de valor para partners y el CTA “Quiero ser aliado”.</p>
      </div>
    </SectionShell>
  );
}
