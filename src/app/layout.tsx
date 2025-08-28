import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'CORA Invest - Empodera tu libertad financiera',
  description: 'Plataforma que empodera a mujeres para tomar el control de su dinero con claridad, confianza y estrategias simples. Aprende a invertir, organizar tus finanzas y construir hábitos sólidos.',
  keywords: 'finanzas personales, inversión, empoderamiento femenino, libertad financiera, educación financiera, mujeres inversoras',
  authors: [{ name: 'CORA Invest Team' }],
  creator: 'CORA Invest',
  publisher: 'CORA Invest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://192.168.1.52:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CORA Invest - Empodera tu libertad financiera',
    description: 'Plataforma que empodera a mujeres para tomar el control de su dinero con claridad, confianza y estrategias simples.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'CORA Invest',
    images: [
      {
        url: '/img/header_principal.png',
        width: 1200,
        height: 630,
        alt: 'CORA Invest - Empoderamiento financiero femenino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CORA Invest - Empodera tu libertad financiera',
    description: 'Plataforma que empodera a mujeres para tomar el control de su dinero.',
    images: ['/img/header_principal.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Reemplazar con token real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Meta viewport optimizado para responsive */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Favicon y iconos */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Manifest para PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#4c0f2e" />
        <meta name="msapplication-TileColor" content="#4c0f2e" />
        
        {/* Apple meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CORA Invest" />
        
        {/* Microsoft meta tags */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip link para accesibilidad */}
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        
        <div className="min-h-screen flex flex-col">
          <main id="main-content" className="flex-grow">
            {children}
          </main>
        </div>
        
        {/* Scripts de performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('LCP:', perfData.loadEventEnd - perfData.loadEventStart);
                  }
                });
              }
              
              // Service Worker registration (futuro)
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  // navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
