export const ROUTES = {
  home: '/',
  blog: '/blog',
  blogCategory: (category: string) => `/blog?category=${category}`,
  blogPost: (slug: string) => `/blog/${slug}`,
  resources: '/resources',
  resource: (slug: string) => `/resources/${slug}`,
  contact: '/contact',
  about: '/about',
  privacy: '/privacy',
  terms: '/terms'
} as const

export const API_ROUTES = {
  newsletter: '/api/newsletter',
  contact: '/api/contact',
  blog: '/api/blog',
  resources: '/api/resources'
} as const

export const EXTERNAL_LINKS = {
  instagram: 'https://instagram.com/coraweb',
  twitter: 'https://twitter.com/coraweb',
  linkedin: 'https://linkedin.com/company/coraweb',
  github: 'https://github.com/coraweb'
} as const
