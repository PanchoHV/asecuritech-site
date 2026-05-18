# 📝 Convención de Commits - Asecuritech

Seguimos el estándar de **Conventional Commits** para mantener el historial limpio y facilitar la generación de changelogs.

## Formato

```
<tipo>(<scope>): <descripción corta>

<descripción detallada opcional>

<referencias a issues/PRs>
```

## Tipos de Commit

| Tipo | Descripción | Ejemplo |
|------|-----------|---------|
| **feat** | Nueva funcionalidad | `feat(navbar): agregar menú desplegable` |
| **fix** | Corrección de bug | `fix(forms): validación de email en contacto` |
| **docs** | Cambios en documentación | `docs: actualizar README` |
| **style** | Cambios de formato (no funcionales) | `style(globals): formatear CSS` |
| **refactor** | Refactorización de código | `refactor(components): extraer lógica reutilizable` |
| **perf** | Mejoras de performance | `perf(images): optimizar lazy loading` |
| **test** | Agregar/modificar tests | `test(forms): agregar validaciones` |
| **chore** | Mantenimiento, deps | `chore(deps): actualizar Next.js a 15.2.4` |
| **ci** | Cambios en CI/CD | `ci: agregar workflow de lint` |

## Scopes Principales

- **app** - Archivos en src/app (rutas, layouts)
- **components** - Componentes en src/components
- **lib** - Utilidades en src/lib
- **styles** - Estilos globales y configuración
- **config** - Configuración del proyecto (vercel.json, etc)
- **docs** - Documentación

## Ejemplos Reales

### ✅ Buenos commits:
```
feat(blog): agregar paginación en listado de artículos

- Implementar componente Pagination
- Actualizar query de blog en lib/blog.ts
- Agregar tests para navegación

Closes #123
```

```
fix(contacto): resolver error de validación en formulario
```

```
refactor(components): extraer Button en nuevo componente reutilizable
```

### ❌ Malos commits:
```
fix bug                    # Muy vago
Updates                    # Sin tipo
feat: hice cambios         # Descripción poco clara
```

## Flujo de Ramas

```
main (producción, protegida)
  ↑
  └── develop (staging)
        ↑
        └── feature/* (desarrollo)
             ├── feature/blog-pagination
             ├── feature/nueva-seccion
             └── bugfix/error-formulario
```

## Proceso de Commit

1. **Crear rama**: `git checkout -b feature/descripcion`
2. **Hacer cambios** locales
3. **Commit con formato**: `git commit -m "tipo(scope): descripción"`
4. **Push**: `git push origin feature/descripcion`
5. **Pull Request** a `develop`
6. **Review** (GitHub Actions ejecutará lint/typecheck)
7. **Merge** a `develop`
8. **Deploy a staging** en Vercel automáticamente

## Integración con Vercel

- **Commits a `develop`** → Deploy automático a preview/staging
- **Commits a `main`** → Deploy automático a producción
- **Pull Requests** → Vercel genera preview URL para revisar cambios

## Guía para Codex

Cuando trabajes con **Codex**, usa esta estructura:

```
feat(codex): descripción del cambio

Modificado por: Codex
Revisado por: [Tu nombre]
Scope: [components/app/lib]

Cambios:
- ...
- ...
```
