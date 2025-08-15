# CoraWeb - Plataforma Web Refactorizada

Una plataforma web moderna y escalable con información actualizada sobre finanzas, tecnología y más. Herramientas, recursos y artículos que te mantienen conectado.

## 🚀 Características

- **Arquitectura moderna**: Next.js 15 con App Router
- **TypeScript**: Tipado completo para mejor desarrollo
- **Componentes reutilizables**: Sistema de diseño consistente
- **Hooks personalizados**: Lógica reutilizable y separada
- **Constantes centralizadas**: Configuración y datos en un solo lugar
- **Utilidades**: Funciones helper para validación y manipulación
- **Responsive**: Diseño adaptativo para todos los dispositivos

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
├── components/            # Componentes React
│   ├── ui/               # Componentes UI reutilizables
│   └── business/         # Componentes específicos del negocio
├── constants/            # Constantes y configuración
├── hooks/                # Hooks personalizados
├── types/                # Tipos TypeScript
├── utils/                # Utilidades y helpers
└── styles/               # Estilos globales
```

## 🛠️ Tecnologías

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons, Lucide React
- **State Management**: React Hooks
- **Build Tool**: Turbopack

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd CoraWeb
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo con Turbopack
- `npm run build` - Construcción para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificación de linting
- `npm run lint:fix` - Corrección automática de linting
- `npm run type-check` - Verificación de tipos TypeScript
- `npm run format` - Formateo de código con Prettier

## 🎨 Sistema de Diseño

### Colores
- **Primary**: #7A1E2D (Burgundy)
- **Secondary**: #1E3A8A (Blue)
- **Accent**: #059669 (Green)
- **Background**: #FAF9F7 (Off-white)
- **Text**: #1A1A1A (Dark)

### Tipografía
- **Sans**: Inter (UI y texto)
- **Serif**: Playfair Display (Títulos)

### Componentes UI
- **Button**: Variantes primary, secondary, outline, ghost, white
- **Section**: Contenedores de sección con fondos configurables
- **SectionHeader**: Encabezados de sección estandarizados

## 📱 Componentes Principales

### Header
- Navegación responsive
- Logo y branding
- Menú móvil

### Footer
- Enlaces de navegación
- Información de contacto
- Enlaces sociales

### Cards
- **CardCategoria**: Categorías principales
- **CardTema**: Temas y colecciones
- **CardHerramienta**: Herramientas y recursos

### Newsletter
- Formulario de suscripción
- Validación de email
- Estados de éxito/error

## 🔌 Hooks Personalizados

### useNewsletter
Maneja la lógica del formulario de newsletter:
- Estado del formulario
- Validación de email
- Manejo de envío
- Estados de suscripción

### useData
Proporciona acceso a los datos de la aplicación:
- Categorías, temas y herramientas
- Filtrado por categoría
- Elementos próximamente disponibles

## 🎯 Mejoras Implementadas

### Antes de la Refactorización
- Datos hardcodeados en componentes
- Falta de tipado TypeScript
- Componentes muy acoplados
- CSS personalizado mezclado
- Falta de reutilización

### Después de la Refactorización
- ✅ Datos centralizados en constantes
- ✅ Tipos TypeScript completos
- ✅ Componentes desacoplados y reutilizables
- ✅ Sistema de diseño consistente
- ✅ Hooks personalizados para lógica
- ✅ Utilidades para validación
- ✅ Configuración centralizada
- ✅ Mejor mantenibilidad y escalabilidad

## 📈 Próximos Pasos

- [ ] Implementar API routes para newsletter
- [ ] Añadir sistema de autenticación
- [ ] Implementar CMS para contenido
- [ ] Añadir tests unitarios
- [ ] Optimización de performance
- [ ] Internacionalización (i18n)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: hola@coraweb.com
- **Instagram**: @coraweb
- **Website**: https://coraweb.com

---

Desarrollado con ❤️ por el equipo de CoraWeb
