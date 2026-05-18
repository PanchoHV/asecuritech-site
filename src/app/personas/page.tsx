import { SectionShell } from "@/components/section-shell";

export default function Page() {
  return (
    <SectionShell
      eyebrow="B2C"
      title="Protección para personas y familias"
      description="Esta página funciona como laboratorio comercial para validar demanda real, no como producto inflado."
    >
      <div className="card-surface rounded-3xl p-8 text-white/75">
        <p>Aquí construiremos el funnel de validación con planes visibles, intento de activación, formulario y mensaje de cobertura futura con incentivo del 50% OFF.</p>
      </div>
    </SectionShell>
  );
}
