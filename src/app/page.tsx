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
      {/* Header Rojo Oscuro */}
      <div className="bg-[#4c0f2e] h-20 flex items-center justify-between px-6 relative">
        <div className="flex items-center space-x-2">
          <Image
            src="/img/logo/logo.png"
            alt="CoraWeb Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </div>
        
        {/* Menú Hamburguesa */}
        <div className="text-[#e0c3b5]">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 border-2 border-[#e0c3b5] rounded-full flex flex-col justify-center items-center space-y-1 hover:bg-[#e0c3b5] hover:text-[#4c0f2e] transition-colors duration-200"
          >
            <div className="w-4 h-0.5 bg-current"></div>
            <div className="w-4 h-0.5 bg-current"></div>
            <div className="w-4 h-0.5 bg-current"></div>
          </button>
        </div>

        {/* Menú Desplegable */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#4c0f2e] border-t border-[#e0c3b5]/20 shadow-lg z-50">
            <div className="px-6 py-4 space-y-3">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-[#e0c3b5] hover:text-white py-2 text-lg font-medium transition-colors duration-200 border-b border-[#e0c3b5]/10 last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hero Section con Imagen de Fondo - PANTALLA COMPLETA */}
      <div className="relative h-screen">
        <Image
          src="/img/header_principal.png"
          alt="Header Principal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-[#e0c3b5] px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 tracking-[0.2em] uppercase">
              BIENVENIDA A
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-serif font-normal tracking-[0.1em] uppercase">
              CORA INVEST
            </h2>
          </div>
        </div>
      </div>



      {/* Nueva Sección Principal - Diseño de Dos Columnas PANTALLA COMPLETA */}
      <div className="relative h-screen">
        {/* Borde Superior */}
        <div className="h-1 bg-[#4c0f2e]"></div>
        
        {/* Contenido Principal */}
        <div className="flex flex-col lg:flex-row h-full">
          {/* Columna Izquierda - Texto sobre fondo crema (60%) */}
          <div className="lg:w-3/5 bg-[#ebe2db] flex items-center justify-center p-20">
            <div className="max-w-4xl">
              <h2 className="text-6xl md:text-7xl font-serif font-normal text-[#4c0f2e] mb-12 leading-tight">
                Aprende.<br />
                Invierte.<br />
                Vive en libertad.
              </h2>
              <p className="text-xl md:text-2xl text-[#4c0f2e] leading-relaxed font-normal">
                CORA Invest es la plataforma que empodera a mujeres para tomar el control de su dinero con claridad, confianza y estrategias simples. Aquí aprenderás a invertir, organizar tus finanzas y construir hábitos sólidos, con herramientas prácticas y una comunidad que te acompaña paso a paso hacia tu libertad financiera.
              </p>
            </div>
          </div>
          
          {/* Columna Derecha - Imagen de la mujer (40%) */}
          <div className="lg:w-2/5 h-full relative overflow-hidden">
            <Image
              src="/img/foto_principal.png"
              alt="Mujer con taza de café"
              fill
              className="object-cover object-left"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
        
        {/* Borde Inferior */}
        <div className="h-1 bg-[#4c0f2e]"></div>
      </div>

      {/* Nueva Sección de Cursos - Fondo Burgundy PANTALLA COMPLETA */}
      <div className="bg-[#4c0f2e] h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6">
          {/* Título Principal */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#ebe2db] mb-8">
              Comienza con lo esencial
            </h2>
          </div>
          
          {/* Tarjetas de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Curso 1: MONEY BASICS */}
            <div className="bg-[#ebe2db] rounded-3xl overflow-hidden shadow-xl">
              <div className="relative h-64">
                <Image
                  src="/img/img_principal_money_basics.jpg"
                  alt="Money Basics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-normal text-[#2d161e]">MONEY BASICS</h3>
              </div>
            </div>
            
            {/* Curso 2: INVEST LAB */}
            <div className="bg-[#ebe2db] rounded-3xl overflow-hidden shadow-xl relative">
              <div className="relative h-64">
                <Image
                  src="/img/img_principal_invest_lab.jpg"
                  alt="Invest Lab"
                  fill
                  className="object-cover"
                />
                {/* Sticker COMING SOON */}
                <div className="absolute top-6 right-6 bg-[#e0c3b5] text-[#4c0f2e] px-4 py-2 rounded-full text-base font-medium shadow-lg">
                  COMING SOON
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-normal text-[#2d161e]">INVEST LAB</h3>
              </div>
            </div>
            
            {/* Curso 3: EQUILIBRIO FINANCIERO */}
            <div className="bg-[#ebe2db] rounded-3xl overflow-hidden shadow-xl relative">
              <div className="relative h-64">
                <Image
                  src="/img/img_principal_equilibrio_financiero.jpg"
                  alt="Equilibrio Financiero"
                  fill
                  className="object-cover"
                />
                {/* Sticker COMING SOON */}
                <div className="absolute top-6 right-6 bg-[#e0c3b5] text-[#4c0f2e] px-4 py-2 rounded-full text-base font-medium shadow-lg">
                  COMING SOON
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-normal text-[#2d161e]">EQUILIBRIO FINANCIERO</h3>
              </div>
            </div>
          </div>
          
          {/* Enlace Ver más cursos */}
          <div className="text-right">
            <a href="/mastery" className="inline-flex items-center text-[#ebe2db] hover:text-white font-serif text-4xl font-normal transition-colors duration-200">
              Ver más cursos
              <span className="ml-4 text-5xl">»</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nueva Sección Money Planners */}
      <div className="bg-[#ebe2db] h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            {/* Columna Izquierda - Texto y Botón */}
            <div className="lg:w-1/2">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#2d161e] mb-12">
                Money Planners
              </h2>
              <p className="text-xl md:text-2xl text-[#2d161e] leading-relaxed mb-12 font-normal">
                Organiza tu dinero, visualiza tu progreso y alcanza tus metas con facilidad. CORA Money Planner te da plantillas y herramientas para que tus finanzas trabajen para ti, no al revés.
              </p>
              <a href="/planners" className="inline-flex items-center bg-[#4c0f2e] text-[#ebe2db] px-10 py-6 rounded-full text-2xl font-normal hover:bg-[#2d161e] transition-colors duration-200">
                Click aquí para ver más
                <ArrowRightIcon className="ml-4 h-6 w-6" />
              </a>
            </div>
            
            {/* Columna Derecha - Imagen con fondo */}
            <div className="lg:w-1/2 bg-[#ebe2db] flex items-center justify-center p-8">
              <Image
                src="/img/img_templates.png"
                alt="Money Planners"
                width={450}
                height={600}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nueva Sección Money Mastery - Fondo Burgundy */}
      <div className="bg-[#4c0f2e] h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6">
          {/* Título Principal */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#ebe2db] mb-8">
              Money Mastery
            </h2>
          </div>
          
          {/* Tarjetas de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Curso 1: Lanza tu proyecto */}
            <div className="bg-[#ebe2db] rounded-3xl overflow-hidden shadow-xl relative">
              <div className="relative h-64">
                <Image
                  src="/img/img_principal_lanza_tu_proyecto.jpg"
                  alt="Lanza tu proyecto"
                  fill
                  className="object-cover"
                />
                {/* Sticker COMING SOON */}
                <div className="absolute top-6 right-6 bg-[#e0c3b5] text-[#4c0f2e] px-4 py-2 rounded-full text-base font-medium shadow-lg">
                  COMING SOON
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-normal text-[#2d161e]">LANZA TU PROYECTO</h3>
              </div>
            </div>
            
            {/* Curso 2: Finanzas a los 40+ */}
            <div className="bg-[#ebe2db] rounded-3xl overflow-hidden shadow-xl relative">
              <div className="relative h-64">
                <Image
                  src="/img/img_principal_finanzas_40_+.jpg"
                  alt="Finanzas a los 40+"
                  fill
                  className="object-cover"
                />
                {/* Sticker COMING SOON */}
                <div className="absolute top-6 right-6 bg-[#e0c3b5] text-[#4c0f2e] px-4 py-2 rounded-full text-base font-medium shadow-lg">
                  COMING SOON
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-normal text-[#2d161e]">FINANZAS A LOS 40+</h3>
              </div>
            </div>
            
            {/* Curso 3: Vivienda y Finanzas */}
            <div className="bg-[#ebe2db] rounded-3xl overflow-hidden shadow-xl relative">
              <div className="relative h-64">
                <Image
                  src="/img/img_principal_vivienda.jpg"
                  alt="Vivienda y Finanzas"
                  fill
                  className="object-cover"
                />
                {/* Sticker COMING SOON */}
                <div className="absolute top-6 right-6 bg-[#e0c3b5] text-[#4c0f2e] px-4 py-2 rounded-full text-base font-medium shadow-lg">
                  COMING SOON
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-normal text-[#2d161e]">VIVIENDA Y FINANZAS</h3>
              </div>
            </div>
          </div>
          
          {/* Enlace Ver más cursos */}
          <div className="text-right">
            <a href="/mastery" className="inline-flex items-center text-[#ebe2db] hover:text-white font-serif text-4xl font-normal transition-colors duration-200">
              Ver más cursos
              <span className="ml-4 text-5xl">»</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nueva Sección Actualidad */}
      <div className="bg-[#ebe2db] relative">
        {/* Borde Superior */}
        <div className="h-1 bg-[#4c0f2e]"></div>
        
        <div className="container mx-auto px-6 py-20">
          {/* Título Principal */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-normal text-[#2d161e]">
              Actualidad que conecta contigo
            </h2>
          </div>
          
          {/* Contenido Principal - Dos Columnas */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Columna Izquierda - Imagen */}
            <div className="lg:w-3/5">
              <div className="relative h-96 lg:h-[500px]">
                <Image
                  src="/img/img_principal_actualidad.jpg"
                  alt="Mujer revisando smartphone"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            
            {/* Columna Derecha - Categorías */}
            <div className="lg:w-2/5 space-y-8">
              {/* Categoría 1 */}
              <div className="border-b border-[#4c0f2e]/20 pb-6">
                <button 
                  onClick={() => alert('Esta categoría aún no tiene contenido disponible. ¡Próximamente!')}
                  className="flex items-center justify-between w-full text-left hover:text-[#4c0f2e] transition-colors duration-200"
                >
                  <span className="text-2xl font-serif font-normal text-[#2d161e]">DINERO Y PAREJA</span>
                  <span className="text-2xl text-[#4c0f2e]">»</span>
                </button>
              </div>
              
              {/* Categoría 2 */}
              <div className="border-b border-[#4c0f2e]/20 pb-6">
                <button 
                  onClick={() => alert('Esta categoría aún no tiene contenido disponible. ¡Próximamente!')}
                  className="flex items-center justify-between w-full text-left hover:text-[#4c0f2e] transition-colors duration-200"
                >
                  <span className="text-2xl font-serif font-normal text-[#2d161e]">MAXIMIZA TU RIQUEZA</span>
                  <span className="text-2xl text-[#4c0f2e]">»</span>
                </button>
              </div>
              
              {/* Categoría 3 */}
              <div className="border-b border-[#4c0f2e]/20 pb-6">
                <button 
                  onClick={() => alert('Esta categoría aún no tiene contenido disponible. ¡Próximamente!')}
                  className="flex items-center justify-between w-full text-left hover:text-[#4c0f2e] transition-colors duration-200"
                >
                  <span className="text-2xl font-serif font-normal text-[#2d161e]">PREPARÁNDOTE PARA LA JUBILACIÓN</span>
                  <span className="text-2xl text-[#4c0f2e]">»</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Enlace Ver más artículos */}
          <div className="text-right mt-16">
            <a href="/tendencia" className="inline-flex items-center text-[#2d161e] hover:text-[#4c0f2e] font-serif text-3xl font-normal transition-colors duration-200">
              Ver más artículos
              <span className="ml-4 text-4xl">»</span>
            </a>
          </div>
                </div>
        
        {/* Borde Inferior */}
        <div className="h-1 bg-[#4c0f2e]"></div>
      </div>

      {/* Footer CORA Invest */}
      <div className="bg-[#4c0f2e] py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
            {/* Contacto */}
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-[#e0c3b5] uppercase mb-6">
                CONTACT US
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <svg className="w-7 h-7 text-[#e0c3b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-[#e0c3b5] text-lg">thecorainvest@gmail.com</span>
              </div>
            </div>
            
            {/* Logo CORA Invest */}
            <div className="flex justify-center">
              <Image
                src="/img/logo/logo_2.png"
                alt="CORA Invest Logo"
                width={180}
                height={180}
                className="w-45 h-45"
              />
            </div>
            
            {/* Redes Sociales */}
            <div className="text-center">
              <h3 className="text-2xl font-serif font-bold text-[#e0c3b5] uppercase mb-6">
                GET SOCIAL
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <svg className="w-7 h-7 text-[#e0c3b5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[#e0c3b5] text-lg">Tag us in your photos!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
