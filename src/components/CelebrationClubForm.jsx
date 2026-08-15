import { useState } from 'react'
import business from '../config/business.js'
import { submitToCelebrationSheet } from '../utils/googleSheet.js'
import { trackEvent } from '../utils/analytics.js'

const initialState = {
  name: '', mobile: '', email: '',
  dob: '', occasionType: '', occasionDate: '',
  favouriteFlavour: '', favouriteCakeType: '', notes: ''
}

export default function CelebrationClubForm() {
  const [form, setForm] = useState(initialState)
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | not_configured

  if (!business.celebrationClub?.enabled) return null

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!consent) return
    setStatus('submitting')

    const result = await submitToCelebrationSheet(form)

    if (result.ok) {
      trackEvent('celebration_club_signup', { occasionType: form.occasionType })
      setStatus('success')
      setForm(initialState)
      setConsent(false)
    } else if (result.reason === 'not_configured') {
      setStatus('not_configured')
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="section" id="celebration-club" aria-labelledby="club-heading">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Celebration Club</span>
          <h2 id="club-heading">{business.celebrationClub.heading}</h2>
          <p>{business.celebrationClub.subtext}</p>
        </div>

        {status === 'success' ? (
          <div className="custom-form" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: 10 }}>🎉</div>
            <h3>You're on the list!</h3>
            <p style={{ color: 'var(--color-muted)' }}>
              We've saved your details. Expect a little something from us closer to your special day.
            </p>
            <button className="btn btn-outline" onClick={() => setStatus('idle')}>Add Another Date</button>
          </div>
        ) : (
          <form className="custom-form" onSubmit={handleSubmit}>
            {status === 'not_configured' && (
              <p className="form-note" style={{ color: 'var(--color-primary)', marginBottom: 14 }}>
                Signups aren't connected to a Google Sheet yet — see GOOGLE_SHEETS_SETUP.md to finish setup.
              </p>
            )}
            {status === 'error' && (
              <p className="form-note" style={{ color: 'var(--color-primary)', marginBottom: 14 }}>
                Something went wrong sending that — please try again, or reach us directly on WhatsApp.
              </p>
            )}

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="cc-name">Your Name</label>
                <input id="cc-name" required value={form.name} onChange={update('name')} placeholder="e.g. Priya Sharma" />
              </div>
              <div className="form-field">
                <label htmlFor="cc-mobile">Mobile Number</label>
                <input id="cc-mobile" required type="tel" value={form.mobile} onChange={update('mobile')} placeholder="e.g. 98765 43210" />
              </div>

              <div className="form-field">
                <label htmlFor="cc-email">Email (optional)</label>
                <input id="cc-email" type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" />
              </div>
              <div className="form-field">
                <label htmlFor="cc-dob">Date of Birth</label>
                <input id="cc-dob" type="date" value={form.dob} onChange={update('dob')} />
              </div>

              <div className="form-field">
                <label htmlFor="cc-occasion-type">Special Occasion</label>
                <select id="cc-occasion-type" value={form.occasionType} onChange={update('occasionType')}>
                  <option value="">Select an occasion</option>
                  <option>Anniversary</option>
                  <option>Child's Birthday</option>
                  <option>Engagement</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="cc-occasion-date">Occasion Date</label>
                <input id="cc-occasion-date" type="date" value={form.occasionDate} onChange={update('occasionDate')} />
              </div>

              <div className="form-field">
                <label htmlFor="cc-flavour">Favourite Flavour</label>
                <input id="cc-flavour" value={form.favouriteFlavour} onChange={update('favouriteFlavour')} placeholder="e.g. Chocolate Truffle" />
              </div>
              <div className="form-field">
                <label htmlFor="cc-type">Favourite Cake Type</label>
                <input id="cc-type" value={form.favouriteCakeType} onChange={update('favouriteCakeType')} placeholder="e.g. Designer, Photo Cake" />
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="cc-notes">Anything else we should remember? (optional)</label>
                <textarea id="cc-notes" rows="2" value={form.notes} onChange={update('notes')} placeholder="Allergies, preferred size, message ideas..." />
              </div>
            </div>

            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 16, fontSize: '.82rem', color: 'var(--color-muted)' }}>
              <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 3 }} />
              {business.celebrationClub.consentText}
            </label>

            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 18 }} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Saving...' : '🎂 Save My Dates'}
            </button>
            <p className="form-note">Your details are stored privately and only used to send you order updates and celebration offers.</p>
          </form>
        )}
      </div>
    </section>
  )
}
