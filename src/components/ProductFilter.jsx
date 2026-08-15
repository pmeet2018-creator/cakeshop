const PRICE_RANGES = [
  { id: 'all', label: 'Any Price' },
  { id: 'under500', label: 'Under ₹500' },
  { id: '500to1000', label: '₹500 – ₹1000' },
  { id: '1000to2000', label: '₹1000 – ₹2000' },
  { id: 'above2000', label: 'Above ₹2000' }
]

const SORTS = [
  { id: 'popular', label: 'Most Popular' },
  { id: 'priceLow', label: 'Price: Low to High' },
  { id: 'priceHigh', label: 'Price: High to Low' }
]

export default function ProductFilter({ filters, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter cakes">
      <button
        className={`filter-pill ${filters.egglessOnly ? 'is-active' : ''}`}
        onClick={() => onChange({ ...filters, egglessOnly: !filters.egglessOnly })}
      >
        🥚 Eggless Only
      </button>

      <label className="filter-pill" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        Price:
        <select
          value={filters.priceRange}
          onChange={(e) => onChange({ ...filters, priceRange: e.target.value })}
        >
          {PRICE_RANGES.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
        </select>
      </label>

      <label className="filter-pill" style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        Sort:
        <select
          value={filters.sort}
          onChange={(e) => onChange({ ...filters, sort: e.target.value })}
        >
          {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
      </label>
    </div>
  )
}

export function filterAndSortProducts(products, { category, occasion, search, egglessOnly, priceRange, sort }) {
  let list = products.filter((p) => p.available)

  if (category && category !== 'all') list = list.filter((p) => p.category === category)
  if (occasion && occasion !== 'all') list = list.filter((p) => p.occasions.includes(occasion))
  if (egglessOnly) list = list.filter((p) => p.egglessAvailable)

  if (search && search.trim()) {
    const q = search.trim().toLowerCase()
    list = list.filter((p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.flavours.some((f) => f.toLowerCase().includes(q))
    )
  }

  if (priceRange && priceRange !== 'all') {
    list = list.filter((p) => {
      if (priceRange === 'under500') return p.startingPrice < 500
      if (priceRange === '500to1000') return p.startingPrice >= 500 && p.startingPrice <= 1000
      if (priceRange === '1000to2000') return p.startingPrice > 1000 && p.startingPrice <= 2000
      if (priceRange === 'above2000') return p.startingPrice > 2000
      return true
    })
  }

  const sorted = [...list].sort((a, b) => {
    if (sort === 'priceLow') return a.startingPrice - b.startingPrice
    if (sort === 'priceHigh') return b.startingPrice - a.startingPrice
    // popular: featured/popular first, then sortOrder
    const score = (p) => (p.popular ? 2 : 0) + (p.featured ? 1 : 0)
    return score(b) - score(a) || a.sortOrder - b.sortOrder
  })

  return sorted
}
