import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-space">
      <div className="container-page max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">Página no encontrada</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Esta ruta todavía no existe o la URL fue escrita con error.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
