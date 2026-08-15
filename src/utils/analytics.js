import business from '../config/business.js'

let initialized = false

// Loads GA4 only if a measurement ID is configured. Safe to call multiple
// times. If no ID is set, trackEvent() below just logs to console in dev
// and does nothing in production — the site never breaks without analytics.
export function initAnalytics() {
  const id = business.analytics?.ga4MeasurementId
  if (!id || initialized || typeof window === 'undefined') return
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', id)
}

// Standard event names used across the app:
// cake_view, whatsapp_click, call_click, custom_enquiry, category_select, search_performed
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  } else if (import.meta.env?.DEV) {
    // eslint-disable-next-line no-console
    console.log('[analytics]', eventName, params)
  }
}
