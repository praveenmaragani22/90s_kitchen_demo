import { useState, useEffect } from 'react'
import { useLang } from '../App'
import { restaurant, copy } from '../data/menuData'

export default function Navbar() {
  const { isTelugu, toggleLang } = useLang()
  const c = isTelugu ? copy.te : copy.en
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: c.navLinks[0], href: '#dishes' },
    { label: c.navLinks[1], href: '#menu' },
    { label: c.navLinks[2], href: '#vibe' },
    { label: c.navLinks[3], href: '#book' },
    { label: c.navLinks[4], href: '#visit' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="font-display text-mustard text-xl md:text-2xl leading-none tracking-tight group-hover:text-mustard-dark transition-colors"
          >
            90's Kitchen
          </span>
          <span className="font-telugu text-cream text-xs opacity-70">
            90's ఆథెంటిక్ కిచెన్
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-cream text-sm font-semibold hover:text-mustard transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-mustard group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 bg-mustard text-ink font-slab text-xs px-3 py-1.5 rounded border-2 border-ink shadow-[2px_2px_0_#2C1A0E] hover:shadow-[3px_3px_0_#2C1A0E] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            aria-label="Toggle language"
          >
            {isTelugu ? 'EN' : 'తె'}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream p-1"
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-ink border-t-2 border-mustard">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 font-body text-cream text-sm font-semibold hover:bg-mustard hover:text-ink transition-colors border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
