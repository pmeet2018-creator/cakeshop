// ============================================================================
// BUSINESS CONFIGURATION — THE ONLY FILE MOST CLIENTS NEED
// ----------------------------------------------------------------------------
// Every piece of client-specific text, contact info, link and colour used
// across the whole website is read from this one object.
// To onboard a new cake shop: edit this file (and src/data/products.js,
// src/data/reviews.js, src/data/categories.js) and nothing else.
// See CLIENT_SETUP_GUIDE.md for a walkthrough.
// ============================================================================

const business = {
  // ---- IDENTITY ----------------------------------------------------------
  businessName: '[BUSINESS NAME]', // e.g. "Sweet Moments Cakes"
  tagline: '[TAGLINE]', // e.g. "Handcrafted cakes for life's sweetest moments"
  shortName: '[SHORT NAME]', // used where space is tight (mobile header)
  logo: null, // e.g. '/assets/images/logo/logo.png'. Leave null to use the text logo.
  favicon: '/favicon.svg', // replace the file at public/favicon.svg

  // ---- ABOUT --------------------------------------------------------------
  about: {
    heading: 'About [BUSINESS NAME]',
    body: '[ABOUT BUSINESS] — Tell customers who you are, how long you have been baking, what makes your cakes different, and what occasions you specialise in. Two to four short sentences work best.',
    highlightStats: [
      { label: 'Years Baking', value: '[X]+' },
      { label: 'Cakes Delivered', value: '[X]+' },
      { label: 'Happy Customers', value: '[X]+' }
    ]
  },

  // ---- CONTACT --------------------------------------------------------------
  phone: '+91 90000 00000', // [PHONE NUMBER] — displayed & used for "Call Now"
  whatsapp: '919000000000', // [WHATSAPP NUMBER] — digits only, with country code, no + or spaces
  email: 'hello@example-cakeshop.com', // [EMAIL ADDRESS]
  address: '[SHOP ADDRESS]', // street address
  city: '[CITY]',
  fullAddress: '[SHOP ADDRESS], [CITY]',
  googleMapsUrl: 'https://maps.google.com/?q=[SHOP+ADDRESS]+[CITY]', // [GOOGLE MAPS URL] — paste the real "share" link
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=[SHOP+ADDRESS]+[CITY]&output=embed',

  // ---- HOURS ----------------------------------------------------------------
  openingHours: [
    { day: 'Monday – Saturday', hours: '10:00 AM – 9:00 PM' },
    { day: 'Sunday', hours: '10:00 AM – 6:00 PM' }
  ],

  // ---- SOCIAL -----------------------------------------------------------
  instagramUrl: 'https://instagram.com/[INSTAGRAM HANDLE]',
  facebookUrl: 'https://facebook.com/[FACEBOOK PAGE]',

  // ---- BRAND COLOURS ------------------------------------------------------
  // These map straight onto CSS custom properties in src/index.css
  // (--color-primary, --color-primary-dark, --color-accent, --color-blush,
  // --color-cream, --color-ink). Change hex values only — no need to touch CSS.
  brandColors: {
    primary: '#6D2A3A', // deep berry — headings, buttons, nav
    primaryDark: '#4A1B27', // hover / pressed states
    accent: '#C9A227', // gold — ratings, dividers, badges
    blush: '#F6DCE3', // soft pink — section backgrounds, tags
    cream: '#FFF8F0', // page background
    ink: '#2B2320' // body text
  },

  // ---- HERO ---------------------------------------------------------------
  hero: {
    eyebrow: 'Freshly Baked · Made to Order',
    headline: '[TAGLINE]',
    subtext: 'Freshly made cakes for birthdays, anniversaries, celebrations and every special occasion.',
    image: 'PLACEHOLDER:hero' // swap for a real photo path once available
  },

  // ---- DELIVERY -------------------------------------------------------------
  deliveryInformation: {
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryNote: 'Same-day delivery available on select cakes when ordered before 2 PM. Delivery charges depend on your location — confirm on WhatsApp.',
    minNoticeHours: 24
  },

  // ---- WHY CHOOSE US --------------------------------------------------------
  // Keep these truthful for the real client — do not invent claims.
  whyChooseUs: [
    { icon: '🍰', title: 'Freshly Baked', text: 'Every cake is baked to order, never from a freezer.' },
    { icon: '✨', title: 'Premium Ingredients', text: 'Real cream, couverture chocolate and quality butter.' },
    { icon: '🎨', title: 'Custom Designs', text: 'Tell us your theme — we\u2019ll design around it.' },
    { icon: '🥚', title: 'Eggless Options', text: 'Full eggless menu available on every design.' },
    { icon: '🚚', title: 'On-Time Delivery', text: 'Careful, on-time delivery so your cake arrives picture-perfect.' },
    { icon: '📝', title: 'Made to Order', text: 'Every order is confirmed with you before we bake.' }
  ],

  // ---- OFFERS TOGGLE ----------------------------------------------------
  showOffers: true,
  offers: [
    { title: 'Birthday Special', text: '10% off on birthday cakes above 1kg', tag: 'BIRTHDAY10' },
    { title: 'Weekend Offer', text: 'Free candles & message card on weekend orders', tag: 'WEEKEND' },
    { title: 'Combo Offer', text: 'Cake + cupcakes combo at a special price', tag: 'COMBO' }
  ],

  // ---- REVIEWS TOGGLE ---------------------------------------------------
  googleRating: { score: 4.8, count: 240 }, // set to real figures before launch

  // ---- CELEBRATION CLUB (Google Sheet signup) ------------------------------
  // Lets a customer save their birthday/anniversary and favourites once,
  // so the shop can reach out with reminders and offers later. Submissions
  // are written to a Google Sheet — no custom backend required.
  // Setup steps: GOOGLE_SHEETS_SETUP.md
  celebrationClub: {
    enabled: true, // set false to hide the whole section
    heading: 'Never Miss a Celebration',
    subtext: 'Save your special dates once — we\u2019ll remember them for you and reach out with reminders and birthday offers.',
    // Paste the Google Apps Script Web App URL here after following
    // GOOGLE_SHEETS_SETUP.md. Leave blank and the form will tell the
    // visitor signups are temporarily unavailable instead of failing silently.
    sheetWebAppUrl: 'https://script.google.com/macros/s/AKfycbxgoyK0j-Os77iW02Vxl7a0PPyRVYtGMi0YTKpiwuMg0REzcTgLCc8b6402EXk6DrA/exec',
    consentText: 'I agree to be contacted on WhatsApp/phone about my order and upcoming celebration offers.'
  },

  // ---- ANALYTICS ----------------------------------------------------------
  // Optional. Paste a GA4 Measurement ID or leave blank to skip analytics.
  analytics: {
    ga4MeasurementId: '' // e.g. 'G-XXXXXXXXXX'
  },

  // ---- LEGAL --------------------------------------------------------------
  legal: {
    privacyPolicyUrl: '#',
    termsUrl: '#'
  }
}

export default business
