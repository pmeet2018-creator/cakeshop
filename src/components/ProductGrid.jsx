import { useMemo, useState, useEffect } from 'react'
import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import SearchBar from './SearchBar.jsx'
import ProductFilter, { filterAndSortProducts } from './ProductFilter.jsx'
import CategoryStrip from './CategoryStrip.jsx'

export default function ProductGrid({ onViewProduct, occasionFilter, onClearOccasion }) {
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ egglessOnly: false, priceRange: 'all', sort: 'popular' })

  // If the visitor picked an occasion elsewhere on the page, reflect it here.
  useEffect(() => {
    if (occasionFilter) setCategory('all')
  }, [occasionFilter])

  const results = useMemo(
    () => filterAndSortProducts(products, { category, occasion: occasionFilter, search, ...filters }),
    [category, occasionFilter, search, filters]
  )

  return (
    <section className="section" id="cakes">
      <CategoryStrip activeCategory={category} onSelect={(c) => { setCategory(c); onClearOccasion?.() }} />

      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Cake Catalogue</span>
          <h2>Popular Cakes</h2>
          <p>Pick a design, choose your size and send the details straight to WhatsApp.</p>
        </div>

        <SearchBar value={search} onChange={setSearch} />
        <ProductFilter filters={filters} onChange={setFilters} />

        {occasionFilter && (
          <div className="results-meta">
            Showing cakes for <strong>{occasionFilter.replace('-', ' ')}</strong> ·{' '}
            <button className="btn-outline btn-sm" style={{ padding: '2px 10px' }} onClick={onClearOccasion}>Clear</button>
          </div>
        )}
        <div className="results-meta">{results.length} cake{results.length !== 1 ? 's' : ''} found</div>

        {results.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state__icon">🍰</div>
            <p>No cakes match those filters yet. Try clearing a filter or search a different word.</p>
          </div>
        ) : (
          <div className="product-grid">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} onView={onViewProduct} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
