# Cake Shop Master Template

A mobile-first, WhatsApp-order-focused cake shop website, built as a
reusable template: onboard a new client mainly by editing
`src/config/business.js`, `src/data/products.js`, `src/data/reviews.js`
and `src/data/categories.js` — the UI components stay untouched.

**Customer journey:** See Cake → Select Cake → View Details →
Customize/Enquire → WhatsApp → Order.

---

## Tech stack
- React 18 + Vite 5 (fast dev server, small production build)
- Plain CSS with design tokens (no framework lock-in, easy to theme)
- No backend required — WhatsApp is the "order system"

## Project structure
```
src/
  config/business.js     ← single source of truth for all client info
  data/products.js        ← cake catalogue (20-30 demo products included)
  data/categories.js      ← categories + occasions
  data/reviews.js          ← testimonials
  utils/whatsapp.js        ← builds the WhatsApp deep links (never hard-code numbers elsewhere)
  utils/analytics.js       ← optional GA4 event tracking
  components/              ← all UI building blocks (Header, Hero, ProductCard, etc.)
  App.jsx                  ← page composition
  index.css                ← design tokens + all styles
public/                    ← favicon, robots.txt, sitemap.xml
CLIENT_SETUP_GUIDE.md      ← non-programmer walkthrough for onboarding a new client
GOOGLE_SHEETS_SETUP.md     ← wiring the Celebration Club form to a Google Sheet
```

## Celebration Club (customer birthdays → Google Sheet)
Customers can save their name, mobile, date of birth, a special occasion
date, and favourite flavour/cake type. Submissions are written straight
to a Google Sheet via a free Apps Script Web App — no backend needed.
Setup: `GOOGLE_SHEETS_SETUP.md`. Toggle on/off or edit the copy in
`src/config/business.js` → `celebrationClub`.

## Local development
Requires Node.js 18+ and npm.

```bash
npm install
npm run dev
```
Open the printed local URL (usually `http://localhost:5173`).

## Production build
```bash
npm run build
```
Output goes to `dist/`. Preview it locally with:
```bash
npm run preview
```

## Deployment

### Vercel
1. Push this project to a GitHub/GitLab repo.
2. Import the repo in Vercel.
3. Build command: `npm run build` · Output directory: `dist`
4. Deploy. Connect your custom domain under **Settings → Domains**.

### Netlify
1. Push to a repo, or drag-and-drop the `dist/` folder after running
   `npm run build` into Netlify's deploy UI.
2. Build command: `npm run build` · Publish directory: `dist`
3. Connect a custom domain under **Site settings → Domain management**.

### Cloudflare Pages
1. Connect the repo in the Cloudflare Pages dashboard.
2. Build command: `npm run build` · Build output directory: `dist`
3. Add a custom domain under **Custom domains**.

No environment variables are required for a standard deployment. If you
enable GA4 analytics, `analytics.ga4MeasurementId` in
`src/config/business.js` is read at build time — no `.env` file needed.

## Testing checklist before handing off to a client
- [ ] Navigation links scroll to the right sections
- [ ] Mobile responsiveness (resize + a real phone)
- [ ] Desktop responsiveness
- [ ] Category filter, search, price filter, eggless filter, sort
- [ ] Cake detail modal opens/closes, selections update the summary
- [ ] WhatsApp buttons open WhatsApp with the correct pre-filled message
      (floating button, sticky bar, product card, product detail, custom
      cake form, final CTA)
- [ ] Custom cake form submits and opens WhatsApp
- [ ] Call button opens the phone dialer
- [ ] Google Maps embed loads and "Get Directions" opens Maps
- [ ] No broken images (placeholders render correctly where real photos
      are not yet available)
- [ ] No console errors
- [ ] SEO meta tags reflect the real business (see CLIENT_SETUP_GUIDE.md §14)

## Notes on the placeholder system
Every product without a real photo shows an illustrated placeholder
(`CakeArt` component) instead of a broken image — this is intentional and
documented in `CLIENT_SETUP_GUIDE.md` §10. Swapping in real photography
requires editing only the `images` array on that product.

## Status of this build
See `PROJECT_STATUS.md` for what's complete and what's left to polish.
