import { occasions } from '../data/categories.js'
import { trackEvent } from '../utils/analytics.js'

export default function OccasionSection({ onSelectOccasion }) {
  return (
    <section className="section section--blush" aria-labelledby="occasion-heading">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Occasion-based shopping</span>
          <h2 id="occasion-heading">What are you celebrating?</h2>
          <p>Tap an occasion to see cakes people usually pick for it.</p>
        </div>
        <div className="occasion-grid">
          {occasions.map((occ) => (
            <button
              key={occ.id}
              className="occasion-card"
              onClick={() => {
                trackEvent('category_select', { type: 'occasion', value: occ.id })
                onSelectOccasion(occ.id)
              }}
            >
              <span className="occasion-card__icon">{occ.icon}</span>
              <span className="occasion-card__name">{occ.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
