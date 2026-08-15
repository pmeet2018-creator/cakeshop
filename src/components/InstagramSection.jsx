import business from '../config/business.js'
import CakeArt from './CakeArt.jsx'

const DEMO_PALETTES = ['berry', 'choco', 'gold', 'pink', 'mint', 'red']

export default function InstagramSection() {
  return (
    <section className="section section--blush" aria-labelledby="insta-heading">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">@{business.shortName || business.businessName}</span>
          <h2 id="insta-heading">Follow Our Latest Creations</h2>
        </div>
        <div className="insta-grid">
          {DEMO_PALETTES.map((p, i) => (
            <CakeArt key={i} palette={p} icon="📷" />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 22 }}>
          <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
