import { Section, SectionHeader } from '@/components/ui'
import { ArrowRightIcon, DownloadIcon } from '@heroicons/react/24/outline'

export default function PlannersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="accent" container={false}>
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Planners
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Herramientas prácticas y plantillas descargables para organizar tu vida financiera y profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#plantillas" className="btn-primary bg-white text-[#4c0f2e] hover:bg-gray-100">
              Ver plantillas
            </a>
            <a href="#herramientas" className="btn-secondary border-white text-white hover:bg-white hover:text-[#4c0f2e]">
              Explorar herramientas
            </a>
          </div>
        </div>
      </Section>

      {/* Plantillas Destacadas */}
      <Section background="gray">
        <SectionHeader
          title="Plantillas Destacadas"
          description="Descarga plantillas profesionales para organizar tus finanzas y proyectos"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plantilla 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Presupuesto Mensual
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Plantilla completa para planificar y controlar tus gastos mensuales de manera efectiva.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">Excel</span>
              <DownloadIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>

          {/* Plantilla 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Tracking de Inversiones
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Sistema para monitorear el rendimiento de tus inversiones y portafolio.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">Google Sheets</span>
              <DownloadIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>

          {/* Plantilla 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Plan de Negocio
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Plantilla profesional para crear planes de negocio completos y estructurados.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">Word</span>
              <DownloadIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>
        </div>
      </Section>

      {/* Herramientas Interactivas */}
      <Section background="white">
        <SectionHeader
          title="Herramientas Interactivas"
          description="Aplicaciones web y móviles para gestionar tus finanzas en tiempo real"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#ebe2db] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2d161e] mb-4">
              Budget Tracker Pro
            </h3>
            <p className="text-[#b09287] mb-6">
              Aplicación web para el seguimiento completo de ingresos, gastos y ahorros.
            </p>
            <ul className="space-y-2 text-[#2d161e] mb-6">
              <li>• Categorización automática</li>
              <li>• Reportes visuales</li>
              <li>• Metas de ahorro</li>
              <li>• Sincronización multiplataforma</li>
            </ul>
            <button className="btn-primary">
              Acceder Ahora
            </button>
          </div>

          <div className="bg-[#ebe2db] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2d161e] mb-4">
              Investment Portfolio Manager
            </h3>
            <p className="text-[#b09287] mb-6">
              Gestor avanzado de portafolios con análisis de riesgo y rendimiento.
            </p>
            <ul className="space-y-2 text-[#2d161e] mb-6">
              <li>• Seguimiento en tiempo real</li>
              <li>• Análisis de diversificación</li>
              <li>• Alertas personalizadas</li>
              <li>• Integración con brokers</li>
            </ul>
            <button className="btn-primary">
              Acceder Ahora
            </button>
          </div>
        </div>
      </Section>

      {/* Categorías de Plantillas */}
      <Section background="gray">
        <SectionHeader
          title="Categorías de Plantillas"
          description="Organiza tus descargas por tipo y propósito"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2d161e] mb-2">Finanzas</h3>
            <p className="text-[#b09287] text-sm">Presupuestos, inversiones, impuestos</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2d161e] mb-2">Negocios</h3>
            <p className="text-[#b09287] text-sm">Planes, estrategias, marketing</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2d161e] mb-2">Productividad</h3>
            <p className="text-[#b09287] text-sm">Organización, planificación, metas</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#2d161e] mb-2">Emprendimiento</h3>
            <p className="text-[#b09287] text-sm">Startups, innovación, crecimiento</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas una plantilla específica?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Si no encuentras lo que buscas, contáctanos y crearemos una plantilla personalizada para ti.
          </p>
          <a href="/contact" className="btn-primary bg-white text-[#4c0f2e] hover:bg-gray-100">
            Solicitar Plantilla
          </a>
        </div>
      </Section>
    </div>
  )
}
