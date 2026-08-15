import business from '../config/business.js'

export default function OffersSection() {
  if (!business.showOffers || !business.offers?.length) return null

  return (
    <section className="section" aria-labelledby="offers-heading">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Today's Special</span>
          <h2 id="offers-heading">Current Offers</h2>
        </div>
        <div className="offers-grid">
          {business.offers.map((offer, i) => (
            <div className="offer-card" key={i}>
              <span className="offer-tag">{offer.tag}</span>
              <h3 style={{ marginTop: 10 }}>{offer.title}</h3>
              <p>{offer.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
