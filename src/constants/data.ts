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

export const SITE_CONFIG = {
  name: 'CoraWeb',
  description: 'Actualidad que conecta contigo',
  longDescription: 'Plataforma web con información actualizada sobre finanzas, tecnología y más. Herramientas, recursos y artículos que te mantienen conectado.',
  email: 'hola@coraweb.com',
  url: 'https://coraweb.com'
}
