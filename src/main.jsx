import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import business from './config/business.js'
import { initAnalytics } from './utils/analytics.js'
import './index.css'

// Push brand colours from the central config onto :root as CSS variables so
// every stylesheet rule in index.css automatically reflects the client's
// palette. Change colours in src/config/business.js only.
function applyBrandColors() {
  const root = document.documentElement
  const c = business.brandColors || {}
  if (c.primary) root.style.setProperty('--color-primary', c.primary)
  if (c.primaryDark) root.style.setProperty('--color-primary-dark', c.primaryDark)
  if (c.accent) root.style.setProperty('--color-accent', c.accent)
  if (c.blush) root.style.setProperty('--color-blush', c.blush)
  if (c.cream) root.style.setProperty('--color-cream', c.cream)
  if (c.ink) root.style.setProperty('--color-ink', c.ink)
}

applyBrandColors()
initAnalytics()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
