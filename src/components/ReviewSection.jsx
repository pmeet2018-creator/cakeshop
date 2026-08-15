import reviews from '../data/reviews.js'
import business from '../config/business.js'

export default function ReviewSection() {
  return (
    <section className="section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Customer Reviews</span>
          <h2 id="reviews-heading">Loved by our customers</h2>
          <p>⭐ {business.googleRating.score} average from {business.googleRating.count}+ Google reviews.</p>
        </div>
        <div className="review-scroll">
          {reviews.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-card__stars" aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
              </div>
              <p className="review-card__text">{r.text}</p>
              <div className="review-card__footer">
                <span className="review-avatar">{r.name.replace(/[\[\]]/g, '').charAt(0) || '★'}</span>
                <div>
                  <div className="review-name">{r.name}</div>
                  {r.demo && <div className="demo-tag">Demo review — replace before launch</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
