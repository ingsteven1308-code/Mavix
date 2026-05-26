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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,140,255,0.14),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#5B8CFF]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#5B8CFF]/25 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-1/4 h-52 w-52 rounded-full bg-[#5B8CFF]/10 blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-[#C9CDD0]/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.28em] uppercase font-medium mb-4">
            Nuestro proceso
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-5 leading-tight">
            Cómo trabajamos para llevar tu proyecto más lejos
          </h2>
          <p className="max-w-2xl mx-auto font-poppins text-[#9CA3AF] text-base md:text-lg leading-relaxed">
            Cada fase está diseñada para darte claridad, confianza y resultados medibles desde el primer paso hasta el lanzamiento.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="relative mb-16">
            <div className="absolute inset-x-12 top-1/2 h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/40 to-transparent" />
            <div className="relative flex items-center justify-between gap-6 px-6">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.number}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-3xl border border-white/10 bg-[#0F172A]/90 shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                  >
                    <Icon size={20} style={{ color: step.color }} />
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-5">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        <div className="lg:hidden grid gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.article
                key={step.number}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1220]/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_55%)] pointer-events-none" />
                <div className="relative flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-3xl border border-white/10 bg-[#141E3A]/85 text-[#5B8CFF]">
                      <Icon size={18} />
                    </div>
                    <span className="font-sora text-2xl font-semibold text-[#F5F5F3]">{step.number}</span>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#CBD5E1]">
                    {step.detail}
                  </span>
                </div>
                <h3 className="font-sora text-xl font-bold text-[#F5F5F5] mb-3">{step.title}</h3>
                <p className="font-poppins text-sm leading-relaxed text-[#B0BBCF]">{step.desc}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  return (
    <motion.article
      className="relative overflow-hidden rounded-[32px] border border-[#3B4B6F]/70 bg-[#0B1220]/95 p-6 shadow-[0_18px_80px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 + 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.1),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_55%)] opacity-80 pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <span className="font-sora text-2xl font-semibold text-[#5B8CFF]">{step.number}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#CBD5E1]">
            {step.detail}
          </span>
        </div>

        <h3 className="font-sora text-xl font-bold text-[#F5F5F5] mb-3">{step.title}</h3>
        <p className="font-poppins text-sm leading-relaxed text-[#B0BBCF]">{step.desc}</p>
      </div>
    </motion.article>
  )
}
