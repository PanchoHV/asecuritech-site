# ⚡ Quick Reference - Asecuritech

Guía de referencia rápida para operaciones comunes.

## 🚀 Inicio del Día

```bash
# Actualizar develop
git checkout develop
git pull origin develop

# Crear rama para trabajar
git checkout -b feature/nombre-descriptivo

# Instalar dependencias (primera vez)
npm install

# Iniciar servidor de desarrollo
npm run dev
# Acceso: http://localhost:3000
```

## ✍️ Commits

### Estructura Básica

```bash
# Opción 1: Commit simple
git commit -m "feat(components): agregar nuevo botón"

# Opción 2: Commit con descripción
git commit -m "fix(forms): validación de email

- Agregar regex para email
- Mejorar mensaje de error
- Agregar tests"

# Opción 3: Trabajo compartido con Codex
git commit -m "feat(pages): nueva sección de blog

Co-authored-by: Codex <codex@openai.com>"
```

### Tipos Rápidos

- `feat:` Nueva feature
- `fix:` Bug fix
- `refactor:` Refactor
- `docs:` Documentación
- `chore:` Mantenimiento
- `ci:` CI/CD changes

## 📤 Push & Pull Request

```bash
# Hacer push
git push origin feature/nombre-descriptivo

# GitHub Actions automáticamente validará

# Crear Pull Request en GitHub
# → Assign reviewer
# → Merge cuando pasen checks
```

## 🔍 Validación Pre-Push

```bash
# Lint
npm run lint

# Type checking
npm run typecheck

# Build
npm run build

# Si todo pasa ✓
git push origin [rama]
```

## 📋 Estado del Proyecto

```bash
# Ver cambios
git status

# Ver commits recientes
git log --oneline -10

# Ver ramas disponibles
git branch -a

# Ver cambios sin staging
git diff

# Ver cambios en staging
git diff --staged
```

## 🔄 Merge & Actualización

```bash
# Traer cambios desde remote
git fetch origin

# Actualizar develop local desde remote
git checkout develop
git pull origin develop

# Rebase tu rama feature sobre develop actualizado
git checkout feature/tu-rama
git rebase develop

# Si hay conflictos, resolverlos y:
git add .
git rebase --continue
```

## 🐛 Rollback

```bash
# Deshacer cambios locales no committed
git checkout -- archivo.tsx

# Deshacer commits (crear commit de revert)
git revert <commit-hash>

# Deshacer último commit (sin publicado)
git reset --soft HEAD~1

# Ver commit anterior
git show HEAD~1
```

## 🌳 Ramas

```bash
# Crear rama
git checkout -b feature/descripcion

# Cambiar de rama
git checkout nombre-rama

# Eliminar rama local
git branch -d nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama

# Listar ramas
git branch -a
```

## 📦 Dependencias

```bash
# Instalar todas
npm install

# Instalar nueva dependencia
npm install nombre-paquete

# Actualizar dependencias
npm update

# Ver installed packages
npm list
```

## 🛠️ Desarrollo

```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Lint todos los archivos
npm run lint

# TypeScript check
npm run typecheck
```

## 🌐 Vercel (Preview/Producción)

```bash
# Ver logs en tiempo real
vercel logs --follow

# Deploy manual a preview
vercel

# Deploy a producción (desde main)
git push origin main
# Vercel deployará automáticamente
```

## 📍 Archivos Importantes

| Archivo | Uso |
|---------|-----|
| `COMMIT_CONVENTION.md` | 📝 Leer si no sabes cómo hacer commit |
| `CODEX_WORKFLOW.md` | 🤖 Si trabajas con Codex |
| `SETUP_VALIDATION.md` | ✅ Validar antes de push |
| `PROJECT_STATUS.md` | 📊 Estado completo del proyecto |
| `vercel.json` | ⚙️ Configuración Vercel |
| `.env.example` | 🔐 Variables necesarias |

## 💡 Tips Útiles

```bash
# Alias útil en .gitconfig
# Alias para git log bonito
git config --global alias.lg "log --oneline --graph --all"
git lg

# Ver cambios entre ramas
git diff develop feature/tu-rama

# Stash temporalmente cambios
git stash
git stash pop

# Buscar en commit messages
git log --grep="palabra clave"

# Ver quién cambió qué línea
git blame archivo.tsx
```

## 🚨 SOS

```bash
# ¿Rompí todo localmente?
git reset --hard origin/develop

# ¿Subí al branch equivocado?
git revert <commit-hash>
git push

# ¿Olvidé agregar un archivo al commit?
git add archivo-olvidado.tsx
git commit --amend --no-edit
git push --force-with-lease  # ⚠️ Solo en ramas propias
```

## 📞 Contacto de Referencia

- **Conventional Commits**: https://www.conventionalcommits.org/
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **GitHub**: https://github.com

---

**Ultima actualización**: 18 de mayo de 2026
**Próxima consulta**: Cuando necesites refresca la memoria 🧠
