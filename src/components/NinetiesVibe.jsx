import { useLang } from '../App'
import { copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

function CassetteFull() {
  return (
    <svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <rect x="2" y="2" width="196" height="106" rx="10" fill="#1A1A0A" stroke="#E8A020" strokeWidth="3"/>
      {/* Label area */}
      <rect x="20" y="12" width="160" height="52" rx="4" fill="#C0392B"/>
      <text x="100" y="32" textAnchor="middle" fontFamily="serif" fontSize="12" fill="#F5EDD6" fontWeight="bold">OLD CLASSICS MIX</text>
      <text x="100" y="48" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#F5EDD6" opacity="0.8">90's Authentic Kitchen · KPHB</text>
      <text x="100" y="58" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#F5EDD6" opacity="0.6">Side A — Telugu Hits · 1990-1999</text>
      {/* Reels */}
      <circle cx="62" cy="82" r="18" fill="#E8A020" stroke="#2C1A0E" strokeWidth="2"/>
      <circle cx="62" cy="82" r="10" fill="#2C1A0E"/>
      <circle cx="62" cy="82" r="4" fill="#E8A020"/>
      <line x1="62" y1="72" x2="62" y2="82" stroke="#E8A020" strokeWidth="1.5"/>
      <line x1="62" y1="82" x2="70" y2="88" stroke="#E8A020" strokeWidth="1.5"/>
      <line x1="62" y1="82" x2="54" y2="88" stroke="#E8A020" strokeWidth="1.5"/>

      <circle cx="138" cy="82" r="18" fill="#E8A020" stroke="#2C1A0E" strokeWidth="2"/>
      <circle cx="138" cy="82" r="10" fill="#2C1A0E"/>
      <circle cx="138" cy="82" r="4" fill="#E8A020"/>
      <line x1="138" y1="72" x2="138" y2="82" stroke="#E8A020" strokeWidth="1.5"/>
      <line x1="138" y1="82" x2="146" y2="88" stroke="#E8A020" strokeWidth="1.5"/>
      <line x1="138" y1="82" x2="130" y2="88" stroke="#E8A020" strokeWidth="1.5"/>

      {/* Tape window */}
      <rect x="82" y="72" width="36" height="20" rx="2" fill="#333" stroke="#555" strokeWidth="1"/>
      <path d="M82,82 Q100,74 118,82" stroke="#E8A020" strokeWidth="1" fill="none"/>
    </svg>
  )
}

const vibeItems = [
  { icon: '🎵', text: 'Old Telugu hits playing all day — from Ilayaraja to SP Balasubrahmanyam' },
  { icon: '👨‍👩‍👧‍👦', text: 'A place where three generations sit comfortably at one table' },
  { icon: '🕐', text: 'Take your time. No rush. Food comes when it\'s ready.' },
  { icon: '🍽️', text: 'Recipes passed down, not looked up' },
]

export default function NinetiesVibe() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="vibe" className="relative bg-teal py-20 md:py-28 overflow-hidden">
      {/* Halftone dots */}
      <div className="absolute inset-0 halftone-overlay opacity-20 pointer-events-none" />

      {/* Diagonal stripe accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #E8A020 0px, #E8A020 2px, transparent 2px, transparent 20px)',
        }}
      />

      {/* Torn top edge (cream coming in) */}
      <div className="absolute top-0 left-0 right-0" style={{ height: 32 }}>
        <svg viewBox="0 0 1200 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 C60,22 120,4 180,16 C240,28 300,6 360,14 C420,22 480,2 540,12 C600,22 660,4 720,16 C780,28 840,8 900,18 C960,28 1020,6 1080,14 C1140,22 1180,10 1200,12 L1200,0 Z"
            fill="#F5EDD6"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-slab text-mustard text-xs tracking-widest uppercase mb-3">Feel it</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight mb-2">
              {c.vibeTitle}
            </h2>
            <p className="font-telugu text-mustard text-xl mb-6 opacity-80">
              {copy.te.vibeTitle}
            </p>
            <p className="font-body text-cream/80 text-base md:text-lg leading-relaxed mb-8">
              {c.vibeSub}
              <br /><br />
              Remember when Sunday meant the whole family piling into one car and searching for <em className="text-mustard not-italic">that</em> restaurant? We're right here.
            </p>

            {/* Vibe list */}
            <ul className="space-y-4">
              {vibeItems.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-cream/80 font-body text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-mustard text-lg mt-0.5 select-none" aria-hidden="true">
                    {/* Convert emoji to text-based marker to stay on-brand */}
                    ◆
                  </span>
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: cassette + nostalgic label */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="w-full max-w-xs"
              animate={{ rotate: [-2, 1, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <CassetteFull />
            </motion.div>

            {/* Nostalgic quote block */}
            <div
              className="bg-mustard/20 border-2 border-mustard/40 rounded p-5 max-w-xs w-full"
              style={{ transform: 'rotate(1.5deg)' }}
            >
              <p className="font-display text-cream text-xl leading-snug mb-2">
                "పాట మారదు. రుచి మారదు."
              </p>
              <p className="font-body text-cream/60 text-xs">
                The song doesn't change. Neither does the taste.
              </p>
            </div>

            {/* Song playing badge */}
            <div className="flex items-center gap-3 bg-ink/40 border border-mustard/30 rounded-full px-5 py-2.5">
              <div className="flex gap-0.5 items-end h-5">
                {[3,5,4,6,3,5].map((h,i)=>(
                  <motion.div
                    key={i}
                    className="w-1 bg-mustard rounded-full"
                    style={{ height: `${h * 3}px` }}
                    animate={{ height: [`${h*3}px`, `${(h+2)*3}px`, `${h*3}px`] }}
                    transition={{ duration: 0.6 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </div>
              <span className="font-body text-cream text-xs">
                Old Telugu hits playing now
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Torn bottom edge */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 32 }}>
        <svg viewBox="0 0 1200 32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,32 C60,10 120,28 180,16 C240,4 300,26 360,18 C420,10 480,30 540,20 C600,10 660,28 720,16 C780,4 840,24 900,14 C960,4 1020,26 1080,18 C1140,10 1180,22 1200,20 L1200,32 Z"
            fill="#F5EDD6"
          />
        </svg>
      </div>
    </section>
  )
}
