export const THEME = {
  colors: {
    primary: '#4c0f2e',        // Burgundy profundo como color principal
    secondary: '#b09287',      // Taupe medio como color secundario
    accent: '#e0c3b5',         // Beige cálido como acento
    background: '#ebe2db',     // Blanco cremoso como fondo
    surface: '#FFFFFF',        // Blanco puro para superficies
    text: {
      primary: '#2d161e',      // Marrón muy oscuro para texto principal
      secondary: '#b09287',    // Taupe medio para texto secundario
      muted: '#e0c3b5'         // Beige cálido para texto atenuado
    },
    border: {
      light: '#e0c3b5',        // Beige cálido para bordes claros
      medium: '#b09287',       // Taupe medio para bordes medios
      dark: '#4c0f2e'          // Burgundy para bordes oscuros
    }
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
  },
  typography: {
    fontFamily: {
      primary: ['The Seasons', 'serif'],      // Fuente principal: The Seasons
      sans: ['Inter', 'sans-serif'],         // Fuente sans-serif para elementos específicos
      serif: ['The Seasons', 'serif']        // The Seasons como serif principal
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  breakpoints: {
    xs: '375px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1536px'
  }
} as const
