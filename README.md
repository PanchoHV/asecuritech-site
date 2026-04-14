# Asecuritech Site Architecture v3

Arquitectura base final para lanzar el hub comercial de Asecuritech con enfoque en:
- SEO técnico
- conversión B2C / B2B / B2G
- tracking
- test interactivo
- blog
- estructura lista para GitHub + Vercel

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GTM nativo con `@next/third-parties/google`

## Inicio rápido

```bash
npm install
npm run dev
```

Abre:
```bash
http://localhost:3000
```

## Variables recomendadas
Crea `.env.local` si luego quieres reemplazar placeholders:

```bash
NEXT_PUBLIC_SITE_URL=https://asecuritech.com
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/593998913384
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-demo
NEXT_PUBLIC_META_PIXEL_ID=
```

## Arquitectura
- `/` Hub principal
- `/zephira` producto B2C
- `/sentinelos` producto core B2B/B2G
- `/empresas`, `/gobierno`, `/integradores`, `/tecnologia`
- `/test-seguridad` funnel interactivo
- `/demo`, `/contacto`
- `/blog` con categorías y posts mock
- `/legal/*`

## Nota
Esta base ya deja la estructura final del sitio, pero todavía usa contenido placeholder estratégico.
