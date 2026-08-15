import { useEffect, useState } from 'react'
import CakeArt from './CakeArt.jsx'
import { productEnquiryLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'
import { occasions } from '../data/categories.js'
import business from '../config/business.js'

export default function ProductDetailModal({ product, onClose }) {
  const [size, setSize] = useState(product.sizes?.[0] || '')
  const [flavour, setFlavour] = useState(product.flavours?.[0] || '')
  const [eggless, setEggless] = useState(product.egglessAvailable ? 'Yes' : 'No')
  const [occasion, setOccasion] = useState('')
  const [requiredDate, setRequiredDate] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const isPlaceholder = !product.images?.length || product.images[0] === 'PLACEHOLDER'
  const occasionLabel = occasions.find((o) => o.id === occasion)?.name

  const link = productEnquiryLink({
    name: product.name,
    size,
    flavour,
    eggless,
    occasion: occasionLabel,
    requiredDate: requiredDate ? new Date(requiredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : ''
  })

  const summaryLines = [
    `Cake: ${product.name}`,
    flavour && `Flavour: ${flavour}`,
    size && `Size: ${size}`,
    `Eggless: ${eggless}`,
    occasionLabel && `Occasion: ${occasionLabel}`,
    requiredDate && `Required Date: ${new Date(requiredDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`
  ].filter(Boolean).join('\n')

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label={product.name} onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-grid" style={{ position: 'relative' }}>
          <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>

          <div className="modal-media">
            {isPlaceholder ? (
              <CakeArt palette={product.art?.palette} icon={product.art?.icon} rounded={false} />
            ) : (
              <img src={product.images[0]} alt={product.name} />
            )}
          </div>

          <div className="modal-body">
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="modal-price">From ₹{product.startingPrice}</div>

            {product.flavours?.length > 0 && (
              <div className="modal-field">
                <label>Flavour</label>
                <div className="option-row">
                  {product.flavours.map((f) => (
                    <button
                      key={f}
                      className={`option-pill ${flavour === f ? 'is-active' : ''}`}
                      onClick={() => setFlavour(f)}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes?.length > 0 && (
              <div className="modal-field">
                <label>Weight / Size</label>
                <div className="option-row">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      className={`option-pill ${size === s ? 'is-active' : ''}`}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-field">
              <label>Eggless / Regular</label>
              <div className="option-row">
                {['Yes', 'No'].map((opt) => (
                  <button
                    key={opt}
                    className={`option-pill ${eggless === opt ? 'is-active' : ''}`}
                    onClick={() => setEggless(opt)}
                    disabled={opt === 'Yes' && !product.egglessAvailable}
                  >
                    {opt === 'Yes' ? 'Eggless' : 'Regular'}
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-field">
              <label>Suitable Occasion</label>
              <div className="option-row modal-occasion-tags">
                {product.occasions.map((oid) => {
                  const o = occasions.find((x) => x.id === oid)
                  if (!o) return null
                  return (
                    <button
                      key={oid}
                      className={`option-pill ${occasion === oid ? 'is-active' : ''}`}
                      onClick={() => setOccasion(occasion === oid ? '' : oid)}
                    >
                      {o.icon} {o.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="modal-field">
              <label htmlFor="required-date">Required Date</label>
              <input
                id="required-date"
                type="date"
                value={requiredDate}
                onChange={(e) => setRequiredDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {business.deliveryInformation?.deliveryNote && (
              <p style={{ fontSize: '.8rem', color: 'var(--color-muted)' }}>
                🚚 {business.deliveryInformation.deliveryNote}
              </p>
            )}

            <div className="modal-summary">{summaryLines}</div>

            <a
              href={link}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp btn-block"
              onClick={() => trackEvent('whatsapp_click', { source: 'product_detail', id: product.id })}
            >
              💬 Order This Cake on WhatsApp
            </a>
            <a href={business.phone ? `tel:${business.phone}` : '#'} className="btn btn-outline btn-block">
              📞 Or Call to Order
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
