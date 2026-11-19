import { useState, useEffect } from 'react'
import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'
import { motion, AnimatePresence } from 'framer-motion'

// WhatsApp icon SVG
function WAIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.826 1.8 6.846L2 30l7.344-1.775A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.46 11.46 0 0 1-5.837-1.597l-.418-.248-4.36 1.055 1.082-4.247-.272-.437A11.46 11.46 0 0 1 4.5 16c0-6.34 5.16-11.5 11.5-11.5S27.5 9.66 27.5 16 22.34 27.5 16 27.5zm6.3-8.63c-.345-.172-2.044-1.008-2.36-1.123-.317-.115-.547-.172-.778.172-.23.345-.893 1.123-1.094 1.354-.2.23-.402.258-.747.086-.345-.172-1.456-.537-2.774-1.713-1.025-.915-1.717-2.044-1.918-2.39-.2-.345-.022-.532.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.432-.028-.603-.086-.172-.778-1.874-1.065-2.564-.28-.672-.565-.58-.778-.59l-.662-.012c-.23 0-.603.086-.92.432-.317.345-1.21 1.18-1.21 2.882 0 1.701 1.238 3.345 1.41 3.576.172.23 2.436 3.72 5.9 5.213.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.099 2.044-.835 2.332-1.642.287-.807.287-1.5.2-1.642-.086-.143-.317-.23-.662-.402z" />
    </svg>
  )
}

// Phone icon SVG
function PhoneIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 7.5 7.5l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function StickyActions() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const [visible, setVisible] = useState(false)

  const waUrl = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`
  const telUrl = `tel:${restaurant.phone}`

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile bottom bar (hidden md+) */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex bg-ink border-t-2 border-mustard shadow-[0_-4px_12px_rgba(0,0,0,0.3)]">
              {/* Call button */}
              <a
                href={telUrl}
                className="flex-1 flex items-center justify-center gap-2 py-4 font-slab text-cream text-sm tracking-wide hover:bg-teal transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mustard active:bg-teal-dark"
                aria-label={`${c.stickyCall} ${restaurant.phoneDisplay}`}
              >
                <PhoneIcon size={18} />
                {c.stickyCall}
              </a>

              {/* Divider */}
              <div className="w-px bg-cream/20" aria-hidden="true" />

              {/* WhatsApp button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 font-slab bg-mustard text-ink text-sm tracking-wide hover:bg-mustard-dark transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ink active:bg-mustard-dark"
                aria-label="Order or enquire on WhatsApp"
              >
                <WAIcon size={18} />
                {c.stickyWhatsApp}
              </a>
            </div>
          </motion.div>

          {/* Desktop floating WhatsApp button (hidden below md) */}
          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex fixed bottom-8 right-8 z-50 w-14 h-14 bg-teal border-2 border-ink rounded-full items-center justify-center shadow-[4px_4px_0_#2C1A0E] hover:shadow-[6px_6px_0_#2C1A0E] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-4 focus:ring-teal focus:ring-offset-2"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -6, 0],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { duration: 0.3, ease: 'backOut' },
              opacity: { duration: 0.3 },
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              },
            }}
          >
            <WAIcon size={26} />
            <span className="text-cream sr-only">WhatsApp</span>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  )
}
