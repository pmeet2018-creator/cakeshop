import CakeArt from './CakeArt.jsx'
import { productEnquiryLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'

export default function ProductCard({ product, onView }) {
  const isPlaceholder = !product.images?.length || product.images[0] === 'PLACEHOLDER'

  const quickWhatsappLink = productEnquiryLink({
    name: product.name,
    size: product.sizes?.[0],
    eggless: product.egglessAvailable ? 'Yes' : 'No'
  })

  return (
    <article className="product-card">
      <div className="product-card__media">
        <div className="product-card__badges">
          {product.popular && <span className="badge badge--accent">Bestseller</span>}
          {product.egglessAvailable && <span className="badge badge--eggless">Eggless</span>}
        </div>
        {isPlaceholder ? (
          <CakeArt palette={product.art?.palette} icon={product.art?.icon} rounded={false} />
        ) : (
          <img src={product.images[0]} alt={product.name} loading="lazy" />
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__price">
          From ₹{product.startingPrice} <span>· {product.sizes?.[0]}</span>
        </div>
        <div className="product-card__actions">
          <button
            className="btn btn-outline"
            onClick={() => {
              trackEvent('cake_view', { id: product.id, name: product.name })
              onView(product)
            }}
          >
            View Cake
          </button>
          <a
            href={quickWhatsappLink}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-whatsapp"
            onClick={() => trackEvent('whatsapp_click', { source: 'product_card', id: product.id })}
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  )
}
