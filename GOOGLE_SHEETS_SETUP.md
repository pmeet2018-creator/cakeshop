# Google Sheets Setup — Celebration Club

This connects the "Celebration Club" signup form (customer name, mobile,
date of birth, special occasion date, favourite flavour, etc.) to a
Google Sheet, using a free Google Apps Script Web App. No paid service,
database, or backend hosting is required.

Takes about 5 minutes.

---

## 1. Create the Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   blank sheet. Name it something like **"Celebration Club Signups"**.
2. In row 1, add these column headers (must be in this order):

   | A | B | C | D | E | F | G | H | I | J |
   |---|---|---|---|---|---|---|---|---|---|
   | timestamp | name | mobile | email | dob | occasionType | occasionDate | favouriteFlavour | favouriteCakeType | notes |

## 2. Open the Apps Script editor
1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete any starter code in the editor and paste this instead:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var p = e.parameter;

  sheet.appendRow([
    p.timestamp || new Date().toISOString(),
    p.name || '',
    p.mobile || '',
    p.email || '',
    p.dob || '',
    p.occasionType || '',
    p.occasionDate || '',
    p.favouriteFlavour || '',
    p.favouriteCakeType || '',
    p.notes || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: lets you open the Web App URL in a browser to confirm it's live.
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Celebration Club endpoint is live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the **Save** icon (or `Ctrl/Cmd + S`).

## 3. Deploy as a Web App
1. Click **Deploy → New deployment**.
2. Next to "Select type," click the gear icon and choose **Web app**.
3. Set:
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
   
   ("Anyone" is required so the live website — which isn't logged into
   Google — can submit to it. The script can only append rows using the
   exact fields above; it can't read or expose the rest of your sheet.)
4. Click **Deploy**.
5. Google will ask you to **authorize** the script the first time —
   approve it (it's your own script acting on your own sheet).
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Connect it to the website
Open `src/config/business.js` and paste the URL:
```js
celebrationClub: {
  enabled: true,
  ...
  sheetWebAppUrl: 'https://script.google.com/macros/s/AKfycb.../exec'
}
```
Save the file, rebuild/redeploy the site, and test the form once —
a new row should appear in your Sheet within a few seconds.

## 5. If you ever change the sheet's columns or script
Re-run **Deploy → Manage deployments → Edit (pencil icon) → New version →
Deploy** — the Web App URL stays the same, so you don't need to update
`business.js` again.

---

## Notes & limitations
- This uses `mode: 'no-cors'` on the frontend (a limitation of Apps
  Script Web Apps), so the website can't confirm the row was written
  successfully — it can only confirm the request was sent. In practice
  this is reliable, but if a client reports missing rows, check the
  Sheet directly and re-test with the `doGet` URL above to confirm the
  deployment is live.
- Treat this Sheet as containing personal data (name, phone, date of
  birth). Don't share the Sheet publicly, and follow whatever local data
  protection rules apply to the client's business.
- If a client eventually outgrows this (large volumes, needs
  deduplication, automated birthday reminders, etc.), the same form can
  be pointed at a proper backend (e.g. Airtable, a small serverless
  function, or a CRM) later — only `src/utils/googleSheet.js` needs to
  change; the form component stays the same.
