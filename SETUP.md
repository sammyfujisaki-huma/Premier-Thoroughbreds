# Premier Thoroughbreds — Setup Guide

## Files in this project
```
index.html        ← Main homepage (listings, about, contact)
horse.html        ← Individual horse detail page
css/style.css     ← All styles
js/horses.js      ← YOUR HORSE DATA — edit this to add/remove horses
js/main.js        ← Site logic (rendering, form, animations)
vercel.json       ← Vercel deployment config
```

---

## Step 1 — Deploy to Vercel (free, 5 minutes)

1. Go to https://github.com and create a free account
2. Create a new repository called `premier-thoroughbreds`
3. Upload all these files (drag & drop on GitHub works)
4. Go to https://vercel.com → sign in with GitHub
5. Click "New Project" → import your GitHub repo
6. Click Deploy — your site will be live at `premier-thoroughbreds.vercel.app`

---

## Step 2 — Set up EmailJS (so the form emails your dad)

1. Go to https://emailjs.com → create a free account
2. Add an email service (Gmail works great, just connect your Gmail)
3. Create an email template. Use these variables in the template:
   - {{from_name}} — buyer's name
   - {{from_email}} — buyer's email
   - {{country}} — their country
   - {{horse}} — horse they're interested in
   - {{budget}} — their budget
   - {{message}} — their message
   - {{video_call}} — do they want a video call?
4. Copy your Service ID, Template ID, and Public Key
5. Open js/main.js and fill in the EMAILJS_CONFIG block:
   ```js
   const EMAILJS_CONFIG = {
     serviceId:  'service_xxxxxxx',
     templateId: 'template_xxxxxxx',
     publicKey:  'xxxxxxxxxxxx'
   };
   ```
6. Add this line to index.html just before </body>:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   ```

---

## Step 3 — Add your real horses

Open `js/horses.js` and edit the HORSES array.
Each horse looks like this — just copy/paste the block and fill in your details:

```js
{
  id: "horse-name-no-spaces",       // used in the URL
  name: "Horse Display Name",
  age: 4,
  gender: "Stallion",               // Stallion / Filly / Gelding / Mare / Colt
  color: "Bay",
  sire: "Father Horse Name",
  dam: "Mother Horse Name",
  price: "$75,000",                 // or "Contact for Price"
  location: "Lexington, KY",
  record: "10 starts · 5 wins · 2 place",
  description: "Write a detailed description here...",
  highlights: [
    "Graded stakes winner",
    "Sound on all surfaces",
    "Ready to ship"
  ],
  images: [
    "https://your-cloudinary-url/photo1.jpg",   // main photo
    "https://your-cloudinary-url/photo2.jpg"    // secondary photo
  ],
  video: "",                        // YouTube embed URL, or leave empty
  status: "available"               // "available" or "sold"
}
```

For photos: upload to https://cloudinary.com (free, 25GB) and copy the URL.

---

## Step 4 — Connect a custom domain (optional, ~$10/year)

1. Buy a domain at https://namecheap.com (e.g. `premierthoroughbredsusa.com`)
2. In Vercel dashboard → your project → Settings → Domains
3. Add your domain and follow the DNS instructions Vercel gives you
4. Done — live on your custom domain in about 10 minutes

---

## Adding a new horse (ongoing)

1. Take photos, upload to Cloudinary
2. Open `js/horses.js`
3. Copy an existing horse block, paste at top of the array, edit the details
4. Push to GitHub → Vercel auto-deploys in ~30 seconds

That's it. No server, no database, no monthly fees.
