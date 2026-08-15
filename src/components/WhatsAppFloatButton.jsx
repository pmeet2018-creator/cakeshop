import { generalEnquiryLink } from '../utils/whatsapp.js'
import { trackEvent } from '../utils/analytics.js'

export default function WhatsAppFloatButton() {
  return (
    <a
      href={generalEnquiryLink()}
      target="_blank" rel="noopener noreferrer"
      className="float-whatsapp"
      aria-label="Chat with us on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { source: 'floating_button' })}
    >
      💬
    </a>
  )
}
