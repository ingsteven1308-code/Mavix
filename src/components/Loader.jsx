import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import MavixLogo from '../Images/MAVIX-Marketing-Armenia.png'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Loader({ onComplete }) {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = window.setTimeout(() => onComplete?.(), prefersReducedMotion ? 1500 : 2400)
    return () => window.clearTimeout(timer)
  }, [onComplete, prefersReducedMotion])

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.14),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(200,204,208,0.06),transparent_35%)] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 h-24 w-[420px] rounded-full bg-[#5B8CFF]/10 blur-[100px]" />
          <div className="absolute bottom-24 right-1/4 h-24 w-[320px] rounded-full bg-[#C9CDD0]/12 blur-[90px]" />
        </div>

        <motion.div
          variants={item}
          className="relative flex w-full max-w-3xl flex-col items-center gap-8 p-6"
        >
          <motion.div
            className="relative flex items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: [0.96, 1.02, 1], rotate: [0, 0.5, 0] }}
            transition={{ duration: prefersReducedMotion ? 0.8 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={MavixLogo}
              alt="MAVIX loader"
              className="h-[240px] w-auto object-contain"
              loading="eager"
              decoding="sync"
            />
            <div className="absolute inset-0 rounded-[32px] border border-[#5B8CFF]/20 opacity-70" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,140,255,0.18),transparent_60%)]" />
          </motion.div>

          <motion.div
            variants={item}
            className="text-center"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-[#C9CDD2]/80">MAVIX · Diseño Digital Premium</p>
            <h1 className="font-sora text-4xl font-bold text-[#F5F5F3] sm:text-5xl lg:text-6xl">
             Bienvenido a MAVIX
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#C9CDD2]/70 sm:text-base">
              Cargando innovación, diseño y tecnología para llevar tu marca al siguiente nivel.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
