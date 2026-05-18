# ✅ Setup & Validación de Proyecto

## Checklist de Setup Inicial

### 1. Configuración Local

```bash
# Clonar repo
git clone <tu-repo-url>
cd Asecuritech

# Instalar dependencies
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con valores reales
```

### 2. Verificar Node Version

```bash
node --version  # Debe ser v22.x (configurado en vercel.json)
npm --version   # 10.x o superior
```

### 3. Variables de Entorno Necesarias

En `.env.local` (no se commitea):

```
# GTM (Google Tag Manager)
NEXT_PUBLIC_GTM_ID=G-XXXXXXXXXX

# Integración WhatsApp
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/...

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/...

# Meta Pixel (Facebook)
NEXT_PUBLIC_META_PIXEL_ID=...

# URL del sitio
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Scripts Disponibles

```bash
# Desarrollo (con Turbopack - más rápido)
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Validar ESLint
npm run lint

# Validar TypeScript
npm run typecheck

# Build + typecheck + lint (validación completa)
npm run build && npm run typecheck && npm run lint
```

## Validación Antes de Commits

### Pre-commit Checklist

```bash
# 1. Ejecutar linter
npm run lint

# 2. Type checking
npm run typecheck

# 3. Build test
npm run build

# 4. Revisar cambios
git status

# 5. Verfificar .env no esté en staging
git diff --cached | grep "\.env"  # No debe retornar nada

# Si todo pasó ✓
git commit -m "tipo(scope): descripción"
```

### Script Automático (opcional - guardar como `validate.sh`)

```bash
#!/bin/bash
set -e

echo "🔍 Iniciando validación pre-commit..."

echo "1️⃣  ESLint..."
npm run lint || exit 1

echo "2️⃣  TypeScript..."
npm run typecheck || exit 1

echo "3️⃣  Build..."
npm run build || exit 1

echo "✅ Validación exitosa. Listo para commit"
```

Uso:
```bash
chmod +x validate.sh
./validate.sh
```

## Troubleshooting Común

### Error: "Cannot find module '@next/third-parties'"

```bash
npm install
npm run build
```

### Turbopack no funciona

```bash
npm run dev -- --no-turbo  # Usa webpack en su lugar
```

### TypeScript errors pero código se ve bien

```bash
# Limpiar cache de TypeScript
rm -rf .next
npm run typecheck
```

### ESLint complains de archivos generados

Los archivos generados por Next.js en `.next/` se ignoran automáticamente.

## Configuración de IDE (VS Code)

### Extensiones Recomendadas

```json
// .vscode/extensions.json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "unifiedjs.vscode-mdx",
    "ms-playwright.test-explorer"
  ]
}
```

### Settings (`.vscode/settings.json`)

```json
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.validate": ["javascript", "typescript", "typescriptreact"],
  "files.exclude": {
    "node_modules": true,
    ".next": true,
    ".vercel": true
  }
}
```

## Verificación de Vercel Integration

### 1. Conectar con Vercel

```bash
# Si no está conectado
npm i -g vercel
vercel --version

# Conectar proyecto a Vercel
vercel
```

### 2. Verificar variables en Vercel Console

1. Ir a https://vercel.com
2. Seleccionar proyecto
3. Settings → Environment Variables
4. Confirmar que todas las `NEXT_PUBLIC_*` están configuradas

### 3. Hacer deploy de prueba

```bash
# Preview deploy
git push origin feature/test
# Vercel generará preview URL

# Producción deploy (solo main)
git checkout main
git pull
git push origin main  # Vercel desplegará automáticamente
```

## Monitoreo de Builds

### Ver logs de Vercel

```bash
vercel logs  # Ver últimos deploys
vercel logs --follow  # Ver en tiempo real
```

### Troubleshoot en Vercel

Si hay errores de build en Vercel pero funciona localmente:

1. Verificar `node_modules` está en `.gitignore` ✓
2. Verificar `.next` está en `.gitignore` ✓
3. Limpiar y reinstalar:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

## Health Check del Proyecto

```bash
# Ejecutar después de cualquier cambio importante
npm run typecheck && npm run lint && npm run build

# Si todo es verde ✓
echo "✅ Proyecto saludable"

# Si hay error, procura que sea:
# - TypeScript strict mode
# - ESLint rules
# - Build optimizations
```

## Documentación de Referencia

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Estado**: ✅ Proyecto listo para producción
**Última validación**: 18 de mayo de 2026
