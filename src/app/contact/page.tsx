'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Section, SectionHeader } from '@/components/ui'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#ebe2db] flex items-center justify-center">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-12 shadow-sm border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#2d161e] mb-4">
              ¡Mensaje enviado!
            </h1>
            <p className="text-[#b09287] text-lg mb-8">
              Gracias por contactarnos. Te responderemos lo antes posible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header de contacto */}
      <Section background="accent" container={false}>
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contacto
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            ¿Tienes alguna pregunta, sugerencia o quieres colaborar? 
            Nos encantaría escucharte.
          </p>
        </div>
      </Section>

      {/* Contenido principal */}
      <Section background="gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl font-bold text-[#2d161e] mb-8">
                Información de contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e]">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d161e] mb-1">Email</h3>
                    <p className="text-[#b09287]">hola@coraweb.com</p>
                    <p className="text-[#b09287] text-sm">Respondemos en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e]">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d161e] mb-1">Teléfono</h3>
                    <p className="text-[#b09287]">+34 600 000 000</p>
                    <p className="text-[#b09287] text-sm">Lun-Vie 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e]">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d161e] mb-1">Ubicación</h3>
                    <p className="text-[#b09287]">Madrid, España</p>
                    <p className="text-[#b09287] text-sm">Trabajamos de forma remota</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#4c0f2e]/5 rounded-2xl border border-[#4c0f2e]/10">
                <h3 className="text-xl font-semibold text-[#2d161e] mb-3">
                  ¿Por qué contactarnos?
                </h3>
                <ul className="space-y-2 text-[#b09287]">
                  <li>• Colaboraciones y partnerships</li>
                  <li>• Sugerencias de contenido</li>
                  <li>• Reportes de errores</li>
                  <li>• Consultas técnicas</li>
                  <li>• Oportunidades de negocio</li>
                </ul>
              </div>
            </div>

            {/* Formulario de contacto */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e0c3b5]">
                <h2 className="text-2xl font-bold text-[#2d161e] mb-6">
                  Envíanos un mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#2d161e] mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4c0f2e]/50 focus:border-[#4c0f2e]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#2d161e] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4c0f2e]/50 focus:border-[#4c0f2e]"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#2d161e] mb-2">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4c0f2e]/50 focus:border-[#4c0f2e]"
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
                    <label htmlFor="message" className="block text-sm font-medium text-[#2d161e] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4c0f2e]/50 focus:border-[#4c0f2e] resize-none"
                      placeholder="Cuéntanos en qué podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
