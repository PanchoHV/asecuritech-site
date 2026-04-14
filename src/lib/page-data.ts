export type PageBlock = {
  title: string;
  description: string;
};

export const commonProblems: PageBlock[] = [
  {
    title: "Respuesta fragmentada",
    description:
      "La gente pide ayuda por varios canales, pero no existe una capa que ordene la respuesta."
  },
  {
    title: "Pérdida de contexto",
    description:
      "Cuando ocurre un incidente, ubicación, identidad y urgencia se pierden en segundos críticos."
  },
  {
    title: "Cero trazabilidad",
    description:
      "Sin datos operativos es imposible mejorar procesos, justificar inversión o activar remarketing inteligente."
  }
];

export const commonSolutions: PageBlock[] = [
  {
    title: "Activación inmediata",
    description:
      "Botón de pánico, rutas, geolocalización y workflows claros para acelerar una primera respuesta."
  },
  {
    title: "Inteligencia operativa",
    description:
      "SentinelOS organiza alertas, prioriza señales y construye una vista de decisión más accionable."
  },
  {
    title: "Medición y optimización",
    description:
      "Tracking y datos para entender qué convierte, qué reduce fricción y dónde se pierde intención."
  }
];
