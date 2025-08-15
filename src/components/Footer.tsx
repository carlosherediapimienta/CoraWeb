import Link from 'next/link'
import Image from 'next/image'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { NAVIGATION, SOCIAL_LINKS, SITE_CONFIG } from '@/constants/data'
import { getSocialIcon } from '@/utils/icons'

export default function Footer() {
  return (
    <footer className="bg-[#2d161e] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo CORA centrado */}
          <div className="col-span-1 flex justify-center">
            <div className="flex items-center">
              <Image
                src="/img/logo/logo.png"
                alt="CORA Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="ml-3 text-2xl font-bold">CORA</span>
            </div>
          </div>

          {/* Contacto */}
          <div className="col-span-1 text-center">
            <h3 className="font-semibold text-lg mb-4">CONTACT US</h3>
            <div className="flex items-center justify-center">
              <EnvelopeIcon className="h-5 w-5 text-[#4c0f2e] mr-2" />
              <a 
                href="mailto:thecorainvest@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                thecorainvest@gmail.com
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="col-span-1 text-center">
            <h3 className="font-semibold text-lg mb-4">GET SOCIAL</h3>
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 mr-2">
                {getSocialIcon('instagram')}
              </div>
              <span className="text-gray-300">Tag us in your photos!</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CORA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
