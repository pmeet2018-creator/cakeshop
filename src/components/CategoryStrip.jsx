import categories from '../data/categories.js'

export default function CategoryStrip({ activeCategory, onSelect }) {
  return (
    <section className="section section--tight" aria-label="Shop by category">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Shop by category</span>
          <h2 style={{ fontSize: '1.6rem' }}>What kind of cake are you after?</h2>
        </div>
        <div className="chip-scroll">
          <button
            className={`category-chip ${activeCategory === 'all' ? 'is-active' : ''}`}
            onClick={() => onSelect('all')}
          >
            <span className="category-chip__icon">🍰</span>
            <span className="label">All Cakes</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-chip ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => onSelect(cat.id)}
            >
              <span className="category-chip__icon">{cat.icon}</span>
              <span className="label">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
