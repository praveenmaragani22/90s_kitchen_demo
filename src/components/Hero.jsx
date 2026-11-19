import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'
import { motion } from 'framer-motion'

// Inline SVG: cassette tape (purely decorative)
function CassetteDecor() {
  return (
    <svg viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <rect x="2" y="2" width="116" height="66" rx="6" fill="#2C1A0E" stroke="#E8A020" strokeWidth="2.5"/>
      <rect x="10" y="8" width="100" height="38" rx="3" fill="#1A1A1A"/>
      <circle cx="38" cy="50" r="10" fill="#E8A020" stroke="#2C1A0E" strokeWidth="2"/>
      <circle cx="38" cy="50" r="5" fill="#2C1A0E"/>
      <circle cx="82" cy="50" r="10" fill="#E8A020" stroke="#2C1A0E" strokeWidth="2"/>
      <circle cx="82" cy="50" r="5" fill="#2C1A0E"/>
      <rect x="46" y="45" width="28" height="10" rx="2" fill="#333"/>
      <line x1="30" y1="22" x2="90" y2="22" stroke="#E8A020" strokeWidth="1.5" strokeDasharray="4 3"/>
      <text x="60" y="34" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#E8A020">OLD CLASSICS MIX</text>
    </svg>
  )
}

// Inline SVG: ticket stub
function TicketDecor() {
  return (
    <svg viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true">
      <path d="M4,8 Q4,2 10,2 L130,2 Q136,2 136,8 L136,22 Q128,22 128,30 Q128,38 136,38 L136,52 Q136,58 130,58 L10,58 Q4,58 4,52 L4,38 Q12,38 12,30 Q12,22 4,22 Z" fill="#C0392B" stroke="#2C1A0E" strokeWidth="2"/>
      <line x1="136" y1="8" x2="156" y2="8" stroke="#C0392B" strokeWidth="0"/>
      <text x="70" y="24" textAnchor="middle" fontFamily="serif" fontSize="10" fill="#F5EDD6" fontWeight="bold">ADMIT ONE</text>
      <text x="70" y="38" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#F5EDD6">90's Authentic Kitchen</text>
      <text x="70" y="50" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#F5EDD6">KPHB Colony · Hyderabad</text>
      <line x1="136" y1="2" x2="136" y2="58" stroke="#2C1A0E" strokeWidth="1.5" strokeDasharray="4 3"/>
      <rect x="138" y="2" width="20" height="56" rx="3" fill="#E8A020" stroke="#2C1A0E" strokeWidth="1.5"/>
      <text x="148" y="35" textAnchor="middle" fontFamily="serif" fontSize="7" fill="#2C1A0E" transform="rotate(90,148,35)">ENTRY</text>
    </svg>
  )
}

export default function Hero() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const waUrl = `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`

  return (
    <section
      id="home"
      className="relative min-h-screen bg-teal overflow-hidden flex flex-col justify-center pt-20"
    >
      {/* Halftone dot overlay */}
      <div className="absolute inset-0 halftone-overlay opacity-30 pointer-events-none" />

      {/* Decorative diagonal stripe */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(232,160,32,0.07) 40px, rgba(232,160,32,0.07) 80px)',
        }}
      />

      {/* Cassette — top right, desktop only */}
      <motion.div
        className="absolute top-24 right-6 md:right-16 w-28 md:w-40 opacity-80"
        style={{ rotate: 15 }}
        animate={{ rotate: [15, 18, 14, 15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CassetteDecor />
      </motion.div>

      {/* Ticket stub — bottom left */}
      <motion.div
        className="absolute bottom-20 left-4 md:left-16 w-36 md:w-52 opacity-85"
        style={{ rotate: -8 }}
        animate={{ rotate: [-8, -6, -9, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <TicketDecor />
      </motion.div>

      {/* Main poster block — slightly skewed container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left: headline */}
        <motion.div
          className="flex-1 max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Top badge */}
          <div className="mb-5">
            <span className="stamp text-mustard border-mustard text-xs">
              Est. &apos;90s · KPHB Hyderabad
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-cream leading-tight mb-2">
            <span className="block text-5xl md:text-7xl">{c.heroHeading[0]}</span>
            <span
              className="block text-5xl md:text-7xl"
              style={{ color: '#E8A020', textShadow: '3px 3px 0 #2C1A0E' }}
            >
              {c.heroHeading[1]}
            </span>
          </h1>

          {/* Telugu sub-brand line */}
          <p className="font-telugu text-mustard text-xl md:text-2xl mb-4 opacity-90">
            {restaurant.nameTE}
          </p>

          {/* Subheadline */}
          <p className="font-body text-cream/85 text-base md:text-lg mb-8 leading-relaxed max-w-md">
            {c.heroSub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro bg-mustard text-ink border-ink"
            >
              {/* WhatsApp icon */}
              <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.655 4.826 1.8 6.846L2 30l7.344-1.775A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.46 11.46 0 0 1-5.837-1.597l-.418-.248-4.36 1.055 1.082-4.247-.272-.437A11.46 11.46 0 0 1 4.5 16c0-6.34 5.16-11.5 11.5-11.5S27.5 9.66 27.5 16 22.34 27.5 16 27.5zm6.3-8.63c-.345-.172-2.044-1.008-2.36-1.123-.317-.115-.547-.172-.778.172-.23.345-.893 1.123-1.094 1.354-.2.23-.402.258-.747.086-.345-.172-1.456-.537-2.774-1.713-1.025-.915-1.717-2.044-1.918-2.39-.2-.345-.022-.532.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.432-.028-.603-.086-.172-.778-1.874-1.065-2.564-.28-.672-.565-.58-.778-.59l-.662-.012c-.23 0-.603.086-.92.432-.317.345-1.21 1.18-1.21 2.882 0 1.701 1.238 3.345 1.41 3.576.172.23 2.436 3.72 5.9 5.213.824.356 1.467.569 1.969.728.827.263 1.58.226 2.175.137.663-.099 2.044-.835 2.332-1.642.287-.807.287-1.5.2-1.642-.086-.143-.317-.23-.662-.402z"/>
              </svg>
              {c.heroBtn1}
            </a>
            <a
              href="#book"
              className="btn-retro bg-brick text-cream border-ink"
            >
              {c.heroBtn2}
            </a>
          </div>

          {/* Quick info strip */}
          <div className="flex flex-wrap gap-4 mt-8 text-cream/70 text-xs font-body">
            <span className="flex items-center gap-1">
              <span className="text-mustard text-sm">★</span> {restaurant.rating} · {restaurant.reviewCount} reviews
            </span>
            <span className="text-cream/40">|</span>
            <span>Open till {restaurant.closingTime}</span>
            <span className="text-cream/40">|</span>
            <span>{restaurant.priceRange} / person</span>
          </div>
        </motion.div>

        {/* Right: stacked food image collage */}
        <motion.div
          className="flex-1 relative hidden md:flex justify-center items-center min-h-80"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Background plate */}
          <div
            className="absolute w-72 h-72 bg-mustard rounded-full opacity-20"
            style={{ filter: 'blur(40px)' }}
          />
          {/* Main image */}
          <div className="relative w-72 h-80 rounded-lg overflow-hidden border-4 border-mustard shadow-[6px_6px_0_#2C1A0E]" style={{ transform: 'rotate(3deg)' }}>
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80&fm=jpg&crop=entropy&fit=crop"
              alt="Mutton Dum Biryani — signature dish"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(1.2) sepia(0.15)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          {/* Offset secondary image */}
          <div className="absolute -bottom-4 -left-4 w-40 h-44 rounded-lg overflow-hidden border-3 border-cream shadow-[4px_4px_0_#2C1A0E]" style={{ transform: 'rotate(-6deg)', border: '3px solid #F5EDD6' }}>
            <img
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80&fm=jpg&crop=entropy&fit=crop"
              alt="Crispy Prawns — popular starter"
              className="w-full h-full object-cover"
              style={{ filter: 'saturate(1.3) sepia(0.1)' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Torn paper bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" style={{ height: 32 }}>
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
