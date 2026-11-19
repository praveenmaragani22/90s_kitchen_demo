import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const partial = rating - full
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          {i <= full ? (
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#E8A020"
            />
          ) : i === full + 1 && partial >= 0.5 ? (
            <>
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#E8A020"/>
                  <stop offset="50%" stopColor="transparent"/>
                </linearGradient>
              </defs>
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={`url(#half-${i})`}
                stroke="#E8A020"
                strokeWidth="1"
              />
            </>
          ) : (
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="none"
              stroke="#E8A020"
              strokeWidth="1.5"
            />
          )}
        </svg>
      ))}
    </div>
  )
}

export default function RatingBadge() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-14 md:py-20 bg-mustard relative overflow-hidden">
      {/* Dots */}
      <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Big rating number */}
          <div className="text-center md:text-left" style={{ transform: 'rotate(-2deg)' }}>
            <div className="font-display text-ink text-9xl leading-none" style={{ lineHeight: 1 }}>
              {restaurant.rating}
            </div>
            <StarRating rating={restaurant.rating} />
            <p className="font-body text-ink/70 text-sm mt-2">on Google · {restaurant.reviewCount} reviews</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-32 bg-ink/20" />

          {/* Text */}
          <div className="text-center md:text-left max-w-sm">
            <p className="font-slab text-ink/60 text-xs tracking-widest uppercase mb-2">People's verdict</p>
            <h2 className="font-display text-ink text-3xl md:text-4xl leading-tight mb-3">
              {c.ratingTitle}
            </h2>
            <p className="font-telugu text-teal text-base mb-4 opacity-80">{copy.te.ratingTitle}</p>
            <p className="font-body text-ink/75 text-sm leading-relaxed">
              Over {restaurant.reviewCount} families, friend groups and office gangs have eaten here and come back.
              The biryani does the talking.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-ink text-cream font-slab text-xs px-4 py-2 rounded border-2 border-ink shadow-[2px_2px_0_rgba(0,0,0,0.3)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#E8A020" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Rated on Google
            </div>
          </div>

          {/* Stamp decoration */}
          <div className="hidden md:block" style={{ transform: 'rotate(8deg)' }}>
            <div className="w-28 h-28 border-4 border-brick rounded-full flex flex-col items-center justify-center shadow-[0_0_0_4px_#C0392B,0_0_0_8px_rgba(192,57,43,0.3)]">
              <span className="font-slab text-brick text-3xl leading-none">{restaurant.rating}</span>
              <span className="font-slab text-brick text-xs leading-none">/ 5.0</span>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-brick text-xs" aria-hidden="true">★</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
