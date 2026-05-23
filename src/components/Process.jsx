import { motion } from 'framer-motion'
import { Target, Layers, Code, TrendingUp, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Estrategia',
    desc: 'Analizamos tu negocio, mercado y objetivos para trazar una hoja de ruta digital sólida y orientada a resultados.',
    color: '#5B8CFF',
    detail: '1–2 días',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Diseño',
    desc: 'Creamos wireframes, prototipos interactivos y el sistema visual completo que define la identidad del producto.',
    color: '#C9CDD2',
    detail: '3–5 días',
  },
  {
    number: '03',
    icon: Code,
    title: 'Desarrollo',
    desc: 'Construimos tu solución con tecnologías de vanguardia, código limpio y arquitectura escalable.',
    color: '#5B8CFF',
    detail: '1–3 semanas',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimización',
    desc: 'Realizamos pruebas exhaustivas de rendimiento, SEO, accesibilidad y experiencia de usuario.',
    color: '#C9CDD2',
    detail: '2–3 días',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Lanzamiento',
    desc: 'Desplegamos tu proyecto, te entregamos el control total y brindamos soporte post-lanzamiento.',
    color: '#5B8CFF',
    detail: '1 día',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section-pad relative overflow-hidden section-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.1),transparent_32%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/15 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#5B8CFF] opacity-[0.025] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Nuestro proceso
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6 leading-tight">
            Cómo trabajamos
          </h2>
          <p className="max-w-xl mx-auto font-poppins text-[#7A7A7A] text-base md:text-lg leading-relaxed">
            Un proceso probado y transparente que garantiza resultados excepcionales en cada entrega.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative flex justify-center mb-16">
            <motion.div
              className="absolute top-1/2 left-[10%] right-[10%] h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(91,140,255,0.4) 20%, rgba(201,205,210,0.3) 50%, rgba(91,140,255,0.4) 80%, transparent)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />

            <div className="relative flex justify-between w-full px-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 + 0.4 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center border relative z-10"
                      style={{
                        background: `${step.color}12`,
                        borderColor: `${step.color}35`,
                      }}
                      whileHover={{ scale: 1.1, boxShadow: `0 0 24px ${step.color}40` }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon size={22} style={{ color: step.color }} />
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-5 gap-5">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                className="relative flex gap-5"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{ background: `${step.color}12`, borderColor: `${step.color}30` }}
                  >
                    <Icon size={18} style={{ color: step.color }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2 mb-0"
                      style={{ background: `linear-gradient(180deg, ${step.color}40, transparent)`, minHeight: '32px' }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div className="pb-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-grotesk text-[11px] font-bold text-[#5B8CFF] tracking-widest">{step.number}</span>
                    <span className="font-grotesk text-[11px] text-[#7A7A7A] tracking-widest">{step.detail}</span>
                  </div>
                  <h3 className="font-sora font-bold text-lg text-[#F5F5F5] mb-2">{step.title}</h3>
                  <p className="font-poppins text-sm text-[#7A7A7A] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  return (
    <motion.div
      className="group glass-accent rounded-[26px] p-6 border border-white/10 hover:border-[#5B8CFF]/25 transition-all duration-500 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 + 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span
          className="font-sora font-bold text-2xl"
          style={{ color: `${step.color}50` }}
        >
          {step.number}
        </span>
        <span className="font-grotesk text-[10px] text-[#7A7A7A] tracking-widest uppercase border border-white/8 px-2 py-0.5 rounded">
          {step.detail}
        </span>
      </div>
      <h3 className="font-sora font-bold text-base text-[#F5F5F5] mb-2">{step.title}</h3>
      <p className="font-poppins text-xs text-[#7A7A7A] leading-relaxed">{step.desc}</p>
    </motion.div>
  )
}
