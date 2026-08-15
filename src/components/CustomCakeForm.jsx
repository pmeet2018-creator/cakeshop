import { useState } from 'react'
import { customCakeEnquiryLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'

const initialState = {
  name: '', mobile: '', occasion: '', cakeType: '', weight: '',
  flavour: '', eggless: '', requiredDate: '', requiredTime: '',
  budget: '', message: ''
}

export default function CustomCakeForm() {
  const [form, setForm] = useState(initialState)
  const [fileName, setFileName] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : '')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    trackEvent('custom_enquiry', { occasion: form.occasion, cakeType: form.cakeType })
    const link = customCakeEnquiryLink({ ...form, hasReferenceImage: Boolean(fileName) })
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section section--blush" id="custom-cake">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Have Something Specific in Mind?</span>
          <h2>Custom Cake Enquiry</h2>
          <p>Tell us about your dream cake and we\u2019ll get back to you on WhatsApp with pricing and design ideas.</p>
        </div>

        <form className="custom-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="cf-name">Your Name</label>
              <input id="cf-name" required value={form.name} onChange={update('name')} placeholder="e.g. Priya Sharma" />
            </div>
            <div className="form-field">
              <label htmlFor="cf-mobile">Mobile Number</label>
              <input id="cf-mobile" required type="tel" value={form.mobile} onChange={update('mobile')} placeholder="e.g. 98765 43210" />
            </div>

            <div className="form-field">
              <label htmlFor="cf-occasion">Occasion</label>
              <input id="cf-occasion" value={form.occasion} onChange={update('occasion')} placeholder="e.g. Birthday, Anniversary" />
            </div>
            <div className="form-field">
              <label htmlFor="cf-type">Cake Type</label>
              <input id="cf-type" value={form.cakeType} onChange={update('cakeType')} placeholder="e.g. Designer, Photo, Theme" />
            </div>

            <div className="form-field">
              <label htmlFor="cf-weight">Approximate Weight</label>
              <select id="cf-weight" value={form.weight} onChange={update('weight')}>
                <option value="">Select weight</option>
                <option>0.5 kg</option><option>1 kg</option><option>1.5 kg</option>
                <option>2 kg</option><option>3 kg</option><option>Not sure yet</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="cf-flavour">Preferred Flavour</label>
              <input id="cf-flavour" value={form.flavour} onChange={update('flavour')} placeholder="e.g. Chocolate, Red Velvet" />
            </div>

            <div className="form-field">
              <label htmlFor="cf-eggless">Eggless / Regular</label>
              <select id="cf-eggless" value={form.eggless} onChange={update('eggless')}>
                <option value="">Select</option>
                <option>Eggless</option>
                <option>Regular</option>
                <option>Either is fine</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="cf-budget">Budget (optional)</label>
              <input id="cf-budget" value={form.budget} onChange={update('budget')} placeholder="e.g. ₹1500 – ₹2000" />
            </div>

            <div className="form-field">
              <label htmlFor="cf-date">Required Date</label>
              <input id="cf-date" type="date" value={form.requiredDate} onChange={update('requiredDate')} min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="form-field">
              <label htmlFor="cf-time">Required Time</label>
              <input id="cf-time" type="time" value={form.requiredTime} onChange={update('requiredTime')} />
            </div>

            <div className="form-field form-field--full">
              <label htmlFor="cf-message">Tell us more (theme, colours, inspiration)</label>
              <textarea id="cf-message" rows="3" value={form.message} onChange={update('message')} placeholder="Describe the design you have in mind..." />
            </div>

            <div className="form-field form-field--full">
              <label htmlFor="cf-file">Reference Image (optional)</label>
              <label htmlFor="cf-file" className="form-file">
                {fileName ? `📎 ${fileName}` : '📷 Tap to attach a reference photo'}
              </label>
              <input id="cf-file" type="file" accept="image/*" onChange={handleFile} className="visually-hidden" />
            </div>
          </div>

          <button type="submit" className="btn btn-whatsapp btn-block" style={{ marginTop: 20 }}>
            💬 Send Custom Cake Enquiry on WhatsApp
          </button>
          <p className="form-note">
            {fileName
              ? 'We\u2019ll open WhatsApp for you — please attach the reference photo directly in the chat.'
              : 'We\u2019ll open WhatsApp with your details pre-filled so you can send it in one tap.'}
          </p>
        </form>
      </div>
    </section>
  )
}
