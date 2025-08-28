import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-bg': '#FAF9F7',
        'color-text': '#1A1A1A',
        'color-accent': '#7A1E2D',
        'color-muted': '#6B7280',
        // Colores CORA optimizados
        'cora-primary': '#4c0f2e',
        'cora-secondary': '#b09287',
        'cora-accent': '#e0c3b5',
        'cora-bg': '#ebe2db',
        'cora-surface': '#FFFFFF',
        'cora-text': '#2d161e',
        'cora-text-secondary': '#b09287',
        'cora-text-muted': '#e0c3b5',
        'cora-border-light': '#e0c3b5',
        'cora-border-medium': '#b09287',
        'cora-border-dark': '#4c0f2e',
      },
      fontFamily: {
        'serif': ['The Seasons', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      // Breakpoints optimizados para mobile-first
      screens: {
        'xs': '360px',      // Móviles pequeños
        'sm': '480px',      // Móviles medianos
        'md': '768px',      // Tablets
        'lg': '1024px',     // Laptops
        'xl': '1440px',     // Desktops
        '2xl': '1920px',    // Pantallas grandes
        '3xl': '2560px',    // Ultrawide
      },
      // Espaciado fluido
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Tipografía fluida
      fontSize: {
        'xs': ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.25' }],
        'sm': ['clamp(0.875rem, 0.8rem + 0.375vw, 1rem)', { lineHeight: '1.375' }],
        'base': ['clamp(1rem, 0.9rem + 0.5vw, 1.125rem)', { lineHeight: '1.5' }],
        'lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.25rem)', { lineHeight: '1.625' }],
        'xl': ['clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)', { lineHeight: '1.75' }],
        '2xl': ['clamp(1.5rem, 1.3rem + 1vw, 2rem)', { lineHeight: '1.875' }],
        '3xl': ['clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)', { lineHeight: '2' }],
        '4xl': ['clamp(2.25rem, 1.9rem + 1.75vw, 3rem)', { lineHeight: '2.125' }],
        '5xl': ['clamp(3rem, 2.5rem + 2.5vw, 4rem)', { lineHeight: '2.25' }],
        '6xl': ['clamp(3.75rem, 3rem + 3.75vw, 5rem)', { lineHeight: '2.375' }],
        '7xl': ['clamp(4.5rem, 3.5rem + 5vw, 6rem)', { lineHeight: '2.5' }],
        '8xl': ['clamp(6rem, 4.5rem + 7.5vw, 8rem)', { lineHeight: '2.625' }],
      },
      // Contenedores fluidos
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}

export default config
