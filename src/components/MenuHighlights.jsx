import { useState, useRef } from 'react'
import { useLang } from '../App'
import { menuCategories, copy } from '../data/menuData'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function MenuHighlights() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const [activeTab, setActiveTab] = useState('biryani')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const activeCategory = menuCategories.find(cat => cat.id === activeTab)

  return (
    <section id="menu" className="py-16 md:py-24 bg-cream-dark relative overflow-hidden">
      {/* Notebook lines bg */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #c9d8e6 28px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-slab text-brick text-xs tracking-widest uppercase mb-2">What's on</p>
          <h2 className="section-title font-display text-ink text-4xl md:text-5xl">
            {c.menuTitle}
          </h2>
          <p className="font-telugu text-teal text-lg mt-2 opacity-80">{copy.te.menuTitle}</p>
          <p className="font-body text-ink/60 text-sm mt-3">
            Ask us about today's specials — we keep it fresh.
          </p>
        </motion.div>

        {/* Category tabs — notebook-style */}
        <div className="flex gap-2 md:gap-4 mb-8 overflow-x-auto pb-2">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-t-lg border-2 font-slab text-sm transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-mustard text-ink border-ink shadow-[2px_0px_0_#2C1A0E] -translate-y-1'
                  : 'bg-cream text-ink/60 border-ink/20 hover:border-ink/50 hover:text-ink'
              }`}
              style={{ transform: activeTab === cat.id ? `rotate(${i % 2 === 0 ? '-1deg' : '1deg'}) translateY(-4px)` : '' }}
            >
              {isTelugu ? cat.labelTE : cat.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-cream border-2 border-ink rounded-b-xl rounded-tr-xl shadow-[4px_4px_0_#2C1A0E] overflow-hidden"
        >
          {/* Category banner */}
          <div className="bg-teal px-6 py-3 flex items-center justify-between">
            <h3 className="font-display text-cream text-xl">
              {isTelugu ? activeCategory.labelTE : activeCategory.label}
            </h3>
            <span className="stamp text-cream border-cream text-xs opacity-80">Ask for rates</span>
          </div>

          {/* Items list */}
          <ul className="divide-y-2 divide-dashed divide-ink/15">
            {activeCategory.items.map((item, i) => (
              <motion.li
                key={i}
                className={`flex items-center justify-between px-6 py-4 ${
                  !item.available ? 'opacity-40' : 'hover:bg-mustard/10 transition-colors'
                }`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: item.available ? 1 : 0.4, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
              >
                <div>
                  <p className={`font-body font-semibold text-ink text-base ${!item.available ? 'italic' : ''}`}>
                    {isTelugu ? item.nameTE : item.name}
                  </p>
                  {item.available && isTelugu && (
                    <p className="font-body text-ink/50 text-xs">{item.name}</p>
                  )}
                  {item.available && !isTelugu && (
                    <p className="font-telugu text-teal text-xs mt-0.5">{item.nameTE}</p>
                  )}
                </div>
                {item.available ? (
                  <span className="text-mustard text-xl" aria-label="Available">★</span>
                ) : (
                  <span className="font-slab text-xs text-ink/40 italic">Soon</span>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Footer note */}
          <div className="bg-mustard/10 border-t-2 border-dashed border-ink/15 px-6 py-3">
            <p className="font-body text-ink/55 text-xs">
              Menu changes daily. Call <a href="tel:09160719425" className="text-brick font-semibold underline">091607 19425</a> or WhatsApp for today's full menu and specials.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
