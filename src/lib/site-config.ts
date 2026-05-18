export const siteConfig = {
  name: "Asecuritech",
  tagline: "Tecnología que activa respuesta real en segundos.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Empresas", href: "/empresas" },
    { label: "Personas", href: "/personas" },
    { label: "¿Cómo funciona?", href: "/como-funciona" },
    { label: "Aliados", href: "/aliados" },
    { label: "Gobierno", href: "/gobierno" },
    { label: "Contacto", href: "/contacto" },
  ],
  legalNavigation: [
    { label: "Privacidad", href: "/legal/privacidad" },
    { label: "Términos", href: "/legal/terminos" },
  ],
  ctas: {
    primary: {
      label: "Obtener Protección",
      href: "/personas",
    },
    demo: {
      label: "Agendar demo",
      href: "/contacto",
    },
    trial: {
      label: "Probar gratis",
      href: "/personas",
    },
  },
};

export type SiteConfig = typeof siteConfig;
