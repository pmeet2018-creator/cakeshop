import business from '../config/business.js'
import { generalEnquiryLink, phoneLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'

export default function FinalCta() {
  return (
    <section className="section section--dark final-cta">
      <div className="container">
        <span className="eyebrow" style={{ color: 'var(--color-accent)' }}>Ready to Order?</span>
        <h2>Your cake, delivered exactly how you imagined it</h2>
        <p>See a design you like, pick your size, and send us the details on WhatsApp — {business.businessName} takes it from there.</p>
        <div className="hero__ctas">
          <a
            href={generalEnquiryLink()}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp"
            onClick={() => trackEvent('whatsapp_click', { source: 'final_cta' })}
          >
            💬 Order / Enquire on WhatsApp
          </a>
          <a href={phoneLink()} className="btn btn-outline-light">📞 Call Now</a>
        </div>
      </div>
    </section>
  )
}
