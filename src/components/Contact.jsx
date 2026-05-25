import { memo, useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, MessageSquare, Mail, Phone, Calendar } from 'lucide-react'
import ContactBg from '../Images/desarrollo-app-web-colombia.PNG'

const WA_NUMBER = '573136135417'

const services = [
  'Desarrollo Web',
  'Software a Medida',
  'App Web',
  'Tiendas Online Premium',
  'Landing Pages de Alto Impacto',
  'contenido digital redes sociales',
]

const init = {
  nombre: '',
  empresa: '',
  whatsapp: '',
  correo: '',
  servicio: '',
  descripcion: '',
  fecha: '',
}

function Contact() {
  const [form, setForm] = useState(init)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.whatsapp.trim()) e.whatsapp = 'Requerido'
    if (!form.correo.trim()) e.correo = 'Requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = 'Email inválido'
    if (!form.servicio) e.servicio = 'Selecciona un servicio'
    if (!form.descripcion.trim()) e.descripcion = 'Cuéntanos tu proyecto'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const buildMessage = () => {
    const lines = [
      `🚀 *Nueva solicitud desde MAVIX Web*`,
      ``,
      `👤 *Nombre:* ${form.nombre}`,
      form.empresa ? `🏢 *Empresa:* ${form.empresa}` : null,
      `📱 *WhatsApp:* ${form.whatsapp}`,
      `📧 *Correo:* ${form.correo}`,
      `⚡ *Servicio:* ${form.servicio}`,
      form.fecha ? `📅 *Fecha deseada:* ${form.fecha}` : null,
      ``,
      `📝 *Descripción:*`,
      form.descripcion,
    ]
    return lines.filter(l => l !== null).join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setLoading(true)
    setTimeout(() => {
      const msg = encodeURIComponent(buildMessage())
      setSent(true)
      setLoading(false)
      setTimeout(() => {
        window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
      }, 600)
    }, 900)
  }

  return (
    <section id="contacto" className="section-pad relative overflow-hidden section-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ContactBg})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_20%)] pointer-events-none" />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#5B8CFF]/20 to-transparent" />

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5B8CFF] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      {/* BG glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5B8CFF] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-accent border border-white/10 p-8 rounded-[32px] shadow-[0_35px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <span className="inline-block font-grotesk text-[#5B8CFF] text-xs tracking-[0.3em] uppercase font-medium mb-4">
                Agenda una reunión
              </span>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
                Hagamos algo{' '}
                <span className="text-[#5B8CFF]">extraordinario.</span>
              </h2>
              <p className="font-poppins text-[#D1D5DB] text-base leading-relaxed mb-8 max-w-xl">
                Cuéntanos tu proyecto y te contactamos en menos de 24 horas para agendar una reunión estratégica sin costo.
              </p>

              {/* Contact details */}
              <div className="grid gap-4">
                {[
                  { icon: MessageSquare, label: 'WhatsApp', value: '+57 313 613 5417', href: `https://wa.me/${WA_NUMBER}` },
                  { icon: Mail, label: 'Email', value: 'mavix@gmail.com', href: 'mailto:mavix@gmail.com' },
                  { icon: Phone, label: 'Llamada', value: '+57 313 613 5417', href: `tel:+${WA_NUMBER}` },
                  { icon: Calendar, label: 'Reunión', value: 'Lunes – Viernes, 8am – 6pm', href: '#' },
                ].map(item => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="group flex items-center gap-4 p-4 glass rounded-xl border border-white/6 hover:border-[#5B8CFF]/25 transition-all duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#5B8CFF]/20" style={{ background: 'rgba(91,140,255,0.1)' }}>
                        <Icon size={16} className="text-[#5B8CFF]" />
                      </div>
                      <div>
                        <p className="font-grotesk text-[10px] text-[#7A7A7A] uppercase tracking-widest">{item.label}</p>
                        <p className="font-grotesk text-sm text-[#F5F5F5] font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="glass-accent rounded-[32px] border border-white/10 p-7 md:p-9 relative overflow-hidden shadow-[0_26px_90px_rgba(0,0,0,0.2)]">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B8CFF] opacity-[0.04] blur-[60px] rounded-full pointer-events-none" />

              {sent ? (
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Nombre *" error={errors.nombre}>
                      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre completo" className="premium-input" />
                    </FormField>
                    <FormField label="Empresa" error={errors.empresa}>
                      <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de tu empresa" className="premium-input" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Teléfono/WhatsApp*" error={errors.whatsapp}>
                      <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="+57 300 000 0000" className="premium-input" type="tel" />
                    </FormField>
                    <FormField label="Correo *" error={errors.correo}>
                      <input name="correo" value={form.correo} onChange={handleChange} placeholder="tu@empresa.com" className="premium-input" type="email" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Servicio *" error={errors.servicio}>
                      <select name="servicio" value={form.servicio} onChange={handleChange} className="premium-input">
                        <option value="">Selecciona un servicio</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </FormField>
                    <FormField label="Fecha preferida de reunión">
                      <input name="fecha" value={form.fecha} onChange={handleChange} className="premium-input" type="date" min={new Date().toISOString().split('T')[0]} />
                    </FormField>
                  </div>

                  <FormField label="Descripción del proyecto *" error={errors.descripcion}>
                    <textarea
                      name="descripcion"
                      value={form.descripcion}
                      onChange={handleChange}
                      placeholder="Cuéntanos tu idea, objetivos, plazos y cualquier detalle relevante..."
                      className="premium-input resize-none"
                      rows={4}
                    />
                  </FormField>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="relative w-full py-4 rounded-xl font-grotesk font-semibold text-sm overflow-hidden transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ background: loading ? 'rgba(91,140,255,0.4)' : 'linear-gradient(135deg, #5B8CFF, #3a6bff)' }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <LoadingSpinner /> Procesando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={16} /> Enviar por WhatsApp
                      </span>
                    )}
                    {!loading && (
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </motion.button>

                  <p className="text-center font-grotesk text-xs text-[#7A7A7A]">
                    Al enviar serás redirigido a WhatsApp con tu información organizada.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)

function FormField({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-grotesk text-xs font-medium text-[#7A7A7A] tracking-wide">{label}</label>
      {children}
      {error && <span className="font-grotesk text-xs text-red-400">{error}</span>}
    </div>
  )
}

function SuccessState() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-16 text-center gap-5"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
      >
        <CheckCircle size={56} className="text-[#5B8CFF]" strokeWidth={1.5} />
      </motion.div>
      <h3 className="font-sora font-bold text-2xl text-[#F5F5F5]">¡Solicitud enviada!</h3>
      <p className="font-poppins text-[#7A7A7A] text-sm max-w-xs leading-relaxed">
        Serás redirigido a WhatsApp en un momento. Si no ocurre automáticamente,{' '}
        <a href={`https://wa.me/573136135417`} target="_blank" rel="noreferrer" className="text-[#5B8CFF] hover:underline">
          haz clic aquí.
        </a>
      </p>
    </motion.div>
  )
}

function LoadingSpinner() {
  return (
    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  )
}
