import { Section, SectionHeader } from '@/components/ui'
import { ArrowRightIcon, TrendingUpIcon } from '@heroicons/react/24/outline'

export default function TendenciaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section background="accent" container={false}>
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tendencia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Mantente al día con las últimas tendencias en finanzas, tecnología y mercados emergentes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tendencias" className="btn-primary bg-white text-[#4c0f2e] hover:bg-gray-100">
              Ver tendencias
            </a>
            <a href="#mercados" className="btn-secondary border-white text-white hover:bg-white hover:text-[#4c0f2e]">
              Análisis de mercados
            </a>
          </div>
        </div>
      </Section>

      {/* Tendencias Principales */}
      <Section background="gray">
        <SectionHeader
          title="Tendencias Principales"
          description="Las tendencias que están transformando el mundo financiero y tecnológico"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tendencia 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <TrendingUpIcon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Fintech Revolucionario
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Las tecnologías financieras están democratizando el acceso a servicios bancarios y de inversión.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">+45% crecimiento</span>
              <ArrowRightIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>

          {/* Tendencia 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              IA en Finanzas
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              La inteligencia artificial está transformando la gestión de riesgos y la toma de decisiones financieras.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">+60% adopción</span>
              <ArrowRightIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>

          {/* Tendencia 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-[#e0c3b5]">
            <div className="w-16 h-16 bg-[#4c0f2e]/10 rounded-xl flex items-center justify-center text-[#4c0f2e] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl text-[#2d161e] mb-3">
              Inversión Sostenible
            </h3>
            <p className="text-[#b09287] text-sm mb-4">
              Los inversores están priorizando empresas con prácticas ESG y sostenibilidad.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">+80% demanda</span>
              <ArrowRightIcon className="w-5 h-5 text-[#b09287]" />
            </div>
          </div>
        </div>
      </Section>

      {/* Análisis de Mercados */}
      <Section background="white">
        <SectionHeader
          title="Análisis de Mercados"
          description="Reportes detallados sobre el comportamiento de los mercados financieros"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#ebe2db] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2d161e] mb-4">
              Mercado de Criptomonedas
            </h3>
            <p className="text-[#b09287] mb-6">
              Análisis completo del mercado crypto con tendencias, oportunidades y riesgos.
            </p>
            <ul className="space-y-2 text-[#2d161e] mb-6">
              <li>• Bitcoin y altcoins principales</li>
              <li>• DeFi y NFTs</li>
              <li>• Regulación y adopción</li>
              <li>• Estrategias de inversión</li>
            </ul>
            <button className="btn-primary">
              Leer Análisis
            </button>
          </div>

          <div className="bg-[#ebe2db] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#2d161e] mb-4">
              Mercados Tradicionales
            </h3>
            <p className="text-[#b09287] mb-6">
              Análisis de acciones, bonos y commodities con perspectivas macroeconómicas.
            </p>
            <ul className="space-y-2 text-[#2d161e] mb-6">
              <li>• S&P 500 y NASDAQ</li>
              <li>• Bonos del Tesoro</li>
              <li>• Oro y petróleo</li>
              <li>• Indicadores económicos</li>
            </ul>
            <button className="btn-primary">
              Leer Análisis
            </button>
          </div>
        </div>
      </Section>

      {/* Reportes Semanales */}
      <Section background="gray">
        <SectionHeader
          title="Reportes Semanales"
          description="Resúmenes semanales de las tendencias más importantes"
        />
        
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-[#e0c3b5]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#2d161e]">
                Reporte Semanal #24 - Fintech y Bancos Digitales
              </h3>
              <span className="text-[#b09287] text-sm">Hace 2 días</span>
            </div>
            <p className="text-[#b09287] mb-4">
              Análisis de las nuevas tendencias en banca digital, incluyendo neobancos, criptobancos y la evolución de los servicios financieros tradicionales.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">15 min de lectura</span>
              <button className="text-[#4c0f2e] hover:text-[#4c0f2e]/80 font-medium">
                Leer completo →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e0c3b5]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#2d161e]">
                Reporte Semanal #23 - IA y Automatización Financiera
              </h3>
              <span className="text-[#b09287] text-sm">Hace 1 semana</span>
            </div>
            <p className="text-[#b09287] mb-4">
              Cómo la inteligencia artificial está transformando la gestión de portafolios, detección de fraudes y análisis de riesgos en el sector financiero.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">12 min de lectura</span>
              <button className="text-[#4c0f2e] hover:text-[#4c0f2e]/80 font-medium">
                Leer completo →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e0c3b5]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#2d161e]">
                Reporte Semanal #22 - Sostenibilidad e Inversión ESG
              </h3>
              <span className="text-[#b09287] text-sm">Hace 2 semanas</span>
            </div>
            <p className="text-[#b09287] mb-4">
              El crecimiento de la inversión sostenible y cómo los criterios ESG están influyendo en las decisiones de inversión institucionales y minoristas.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-[#4c0f2e] font-semibold">18 min de lectura</span>
              <button className="text-[#4c0f2e] hover:text-[#4c0f2e]/80 font-medium">
                Leer completo →
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Newsletter de Tendencias */}
      <Section background="accent">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mantente informado
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter semanal para recibir las últimas tendencias y análisis de mercados directamente en tu email.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-2xl text-[#2d161e] placeholder-[#b09287] focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-[#4c0f2e] px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
