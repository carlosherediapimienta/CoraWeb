import Link from 'next/link'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { NAVIGATION, SOCIAL_LINKS, SITE_CONFIG } from '@/constants/data'
import { getSocialIcon } from '@/utils/icons'

export default function Footer() {
  return (
    <footer className="bg-cora-primary text-white relative overflow-hidden">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cora-accent rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cora-accent rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative z-10 container-custom py-12 sm:py-16 md:py-20">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          {/* Logo CORA centrado */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/img/logo/logo.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10"
                loading="lazy"
                sizes="40px"
              />
              <span className="text-2xl font-bold text-cora-accent">CORA</span>
            </div>
            <p className="text-cora-accent/80 text-sm sm:text-base text-center md:text-left max-w-xs">
              Empoderando mujeres hacia la libertad financiera
            </p>
          </div>

          {/* Contacto */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-cora-accent">
              CONTÁCTANOS
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-cora-accent flex-shrink-0" />
                <a 
                  href="mailto:thecorainvest@gmail.com"
                  className="text-cora-accent/80 hover:text-cora-accent transition-colors duration-200 text-sm sm:text-base"
                  aria-label="Enviar email a thecorainvest@gmail.com"
                >
                  thecorainvest@gmail.com
                </a>
              </div>
              <p className="text-cora-accent/60 text-xs sm:text-sm">
                Respondemos en 24 horas
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="font-semibold text-lg sm:text-xl mb-4 sm:mb-6 text-cora-accent">
              SÍGUENOS
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-5 h-5 text-cora-accent flex-shrink-0">
                  {getSocialIcon('instagram')}
                </div>
                <span className="text-cora-accent/80 text-sm sm:text-base">
                  ¡Menciona tu experiencia!
                </span>
              </div>
              <p className="text-cora-accent/60 text-xs sm:text-sm">
                Comparte tu viaje financiero
              </p>
            </div>
          </div>
        </div>

        {/* Navegación rápida */}
        <div className="border-t border-cora-accent/20 mt-8 sm:mt-12 pt-8 sm:pt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-cora-accent/70 hover:text-cora-accent text-sm sm:text-base transition-colors duration-200 text-center sm:text-left"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cora-accent/20 mt-8 sm:mt-12 pt-8 sm:pt-12 text-center">
          <p className="text-cora-accent/60 text-sm sm:text-base">
            © 2025 CORA Invest. Todos los derechos reservados.
          </p>
          <p className="text-cora-accent/40 text-xs sm:text-sm mt-2">
            Diseñado con ❤️ para empoderar mujeres
          </p>
        </div>
      </div>
    </footer>
  )
}
