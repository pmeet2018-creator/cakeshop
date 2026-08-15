import { generalEnquiryLink, phoneLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'

export default function StickyMobileBar() {
  return (
    <nav className="sticky-mobile-bar" aria-label="Quick actions">
      <a href={phoneLink()} onClick={() => trackEvent('call_click', { source: 'sticky_bar' })}>
        <span className="icon">📞</span>Call
      </a>
      <a
        href={generalEnquiryLink()}
        target="_blank" rel="noopener noreferrer"
        className="whatsapp-cell"
        onClick={() => trackEvent('whatsapp_click', { source: 'sticky_bar' })}
      >
        <span className="icon">💬</span>WhatsApp
      </a>
      <a href="#cakes">
        <span className="icon">🍰</span>View Cakes
      </a>
    </nav>
  )
}
