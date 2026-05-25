import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Globe, Code2, ShoppingBag, Zap } from 'lucide-react'
import ProjectsBg from '../Images/Armenia-Quindio-Ciudad.jpg'
import PaginasWebArmenia from '../Images/Paginas-Web-Armenia.jpg'
import LuminousOdontologia from '../Images/Luminous-Odondologia-Armenia.jpg'
import TiendaOnlineWeb from '../Images/Tienda-Online-Web.jpg'

const categories = ['Todos', 'Web', 'Software']

const projects = [
  {
    id: 1,
    title: 'Mavix',
    subtitle: 'Empresa tecnológica en Armenia Quindío',
    category: 'Web,Software',
    desc: 'MAVIX es una empresa tecnológica en Armenia Quindío enfocada en crear desarrollo web, software a medida, apps web, landing pages, tiendas online y contenido digital premium para marcas que quieren verse más profesionales, modernas y competitivas.',
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    accent: '#5B8CFF',
    icon: ShoppingBag,
    image: PaginasWebArmenia,
    link: 'https://mavix-rust.vercel.app/',
  },
  {
    id: 2,
    title: 'Luminous',
    subtitle: 'Clínica odontológica en Armenia Quindío',
    category: 'Web,Software',
    desc: 'Clínica odontológica en Armenia Quindío especializada en diseño de sonrisa, blanqueamiento dental, ortodoncia, implantología, rehabilitación oral y tratamientos estéticos enfocados en salud, confianza y bienestar.',
    gradient: 'from-[#0d1117] via-[#161b22] to-[#21262d]',
    accent: '#C9CDD2',
    icon: Code2,
    image: LuminousOdontologia,
    link: 'https://tiven1308.github.io/luminous-site/',
  },
  {
    id: 3,
    title: 'Pastelería El Paisa',
    subtitle: 'Tienda online de pastelería en Getafe, Madrid, España',
    category: 'Web,Software',
    desc: 'Pastelería colombiana en Madrid especializada en tortas y postres personalizados para toda ocasión, combinando sabor, creatividad y una experiencia dulce única.',
    gradient: 'from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e]',
    accent: '#9b59b6',
    icon: Globe,
    image: TiendaOnlineWeb,
    link: 'https://pasteleria-el-paisa.vercel.app/',
  },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardV = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Projects() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category.split(',').includes(active))

  return (
    <section id="proyectos" className="section-pad relative overflow-hidden section-surface min-h-[80vh] lg:min-h-[85vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ProjectsBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90 pointer-events-none" />
      <div className="absolute left-10 top-1/4 h-56 w-56 rounded-full bg-[#5B8CFF]/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-10 bottom-16 h-56 w-56 rounded-full bg-[#C9CDD2]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#C9CDD2]/12 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Nuestro trabajo
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6 leading-tight">
            Proyectos Destacados
          </h2>
          <p className="max-w-xl mx-auto font-poppins text-[#7A7A7A] text-base md:text-lg leading-relaxed">
            Cada proyecto está diseñado para atraer clientes, transmitir confianza y elevar tu presencia digital.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-grotesk font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-[#5B8CFF] text-white glow-sm'
                  : 'glass border border-white/8 text-[#7A7A7A] hover:text-[#F5F5F5] hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="mt-12 rounded-3xl glass border border-white/10 p-10 text-center">
            <p className="font-sora font-semibold text-lg text-[#F5F5F5] mb-3">No hay proyectos para esa categoría aún.</p>
            <p className="font-poppins text-sm text-[#7A7A7A]">Selecciona otra categoría o ponte en contacto para ver ejemplos personalizados.</p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-grotesk text-sm text-[#7A7A7A] hover:text-[#5B8CFF] transition-colors duration-300"
          >
            ¿Quieres un proyecto así?{' '}
            <span className="text-[#5B8CFF] font-semibold">Hablemos</span>
            <ArrowUpRight size={14} className="text-[#5B8CFF]" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(Projects)

function ProjectCard({ project }) {
  const Icon = project.icon
  return (
    <motion.div
      variants={cardV}
      className="group relative rounded-[28px] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer glass-accent"
      whileHover={{ y: -8, boxShadow: '0 35px 90px rgba(91,140,255,0.16)' }}
    >
      {/* Visual area */}
      <div className="relative h-52 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
        />
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Ver proyecto ${project.title}`}
        />
        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-700 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)] opacity-70 pointer-events-none" />
        <div className="absolute inset-0 tech-grid-bg opacity-20 pointer-events-none" style={{ backgroundSize: '32px 32px' }} />

        {/* Center icon */}
        <motion.div
          className="relative z-20 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10"
          style={{ background: `${project.accent}20` }}
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={28} style={{ color: project.accent }} />
        </motion.div>

        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20"
          style={{ background: project.accent }}
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: 'rgba(11,11,11,0.6)', backdropFilter: 'blur(4px)' }}
        >
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-grotesk font-semibold border"
            style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            Ver Proyecto <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-grotesk font-semibold tracking-wider uppercase"
          style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}30` }}
        >
          {project.category}
        </div>
      </div>

      {/* Info area */}
      <div className="glass p-6 border-t border-white/5">
        <h3 className="font-sora font-bold text-lg text-[#F5F5F5] mb-0.5">{project.title}</h3>
        <p className="font-grotesk text-xs text-[#7A7A7A] mb-3 tracking-wide">{project.subtitle}</p>
        <p className="font-poppins text-sm text-[#7A7A7A] leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
         
        </div>
      </div>
    </motion.div>
  )
}
