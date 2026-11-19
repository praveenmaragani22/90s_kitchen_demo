import { useLang } from '../App'
import { signatureDishes, copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function DishCard({ dish, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const rotations = ['-2deg', '2deg', '-1.5deg', '3deg', '-3deg']
  const rot = rotations[index % rotations.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: rot }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rot } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, rotate: '0deg', zIndex: 10 }}
      className="relative group flex-shrink-0 w-64 md:w-72"
      style={{ transformOrigin: 'center bottom' }}
    >
      {/* Card body */}
      <div className="ticket-card overflow-hidden rounded-xl bg-cream">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ filter: 'saturate(1.25) sepia(0.12)' }}
          />
          {/* Tag stamp */}
          <div className="absolute top-3 right-3">
            <span
              className="stamp text-brick border-brick bg-cream text-xs"
              style={{ transform: `rotate(${index % 2 === 0 ? '-3deg' : '2deg'})` }}
            >
              {dish.tag}
            </span>
          </div>
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 border-t-2 border-dashed border-ink/20">
          <h3 className="font-display text-ink text-xl leading-tight mb-0.5">{dish.name}</h3>
          <p className="font-telugu text-teal text-sm mb-3 opacity-80">{dish.nameTE}</p>
          <p className="font-body text-ink/75 text-sm leading-relaxed mb-4">{dish.desc}</p>

          {/* Price note */}
          <div className="flex items-center justify-between">
            <span className="font-slab text-xs text-brick italic">Ask for today's rates</span>
            <span className="text-mustard text-lg">★</span>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-1 -right-1 w-full h-full rounded-xl bg-ink/15 -z-10" />
    </motion.div>
  )
}

export default function SignatureDishes() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="dishes" className="py-16 md:py-24 bg-cream relative overflow-hidden">
      {/* Light grain texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
          backgroundBlendMode: 'multiply',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4 flex-wrap">
            <div>
              <p className="font-slab text-brick text-xs tracking-widest uppercase mb-2">Must Try</p>
              <h2 className="section-title font-display text-ink text-4xl md:text-5xl">
                {c.sigTitle}
              </h2>
              <p className="font-telugu text-teal text-lg mt-2 opacity-80">{copy.te.sigTitle}</p>
            </div>
            {/* Decorative bracket */}
            <div className="ml-auto hidden md:block">
              <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
                <path d="M50,5 L10,5 L10,55 L50,55" stroke="#E8A020" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <p className="font-body text-ink/65 text-base mt-3 max-w-xl">
            Five dishes that have become legends in the KPHB food scene.
            No fancy descriptions needed — just order one and see.
          </p>
        </motion.div>

        {/* Horizontal scroll strip */}
        <div className="scroll-strip pb-6 -mx-4 px-4">
          {signatureDishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>

        {/* Scroll hint */}
        <p className="font-body text-ink/40 text-xs text-center mt-4 md:hidden">
          ← Swipe to explore →
        </p>
      </div>
    </section>
  )
}
