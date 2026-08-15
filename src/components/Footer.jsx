import business from '../config/business.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">{business.businessName}</div>
          <p style={{ fontSize: '.85rem', maxWidth: '32ch' }}>{business.tagline}</p>
          <div className="footer-social">
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#cakes">Cakes</a>
          <a href="#custom-cake">Custom Cakes</a>
          <a href="#celebration-club">Celebration Club</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#location">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`tel:${business.phone.replace(/\s+/g, '')}`}>{business.phone}</a>
          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp: {business.whatsapp}</a>
          <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer">{business.fullAddress}</a>
        </div>

        <div>
          <h4>Hours</h4>
          {business.openingHours.map((oh, i) => (
            <span key={i} style={{ display: 'block', marginBottom: 9, fontSize: '.87rem' }}>{oh.day}: {oh.hours}</span>
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} {business.businessName}. All rights reserved.</span>
        <span className="legal-links">
          <a href={business.legal.privacyPolicyUrl}>Privacy Policy</a>
          <a href={business.legal.termsUrl}>Terms</a>
        </span>
      </div>
    </footer>
  )
}
