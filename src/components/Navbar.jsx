import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#inicio')

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 72)
          ticking = false
        })
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }

  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.nav
      initial={prefersReducedMotion ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-[0_24px_60px_rgba(0,0,0,0.18)] py-3 backdrop-saturate-150 navbar-fade' : 'py-5'
      }`}
      style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between will-change-transform">

        {/* Logo */}
        <a href="#inicio" onClick={() => handleNavClick('#inicio')} className="flex items-center gap-3 group">
            <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.2 }}>
            <img
              src="/logo.png"
              alt="MAVIX"
              loading="lazy"
              decoding="async"
              className="h-9 w-auto"
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'block' }}
            />
            <span
              className="font-sora font-bold text-xl tracking-[0.2em] gradient-text"
              style={{ display: 'none' }}
            >
              MAVIX
            </span>
          </motion.div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i + 0.3, duration: 0.5 }}
              className={`relative text-sm font-medium font-grotesk transition-colors duration-300 group ${
                activeLink === link.href ? 'text-[#F5F5F5]' : 'text-[#7A7A7A] hover:text-[#F5F5F5]'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-[#5B8CFF] to-transparent transition-all duration-300 ${
                  activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="hidden lg:block"
        >
          <motion.a
            href="#contacto"
            onClick={() => handleNavClick('#contacto')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative px-5 py-2.5 rounded-xl text-sm font-semibold font-grotesk text-[#F5F5F5] overflow-hidden group border border-[#5B8CFF]/25 hover:border-[#5B8CFF]/55 transition-colors duration-300"
            style={{ background: 'linear-gradient(135deg, rgba(91,140,255,0.12), rgba(91,140,255,0.05))' }}
          >
            <span className="relative z-10">Iniciar Proyecto</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5B8CFF]/15 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-[#F5F5F5] p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={20} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/5 glass-dark"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                  className="px-3 py-3 text-sm text-[#7A7A7A] hover:text-[#F5F5F5] font-grotesk rounded-lg hover:bg-white/3 transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => handleNavClick('#contacto')}
                className="mt-3 px-4 py-3 rounded-xl text-sm font-semibold font-grotesk text-center text-[#F5F5F5] border border-[#5B8CFF]/30"
                style={{ background: 'rgba(91,140,255,0.08)' }}
              >
                Iniciar Proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default memo(Navbar)
