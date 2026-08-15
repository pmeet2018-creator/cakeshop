# Client Setup Guide

This guide walks you through turning the master template into a specific
cake shop's live website. Most changes only need **one file**:
`src/config/business.js`.

You do not need to know how to code to follow most of these steps — just
open the file in any text editor (VS Code is recommended and free), find
the line, and change the text between the quotes.

---

## 1. Business name, tagline & about text
File: `src/config/business.js`
```js
businessName: '[BUSINESS NAME]',
tagline: '[TAGLINE]',
shortName: '[SHORT NAME]',
about: {
  heading: 'About [BUSINESS NAME]',
  body: '[ABOUT BUSINESS]',
  ...
}
```
Replace the placeholder text (keep the quotes).

## 2. Logo & favicon
- Add your logo file to `public/assets/images/logo/logo.png` (any name is fine).
- In `src/config/business.js`, set:
  ```js
  logo: '/assets/images/logo/logo.png',
  ```
- Replace `public/favicon.svg` with your own icon (keep the filename
  `favicon.svg`, or update the `<link rel="icon">` tag in `index.html`
  if you use a different format like `.ico` or `.png`).

## 3. Brand colours
File: `src/config/business.js` → `brandColors`
```js
brandColors: {
  primary: '#6D2A3A',
  primaryDark: '#4A1B27',
  accent: '#C9A227',
  blush: '#F6DCE3',
  cream: '#FFF8F0',
  ink: '#2B2320'
}
```
Paste new hex colours here — the whole site updates automatically. No CSS
editing required.

## 4. WhatsApp number (most important field)
File: `src/config/business.js`
```js
whatsapp: '919000000000', // digits only, country code, no + or spaces
```
This single field powers every "Order on WhatsApp" button on the site.

## 5. Phone, email, address, city
```js
phone: '+91 90000 00000',
email: 'hello@example-cakeshop.com',
address: '[SHOP ADDRESS]',
city: '[CITY]',
fullAddress: '[SHOP ADDRESS], [CITY]',
```

## 6. Google Maps
1. Open Google Maps, search your shop, click **Share** → **Embed a map**,
   and copy the `src="..."` URL into `googleMapsEmbedUrl`.
2. Click **Share** → **Copy link** for the normal link and paste it into
   `googleMapsUrl`.

## 7. Opening hours
```js
openingHours: [
  { day: 'Monday – Saturday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 6:00 PM' }
]
```
Add or remove rows as needed.

## 8. Instagram & Facebook
```js
instagramUrl: 'https://instagram.com/[INSTAGRAM HANDLE]',
facebookUrl: 'https://facebook.com/[FACEBOOK PAGE]',
```

## 9. Adding / editing cakes
File: `src/data/products.js`

Copy an existing product block and edit it:
```js
{
  id: 'p25',                     // must be unique
  name: 'Your Cake Name',
  category: 'birthday',          // must match an id in src/data/categories.js
  description: 'Short, appetising description.',
  images: ['PLACEHOLDER'],       // see step 10
  art: { palette: 'berry', icon: '🎂' },
  startingPrice: 899,
  sizes: ['0.5 kg', '1 kg', '1.5 kg'],
  flavours: ['Vanilla', 'Chocolate'],
  egglessAvailable: true,
  occasions: ['birthday'],       // must match ids in src/data/categories.js
  featured: false,
  popular: false,
  available: true,               // set false to hide without deleting
  sortOrder: 25
}
```
To remove a cake, delete its block (or set `available: false`).

## 10. Replacing placeholder images with real photos
1. Add photos to `src/assets/images/cakes/` (create the folder if it
   doesn't exist) — use descriptive names like `chocolate-truffle.jpg`.
2. In `src/data/products.js`, change that product's `images` array:
   ```js
   images: ['/assets/images/cakes/chocolate-truffle.jpg']
   ```
   As soon as `images[0]` is a real path instead of the text
   `'PLACEHOLDER'`, the site automatically shows the real photo instead
   of the illustrated placeholder — no other code changes needed.
3. Recommended aspect ratio: square (1:1), at least 800×800px, JPG or WebP.

## 11. Prices
Change `startingPrice` on any product in `src/data/products.js`. Prices
display as `₹` (Indian Rupee) by default — search for `₹` across the
`src/` folder and replace with your currency symbol if needed.

## 12. Reviews
File: `src/data/reviews.js`
```js
{
  id: 'r1',
  name: 'Real customer name',
  rating: 5,
  text: 'Real review text.',
  demo: false   // set to false once it's a real review
}
```
The "Demo review — replace before launch" label only shows when
`demo: true`.

## 13. Offers
File: `src/config/business.js`
```js
showOffers: true,   // set false to hide the whole section
offers: [
  { title: 'Birthday Special', text: '10% off on birthday cakes above 1kg', tag: 'BIRTHDAY10' }
]
```

## 14. SEO basics
File: `index.html` — update:
- `<title>`
- `<meta name="description">`
- `<meta name="keywords">`
- The Open Graph (`og:*`) and Twitter tags
- The JSON-LD `LocalBusiness` block near the bottom of `<head>`

Also update `public/robots.txt` and `public/sitemap.xml` with the real
domain once it's live.

## 15. Celebration Club (customer birthdays & special dates → Google Sheet)
File: `src/config/business.js` → `celebrationClub`
```js
celebrationClub: {
  enabled: true,
  heading: 'Never Miss a Celebration',
  subtext: '...',
  sheetWebAppUrl: '[GOOGLE SHEET WEB APP URL]',
  consentText: '...'
}
```
This adds a "Save My Dates" section where customers submit their name,
mobile, date of birth, a special occasion date, and their favourite cake
flavour/type — saved straight to a Google Sheet you control. Set
`enabled: false` to hide it entirely.

To connect it to a real Google Sheet, follow **`GOOGLE_SHEETS_SETUP.md`**
(5-minute, no-code setup) and paste the resulting URL into
`sheetWebAppUrl`. Until that URL is set, the form tells visitors signups
aren't connected yet instead of failing silently.

## 16. Analytics (optional)
File: `src/config/business.js`
```js
analytics: { ga4MeasurementId: 'G-XXXXXXXXXX' }
```
Leave blank to skip analytics entirely — the site works fine without it.

---

## How to deploy
See **README.md** → "Deployment" for step-by-step Vercel/Netlify/Cloudflare
Pages instructions.

## Full checklist

### Branding
- [ ] Logo
- [ ] Favicon
- [ ] Primary colour
- [ ] Secondary colour
- [ ] Font (optional — swap the Google Fonts link in `index.html`)

### Business
- [ ] Business name
- [ ] Tagline
- [ ] About
- [ ] Address / City
- [ ] Phone
- [ ] WhatsApp
- [ ] Email
- [ ] Opening hours

### Social
- [ ] Instagram
- [ ] Facebook

### Products
- [ ] Cake names & descriptions
- [ ] Prices
- [ ] Sizes / flavours
- [ ] Categories
- [ ] Product images

### Marketing
- [ ] Reviews
- [ ] Offers
- [ ] Featured/popular flags

### Location
- [ ] Google Maps URL + embed URL
- [ ] Delivery information

### Celebration Club
- [ ] Google Sheet created with correct column headers
- [ ] Apps Script deployed as Web App (`GOOGLE_SHEETS_SETUP.md`)
- [ ] `sheetWebAppUrl` pasted into `business.js`
- [ ] Test signup appears as a new row in the Sheet

### Launch
- [ ] SEO title/description/OG tags updated
- [ ] `robots.txt` / `sitemap.xml` domain updated
- [ ] Test the full journey: See Cake → Select → Customize → WhatsApp → Enquiry
- [ ] Test on a real phone (not just desktop browser resize)
