'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NAVIGATION, SITE_CONFIG } from '@/constants/data'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Detectar scroll para header sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú móvil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Cerrar menú al cambiar ruta
  const handleNavigation = () => {
    setMobileMenuOpen(false)
  }

  // Manejar teclas para accesibilidad
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false)
      buttonRef.current?.focus()
    }
  }

  return (
    <>
      {/* Skip link para accesibilidad */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Saltar al contenido principal
      </a>
      
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-cora-border-light' 
            : 'bg-white'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <nav className="container-custom" aria-label="Navegación principal">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
                aria-label={`${SITE_CONFIG.name} - Página de inicio`}
              >
                <Image
                  src="/img/logo/logo.png"
                  alt=""
                  width={32}
                  height={32}
                  className="w-8 h-8 lg:w-10 lg:h-10"
                  priority
                  sizes="(max-width: 768px) 32px, 40px"
                />
                <span className="text-lg lg:text-xl font-bold text-cora-text">
                  {SITE_CONFIG.name}
                </span>
              </Link>
            </div>

            {/* Navegación Desktop */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-cora-text hover:text-cora-primary px-3 py-2 text-base font-medium transition-colors duration-200 group"
                    onClick={handleNavigation}
                  >
                    {item.name}
                    {/* Indicador de hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cora-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Botón menú móvil */}
            <div className="lg:hidden">
              <button
                ref={buttonRef}
                type="button"
                className="relative w-10 h-10 flex items-center justify-center text-cora-text hover:text-cora-primary hover:bg-cora-bg rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cora-primary focus:ring-offset-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
              >
                <span className="sr-only">
                  {mobileMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
                </span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {mobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              id="mobile-menu"
              className="lg:hidden border-t border-cora-border-light bg-white"
              onKeyDown={handleKeyDown}
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación móvil"
            >
              <div className="px-4 py-6 space-y-2">
                {NAVIGATION.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-cora-text hover:text-cora-primary hover:bg-cora-bg px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200"
                    onClick={handleNavigation}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Información adicional en móvil */}
              <div className="px-4 py-6 border-t border-cora-border-light bg-cora-bg/30">
                <div className="text-center">
                  <p className="text-cora-text-secondary text-sm mb-3">
                    ¿Necesitas ayuda?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-cora-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-200"
                    onClick={handleNavigation}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    Contactar
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
