import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Política de cookies",
  description: "Política de cookies de Asecuritech con enfoque en transparencia y cumplimiento.",
  path: "/legal/cookies"
});

export default function LegalPage() {
  return (
    <main className="section-space">
      <div className="container-page max-w-4xl prose-copy">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Política de cookies</h1>
        <p>
          Texto base temporal. Aquí irá la versión legal definitiva alineada a la Ley Orgánica de Protección
          de Datos Personales de Ecuador y al modelo operativo final del producto.
        </p>
        <h2>Uso del contenido</h2>
        <p>
          Esta arquitectura existe para que luego podamos reemplazar texto placeholder sin cambiar estructura.
        </p>
        <h2>Próximo paso</h2>
        <p>
          Redactar versión legal real con alcance de datos, consentimiento, finalidades, cookies y canales ARCO.
        </p>
      </div>
    </main>
  );
}
