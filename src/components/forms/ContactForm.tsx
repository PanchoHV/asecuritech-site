"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/tracking";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="card"
      onSubmit={(event) => {
        event.preventDefault();
        trackEvent("contact_form_submit", { source: "contact_page" });
        setSubmitted(true);
      }}
    >
      <h2 className="text-2xl font-semibold">Hablemos</h2>
      <p className="mt-2 text-sm text-slate-600">
        Formulario demo para captación. Luego se conecta a HubSpot o GoHighLevel.
      </p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-medium">Nombre</span>
          <input required className="min-h-[48px] rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Correo</span>
          <input type="email" required className="min-h-[48px] rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-950" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium">Mensaje</span>
          <textarea required rows={5} className="rounded-xl border border-slate-300 p-4 outline-none focus:border-slate-950" />
        </label>
        <button
          type="submit"
          className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white"
        >
          Enviar solicitud
        </button>
      </div>

      {submitted ? (
        <p className="mt-4 text-sm font-medium text-green-700">
          Listo. Este envío es demo visual. Luego lo conectamos al CRM real.
        </p>
      ) : null}
    </form>
  );
}
