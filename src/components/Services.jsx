import { memo } from 'react'
import { motion } from 'framer-motion'
import { Globe, Code2, Zap, Monitor, Sparkles, ShoppingBag } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desarrollo Web',
    description: 'Sitios web premium, rápidos y escalables. Desde landing pages de alto impacto hasta plataformas complejas.',
    color: '#5B8CFF',
  },
  {
    icon: Code2,
    title: 'Software a Medida',
    description: 'Soluciones de software personalizadas que se adaptan exactamente a los procesos y necesidades de tu negocio.',
    color: '#C9CDD2',
  },
  {
    icon: Monitor,
    title: 'Apps Web',
    description: 'Aplicaciones web interactivas y PWAs que ofrecen experiencias fluidas en cualquier dispositivo.',
    color: '#5B8CFF',
  },
  {
    icon: ShoppingBag,
    title: 'Tiendas Online Premium',
    description: 'Creamos tiendas online modernas, rápidas y estratégicas diseñadas para impulsar tus ventas y ofrecer una experiencia de compra profesional.',
    color: '#C9CDD2',
  },
  {
    icon: Sparkles,
    title: 'Landing Pages de Alto Impacto',
    description: ' Diseñamos landing pages modernas y estratégicas enfocadas en captar la atención, transmitir confianza y convertir visitantes en clientes potenciales',
    color: '#5B8CFF',
  },
  //{
    //icon: Brain,
    //title: 'IA para Negocios',
    //description: 'Implementamos inteligencia artificial en tus procesos: chatbots, análisis predictivo y automatización inteligente.',
    //color: '#5B8CFF',
  //},
   {
    icon: Zap,
    title: 'Creamos contenido digital para tus redes sociales',
    description: 'Diseñamos contenido visual estratégico y atractivo para redes sociales que fortalece tu marca, aumenta tu presencia digital y conecta profesionalmente con tu audiencia.',
    color: '#C9CDD2',
  },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Services() {
  return (
    <section id="servicios" className="section-pad relative overflow-hidden section-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_25%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Lo que hacemos
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6 leading-tight">
            Servicios Premium
          </h2>
          <p className="max-w-2xl mx-auto font-poppins text-[#7A7A7A] text-base md:text-lg leading-relaxed">
            Cada solución que construimos está diseñada para posicionar tu empresa
            como un referente premium en el mundo digital.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Services)

function ServiceCard({ svc, index }) {
  const Icon = svc.icon
  const isLast = index === 6

  return (
    <motion.div
      variants={cardVariant}
      className={`group relative glass-accent rounded-[28px] p-7 border border-white/10 hover:border-[#5B8CFF]/30 transition-all duration-500 cursor-default overflow-hidden card-glow ${
        isLast ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      whileHover={{ y: -8 }}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(600px circle at 50% 0%, ${svc.color}08, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${svc.color}60, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/8 transition-all duration-300 group-hover:border-[#5B8CFF]/30"
        style={{ background: `${svc.color}12` }}
      >
        <Icon
          size={22}
          style={{ color: svc.color }}
          className="transition-all duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <h3 className="font-sora font-semibold text-lg text-[#F5F5F5] mb-3 group-hover:text-white transition-colors">
        {svc.title}
      </h3>
      <p className="font-poppins text-[#7A7A7A] text-sm leading-relaxed mb-5 group-hover:text-[#9a9a9a] transition-colors">
        {svc.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {(svc.tags ?? []).map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg text-[10px] font-grotesk font-medium tracking-wider uppercase"
            style={{
              background: `${svc.color}10`,
              color: svc.color,
              border: `1px solid ${svc.color}20`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
