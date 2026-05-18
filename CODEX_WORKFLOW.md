# 🤖 Guía de Trabajo Simultáneo: Pancho + Codex

Este documento establece el protocolo para trabajar coordinadamente en Asecuritech manteniendo la integridad del código y facilitando commits limpios.

## Principios

1. **Cambios organizados por scope** - Cada sesión de trabajo debe enfocarse en un scope específico
2. **Commits atómicos** - Un commit = una funcionalidad/fix completo
3. **Comunicación a través de comentarios de código** - Marcadores para Codex/Pancho
4. **Rama de trabajo clara** - Siempre en `feature/*` o `bugfix/*`, nunca directamente en `main`/`develop`

## Workflow

### Antes de Empezar

```bash
# 1. Asegurar estar en develop actualizado
git checkout develop
git pull origin develop

# 2. Crear rama de feature
git checkout -b feature/descripcion-clara
```

### Durante el Trabajo (Pancho)

Cuando abras Codex o trabajes simultáneamente:

1. **Documenta cambios previstos**:
   ```
   // TODO: [PANCHO] Implementar validación en email
   // [CODEX] Generará componente de input reutilizable
   // Status: In Progress
   ```

2. **Mantén Codex informado**:
   ```typescript
   // [CODEX-CONTEXT]
   // Working on: components/forms/ContactForm.tsx
   // Dependencies: lib/crm.ts (envío de datos)
   // Keep consistent with: SegmentSelector.tsx pattern
   ```

### Durante el Trabajo (Codex)

3. **Confirma contexto**:
   ```typescript
   // [IMPLEMENTED-BY] Codex
   // [REVIEW-BY] Pancho
   // [RELATED] components/SegmentSelector.tsx
   ```

## Estructura de Commits Coordinados

### Ejemplo 1: Feature Completo

```bash
# Cambios hechos por ambos
git add src/components/forms/ContactForm.tsx
git add src/lib/crm.ts
git add src/components/ui/FormInput.tsx

git commit -m "feat(forms): agregar validación mejorada en contacto

- Componente FormInput reutilizable con validaciones
- Integración con lib/crm para envío de datos
- Estilos consistentes con Tailwind theme

Co-authored-by: Codex <codex@openai.com>"
```

### Ejemplo 2: Refactorización

```bash
git commit -m "refactor(components): extraer lógica de validación en hook

BREAKING CHANGE: ContactForm ahora usa useFormValidation

Co-authored-by: Pancho, Codex <codex@openai.com>"
```

## Marcadores de Código para Coordinación

### Para Pancho indicar a Codex:

```typescript
// [CODEX-TODO]: Implementar campo de teléfono con validación
// [CODEX-REFACTOR]: Este código se puede mejorar con custom hook
// [CODEX-GENERATE]: Crear componente LoadingState reutilizable
```

### Para Codex indicar a Pancho:

```typescript
// [REVIEW]: Validar si el patrón de error es consistente
// [NEEDS-TESTING]: Esta lógica requiere pruebas unitarias
// [DEPENDENCY-ALERT]: Cambio en lib/crm.ts afecta esta sección
```

## Antes de Hacer Push

**Checklist**:

- [ ] Todos los cambios están en una rama `feature/*` o `bugfix/*`
- [ ] Commits siguen Conventional Commits
- [ ] Cambios de Codex + tu nombre en `Co-authored-by`
- [ ] ESLint y TypeScript pasan: `npm run lint && npm run typecheck`
- [ ] Build pasa localmente: `npm run build`
- [ ] No hay archivos `.env` en staging area
- [ ] Comments TODO/FIXME están documentados

```bash
# Validar antes de push
npm run lint
npm run typecheck
npm run build

# Push a rama feature
git push origin feature/descripcion
```

## Proceso de Integración

1. **Crear Pull Request** a `develop`
   - Referencia el feature/scope
   - Lista cambios principales
   - Menciona si es trabajo Pancho + Codex

2. **GitHub Actions automáticamente**:
   - Ejecuta lint
   - Ejecuta typecheck
   - Verifica build

3. **Vercel genera Preview URL**:
   - Acceder para validar cambios

4. **Merge a develop**:
   - Vercel deploy automático a staging

5. **Merge a main cuando esté listo**:
   - Vercel deploy automático a producción

## Archivos que NO Deben Commitearse

Estos ya están en `.gitignore`:

```
.env          # Variables locales
.env.local    # Valores específicos del dev
.next         # Build output
node_modules  # Dependencies
.vercel       # Cache Vercel
.DS_Store     # macOS
```

## Sincronización Entre Sesiones

Si trabajáis en momentos diferentes:

```bash
# Pancho termina sesión
git push origin feature/descripcion

# Codex retoma el trabajo
git fetch origin
git checkout feature/descripcion
git pull origin feature/descripcion
# Continuar trabajando...
```

## Comunicación a través de Git

### Commits informativos para Codex:

```bash
git commit -m "chore: preparar componentes para validación

[CODEX-READY] Los siguientes archivos están listos para editar:
- src/components/forms/ContactForm.tsx
- src/lib/crm.ts

[CODEX-CONTEXT]
- Usuario tiene sesión activa
- Cambios basados en feedback de testing
- Revisar COMMIT_CONVENTION.md si hay duda"
```

### Commits informativos para Pancho:

```bash
git commit -m "feat(forms): implementación de validaciones

[IMPLEMENTATION] Codex completó:
- ✓ Validación de email mejorada
- ✓ Manejo de errores en submit
- ✓ Integración con CRM

[NEXT-STEPS]
- Testing de casos edge (email inválido, timeout)
- Revisar UX del error message
- Posible A/B testing de CTA"
```

## Troubleshooting

### Conflictos de merge

```bash
# Si hay conflicto
git merge develop
# Resolver conflictos en archivos
git add .
git commit -m "fix: resolver conflictos de merge"
git push origin feature/descripcion
```

### Revertir commits

```bash
# Si algo salió mal
git revert <commit-hash>
git push origin feature/descripcion
```

## Resumen Visual

```
main (producción) ← merge cuando esté listo
  ↑
  ├─ GitHub Actions: lint, typecheck, build ✓
  └─ Vercel: deploy automático
  
develop (staging) ← merge de feature
  ↑
  ├─ GitHub Actions: lint, typecheck, build ✓
  └─ Vercel: deploy automático a preview
  
feature/descripcion ← tu rama de trabajo
  ├─ Commit 1: feat(scope): descripción [Co-authored]
  ├─ Commit 2: fix(scope): bug encontrado
  └─ Commit 3: refactor(scope): mejora
```

---

**Última actualización**: 18 de mayo de 2026
**Próxima revisión**: Después de primer merge a main
