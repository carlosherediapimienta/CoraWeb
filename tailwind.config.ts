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
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      screens: {
        'xs': '375px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1280px',
      },
    },
  },
  plugins: [],
}

export default config
