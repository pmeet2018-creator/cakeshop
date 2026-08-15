import business from '../config/business.js'
import { phoneLink } from '../utils/whatsapp.js'

export default function LocationSection() {
  return (
    <section className="section" id="location" aria-labelledby="location-heading">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Visit or Order From Us</span>
          <h2 id="location-heading">Find Us</h2>
        </div>
        <div className="location-grid">
          <div className="location-card">
            <div className="location-row">
              <span className="location-row__icon">📍</span>
              <div>
                <strong>Address</strong>
                <p style={{ margin: 0 }}>{business.fullAddress}</p>
              </div>
            </div>
            <div className="location-row">
              <span className="location-row__icon">🕒</span>
              <div>
                <strong>Opening Hours</strong>
                {business.openingHours.map((oh, i) => (
                  <p key={i} style={{ margin: 0 }}>{oh.day}: {oh.hours}</p>
                ))}
              </div>
            </div>
            <div className="location-row">
              <span className="location-row__icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p style={{ margin: 0 }}>{business.phone}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                Get Directions
              </a>
              <a href={phoneLink()} className="btn btn-outline btn-sm">Call Now</a>
            </div>
          </div>
          <div className="map-embed">
            <iframe
              src={business.googleMapsEmbedUrl}
              title="Shop location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
