import business from '../config/business.js'
import CakeArt from './CakeArt.jsx'

export default function AboutSection() {
  return (
    <section className="section section--blush" id="about">
      <div className="container hero__grid">
        <div className="hero__image-wrap" style={{ order: 2 }}>
          <div className="piped-frame">
            <CakeArt palette="gold" icon="✨" />
          </div>
        </div>
        <div style={{ order: 1 }}>
          <span className="eyebrow">Our Story</span>
          <h2>{business.about.heading}</h2>
          <p style={{ color: 'var(--color-ink)', maxWidth: '48ch' }}>{business.about.body}</p>
          <div style={{ display: 'flex', gap: 28, marginTop: 20, flexWrap: 'wrap' }}>
            {business.about.highlightStats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>{s.value}</div>
                <div style={{ fontSize: '.8rem', color: 'var(--color-muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
