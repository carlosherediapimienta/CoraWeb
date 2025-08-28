'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { PLANNERS_DATA } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'

export default function PlannersPage() {
  return (
    <div className="min-h-screen">
      {/* Header Principal Responsive */}
      <header className="bg-cora-primary relative overflow-hidden min-h-screen">
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0">
          <Image
            src="/img/img_header_planner.png"
            alt=""
            fill
            className="object-cover object-center w-full h-full"
            priority
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Contenido del header */}
        <div className="relative z-10 container-custom h-screen flex items-center justify-center">
          <div className="text-center text-cora-accent">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 sm:mb-6 tracking-[0.1em] sm:tracking-[0.2em] uppercase leading-tight">
              MONEY
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal tracking-[0.05em] sm:tracking-[0.1em] uppercase leading-tight">
              PLANNERS
            </h2>
            <p className="mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Organiza tu dinero, visualiza tu progreso y alcanza tus metas financieras
            </p>
          </div>
        </div>
      </header>

      {/* Sección de Planners - Grid Responsive */}
      <section className="bg-cora-bg py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container-custom">
          {/* Título */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-cora-text mb-6 sm:mb-8 leading-tight">
              Nuestros Planners
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-cora-text/80 max-w-3xl mx-auto">
              Herramientas esenciales para organizar y optimizar tu vida financiera
            </p>
          </div>
          
          {/* Grid de planners responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 cards-grid">
            {PLANNERS_DATA.map((planner, index) => (
              <div key={planner.id} className={`group bg-white rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={planner.image}
                    alt={`${planner.title} - ${planner.description}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes={index === 2 ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {planner.comingSoon && (
                    <div className="absolute top-4 right-4 bg-cora-primary text-cora-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                      PRÓXIMAMENTE
                    </div>
                  )}
                </div>
                <div className="p-6 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">{planner.title}</h3>
                  <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                    {planner.description}
                  </p>
                  {planner.comingSoon ? (
                    <span className="inline-flex items-center text-cora-text-muted font-medium">
                      Disponible pronto
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </span>
                  ) : (
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-cora-primary hover:text-cora-primary/80 font-medium transition-colors duration-200"
                    >
                      Descargar ahora
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CORA Invest */}
      <footer className="bg-cora-primary py-12 sm:py-16 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-16 md:gap-20 items-center">
            {/* Contacto */}
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-cora-accent uppercase mb-4 sm:mb-6 md:mb-8">
                CONTÁCTANOS
              </h3>
              <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-5">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cora-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:thecorainvest@gmail.com" 
                  className="text-cora-accent hover:text-white transition-colors duration-200 text-base sm:text-lg md:text-xl"
                >
                  thecorainvest@gmail.com
                </a>
              </div>
            </div>
            
            {/* Logo CORA Invest */}
            <div className="flex justify-center">
              <Image
                src="/img/logo/logo_2.png"
                alt="CORA Invest Logo"
                width={180}
                height={180}
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48"
                loading="lazy"
                sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, (max-width: 1024px) 176px, 192px"
              />
            </div>
            
            {/* Redes Sociales */}
            <div className="text-center lg:text-right">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-cora-accent uppercase mb-4 sm:mb-6 md:mb-8">
                SÍGUENOS
              </h3>
              <div className="flex items-center justify-center lg:justify-end space-x-3 sm:space-x-4 md:space-x-5">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-cora-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-cora-accent text-base sm:text-lg md:text-xl">
                  ¡Menciona tu experiencia!
                </span>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-cora-accent/20 mt-12 sm:mt-16 pt-8 text-center">
            <p className="text-cora-accent/80 text-sm sm:text-base">
              © 2025 CORA Invest. Todos los derechos reservados. Empoderando mujeres hacia la libertad financiera.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
