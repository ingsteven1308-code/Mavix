import { motion } from 'framer-motion'
import { Shield, Zap, Star, Users } from 'lucide-react'
import AboutBg from '../Images/aplicaciones-web-armenia-quindio.jpg'

const values = [
  { icon: Star, label: 'Excelencia', desc: 'Cada detalle importa. Entregamos calidad premium sin excepciones.' },
  { icon: Zap, label: 'Velocidad', desc: 'Cumplimos plazos sin sacrificar calidad. Tu tiempo es nuestro tiempo.' },
  { icon: Shield, label: 'Confianza', desc: 'Transparencia total. Sabrás exactamente qué, cómo y cuándo.' },
  { icon: Users, label: 'Alianza', desc: 'No somos un proveedor. Somos el socio tecnológico de tu crecimiento.' },
]

export default function About() {
  return (
    <section id="nosotros" className="section-pad relative overflow-hidden section-surface min-h-[85vh] lg:min-h-[95vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AboutBg})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.15),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_22%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#C9CDD2]/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: text */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Sobre MAVIX
            </span>
            <h2 className="font-sora font-bold text-4xl md:text-5xl gradient-text mb-6 leading-tight">
              Agencia tecnológica en el Eje Cafetero{' '}
              <span className="text-[#5B8CFF]">y Colombia</span>
            </h2>
            <p className="font-poppins text-[#7A7A7A] text-base leading-relaxed mb-5">
              MAVIX acompaña a empresas en Armenia, Quindío y Colombia con diseño web, software a medida y estrategia digital de alto nivel.
            </p>
            <p className="font-poppins text-[#7A7A7A] text-base leading-relaxed mb-8">
              Creamos páginas web corporativas, sistemas empresariales, tiendas online y apps web que combinan estética premium, rendimiento CRO y mensajes claros para captar clientes.
            </p>
            <p className="font-poppins text-[#7A7A7A] text-base leading-relaxed mb-8">
              Nuestra propuesta es tecnología estratégica: landing pages de impacto, automatización empresarial y contenido digital para marcas que buscan liderar en todo Colombia.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-grotesk font-semibold text-sm text-[#F5F5F5] border border-[#5B8CFF]/30 hover:border-[#5B8CFF]/60 transition-all duration-300"
              style={{ background: 'rgba(91,140,255,0.08)' }}
            >
              Conoce al equipo
            </motion.a>
          </motion.div>

          {/* Right: values grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.label}
                  className="group glass-accent rounded-[26px] p-6 border border-white/10 hover:border-[#5B8CFF]/25 transition-all duration-400 shadow-[0_20px_40px_rgba(0,0,0,0.16)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-[#5B8CFF]/20" style={{ background: 'rgba(91,140,255,0.1)' }}>
                    <Icon size={18} className="text-[#5B8CFF]" />
                  </div>
                  <h4 className="font-sora font-bold text-sm text-[#F5F5F5] mb-2">{v.label}</h4>
                  <p className="font-poppins text-xs text-[#7A7A7A] leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
