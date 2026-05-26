import { memo } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter, MessageSquare, Mail, ArrowUpRight } from 'lucide-react'

const links = {
  company: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Nosotros', href: '#nosotros' },
  ],
  services: [
    { label: 'Desarrollo Web', href: '#servicios' },
    { label: 'Software a Medida', href: '#servicios' },
    { label: 'Apps Web', href: '#servicios' },
    { label: 'Tiendas Online Premium', href: '#servicios' },
    { label: 'Landing Pages de Alto Impacto', href: '#servicios' },
    { label: 'Creamos contenido digital para tus redes sociales', href: '#servicios' },
  ],
}

const socials = [
  { icon: Instagram, href: 'https://instagram.com/mavixdigital', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/mavixdigital', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/mavixdigital', label: 'Twitter' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Pie de página" className="relative border-t border-white/5 overflow-hidden section-surface">
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logo.png"
                  alt="Logo MAVIX Tech agencia digital en Armenia Quindío"
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-auto"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'block' }}
                />
                <span className="font-sora font-bold text-xl tracking-[0.2em] gradient-text" style={{ display: 'none' }}>
                  MAVIX
                </span>
              </div>

              <p className="font-poppins text-[#7A7A7A] text-sm leading-relaxed mb-2 max-w-xs">
                Diseñamos presencia. Creamos autoridad.
              </p>
              <p className="font-poppins text-[#7A7A7A]/60 text-xs leading-relaxed max-w-xs mb-6">
                Agencia digital premium para empresas que quieren dominar el mundo digital.
              </p>

              {/* Contact chips */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/573136135417"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-grotesk text-[#7A7A7A] hover:text-[#5B8CFF] transition-colors duration-300"
                >
                  <MessageSquare size={13} className="text-[#5B8CFF]" />
                  +57 313 613 5417
                </a>
                <a
                  href="mailto:mavix@gmail.com"
                  className="inline-flex items-center gap-2 text-xs font-grotesk text-[#7A7A7A] hover:text-[#5B8CFF] transition-colors duration-300"
                >
                  <Mail size={13} className="text-[#5B8CFF]" />
                  mavix@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="font-grotesk font-semibold text-xs text-[#F5F5F5] tracking-widest uppercase mb-5">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3">
              {links.company.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-grotesk text-sm text-[#7A7A7A] hover:text-[#F5F5F5] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#5B8CFF] transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h4 className="font-grotesk font-semibold text-xs text-[#F5F5F5] tracking-widest uppercase mb-5">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {links.services.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-grotesk text-sm text-[#7A7A7A] hover:text-[#F5F5F5] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 text-[#5B8CFF] transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-grotesk text-xs text-[#7A7A7A]/50">
            © {year} MAVIX. Todos los derechos reservados.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(s => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-white/8 text-[#7A7A7A] hover:text-[#F5F5F5] hover:border-[#5B8CFF]/30 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={14} />
                </motion.a>
              )
            })}
          </div>

          <p className="font-grotesk text-xs text-[#7A7A7A]/30">
            Diseñado y desarrollado por MAVIX
          </p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
