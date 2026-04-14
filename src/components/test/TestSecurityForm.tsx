"use client";

import { useMemo, useState } from "react";
import { trackEvent } from "@/lib/tracking";

const questions = [
  {
    id: "night",
    label: "¿Te mueves solo o sola de noche con frecuencia?",
  },
  {
    id: "children",
    label: "¿Tus hijos o familiares se desplazan sin acompañamiento constante?",
  },
  {
    id: "network",
    label: "¿Dependerías solo de WhatsApp para pedir ayuda?",
  },
  {
    id: "signal",
    label: "¿Tienes claro qué harías si te quedas sin señal o sin batería?",
  }
];

export default function TestSecurityForm() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, item) => total + (answers[item.id] ? 25 : 0), 0);
  }, [answers]);

  const result = useMemo(() => {
    if (score >= 75) {
      return {
        level: "ALTO",
        protection: "BAJO",
        probability: "23%",
        estimatedResponse: "desconocido"
      };
    }
    if (score >= 50) {
      return {
        level: "MEDIO",
        protection: "INTERMEDIO",
        probability: "46%",
        estimatedResponse: "inestable"
      };
    }
    return {
      level: "CONTROLADO",
      protection: "ACEPTABLE",
      probability: "68%",
      estimatedResponse: "parcialmente definido"
    };
  }, [score]);

  return (
    <div id="test" className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
      <form
        className="card"
        onSubmit={(event) => {
          event.preventDefault();
          trackEvent("test_completed", { score, result: result.level });
          setSubmitted(true);
        }}
      >
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Fase 1 · identificación
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            ¿Te ha pasado esto?
          </h2>
        </div>

        <div className="mt-6 grid gap-4">
          {questions.map((question) => (
            <label key={question.id} className="rounded-2xl border border-slate-200 p-4">
              <span className="block text-base font-medium">{question.label}</span>
              <select
                required
                className="mt-3 min-h-[48px] w-full rounded-xl border border-slate-300 px-4"
                onChange={(event) => {
                  if (!submitted) {
                    trackEvent("test_answered", { question: question.id });
                  }
                  setAnswers((current) => ({
                    ...current,
                    [question.id]: event.target.value === "yes"
                  }));
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una respuesta
                </option>
                <option value="yes">Sí</option>
                <option value="no">No</option>
              </select>
            </label>
          ))}
        </div>

        <button
          type="submit"
          onClick={() => trackEvent("test_started", { source: "test-seguridad" })}
          className="mt-6 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-semibold text-white"
        >
          Ver resultado
        </button>
      </form>

      <aside className="card bg-slate-950 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
          Fase 2 · vulnerabilidad + tensión
        </p>
        <h3 className="mt-3 text-2xl font-semibold">
          Resultado de riesgo
        </h3>

        {submitted ? (
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">Nivel de riesgo</p>
              <p className="mt-1 text-3xl font-semibold">{result.level}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">Nivel de protección</p>
              <p className="mt-1 text-2xl font-semibold">{result.protection}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">Probabilidad de respuesta efectiva</p>
              <p className="mt-1 text-2xl font-semibold">{result.probability}</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-slate-300">Tiempo estimado de ayuda</p>
              <p className="mt-1 text-2xl font-semibold">{result.estimatedResponse}</p>
            </div>
            <a
              href="/zephira/descargar"
              className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-950"
            >
              Activa tu protección ahora
            </a>
          </div>
        ) : (
          <div className="mt-6 space-y-4 text-slate-300">
            <p>¿Cuánto tiempo tardarías en pedir ayuda?</p>
            <p>¿Tienes una red real o solo WhatsApp?</p>
            <p>¿Qué pasa si no tienes señal?</p>
            <p className="pt-6 text-xl font-semibold text-white">
              El objetivo de este funnel no es asustar por gusto. Es empujar una decisión.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
