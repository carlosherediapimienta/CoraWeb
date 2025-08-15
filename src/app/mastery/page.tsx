import { Section, SectionHeader } from '@/components/ui'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function MasteryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="accent" container={false}>
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mastery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Domina las habilidades esenciales para el éxito financiero y profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cursos" className="btn-primary bg-white text-[#4c0f2e] hover:bg-gray-100">
              Explorar cursos
            </a>
            <a href="#certificaciones" className="btn-secondary border-white text-white hover:bg-white hover:text-[#4c0f2e]">
              Ver certificaciones
            </a>
          </div>
        </div>
      </Section>

      {/* Cursos Destacados */}
      <Section background="gray">
        <SectionHeader
          title="Cursos Destacados"
          description="Programas especializados diseñados para llevarte al siguiente nivel"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Curso 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Finanzas Personales Avanzadas
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Aprende estrategias avanzadas de planificación financiera, inversión y gestión de patrimonio.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">8 semanas</span>
              <ArrowRightIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>

          {/* Curso 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Análisis de Inversiones
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Domina las técnicas de análisis fundamental y técnico para tomar decisiones de inversión informadas.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">10 semanas</span>
              <ArrowRightIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>

          {/* Curso 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Emprendimiento Digital
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Construye y escala tu negocio digital con estrategias probadas y herramientas modernas.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">12 semanas</span>
              <ArrowRightIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>
        </div>
      </Section>

      {/* Certificaciones */}
      <Section background="white">
        <SectionHeader
          title="Certificaciones Reconocidas"
          description="Obtén credenciales que validen tu experiencia y conocimientos"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#ebe2db] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2d161e] mb-4">
              Certificación en Finanzas Personales
            </h3>
            <p className="text-[#b09287] mb-6">
              Programa completo que cubre todos los aspectos de la gestión financiera personal.
            </p>
            <ul className="space-y-2 text-[#2d161e] mb-6">
              <li>• Planificación financiera</li>
              <li>• Gestión de deudas</li>
              <li>• Estrategias de inversión</li>
              <li>• Planificación de jubilación</li>
            </ul>
            <button className="btn-primary">
              Obtener Certificación
            </button>
          </div>

          <div className="bg-[#ebe2db] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2d161e] mb-4">
              Certificación en Análisis de Mercados
            </h3>
            <p className="text-[#b09287] mb-6">
              Especialización en análisis de mercados financieros y toma de decisiones de inversión.
            </p>
            <ul className="space-y-2 text-[#2d161e] mb-6">
              <li>• Análisis fundamental</li>
              <li>• Análisis técnico</li>
              <li>• Gestión de riesgos</li>
              <li>• Psicología del trading</li>
            </ul>
            <button className="btn-primary">
              Obtener Certificación
            </button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para dominar tus habilidades?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya han transformado sus carreras con nuestros programas de mastery.
          </p>
          <a href="/contact" className="btn-primary bg-white text-[#4c0f2e] hover:bg-gray-100">
            Comenzar Ahora
          </a>
        </div>
      </Section>
    </div>
  )
}
