import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CoraWeb - Actualidad que conecta contigo',
  description: 'Plataforma web con información actualizada sobre finanzas, tecnología y más. Herramientas, recursos y artículos que te mantienen conectado.',
  keywords: 'finanzas, tecnología, actualidad, herramientas, recursos',
  authors: [{ name: 'CoraWeb Team' }],
  openGraph: {
    title: 'CoraWeb - Actualidad que conecta contigo',
    description: 'Plataforma web con información actualizada sobre finanzas, tecnología y más.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
