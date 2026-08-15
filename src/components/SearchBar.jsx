import { trackEvent } from '../utils/analytics.js'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">🔍</span>
      <label htmlFor="cake-search" className="visually-hidden">Search cakes</label>
      <input
        id="cake-search"
        type="search"
        placeholder="Search cakes... (e.g. chocolate, birthday, eggless)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => { if (value) trackEvent('search_performed', { query: value }) }}
      />
    </div>
  )
}
