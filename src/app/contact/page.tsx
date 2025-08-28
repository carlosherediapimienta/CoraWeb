'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Section, SectionHeader } from '@/components/ui'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Formulario enviado:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-cora-bg flex items-center justify-center p-4">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-cora-border-light">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cora-text mb-4 sm:mb-6">
              ¡Mensaje enviado!
            </h1>
            <p className="text-cora-text-secondary text-base sm:text-lg mb-8 sm:mb-10">
              Gracias por contactarnos. Te responderemos lo antes posible.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="primary"
              size="md"
              fullWidth
            >
              Enviar otro mensaje
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header de contacto */}
      <Section background="primary" container={false} padding="xl">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
            Contacto
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-10">
            ¿Tienes alguna pregunta, sugerencia o quieres colaborar? 
            Nos encantaría escucharte.
          </p>
        </div>
      </Section>

      {/* Contenido principal */}
      <Section background="gray" padding="xl">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Información de contacto */}
            <div className="space-y-8 sm:space-y-10">
              <SectionHeader
                title="Información de contacto"
                size="md"
                align="left"
                showDivider
              />
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cora-primary/10 rounded-2xl flex items-center justify-center text-cora-primary flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cora-text mb-1 sm:mb-2 text-base sm:text-lg">Email</h3>
                    <a 
                      href="mailto:thecorainvest@gmail.com"
                      className="text-cora-text-secondary hover:text-cora-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      thecorainvest@gmail.com
                    </a>
                    <p className="text-cora-text-muted text-xs sm:text-sm">Respondemos en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cora-primary/10 rounded-2xl flex items-center justify-center text-cora-primary flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cora-text mb-1 sm:mb-2 text-base sm:text-lg">Teléfono</h3>
                    <a 
                      href="tel:+34600000000"
                      className="text-cora-text-secondary hover:text-cora-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      +34 600 000 000
                    </a>
                    <p className="text-cora-text-muted text-xs sm:text-sm">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-cora-primary/10 rounded-2xl flex items-center justify-center text-cora-primary flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cora-text mb-1 sm:mb-2 text-base sm:text-lg">Ubicación</h3>
                    <p className="text-cora-text-secondary text-sm sm:text-base">Madrid, España</p>
                    <p className="text-cora-text-muted text-xs sm:text-sm">Trabajamos de forma remota</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 sm:p-8 bg-cora-primary/5 rounded-3xl border border-cora-primary/10">
                <h3 className="text-lg sm:text-xl font-semibold text-cora-text mb-3 sm:mb-4">
                  ¿Por qué contactarnos?
                </h3>
                <ul className="space-y-2 text-cora-text-secondary text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-cora-primary rounded-full"></span>
                    <span>Colaboraciones y partnerships</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-cora-primary rounded-full"></span>
                    <span>Sugerencias de contenido</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-cora-primary rounded-full"></span>
                    <span>Reportes de errores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-cora-primary rounded-full"></span>
                    <span>Consultas técnicas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-cora-primary rounded-full"></span>
                    <span>Oportunidades de negocio</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-cora-border-light">
                <SectionHeader
                  title="Envíanos un mensaje"
                  size="sm"
                  align="left"
                  className="mb-8"
                />
                
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm sm:text-base font-medium text-cora-text mb-2 sm:mb-3">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-cora-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-cora-primary/50 focus:border-cora-primary transition-all duration-200 text-sm sm:text-base"
                        placeholder="Tu nombre"
                        aria-describedby="name-error"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm sm:text-base font-medium text-cora-text mb-2 sm:mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-cora-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-cora-primary/50 focus:border-cora-primary transition-all duration-200 text-sm sm:text-base"
                        placeholder="tu@email.com"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-cora-text mb-2 sm:mb-3">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-cora-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-cora-primary/50 focus:border-cora-primary transition-all duration-200 text-sm sm:text-base"
                      aria-describedby="subject-error"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="colaboracion">Colaboración</option>
                      <option value="sugerencia">Sugerencia</option>
                      <option value="error">Reporte de error</option>
                      <option value="consulta">Consulta técnica</option>
                      <option value="negocio">Oportunidad de negocio</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm sm:text-base font-medium text-cora-text mb-2 sm:mb-3">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-cora-border-light rounded-2xl focus:outline-none focus:ring-2 focus:ring-cora-primary/50 focus:border-cora-primary transition-all duration-200 text-sm sm:text-base resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                      aria-describedby="message-error"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
