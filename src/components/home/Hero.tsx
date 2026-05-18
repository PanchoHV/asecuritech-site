import Link from "next/link";

const heroImage =
  "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Generated%20Image%20April%2014%2C%202026%20-%206_24PM.webp";
const heroImageMobile =
  "https://pub-dc06325214ac4e9a8959030cf5f65654.r2.dev/optimized-Disen%CC%83o%20sin%20ti%CC%81tulo%20%281%29.webp";

export default function Hero() {
  return (
    <section className="home-dark-section relative overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-[center_top] hero-background-safe sm:bg-center"
        style={{ backgroundImage: `url("${heroImageMobile}")` }}
      />
      <div
        className="absolute inset-0 hidden bg-no-repeat bg-center hero-background-safe sm:block"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,20,0.9)_0%,rgba(10,14,20,0.82)_30%,rgba(10,14,20,0.74)_62%,rgba(10,14,20,0.86)_100%)] sm:bg-[linear-gradient(90deg,rgba(10,14,20,0.94)_0%,rgba(10,14,20,0.82)_34%,rgba(10,14,20,0.56)_58%,rgba(10,14,20,0.72)_100%)]" />
      <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-[#22D3EE]/20 blur-3xl sm:-left-10 sm:top-12 sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-52 w-52 rounded-full bg-[#FF6B00]/20 blur-3xl sm:-right-12 sm:bottom-12 sm:h-64 sm:w-64" />

      <div className="container-page relative py-10 sm:py-12 lg:py-10">
        <div className="grid items-center gap-8 sm:gap-8 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl rounded-[28px] border border-white/12 bg-[linear-gradient(150deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_42%,rgba(255,255,255,0.03)_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.36)] backdrop-blur-md sm:p-6 lg:p-7">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-100 sm:mb-4 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Infraestructura activa en entornos reales • Respuesta coordinada en segundos
            </p>

            <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white [text-wrap:balance] sm:text-[2.7rem] sm:leading-[1.05] lg:text-[3.1rem]">
              Protege a tu familia, tu equipo y tu operacion con respuesta coordinada en tiempo real.
            </h1>

            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-100/95 sm:mt-4 sm:text-[1.05rem] sm:leading-7 lg:text-[1.1rem]">
              Asecuritech conecta alertas, personas y operaciones para actuar mas rapido, reducir riesgos y proteger lo que mas importa.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-6 sm:gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="inline-flex w-full min-h-[52px] items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#0B63E5_0%,#0052CC_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_34px_rgba(0,82,204,0.34)] ring-1 ring-white/20 transition-all hover:translate-y-[-1px] hover:brightness-110 hover:shadow-[0_18px_42px_rgba(0,82,204,0.42)] sm:min-h-[56px] sm:w-auto"
              >
                Solicitar demo
              </Link>

              <Link
                href="/personas"
                className="inline-flex w-full min-h-[52px] items-center justify-center rounded-2xl border border-[#FF9A4D]/40 bg-[linear-gradient(180deg,#FF8A2A_0%,#FF6B00_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_34px_rgba(255,107,0,0.32)] ring-1 ring-white/15 transition-all hover:translate-y-[-1px] hover:brightness-110 hover:shadow-[0_18px_42px_rgba(255,107,0,0.4)] sm:min-h-[56px] sm:w-auto"
              >
                Proteger a mi familia
              </Link>
            </div>

            <p className="mt-3 text-xs font-medium tracking-[0.08em] text-slate-300/90 sm:text-[0.8rem]">
              Tecnologia propia + protocolo humano: menos ruido, mas accion.
            </p>

            <div className="mt-5 hidden gap-3 sm:mt-6 sm:grid sm:grid-cols-3">
              <div className="home-signal-card">
                <p className="home-signal-value">Infraestructura activa</p>
                <p className="home-signal-label">disenada para entornos reales de operacion y proteccion</p>
              </div>
              <div className="home-signal-card">
                <p className="home-signal-value">Respuesta coordinada</p>
                <p className="home-signal-label">flujo completo desde activacion hasta gestion de incidentes</p>
              </div>
              <div className="home-signal-card">
                <p className="home-signal-value">Arquitectura unificada</p>
                <p className="home-signal-label">una sola logica para personas, familias y operaciones</p>
              </div>
            </div>

            <p className="mt-4 hidden max-w-2xl text-sm leading-7 text-slate-400 sm:hidden sm:text-base">
              Desde hogares hasta operaciones distribuidas, Asecuritech convierte una alerta en accion real cuando el tiempo importa.
            </p>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
