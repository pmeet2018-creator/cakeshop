import business from '../config/business.js'

// Builds a wa.me deep link that opens WhatsApp with a pre-filled message.
// Never hard-code the WhatsApp number anywhere else in the app — always
// read it from business.whatsapp (src/config/business.js).
function buildWhatsAppLink(message) {
  const digitsOnly = String(business.whatsapp).replace(/[^0-9]/g, '')
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`
}

// Simple enquiry (e.g. floating button, sticky bar) — no cake context.
export function generalEnquiryLink() {
  const message = `Hi ${business.businessName}, I\u2019d like to know more about your cakes.`
  return buildWhatsAppLink(message)
}

// Product enquiry — built from the selections made on the product detail page.
export function productEnquiryLink({ name, size, eggless, occasion, requiredDate, flavour }) {
  const lines = [
    `Hi, I would like to enquire about the ${name}.`,
    '',
    `Cake: ${name}`
  ]
  if (flavour) lines.push(`Flavour: ${flavour}`)
  if (size) lines.push(`Size: ${size}`)
  if (eggless) lines.push(`Eggless: ${eggless}`)
  if (occasion) lines.push(`Occasion: ${occasion}`)
  if (requiredDate) lines.push(`Required Date: ${requiredDate}`)
  lines.push('', 'Please share the price and availability.')

  return buildWhatsAppLink(lines.join('\n'))
}

// Custom cake enquiry — built from the custom cake enquiry form.
export function customCakeEnquiryLink(form) {
  const lines = [
    'Hi, I would like to enquire about a custom cake.',
    '',
    `Name: ${form.name || '-'}`,
    `Mobile: ${form.mobile || '-'}`,
    `Occasion: ${form.occasion || '-'}`,
    `Cake Type: ${form.cakeType || '-'}`,
    `Approx. Weight: ${form.weight || '-'}`,
    `Preferred Flavour: ${form.flavour || '-'}`,
    `Eggless / Regular: ${form.eggless || '-'}`,
    `Required Date: ${form.requiredDate || '-'}`,
    `Required Time: ${form.requiredTime || '-'}`,
    `Budget: ${form.budget || '-'}`
  ]
  if (form.message) lines.push(`Message: ${form.message}`)
  if (form.hasReferenceImage) lines.push('', '(Reference image will be shared in the chat.)')
  lines.push('', 'Please confirm availability and pricing.')

  return buildWhatsAppLink(lines.join('\n'))
}

export function phoneLink() {
  return `tel:${business.phone.replace(/\s+/g, '')}`
}
