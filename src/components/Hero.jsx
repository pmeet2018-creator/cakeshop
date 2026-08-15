import business from '../config/business.js'
import CakeArt from './CakeArt.jsx'
import { generalEnquiryLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div>
          <span className="hero__eyebrow">{business.hero.eyebrow}</span>
          <h1>{business.hero.headline}</h1>
          <p className="hero__subtext">{business.hero.subtext}</p>
          <div className="hero__ctas">
            <a href="#cakes" className="btn btn-primary">🍰 Explore Cakes</a>
            <a
              href={generalEnquiryLink()}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp"
              onClick={() => trackEvent('whatsapp_click', { source: 'hero' })}
            >
              💬 Order on WhatsApp
            </a>
          </div>
          <div className="hero__ratings">
            <span>⭐⭐⭐⭐⭐</span>
            <strong>{business.googleRating.score}</strong>
            <span>({business.googleRating.count}+ Google reviews)</span>
          </div>
        </div>
        <div className="hero__image-wrap">
          <div className="piped-frame">
            <CakeArt palette="berry" icon="🎂" />
          </div>
        </div>
      </div>
    </section>
  )
}
