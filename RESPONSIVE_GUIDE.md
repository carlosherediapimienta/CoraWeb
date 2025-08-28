# 🎯 GUÍA DE RESPONSIVE DESIGN - CORA Invest

## 📱 **SISTEMA DE BREAKPOINTS**

### Breakpoints Mobile-First
```css
/* Móviles pequeños */
xs: 360px

/* Móviles medianos */
sm: 480px

/* Tablets */
md: 768px

/* Laptops */
lg: 1024px

/* Desktops */
xl: 1440px

/* Pantallas grandes */
2xl: 1920px

/* Ultrawide */
3xl: 2560px
```

## 🎨 **TOKENS DE DISEÑO RESPONSIVOS**

### Variables CSS Fluidas
```css
:root {
  /* Espaciado fluido */
  --space-1: clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem);
  --space-2: clamp(0.5rem, 0.4rem + 0.5vw, 1rem);
  --space-3: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  --space-4: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --space-5: clamp(2rem, 1.6rem + 2vw, 3rem);
  --space-6: clamp(3rem, 2.4rem + 3vw, 4rem);
  --space-8: clamp(4rem, 3.2rem + 4vw, 6rem);
  --space-10: clamp(5rem, 4rem + 5vw, 8rem);
  --space-12: clamp(6rem, 4.8rem + 6vw, 10rem);
  --space-16: clamp(8rem, 6.4rem + 8vw, 14rem);
  --space-20: clamp(10rem, 8rem + 10vw, 18rem);
  
  /* Tipografía fluida */
  --font-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --font-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --font-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --font-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
  --font-3xl: clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem);
  --font-4xl: clamp(2.25rem, 1.9rem + 1.75vw, 3rem);
  --font-5xl: clamp(3rem, 2.5rem + 2.5vw, 4rem);
  --font-6xl: clamp(3.75rem, 3rem + 3.75vw, 5rem);
  --font-7xl: clamp(4.5rem, 3.5rem + 5vw, 6rem);
  --font-8xl: clamp(6rem, 4.5rem + 7.5vw, 8rem);
}
```

### Clases de Utilidad Responsivas
```css
/* Contenedores */
.container-custom {
  width: min(100% - (var(--container-padding) * 2), var(--container-max));
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.container-fluid {
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

/* Secciones responsivas */
.section-responsive {
  padding-block: var(--space-12);
}

.section-responsive-sm {
  padding-block: var(--space-8);
}

.section-responsive-lg {
  padding-block: var(--space-16);
}

.section-responsive-xl {
  padding-block: var(--space-20);
}
```

## 🧩 **PATRONES DE COMPONENTES**

### Grid Responsive
```tsx
// Grid básico responsive
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
  {/* Contenido */}
</div>

// Grid con columnas adaptativas
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
  <div className="lg:col-span-3">Texto (60%)</div>
  <div className="lg:col-span-2">Imagen (40%)</div>
</div>
```

### Imágenes Responsivas
```tsx
<Image
  src="/img/example.jpg"
  alt="Descripción"
  fill
  className="object-cover rounded-3xl"
  priority={isHero} // Solo para imágenes hero
  loading={isHero ? "eager" : "lazy"}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  quality={85}
/>
```

### Tipografía Fluida
```tsx
// Usar clases de Tailwind con tipografía fluida
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
  Título Responsive
</h1>

// O usar variables CSS
<h2 style={{ fontSize: 'var(--font-5xl)' }}>
  Título con CSS Variables
</h2>
```

## 📐 **LAYOUT RESPONSIVE**

### Flexbox Responsive
```tsx
<div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
  <div className="order-2 lg:order-1">Texto</div>
  <div className="order-1 lg:order-2">Imagen</div>
</div>
```

### Aspect Ratio Responsive
```tsx
// Mantener proporciones en diferentes pantallas
<div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-square">
  <Image src="/img/example.jpg" alt="" fill className="object-cover" />
</div>
```

### Espaciado Responsive
```tsx
// Espaciado que se adapta al breakpoint
<div className="p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
  {/* Contenido */}
</div>

// Usar variables CSS
<div className="py-var(--space-12)">
  {/* Contenido */}
</div>
```

## 🎯 **ACCESIBILIDAD RESPONSIVE**

### Skip Links
```tsx
<a href="#main-content" className="skip-link">
  Saltar al contenido principal
</a>
```

### Focus Management
```tsx
// En móviles, prevenir scroll del body
useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}, [mobileMenuOpen])
```

### Safe Areas (iOS)
```tsx
// Respetar safe areas en dispositivos iOS
<header style={{ paddingTop: 'env(safe-area-inset-top)' }}>
  {/* Header content */}
</header>
```

## 🚀 **PERFORMANCE RESPONSIVE**

### Lazy Loading
```tsx
// Carga diferida para imágenes no críticas
<Image
  src="/img/example.jpg"
  alt=""
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Priority Loading
```tsx
// Solo para imágenes hero
<Image
  src="/img/hero.jpg"
  alt=""
  priority
  fetchPriority="high"
  decoding="async"
  sizes="100vw"
/>
```

### Container Queries (Futuro)
```css
@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 1fr;
  }
}
```

## 📱 **MEDIA QUERIES PERSONALIZADAS**

### Tailwind Config
```ts
screens: {
  'xs': '360px',      // Móviles pequeños
  'sm': '480px',      // Móviles medianos
  'md': '768px',      // Tablets
  'lg': '1024px',     // Laptops
  'xl': '1440px',     // Desktops
  '2xl': '1920px',    // Pantallas grandes
  '3xl': '2560px',    // Ultrawide
}
```

### CSS Custom Properties
```css
@media (max-width: 359px) {
  :root {
    --container-padding: 0.75rem;
  }
}

@media (min-width: 480px) {
  :root {
    --container-padding: 1.5rem;
  }
}
```

## 🎨 **COLORES Y TEMA**

### Paleta CORA
```css
:root {
  --cora-primary: #4c0f2e;
  --cora-secondary: #b09287;
  --cora-accent: #e0c3b5;
  --cora-bg: #ebe2db;
  --cora-surface: #FFFFFF;
  --cora-text: #2d161e;
  --cora-text-secondary: #b09287;
  --cora-text-muted: #e0c3b5;
  --cora-border-light: #e0c3b5;
  --cora-border-medium: #b09287;
  --cora-border-dark: #4c0f2e;
}
```

### Uso en Tailwind
```tsx
// Usar colores personalizados
<div className="bg-cora-primary text-white">
  Contenido
</div>

// Con opacidad
<div className="bg-cora-primary/80 text-white">
  Contenido con transparencia
</div>
```

## 🔧 **COMPONENTES UI RESPONSIVOS**

### Button Component
```tsx
<Button
  variant="primary"
  size="md"
  fullWidth
  loading={isSubmitting}
  icon={<ArrowRightIcon />}
  iconPosition="right"
>
  Texto del botón
</Button>
```

### Section Component
```tsx
<Section
  background="primary"
  padding="xl"
  container={true}
  fullWidth={false}
  id="seccion-unica"
>
  <SectionHeader
    title="Título de la sección"
    subtitle="Subtítulo opcional"
    description="Descripción de la sección"
    size="lg"
    align="center"
    showDivider
  />
  {/* Contenido de la sección */}
</Section>
```

## 📊 **TESTING RESPONSIVE**

### Breakpoints a Probar
- **360px** - iPhone SE, móviles pequeños
- **480px** - Móviles medianos
- **768px** - Tablets (portrait)
- **1024px** - Tablets (landscape), laptops
- **1440px** - Desktops
- **1920px** - Pantallas grandes
- **2560px** - Ultrawide

### Herramientas de Testing
- Chrome DevTools Device Toolbar
- BrowserStack
- Responsively App
- Lighthouse Mobile

### Métricas de Performance
- **LCP**: ≤2.5s
- **CLS**: <0.1
- **INP**: <200ms
- **FID**: <100ms

## 🚨 **ANTI-PATRONES A EVITAR**

### ❌ No hacer
```tsx
// Alturas fijas
<div className="h-20">Header</div>

// Anchos fijos
<div className="w-96">Sidebar</div>

// Breakpoints invertidos
<div className="hidden lg:block md:hidden">Contenido</div>

// Imágenes sin sizes
<Image src="/img.jpg" alt="" width={500} height={300} />
```

### ✅ Hacer
```tsx
// Alturas mínimas
<div className="min-h-[5rem]">Header</div>

// Anchos máximos
<div className="max-w-md">Sidebar</div>

// Breakpoints progresivos
<div className="hidden md:block">Contenido</div>

// Imágenes con sizes
<Image src="/img.jpg" alt="" fill sizes="(max-width: 768px) 100vw, 300px" />
```

## 📚 **RECURSOS ADICIONALES**

### Documentación
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)
- [Web.dev Responsive Images](https://web.dev/learn/design/responsive-images/)

### Herramientas
- [Responsive Breakpoints Generator](https://www.responsivebreakpoints.com/)
- [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
- [Flexbox Froggy](https://flexboxfroggy.com/)

---

**Última actualización**: Enero 2025  
**Versión**: 1.0.0  
**Autor**: CORA Invest Team
