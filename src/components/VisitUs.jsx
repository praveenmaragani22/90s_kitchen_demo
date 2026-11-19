import { useRef } from 'react'
import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// WhatsApp icon inline SVG
function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.826 1.8 6.846L2 30l7.344-1.775A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.46 11.46 0 0 1-5.837-1.597l-.418-.248-4.36 1.055 1.082-4.247-.272-.437A11.46 11.46 0 0 1 4.5 16c0-6.34 5.16-11.5 11.5-11.5S27.5 9.66 27.5 16 22.34 27.5 16 27.5zm6.3-8.63c-.345-.172-2.044-1.008-2.36-1.123-.317-.115-.547-.172-.778.172-.23.345-.893 1.123-1.094 1.354-.2.23-.402.258-.747.086-.345-.172-1.456-.537-2.774-1.713-1.025-.915-1.717-2.044-1.918-2.39-.2-.345-.022-.532.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.432-.028-.603-.086-.172-.778-1.874-1.065-2.564-.28-.672-.565-.58-.778-.59l-.662-.012c-.23 0-.603.086-.92.432-.317.345-1.21 1.18-1.21 2.882 0 1.701 1.238 3.345 1.41 3.576.172.23 2.436 3.72 5.9 5.213.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.099 2.044-.835 2.332-1.642.287-.807.287-1.5.2-1.642-.086-.143-.317-.23-.662-.402z" />
    </svg>
  )
}

// Map pin icon
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// Phone icon
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 7.5 7.5l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

// Clock icon
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export default function VisitUs() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const waUrl = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`

  const serviceLabels = isTelugu
    ? restaurant.servicesTE
    : restaurant.services

  return (
    <section id="visit" className="py-16 md:py-24 bg-cream relative overflow-hidden">
      {/* Subtle halftone */}
      <div className="absolute inset-0 halftone-overlay opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-slab text-teal text-xs tracking-widest uppercase mb-2">Come find us</p>
          <h2 className="section-title font-display text-ink text-4xl md:text-5xl">
            {c.visitTitle}
          </h2>
          <p className="font-telugu text-teal text-lg mt-3 opacity-80">{copy.te.visitTitle}</p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT: ticket card with info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="ticket-card p-6 md:p-8" style={{ transform: 'rotate(-0.8deg)' }}>
              {/* Ticket header stripe */}
              <div className="bg-ink -mx-6 md:-mx-8 -mt-6 md:-mt-8 px-6 md:px-8 py-3 mb-6 flex items-center justify-between">
                <span className="font-slab text-mustard text-xs tracking-widest uppercase">90's Authentic Kitchen</span>
                <span className="stamp text-cream border-cream text-xs" style={{ transform: 'rotate(2deg)' }}>Admit One</span>
              </div>

              {/* Address */}
              <div className="mb-5">
                <p className="font-slab text-teal text-xs tracking-widest uppercase mb-1.5">{c.visitAddress}</p>
                <div className="flex items-start gap-2 text-ink">
                  <span className="mt-0.5 text-brick flex-shrink-0"><PinIcon /></span>
                  <p className="font-body text-sm leading-relaxed">{restaurant.address}</p>
                </div>
              </div>

              {/* Closing time */}
              <div className="mb-5">
                <p className="font-slab text-teal text-xs tracking-widest uppercase mb-1.5">{c.visitClosing}</p>
                <div className="flex items-center gap-2 text-ink font-body text-sm">
                  <span className="text-brick"><ClockIcon /></span>
                  {restaurant.closingTime}
                </div>
              </div>

              {/* Price range */}
              <div className="mb-5">
                <p className="font-slab text-teal text-xs tracking-widest uppercase mb-1.5">{c.visitPrice}</p>
                <p className="font-body text-ink text-sm font-semibold">{restaurant.priceRange} / person</p>
              </div>

              {/* Service chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {serviceLabels.map((s, i) => (
                  <span
                    key={i}
                    className="stamp text-teal border-teal text-xs"
                    style={{ transform: `rotate(${i % 2 === 0 ? '-1.5deg' : '1.5deg'})` }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Dashed divider (ticket perforation) */}
              <div className="border-t-2 border-dashed border-ink/20 my-5 relative">
                <span className="absolute -left-7 -top-2.5 w-5 h-5 rounded-full bg-cream-dark border border-ink/10" />
                <span className="absolute -right-7 -top-2.5 w-5 h-5 rounded-full bg-cream-dark border border-ink/10" />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <p className="font-slab text-teal text-xs tracking-widest uppercase mb-1.5">{c.visitPhone}</p>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="flex items-center gap-2 font-body text-ink text-sm font-semibold hover:text-brick transition-colors focus:outline-none focus:ring-2 focus:ring-brick focus:ring-offset-2 rounded"
                >
                  <span className="text-brick"><PhoneIcon /></span>
                  {restaurant.phoneDisplay}
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={restaurant.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-retro bg-ink text-cream border-ink text-sm flex-1 justify-center focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-2"
                >
                  <PinIcon />
                  {c.visitDirections}
                </a>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-retro bg-teal text-cream border-ink text-sm flex-1 justify-center focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                >
                  <WAIcon />
                  {c.visitWhatsApp}
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Polaroid map */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Polaroid frame */}
            <div
              className="bg-white p-3 pb-10 shadow-[6px_6px_0_#2C1A0E] border-2 border-ink/30 w-full max-w-sm"
              style={{ transform: 'rotate(1.5deg)' }}
            >
              {/* Map embed */}
              <div className="relative w-full overflow-hidden" style={{ paddingBottom: '75%' }}>
                <iframe
                  src={restaurant.mapEmbedUrl}
                  title="90's Authentic Kitchen location — KPHB Colony Phase 3, Hyderabad"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Polaroid caption */}
              <p
                className="font-body text-ink/80 text-sm text-center mt-3 leading-tight"
                style={{ fontStyle: 'italic' }}
              >
                📍 {c.visitMapCaption}
              </p>
            </div>

            {/* Fallback link */}
            <a
              href={restaurant.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 font-body text-teal text-sm underline underline-offset-2 hover:text-teal-dark transition-colors focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 rounded"
            >
              ↗ {c.visitMapFallback}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
