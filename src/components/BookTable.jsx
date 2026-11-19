import { useState, useRef } from 'react'
import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

function buildWAMessage({ name, date, time, guests }) {
  return encodeURIComponent(
    `Hi! I'd like to book a table at 90's Authentic Kitchen.\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\n\nPlease confirm availability. Thank you!`
  )
}

export default function BookTable() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name || !form.date || !form.time) return
    const msg = buildWAMessage(form)
    window.open(`https://wa.me/${restaurant.whatsapp}?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="book" className="py-16 md:py-24 bg-ink relative overflow-hidden">
      {/* Halftone */}
      <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-slab text-mustard text-xs tracking-widest uppercase mb-2">Reserve your spot</p>
          <h2 className="font-display text-cream text-4xl md:text-5xl">
            {c.bookTitle}
          </h2>
          <p className="font-telugu text-mustard text-lg mt-2 opacity-80">{copy.te.bookTitle}</p>
          <p className="font-body text-cream/60 text-sm mt-3">
            Fill in below — it'll open WhatsApp with all your details prefilled.
          </p>
        </motion.div>

        {/* Form — styled as a school notebook page */}
        <motion.div
          className="relative mx-auto max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transform: 'rotate(-0.8deg)' }}
        >
          {/* Notebook binding holes */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-red-200/10 border-r-2 border-red-400/30 rounded-l-lg flex flex-col justify-around items-center py-4">
            {[0,1,2,3,4].map(i => (
              <div key={i} className="w-3 h-3 rounded-full bg-cream/20 border border-cream/30" />
            ))}
          </div>

          {/* Page */}
          <form
            onSubmit={handleSubmit}
            className="notebook-bg ml-10 rounded-r-xl rounded-bl-xl border-2 border-cream/20 shadow-[6px_6px_0_#E8A020] p-6 md:p-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="font-slab text-teal text-xs tracking-widest uppercase block mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Ravi Kumar..."
                className="w-full bg-transparent border-b-2 border-teal/40 focus:border-teal outline-none font-body text-ink text-base py-1.5 placeholder:text-ink/30 transition-colors"
              />
            </div>

            {/* Date + Time row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-slab text-teal text-xs tracking-widest uppercase block mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-transparent border-b-2 border-teal/40 focus:border-teal outline-none font-body text-ink text-base py-1.5 transition-colors"
                />
              </div>
              <div>
                <label className="font-slab text-teal text-xs tracking-widest uppercase block mb-1.5">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  max="23:30"
                  className="w-full bg-transparent border-b-2 border-teal/40 focus:border-teal outline-none font-body text-ink text-base py-1.5 transition-colors"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="font-slab text-teal text-xs tracking-widest uppercase block mb-1.5">
                Number of Guests
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-cream border-b-2 border-teal/40 focus:border-teal outline-none font-body text-ink text-base py-1.5 transition-colors"
              >
                {[1,2,3,4,5,6,7,8,'8+'].map(n => (
                  <option key={n} value={n}>{n} {typeof n === 'number' && n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full btn-retro bg-mustard text-ink border-ink justify-center text-sm mt-2"
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.826 1.8 6.846L2 30l7.344-1.775A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.46 11.46 0 0 1-5.837-1.597l-.418-.248-4.36 1.055 1.082-4.247-.272-.437A11.46 11.46 0 0 1 4.5 16c0-6.34 5.16-11.5 11.5-11.5S27.5 9.66 27.5 16 22.34 27.5 16 27.5zm6.3-8.63c-.345-.172-2.044-1.008-2.36-1.123-.317-.115-.547-.172-.778.172-.23.345-.893 1.123-1.094 1.354-.2.23-.402.258-.747.086-.345-.172-1.456-.537-2.774-1.713-1.025-.915-1.717-2.044-1.918-2.39-.2-.345-.022-.532.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.432-.028-.603-.086-.172-.778-1.874-1.065-2.564-.28-.672-.565-.58-.778-.59l-.662-.012c-.23 0-.603.086-.92.432-.317.345-1.21 1.18-1.21 2.882 0 1.701 1.238 3.345 1.41 3.576.172.23 2.436 3.72 5.9 5.213.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.099 2.044-.835 2.332-1.642.287-.807.287-1.5.2-1.642-.086-.143-.317-.23-.662-.402z"/>
              </svg>
              Send on WhatsApp
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center font-body text-teal text-sm font-semibold"
              >
                ✓ WhatsApp opened! We'll confirm your booking soon.
              </motion.p>
            )}

            {/* Footer note */}
            <p className="font-body text-ink/40 text-xs text-center pt-2">
              Bookings are subject to availability. We close at {restaurant.closingTime}.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
