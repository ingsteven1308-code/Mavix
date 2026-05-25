import { memo } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section className="section-pad relative overflow-hidden section-surface-strong">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.08),transparent_32%)] pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.3em] uppercase font-medium mb-6">
            ¿Listo para escalar?
          </span>

          {/* Headline */}
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            <span className="gradient-text">Tu próximo nivel digital</span>
            <br />
            <span className="text-[#F5F5F5]">empieza </span>
            <motion.span
              className="text-[#5B8CFF]"
              animate={{ textShadow: ['0 0 30px rgba(91,140,255,0.4)', '0 0 70px rgba(91,140,255,0.7)', '0 0 30px rgba(91,140,255,0.4)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              hoy.
            </motion.span>
          </h2>

          <p className="font-poppins text-[#7A7A7A] text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Agenda una reunión estratégica gratuita y descubre cómo MAVIX puede transformar la presencia digital de tu empresa.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(91,140,255,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-grotesk font-semibold text-sm text-white transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #5B8CFF, #3a6bff)' }}
            >
              Agendar reunión gratuita
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>

            <motion.a
              href="https://wa.me/573136135417"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-grotesk font-semibold text-sm text-[#F5F5F5] glass border border-white/12 hover:border-white/25 transition-all duration-300"
            >
              Escribir por WhatsApp
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {['Sin compromiso', 'Respuesta en 24h', 'Consultoría gratuita', 'Equipo altamente profesional'].map(badge => (
              <span key={badge} className="flex items-center gap-1.5 font-grotesk text-xs text-[#7A7A7A]">
                <span className="w-1 h-1 rounded-full bg-[#5B8CFF]" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(CTA)
