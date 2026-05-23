import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import About from './components/About'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loader from './components/Loader'

export default function App() {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    if (!isDesktop) {
      return
    }

    setShowLoader(true)
    const timer = window.setTimeout(() => setShowLoader(false), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-[#F5F5F3]">
      <AnimatePresence>
        {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      </AnimatePresence>

      <motion.div
        className={`relative ${showLoader ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-700 ease-[0.22,1,0.36,1]`}
        animate={{ opacity: showLoader ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.96),rgba(10,10,10,0.92))]" />
          <div className="absolute left-0 top-24 h-[420px] w-[420px] rounded-full bg-[#5B8CFF]/10 blur-[160px]" />
          <div className="absolute right-0 top-32 h-[320px] w-[320px] rounded-full bg-[#C8CCD0]/12 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <Navbar />

        <main className="relative">
          <Hero />
          <Services />
          <Projects />
          <Process />
          <About />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </div>
  )
}
