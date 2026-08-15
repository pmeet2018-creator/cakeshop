// CakeArt renders a small illustrated placeholder in place of a real product
// photo. Once real photography exists, ProductCard/ProductDetail will use
// <img> automatically — this component is only used while images[0] is the
// literal string 'PLACEHOLDER'.
const PALETTES = {
  berry: ['#8C3B54', '#C97891'],
  choco: ['#5A3A2E', '#8C5B3F'],
  vanilla: ['#F4E3C1', '#E7C892'],
  red: ['#9B2B3C', '#D96070'],
  gold: ['#B8862E', '#E9C873'],
  mint: ['#9FBFA8', '#D7E8DA'],
  blue: ['#4A6C8C', '#8FB4D6'],
  pink: ['#D98BA6', '#F3D2DE'],
  black: ['#2B2320', '#5A4E48'],
  rainbow: ['#D9A441', '#C9587C']
}

export default function CakeArt({ palette = 'berry', icon = '🎂', className = '', rounded = true }) {
  const [c1, c2] = PALETTES[palette] || PALETTES.berry
  const gradId = `cakeArtGrad-${palette}`

  return (
    <div className={`cake-art ${rounded ? 'cake-art--rounded' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Placeholder cake illustration">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#${gradId})`} />
        <ellipse cx="100" cy="150" rx="70" ry="14" fill="rgba(0,0,0,0.12)" />
        <rect x="45" y="95" width="110" height="55" rx="8" fill="rgba(255,255,255,0.18)" />
        <rect x="55" y="70" width="90" height="35" rx="8" fill="rgba(255,255,255,0.24)" />
        <circle cx="100" cy="58" r="6" fill="rgba(255,255,255,0.5)" />
        <rect x="98" y="40" width="4" height="20" fill="rgba(255,255,255,0.6)" />
      </svg>
      <span className="cake-art__icon">{icon}</span>
      <span className="cake-art__label">Placeholder photo</span>
    </div>
  )
}
