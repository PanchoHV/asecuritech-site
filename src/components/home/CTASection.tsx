import Link from "next/link";

export default function CTASection() {
  return (
    <section className="home-dark-section relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_34%),linear-gradient(180deg,#0A0E14,#0F172A)]" />
      <div className="container-page relative">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.05] px-6 py-12 text-center shadow-2xl sm:px-10">
          <p className="home-section-eyebrow justify-center">Siguiente paso</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Cuando ocurre una emergencia, el tiempo decide el resultado.
            
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Explora como Asecuritech puede ayudarte a proteger a tu familia, tu equipo o tu operacion con una sola logica de respuesta.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="home-primary-btn inline-flex min-h-[56px] items-center justify-center rounded-2xl px-6 text-base font-semibold text-white"
            >
              Solicitar demo
            </Link>
            <Link
              href="/personas"
              className="inline-flex min-h-[56px] items-center justify-center rounded-2xl border border-[#ff8a7a] bg-[#ff6347] px-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(255,99,71,0.28)] transition-all hover:translate-y-[-1px] hover:bg-[#ff5538] hover:shadow-[0_16px_36px_rgba(255,99,71,0.38)]"
            >
              Explorar proteccion familiar
            </Link>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Inicia una conversacion con nuestros asesores para entender tu escenario y orientarte al siguiente paso correcto.
          </p>
        </div>
      </div>
    </section>
  );
}
