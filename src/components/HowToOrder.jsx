import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

// SVG icons hand-drawn style
function DineInIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 2"/>
      <path d="M16,34 L16,16 M24,16 L24,28 Q24,34 32,34 L32,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="2" fill="currentColor"/>
    </svg>
  )
}

function TakeawayIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
      <rect x="12" y="20" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M18,20 L18,14 Q18,8 24,8 Q30,8 30,14 L30,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20,30 L28,30 M24,26 L24,34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
      <path d="M6,30 L30,30 L30,20 L38,20 L42,30 L42,36 L6,36 Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="37" r="4" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="34" cy="37" r="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M6,20 L6,30 M6,24 L18,24 L18,16 L6,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const orderTiles = [
  {
    id: 'dinein',
    icon: DineInIcon,
    title: 'Dine In',
    titleTE: 'డైన్ ఇన్',
    desc: 'Walk in anytime before 11:30 PM. Families, friends, solo — everyone welcome.',
    action: null,
    actionLabel: 'Get Directions',
    actionHref: 'https://maps.google.com/?q=KPHB+Colony+Phase+3+Kukatpally+Hyderabad',
    color: 'teal',
    rotate: '-rotate-1',
  },
  {
    id: 'takeaway',
    icon: TakeawayIcon,
    title: 'Takeaway',
    titleTE: 'టేకవే',
    desc: 'Call ahead, we\'ll have it packed and hot. No waiting, just picking up.',
    action: 'tel',
    actionLabel: 'Call to Order',
    actionHref: `tel:${restaurant.phone}`,
    color: 'brick',
    rotate: 'rotate-1',
  },
  {
    id: 'delivery',
    icon: DeliveryIcon,
    title: 'Delivery',
    titleTE: 'డెలివరీ',
    desc: 'WhatsApp us your order, address and time. We\'ll sort it out.',
    action: 'whatsapp',
    actionLabel: 'Order on WhatsApp',
    actionHref: `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent('Hi! I\'d like to place a delivery order.')}`,
    color: 'mustard',
    rotate: '-rotate-1',
  },
]

const colorMap = {
  teal: { bg: 'bg-teal', text: 'text-cream', border: 'border-teal', iconColor: 'text-cream', btnBg: 'bg-cream', btnText: 'text-teal' },
  brick: { bg: 'bg-brick', text: 'text-cream', border: 'border-brick', iconColor: 'text-cream', btnBg: 'bg-cream', btnText: 'text-brick' },
  mustard: { bg: 'bg-mustard', text: 'text-ink', border: 'border-mustard', iconColor: 'text-ink', btnBg: 'bg-ink', btnText: 'text-cream' },
}

export default function HowToOrder() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="order" className="py-16 md:py-24 bg-cream relative overflow-hidden">
      {/* Diagonal stripe bg */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #2C1A0E 0px, #2C1A0E 2px, transparent 2px, transparent 20px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-slab text-brick text-xs tracking-widest uppercase mb-2">Simple as it gets</p>
          <h2 className="section-title font-display text-ink text-4xl md:text-5xl mx-auto">
            {c.orderTitle}
          </h2>
          <p className="font-telugu text-teal text-lg mt-2 opacity-80">{copy.te.orderTitle}</p>
        </motion.div>

        {/* Three tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {orderTiles.map((tile, i) => {
            const cl = colorMap[tile.color]
            const Icon = tile.icon
            return (
              <motion.div
                key={tile.id}
                className={`${tile.rotate} relative group`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ rotate: '0deg', scale: 1.02 }}
              >
                <div
                  className={`${cl.bg} ${cl.text} rounded-xl border-2 border-ink shadow-[5px_5px_0_#2C1A0E] p-6 h-full flex flex-col gap-4`}
                >
                  {/* Number + icon */}
                  <div className="flex items-start justify-between">
                    <div className={`${cl.iconColor}`}>
                      <Icon />
                    </div>
                    <span className="font-slab text-4xl opacity-20">0{i + 1}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="font-display text-2xl mb-0.5">{tile.title}</h3>
                    <p className="font-telugu text-sm opacity-70">{tile.titleTE}</p>
                  </div>

                  {/* Desc */}
                  <p className="font-body text-sm opacity-85 leading-relaxed flex-1">{tile.desc}</p>

                  {/* Action */}
                  {tile.actionHref && (
                    <a
                      href={tile.actionHref}
                      target={tile.action === 'whatsapp' ? '_blank' : undefined}
                      rel={tile.action === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className={`${cl.btnBg} ${cl.btnText} font-slab text-sm px-4 py-2.5 rounded border-2 border-ink shadow-[2px_2px_0_#2C1A0E] inline-flex items-center gap-2 hover:shadow-[3px_3px_0_#2C1A0E] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all self-start`}
                    >
                      {tile.actionLabel}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>

                {/* Drop shadow element */}
                <div className="absolute -bottom-1.5 -right-1.5 w-full h-full rounded-xl bg-ink/10 -z-10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
