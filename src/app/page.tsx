'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Section, SectionHeader } from '@/components/ui'
import { CATEGORIAS_DESTACADAS, TEMAS, HERRAMIENTAS, SITE_CONFIG, NAVIGATION } from '@/constants/data'
import { getCategoriaIcon } from '@/utils/icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Header Principal Responsive */}
      <header className="bg-cora-primary relative overflow-hidden min-h-screen">
        {/* Imagen de fondo optimizada */}
        <div className="absolute inset-0">
          <Image
            src="/img/header_principal.png"
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
              BIENVENIDA A
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal tracking-[0.05em] sm:tracking-[0.1em] uppercase leading-tight">
              CORA INVEST
            </h2>
            <p className="mt-6 sm:mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Empodera tu libertad financiera con claridad y confianza
            </p>
          </div>
        </div>
      </header>

      {/* Sección Principal - Mobile First */}
      <section className="relative bg-cora-bg">
        <div className="h-1 bg-cora-primary"></div>
        
        <div className="container-fluid hero-container py-16 sm:py-20 md:py-24 lg:py-32" style={{paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)'}}>
          {/* Mobile: Stack vertical, Tablet+: Grid de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 items-center hero-grid">
            {/* Columna de texto (60% en desktop) */}
            <div className="lg:col-span-3 hero-text" style={{textAlign: 'center !important'}}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-cora-primary leading-tight hero-title" style={{textAlign: 'center !important', margin: '0 auto', marginBottom: '5rem !important'}}>
                Aprende.<br />
                Invierte.<br />
                <span className="whitespace-nowrap">Vive en libertad.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cora-primary leading-relaxed font-normal max-w-2xl lg:max-w-none">
                CORA Invest es la plataforma que empodera a mujeres para tomar el control de su dinero con claridad, confianza y estrategias simples. Aquí aprenderás a invertir, organizar tus finanzas y construir hábitos sólidos, con herramientas prácticas y una comunidad que te acompaña paso a paso hacia tu libertad financiera.
              </p>
            </div>
            
            {/* Columna de imagen (40% en desktop) */}
            <div className="lg:col-span-2 hero-image">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl aspect-container">
                <Image
                  src="/img/foto_principal.png"
                  alt="Mujer empoderada con taza de café"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 500px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-1 bg-cora-primary"></div>
      </section>

      {/* Sección de Cursos - Grid Responsive */}
      <section className="bg-cora-primary min-h-screen flex items-center py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container-custom">
          {/* Título */}
          <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-32">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-cora-accent mb-6 sm:mb-8 leading-tight">
              Comienza con lo esencial
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-cora-accent/80 max-w-3xl mx-auto">
              Cursos diseñados específicamente para mujeres que quieren tomar el control de sus finanzas
            </p>
          </div>
          
          {/* Grid de cursos responsive usando card-list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-16 sm:mb-20 md:mb-24 lg:mb-32 cards-grid">
            {/* Curso 1: MONEY BASICS - Izquierda en desktop */}
            <div className="group bg-cora-bg rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/img/img_principal_money_basics.jpg"
                  alt="Curso Money Basics - Fundamentos de finanzas personales"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">MONEY BASICS</h3>
                <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                  Aprende los fundamentos de las finanzas personales
                </p>
                <Link 
                  href="/mastery" 
                  className="inline-flex items-center text-cora-primary hover:text-cora-primary/80 font-medium transition-colors duration-200"
                >
                  Ver más
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Curso 2: INVEST LAB - Centro en desktop */}
            <div className="group bg-cora-bg rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/img/img_principal_invest_lab.jpg"
                  alt="Curso Invest Lab - Laboratorio de inversiones"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Badge Coming Soon */}
                <div className="absolute top-4 right-4 bg-cora-accent text-cora-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                  PRÓXIMAMENTE
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">INVEST LAB</h3>
                <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                  Laboratorio práctico de inversiones
                </p>
                <span className="inline-flex items-center text-cora-text-muted font-medium">
                  Disponible pronto
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
            
            {/* Curso 3: EQUILIBRIO FINANCIERO - Abajo en móvil/tablet, derecha en desktop */}
            <div className="group bg-cora-bg rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 lg:order-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/img/img_principal_equilibrio_financiero.jpg"
                  alt="Curso Equilibrio Financiero - Balance y estabilidad financiera"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Badge Coming Soon */}
                <div className="absolute top-4 right-4 bg-cora-accent text-cora-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                  PRÓXIMAMENTE
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">EQUILIBRIO FINANCIERO</h3>
                <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                  Encuentra el balance perfecto en tus finanzas
                </p>
                <span className="inline-flex items-center text-cora-text-muted font-medium">
                  Disponible pronto
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
          
          {/* CTA Ver más cursos */}
          <div className="text-center sm:text-right">
            <Link 
              href="/mastery" 
              className="inline-flex items-center text-cora-accent hover:text-white font-serif text-2xl sm:text-3xl lg:text-4xl font-normal transition-colors duration-200 group"
            >
              Ver más cursos
              <span className="ml-2 sm:ml-4 text-3xl sm:text-4xl lg:text-5xl group-hover:translate-x-1 transition-transform duration-200">»</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Money Planners */}
      <section className="bg-cora-bg py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-12 xl:gap-16 items-center hero-grid">
            {/* Columna de texto */}
            <div className="text-center lg:text-left order-2 lg:order-1 hero-text">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-cora-text mb-6 sm:mb-8 leading-tight">
                Money Planners
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-cora-text leading-relaxed font-normal mb-8 sm:mb-10 md:mb-12 lg:mb-12 max-w-2xl lg:max-w-none">
                Organiza tu dinero, visualiza tu progreso y alcanza tus metas con facilidad. CORA Money Planner te da plantillas y herramientas para que tus finanzas trabajen para ti, no al revés.
              </p>
              <Link 
                href="/planners" 
                className="inline-flex items-center bg-cora-primary text-cora-bg px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg font-normal hover:bg-cora-text transition-all duration-200 group shadow-lg hover:shadow-xl"
              >
                Ver más planners
                <ArrowRightIcon className="ml-2 sm:ml-2.5 md:ml-3 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            {/* Columna de imagen */}
            <div className="order-1 lg:order-2 flex items-center justify-center p-6 sm:p-8 md:p-10 hero-image">
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-lg xl:max-w-xl">
                <Image
                  src="/img/img_templates.png"
                  alt="Plantillas y herramientas de Money Planners"
                  width={450}
                  height={600}
                  className="object-contain w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Money Mastery */}
      <section className="bg-cora-primary py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container-custom">
          {/* Título */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-cora-accent mb-6 sm:mb-8 leading-tight">
              Money Mastery
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-cora-accent/80 max-w-3xl mx-auto">
              Cursos avanzados para dominar tus finanzas y alcanzar la libertad económica
            </p>
          </div>
          
          {/* Grid de cursos avanzados usando card-list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 cards-grid">
            {/* Curso 1: Lanza tu proyecto - Izquierda en desktop */}
            <div className="group bg-cora-bg rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/img/img_principal_lanza_tu_proyecto.jpg"
                  alt="Curso Lanza tu proyecto - Emprendimiento financiero"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cora-accent text-cora-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                  PRÓXIMAMENTE
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">LANZA TU PROYECTO</h3>
                <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                  Convierte tu idea en un negocio rentable
                </p>
                <span className="inline-flex items-center text-cora-text-muted font-medium">
                  Disponible pronto
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
            
            {/* Curso 2: FINANZAS A LOS 40+ - Centro en desktop */}
            <div className="group bg-cora-bg rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/img/img_principal_finanzas_40_+.jpg"
                  alt="Curso Finanzas a los 40+ - Planificación financiera madura"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cora-accent text-cora-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                  PRÓXIMAMENTE
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">FINANZAS A LOS 40+</h3>
                <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                  Estrategias financieras para la madurez
                </p>
                <span className="inline-flex items-center text-cora-text-muted font-medium">
                  Disponible pronto
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
            
            {/* Curso 3: VIVIENDA Y FINANZAS - Abajo en móvil/tablet, derecha en desktop */}
            <div className="group bg-cora-bg rounded-3xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 lg:order-3">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/img/img_principal_vivienda.jpg"
                  alt="Curso Vivienda y Finanzas - Compra inteligente de vivienda"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cora-accent text-cora-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium shadow-lg">
                  PRÓXIMAMENTE
                </div>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-normal text-cora-text mb-4">VIVIENDA Y FINANZAS</h3>
                <p className="text-cora-text-secondary text-sm sm:text-base mb-6">
                  Compra inteligente y financiamiento óptimo
                </p>
                <span className="inline-flex items-center text-cora-text-muted font-medium">
                  Disponible pronto
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
          
          {/* CTA Ver más cursos */}
          <div className="text-center sm:text-right">
            <Link 
              href="/mastery" 
              className="inline-flex items-center text-cora-accent hover:text-white font-serif text-2xl sm:text-3xl lg:text-4xl font-normal transition-colors duration-200 group"
            >
              Ver más cursos
              <span className="ml-2 sm:ml-4 md:ml-6 text-3xl sm:text-4xl lg:text-5xl group-hover:translate-x-1 transition-transform duration-200">»</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Actualidad Financiera */}
      <section className="bg-cora-bg py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container-custom">
          {/* Título optimizado para responsive */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-cora-text mb-6 sm:mb-8 leading-tight">
              Actualidad
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-cora-text/80 max-w-3xl mx-auto">
              Contenido relevante y actualizado sobre finanzas, inversiones y empoderamiento femenino
            </p>
          </div>
          
          {/* Layout responsive optimizado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-4 xl:gap-4 items-center">
            {/* Columna de imagen - Mismo estilo que la primera sección pero ligeramente más pequeña en móvil/tablet */}
            <div className="order-1 lg:order-1 hero-image">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl aspect-container max-w-[360px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-none mx-auto lg:mx-0">
                <Image
                  src="/img/img_principal_actualidad.jpg"
                  alt="Mujer revisando finanzas en dispositivos"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 500px"
                  quality={90}
                />
              </div>
            </div>
            
            {/* Columna de categorías - Espaciado optimizado */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10">
                {/* Categoría 1 */}
                <div className="border-b border-cora-primary/20 pb-2 sm:pb-3 md:pb-4 lg:pb-6 xl:pb-8">
                  <button 
                    onClick={() => alert('Esta categoría aún no tiene contenido disponible. ¡Próximamente!')}
                    className="flex items-center justify-center lg:justify-start w-full text-left hover:text-cora-primary transition-colors duration-200 group"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-normal text-cora-text group-hover:text-cora-primary">
                      DINERO Y PAREJA
                    </span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-cora-primary group-hover:translate-x-1 transition-transform duration-200 ml-2 sm:ml-3 md:ml-4">»</span>
                  </button>
                </div>
                
                {/* Categoría 2 */}
                <div className="border-b border-cora-primary/20 pb-2 sm:pb-3 md:pb-4 lg:pb-6 xl:pb-8">
                  <button 
                    onClick={() => alert('Esta categoría aún no tiene contenido disponible. ¡Próximamente!')}
                    className="flex items-center justify-center lg:justify-start w-full text-left hover:text-cora-primary transition-colors duration-200 group"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-normal text-cora-text group-hover:text-cora-primary">
                      MAXIMIZA TU RIQUEZA
                    </span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-cora-primary group-hover:translate-x-1 transition-transform duration-200 ml-2 sm:ml-3 md:ml-4">»</span>
                  </button>
                </div>
                
                {/* Categoría 3 - Texto unificado para todos los dispositivos */}
                <div className="border-b border-cora-primary/20 pb-2 sm:pb-3 md:pb-4 lg:pb-6 xl:pb-8">
                  <button 
                    onClick={() => alert('Esta categoría aún no tiene contenido disponible. ¡Próximamente!')}
                    className="flex items-center justify-center lg:justify-start w-full text-left hover:text-cora-primary transition-colors duration-200 group"
                  >
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-normal text-cora-text group-hover:text-cora-primary">
                      JUBILACIÓN INTELIGENTE
                    </span>
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-cora-primary group-hover:translate-x-1 transition-transform duration-200 ml-2 sm:ml-3 md:ml-4">»</span>
                  </button>
                </div>
              </div>
              
              {/* CTA Ver más artículos - Responsive */}
              <div className="text-center lg:text-left mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                <Link 
                  href="/tendencia" 
                  className="inline-flex items-center text-cora-text hover:text-cora-primary font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-200 group"
                >
                  Ver más artículos
                  <span className="ml-2 sm:ml-3 md:ml-4 lg:ml-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl group-hover:translate-x-1 transition-transform duration-200">»</span>
                </Link>
              </div>
            </div>
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
