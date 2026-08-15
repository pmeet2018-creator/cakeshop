import { useState } from 'react'
import business from '../config/business.js'
import { phoneLink } from '../utils/whatsapp.js'

const NAV_LINKS = [
  { href: '#cakes', label: 'Cakes' },
  { href: '#custom-cake', label: 'Custom Cakes' },
  { href: '#celebration-club', label: 'Celebration Club' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Contact' }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#home" className="brand" aria-label={business.businessName}>
          {business.logo ? (
            <img src={business.logo} alt={`${business.businessName} logo`} />
          ) : (
            <span className="brand-mark">{business.shortName?.[0] || business.businessName[0]}</span>
          )}
          <span>{business.shortName || business.businessName}</span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="header-ctas">
          <a href={phoneLink()} className="header-icon-btn" aria-label="Call now" title="Call now">📞</a>
          <a href="#cakes" className="btn btn-primary btn-sm">🍰 Explore Cakes</a>
        </div>

        <button
          className="mobile-menu-btn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer__panel" onClick={(e) => e.stopPropagation()}>
            <button className="mobile-drawer__close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>✕</button>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
            <a href={phoneLink()} className="btn btn-outline btn-block" onClick={() => setMenuOpen(false)}>📞 Call Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
