# 🚀 Instrucciones del Proyecto CoraWeb

## 📍 Ubicación del Proyecto
Tu proyecto Next.js está ahora completamente integrado en la carpeta `CoraWeb/` que ya tienes conectada con GitHub.

## 🛠️ Comandos Principales

### Desarrollo
```bash
cd CoraWeb
npm run dev
```
El proyecto estará disponible en: http://localhost:3000

### Build de Producción
```bash
npm run build
```

### Iniciar Servidor de Producción
```bash
npm run start
```

### Linting y Formato
```bash
npm run lint          # Verificar código
npm run lint:fix      # Corregir errores automáticamente
npm run format        # Formatear código con Prettier
npm run type-check    # Verificar tipos TypeScript
```

## 📁 Estructura del Proyecto

```
CoraWeb/
├── src/                    # Código fuente
│   ├── app/               # App Router de Next.js
│   │   ├── blog/          # Página del blog
│   │   ├── resources/     # Página de recursos
│   │   ├── contact/       # Página de contacto
│   │   ├── globals.css    # Estilos globales
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página de inicio
│   └── components/        # Componentes reutilizables
├── public/                # Archivos estáticos
├── img/                   # Tus imágenes existentes
├── CORA Business Website.pdf  # Tu documento de negocio
├── LICENSE                # Licencia del proyecto
└── .git/                  # Repositorio Git existente
```

## 🎨 Personalización

### Colores (en `tailwind.config.ts`)
- `--color-bg`: #FAF9F7 (fondo claro)
- `--color-text`: #1A1A1A (texto principal)
- `--color-accent`: #7A1E2D (burdeos)
- `--color-muted`: #6B7280 (gris medio)

### Fuentes
- **Encabezados**: Playfair Display (serif elegante)
- **Cuerpo**: Inter (sans-serif moderna)

## 🔧 Configuración

### Next.js (`next.config.js`)
- Optimizado para Vercel
- Configuración de imágenes
- Optimizaciones de performance

### TypeScript (`tsconfig.json`)
- Configuración estricta
- Paths personalizados (@/*)
- Compatible con Next.js 14

### ESLint + Prettier
- Reglas específicas para Next.js
- Formato de código consistente
- Integración con TypeScript

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecta tu repositorio `CoraWeb` a Vercel
2. El proyecto se desplegará automáticamente
3. Configura tu dominio personalizado

### Otros Proveedores
- Netlify
- Railway
- AWS Amplify

## 📱 Páginas Disponibles

- **/** - Home con Hero, categorías y herramientas
- **/blog** - Listado de artículos con filtros
- **/resources** - Catálogo de herramientas
- **/contact** - Formulario de contacto

## 🧩 Componentes Principales

- **Header** - Navegación responsive
- **Footer** - Información de contacto
- **CardCategoria** - Categorías destacadas
- **CardTema** - Temas y colecciones
- **CardHerramienta** - Herramientas y recursos
- **TeaserArticulo** - Vista previa de artículos
- **BannerNewsletter** - Suscripción al newsletter

## 🔄 Flujo de Trabajo

1. **Desarrollo**: `npm run dev`
2. **Testing**: `npm run build`
3. **Commit**: `git add . && git commit -m "mensaje"`
4. **Push**: `git push origin main`
5. **Deploy**: Automático en Vercel

## 📈 Próximos Pasos

1. **Personalizar contenido**:
   - Cambiar textos y datos mock
   - Ajustar colores si es necesario
   - Agregar tu logo real

2. **Integrar CMS**:
   - Sanity o Contentful
   - Reemplazar datos mock

3. **Configurar dominio**:
   - Conectar a Vercel
   - Configurar DNS

4. **Analytics**:
   - Google Analytics 4
   - Métricas de performance

## 🆘 Solución de Problemas

### Error de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de build
```bash
npm run build
npm run type-check
```

### Problemas de ESLint
```bash
npm run lint:fix
```

## 📞 Soporte

- **Documentación**: README.md
- **Issues**: GitHub Issues
- **Comunidad**: Next.js Discord

---

¡Tu proyecto CoraWeb está listo para usar! 🎉
