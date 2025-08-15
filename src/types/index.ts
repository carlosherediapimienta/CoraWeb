export interface Categoria {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  href: string
  color?: string
}

export interface Tema {
  id: string
  title: string
  image: string
  slug: string
  category: string
  comingSoon?: boolean
  description?: string
}

export interface Herramienta {
  id: string
  title: string
  description: string
  image: string
  href: string
  comingSoon?: boolean
  tags: string[]
  category: string
}

export interface Articulo {
  id: string
  title: string
  excerpt: string
  image: string
  slug: string
  date: string
  author: string
  category: string
  readTime: string
  content?: string
}

export interface NavigationItem {
  name: string
  href: string
  icon?: React.ReactNode
}

export interface NewsletterForm {
  email: string
  isSubscribed: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string | React.ReactNode
}
