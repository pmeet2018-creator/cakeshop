import business from '../config/business.js'

// Submits a plain object of form fields to the Google Apps Script Web App
// configured at business.celebrationClub.sheetWebAppUrl, which appends a
// row to a Google Sheet (see GOOGLE_SHEETS_SETUP.md).
//
// Apps Script Web Apps don't return CORS headers by default, so the
// request is sent in 'no-cors' mode. That means the browser can't read
// the response body or status code — we can only know the request was
// *sent*, not that the sheet write actually succeeded. This is a known,
// accepted limitation of the free Apps Script approach; it's called out
// to the visitor in the form's confirmation copy and in the setup guide.
//
// Fields are sent as application/x-www-form-urlencoded (the default for
// URLSearchParams bodies) because that keeps the request a CORS "simple
// request", which is required for no-cors mode to work without a
// pre-flight rejection.
export async function submitToCelebrationSheet(fields) {
  const url = business.celebrationClub?.sheetWebAppUrl

  if (!url || url.startsWith('[')) {
    // Placeholder URL still in place — config not finished yet.
    return { ok: false, reason: 'not_configured' }
  }

  const body = new URLSearchParams({
    timestamp: new Date().toISOString(),
    ...fields
  })

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body
    })
    // With mode: 'no-cors' the response is always opaque — treat a
    // request that didn't throw as a success.
    return { ok: true }
  } catch (err) {
    return { ok: false, reason: 'network_error', error: err }
  }
}
