import { Categoria, Tema, Herramienta, NavigationItem, SocialLink } from '@/types'

export const NAVIGATION: NavigationItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Mastery', href: '/mastery' },
  { name: 'Planners', href: '/planners' },
  { name: 'Tendencia', href: '/tendencia' },
  { name: 'Contacto', href: '/contact' },
]

export const CATEGORIAS_DESTACADAS: Omit<Categoria, 'icon'>[] = [
  {
    id: 'finanzas-personales',
    title: 'Finanzas Personales',
    description: 'Aprende a gestionar tu dinero de manera inteligente',
    href: '/blog?category=finanzas-personales',
    color: '#4c0f2e'
  },
  {
    id: 'inversiones',
    title: 'Inversiones',
    description: 'Descubre estrategias para hacer crecer tu patrimonio',
    href: '/blog?category=inversiones',
    color: '#b09287'
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    description: 'Las últimas tendencias que transforman el mundo',
    href: '/blog?category=tecnologia',
    color: '#e0c3b5'
  }
]

export const TEMAS: Tema[] = [
  {
    id: 'dinero-verde',
    title: 'Dinero Verde',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
    slug: 'dinero-verde',
    category: 'Sostenibilidad',
    description: 'Inversiones y finanzas sostenibles para un futuro mejor'
  },
  {
    id: 'cripto-101',
    title: 'Cripto 101',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
    slug: 'cripto-101',
    category: 'Criptomonedas',
    description: 'Guía completa para entender el mundo de las criptomonedas'
  },
  {
    id: 'inteligencia-artificial',
    title: 'Inteligencia Artificial',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    slug: 'inteligencia-artificial',
    category: 'Tecnología',
    comingSoon: true,
    description: 'El futuro de la IA y su impacto en la sociedad'
  },
  {
    id: 'economia-circular',
    title: 'Economía Circular',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
    slug: 'economia-circular',
    category: 'Sostenibilidad',
    description: 'Modelos económicos sostenibles para el futuro'
  }
]

export const HERRAMIENTAS: Herramienta[] = [
  {
    id: 'budget-planner',
    title: 'Budget Planner',
    description: 'Planifica y controla tus gastos mensuales de manera efectiva',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    href: '/resources/budget-planner',
    tags: ['Finanzas', 'Planificación'],
    category: 'Finanzas Personales'
  },
  {
    id: 'portfolio-tracker',
    title: 'Portfolio Tracker',
    description: 'Monitorea el rendimiento de tus inversiones en tiempo real',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
    href: '/resources/portfolio-tracker',
    tags: ['Inversiones', 'Tracking'],
    comingSoon: true,
    category: 'Inversiones'
  },
  {
    id: 'tax-calculator',
    title: 'Tax Calculator',
    description: 'Calcula tus impuestos de manera sencilla y precisa',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=450&fit=crop',
    href: '/resources/tax-calculator',
    tags: ['Finanzas', 'Impuestos'],
    category: 'Finanzas Personales'
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/coraweb',
    icon: 'instagram'
  }
]

// Planners Data
export const PLANNERS_DATA = [
  {
    id: 'money-planner',
    title: 'MONEY PLANNER',
    description: 'Organiza tus finanzas personales con claridad y control total',
    image: '/img/img_planner.png',
    comingSoon: false
  },
  {
    id: 'budget-planner',
    title: 'BUDGET PLANNER',
    description: 'Planifica y controla tus gastos mensuales de manera efectiva',
    image: '/img/img_planner.png',
    comingSoon: true
  },
  {
    id: 'investment-planner',
    title: 'INVESTMENT PLANNER',
    description: 'Gestiona tu portafolio de inversiones de manera inteligente',
    image: '/img/img_planner.png',
    comingSoon: true
  },
  {
    id: 'savings-planner',
    title: 'SAVINGS PLANNER',
    description: 'Alcanza tus metas de ahorro con estrategias efectivas',
    image: '/img/img_planner.png',
    comingSoon: true
  },
  {
    id: 'debt-planner',
    title: 'DEBT PLANNER',
    description: 'Elimina tus deudas de forma sistemática y eficiente',
    image: '/img/img_planner.png',
    comingSoon: true
  },
  {
    id: 'retirement-planner',
    title: 'RETIREMENT PLANNER',
    description: 'Planifica tu jubilación con estrategias a largo plazo',
    image: '/img/img_planner.png',
    comingSoon: true
  }
]

// Articles Data
export const ARTICLES_DATA = [
  {
    id: 'dinero-y-pareja',
    title: 'DINERO Y PAREJA',
    description: 'Cómo manejar las finanzas en pareja y construir un futuro económico juntos',
    image: '/img/img_dinero_y_pareja.png',
    category: 'Relaciones Financieras',
    readTime: '5 min',
    comingSoon: false
  },
  {
    id: 'maximiza-tu-riqueza',
    title: 'MAXIMIZA TU RIQUEZA',
    description: 'Estrategias avanzadas para hacer crecer tu patrimonio de manera inteligente',
    image: '/img/img_maximixa_tu_riqueza.png',
    category: 'Inversiones',
    readTime: '8 min',
    comingSoon: false
  },
  {
    id: 'jubilacion-inteligente',
    title: 'JUBILACIÓN INTELIGENTE',
    description: 'Planifica tu retiro con estrategias financieras efectivas y seguras',
    image: '/img/img_prep_jubilacion.png',
    category: 'Planificación',
    readTime: '10 min',
    comingSoon: false
  },
  {
    id: 'tendencias-financieras',
    title: 'TENDENCIAS FINANCIERAS 2025',
    description: 'Las últimas tendencias que están transformando el mundo de las finanzas',
    image: '/img/img_news.png',
    category: 'Actualidad',
    readTime: '6 min',
    comingSoon: true
  },
  {
    id: 'inversion-sostenible',
    title: 'INVERSIÓN SOSTENIBLE',
    description: 'Cómo invertir de manera responsable y generar impacto positivo',
    image: '/img/img_dinero_verde.png',
    category: 'Sostenibilidad',
    readTime: '7 min',
    comingSoon: true
  },
  {
    id: 'finanzas-digitales',
    title: 'FINANZAS DIGITALES',
    description: 'El futuro de las finanzas en la era digital y las criptomonedas',
    image: '/img/img_crypto_101.png',
    category: 'Tecnología',
    readTime: '9 min',
    comingSoon: true
  }
]

export const SITE_CONFIG = {
  name: 'CoraWeb',
  description: 'Actualidad que conecta contigo',
  longDescription: 'Plataforma web con información actualizada sobre finanzas, tecnología y más. Herramientas, recursos y artículos que te mantienen conectado.',
  email: 'hola@coraweb.com',
  url: 'https://coraweb.com'
}
