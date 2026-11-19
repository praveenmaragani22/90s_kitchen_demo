import { useLang } from '../App'
import { restaurant, copy, designer } from '../data/menuData'

// Dashed ticket-stub divider
function TicketDivider() {
  return (
    <div className="relative my-0">
      <div className="border-t-2 border-dashed border-cream/20" />
      <span className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-ink border border-cream/10" aria-hidden="true" />
      <span className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-ink border border-cream/10" aria-hidden="true" />
    </div>
  )
}

export default function Footer() {
  const { isTelugu } = useLang()
  const c = isTelugu ? copy.te : copy.en

  const quickLinks = [
    { label: c.navLinks[0], href: '#dishes' },
    { label: c.navLinks[1], href: '#menu' },
    { label: c.navLinks[2], href: '#vibe' },
    { label: c.navLinks[3], href: '#book' },
    { label: c.navLinks[4], href: '#visit' },
  ]

  return (
    <footer className="bg-ink relative overflow-hidden">
      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone-overlay opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Col 1: Brand */}
          <div>
            <a href="#" className="inline-flex flex-col leading-none mb-4 group" aria-label="90's Authentic Kitchen — home">
              <span className="font-display text-mustard text-2xl leading-none tracking-tight">
                90's Kitchen
              </span>
              <span className="font-telugu text-cream/60 text-sm mt-1">
                90's ఆథెంటిక్ కిచెన్
              </span>
            </a>
            <p className="font-body text-cream/60 text-sm leading-relaxed mb-1">
              {restaurant.tagline}
            </p>
            <p className="font-telugu text-cream/40 text-sm leading-relaxed">
              {restaurant.taglineTE}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-slab text-mustard text-xs tracking-widest uppercase mb-4">
              {c.footerQuickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-cream/70 text-sm hover:text-mustard transition-colors focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-1 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-slab text-mustard text-xs tracking-widest uppercase mb-4">
              {c.footerContact}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="font-body text-cream/70 text-sm hover:text-mustard transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-1 rounded"
                >
                  <span aria-hidden="true">📞</span>
                  {restaurant.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream/70 text-sm font-body">
                <span aria-hidden="true" className="mt-0.5">📍</span>
                <span>{restaurant.address}</span>
              </li>
              <li className="flex items-center gap-2 text-cream/70 text-sm font-body">
                <span aria-hidden="true">🕐</span>
                <span>{c.footerClosing} {restaurant.closingTime}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ticket-stub divider */}
        <TicketDivider />

        {/* Bottom bar — extra bottom padding for mobile sticky bar */}
        <div className="mt-5 pb-20 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-cream/40 text-xs text-center md:text-left">
            {c.footerRights}
          </p>
          <p className="font-body text-cream/40 text-xs text-center md:text-right">
            {c.footerCredit}{' '}
            <a
              href={`https://wa.me/${designer.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mustard hover:text-mustard-dark transition-colors underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-mustard focus:ring-offset-1 rounded"
              aria-label={`Contact ${designer.name} on WhatsApp`}
            >
              {designer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
