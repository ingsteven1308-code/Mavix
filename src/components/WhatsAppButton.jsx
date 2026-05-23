import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_NUMBER = '573136135417'
const WA_MESSAGE = encodeURIComponent('Hola MAVIX! Me interesa conocer más sobre sus servicios digitales. 🚀')

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="fixed bottom-7 right-7 z-50 flex items-center gap-3"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="glass-dark border border-white/8 rounded-xl px-4 py-2.5 pointer-events-none"
          >
            <p className="font-grotesk text-xs font-semibold text-[#F5F5F5] whitespace-nowrap">¡Chatea con nosotros!</p>
            <p className="font-grotesk text-[10px] text-[#7A7A7A]">Respuesta inmediata</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center glass-dark border border-white/10 hover:border-[#5B8CFF]/40 transition-all duration-300 group overflow-hidden"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)' }}
      >
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-[#25D366]/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl border border-[#25D366]/20"
          animate={{ scale: [1, 1.7, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
        />

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.1) 0%, transparent 70%)' }}
        />

        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
        >
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
            fill="#25D366"
            opacity="0.15"
          />
          <path
            d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12c0 1.695.483 3.277 1.317 4.617L3.5 20.5l3.883-1.317A8.5 8.5 0 1012 3.5z"
            stroke="#25D366"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M9.5 8.5c-.2-.4-.5-.5-.8-.5-.2 0-.4 0-.6.1-.2.1-.7.7-.7 1.7s.7 1.9.8 2.1c.1.1 1.4 2.2 3.4 3 1.7.7 2 .6 2.4.5.4-.1 1.2-.5 1.4-1 .1-.4.1-.8 0-.9-.1-.1-.3-.2-.6-.3-.3-.1-1-.5-1.2-.6-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.8-.1.1-.3.1-.5 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.3.1-.1.2-.2.2-.3 0-.1 0-.3-.1-.4z"
            fill="#25D366"
          />
        </svg>
      </motion.a>
    </motion.div>
  )
}
