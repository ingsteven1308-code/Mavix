import { memo, useRef, useMemo, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import VideoHero from '../Videos/MAVIX-Paginas-Web-Armenia.mp4'

const PARTICLE_COUNT = 40

function Particle({ x, y, delay, size, color, play = true }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
      animate={ play ? { y: [0, -12, 0], opacity: [0.15, 0.7, 0.15], scale: [0.85, 1.15, 0.85] } : { y: 0, opacity: 0.6, scale: 1 }}
      transition={{ duration: 5 + delay * 1.2, delay, repeat: play ? Infinity : 0, ease: 'easeInOut' }}
    />
  )
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.4 } },
}

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const prefersReducedMotion = useReducedMotion()

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mediaQuery.matches)
    update()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }
    }
  }, [])

  const count = isDesktop ? PARTICLE_COUNT : 12

  const particles = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 2.5 + 0.8,
      color: i % 3 === 0
        ? 'rgba(91,140,255,0.7)'
        : i % 3 === 1
        ? 'rgba(201,205,210,0.4)'
        : 'rgba(255,255,255,0.2)',
    }))
  , [count])

  return (
    <>
      <section id="inicio" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-spotlight scroll-mt-28">

      {/* Video background */}
      {isDesktop ? (
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-[0.46] contrast-[1.05]"
          style={{ objectPosition: 'center 22%' }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={VideoHero}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.08),transparent_22%),linear-gradient(180deg,rgba(10,10,10,0.96),rgba(0,0,0,0.92))]" />
      )}
      <div className="absolute top-0 right-0 h-36 w-72 bg-gradient-to-l from-black/90 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(91,140,255,0.12),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_18%)] pointer-events-none" />

      {/* Tech grid */}
      <div className="absolute inset-0 tech-grid-bg" style={{ opacity: 0.32 }} />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

      {/* Cinematic glow orbs */}
      <motion.div
        className="absolute top-[18%] left-1/4 w-[420px] h-[420px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(91,140,255,0.08)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[24%] right-1/4 w-[320px] h-[320px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: 'rgba(91,140,255,0.06)' }}
        animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-[58%] left-[10%] w-[260px] h-[260px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'rgba(255,255,255,0.04)' }}
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => <Particle key={p.id} {...p} play={!prefersReducedMotion} />)}
      </div>

      {/* Horizontal accent lines */}
      <div className="absolute left-0 right-0 top-[40%] h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/12 to-transparent" />
      <div className="absolute left-0 right-0 bottom-[34%] h-px bg-gradient-to-r from-transparent via-[#C9CDD2]/8 to-transparent" />

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24 sm:py-28">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center">

          <motion.div variants={item} className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-4 py-2 mb-10 glass">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#5B8CFF] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.35em] text-[#C9CDD2]">La mejor elección para impulsar tu negocio</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-sora font-extrabold leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3.6rem, 11vw, 9.5rem)' }}
          >
            <span className="text-[#F5F5F5]">MAVIX</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-grotesk text-[#C9CDD2] tracking-[0.18em] uppercase text-sm md:text-base mb-8 font-medium"
          >
            “Diseñamos presencia. <span className="text-[#F5F5F5]">Creamos autoridad.</span>”
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-2xl font-poppins text-[#C9CDD2] text-base md:text-lg leading-relaxed mb-6"
          >
            Agencia digital en Armenia, Quindío y Colombia. Desarrollamos páginas web premium, software a medida, apps web empresariales, ecommerce y automatización para empresas que buscan autoridad online.
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-2xl font-poppins text-[#C9CDD2] text-base md:text-lg leading-relaxed mb-12"
          >
            Diseñamos experiencias digitales modernas, confiables y estratégicas que convierten visitantes en clientes y elevan la presencia de tu marca en el Eje Cafetero.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(91,140,255,0.18)' }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-3xl font-grotesk font-semibold text-sm text-[#F5F5F5] bg-white/10 border border-white/15 backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
            >
              Iniciar Proyecto
              <motion.div
                className="w-4 h-4"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={16} />
              </motion.div>
            </motion.a>

            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.04, borderColor: 'rgba(91,140,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-3xl font-grotesk font-semibold text-sm text-[#F5F5F5] glass border border-white/12 transition-all duration-300 hover:bg-white/5"
            >
              <Play size={14} className="text-[#5B8CFF]" />
              Ver Proyectos
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  </>
  )
}

export default memo(Hero)
