# Precision Auto Diagnostics & Repair — Website

Built with Astro + Tailwind CSS. Ready to deploy on Vercel.

---

## Project Structure

Here is where everything lives:

```
precision-auto/
├── src/
│   ├── components/       ← Reusable pieces (Header, Footer)
│   ├── layouts/          ← Main HTML wrapper (MainLayout.astro)
│   └── pages/            ← One file per page
│       ├── index.astro       → Homepage /
│       ├── services.astro    → /services
│       ├── about.astro       → /about
│       ├── contact.astro     → /contact
│       └── thank-you.astro   → /thank-you
├── public/
│   ├── images/           ← All photos used on the website
│   └── favicon.svg       ← The small icon in the browser tab
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## How to Run Locally

Step 1 — Open a terminal in the project folder.

Step 2 — Install dependencies:
```
npm install
```

Step 3 — Start the development server:
```
npm run dev
```

Step 4 — Open your browser and go to: http://localhost:4321

---

## How to Change the Business Name

The business name appears in several files. Search for "Precision Auto" and replace it with the real name.

Files to check:
- `src/components/Header.astro` — logo text
- `src/components/Footer.astro` — footer brand name
- `src/layouts/MainLayout.astro` — HTML title tag
- All page files in `src/pages/`

---

## How to Change Text Content

Open the file for the page you want to edit.

**Homepage** → `src/pages/index.astro`
- Hero headline: look for "ASE-Certified Mechanics You Can Trust"
- Stats section: look for "15+", "8", "10k+", "4.9★"
- Testimonials: look for "Mike R.", "Laura S.", "David K."

**Services page** → `src/pages/services.astro`
- Each service has its own section marked with a comment like `<!-- Brake Repair -->`
- Edit the text inside those sections

**About page** → `src/pages/about.astro`
- Company story text is near the top of the file
- FAQ questions and answers are clearly labeled

**Contact page** → `src/pages/contact.astro`
- Address: search for "3250 Auburn Blvd"
- Phone: search for "+1 (916) 927-4126"
- Hours: search for "{{HOURS}}" and replace with real hours

---

## How to Change the Phone Number

The phone number appears in multiple places. Search for these and replace all of them:

- Visible number: `+1 (916) 927-4126`
- Clickable link: `tel:+19169274126`

Files that contain the phone number:
- `src/components/Header.astro`
- `src/components/Footer.astro` (inside the form)
- `src/layouts/MainLayout.astro` (mobile phone bar)
- `src/pages/contact.astro`
- `src/pages/thank-you.astro`

---

## How to Change the Email (Form Submissions)

Form submissions go to: `roccify@gmail.com`

To change this, search for `roccify@gmail.com` and replace it with the real email in all files. It appears in:
- `src/pages/index.astro` (hero form)
- `src/pages/contact.astro` (main contact form)
- `src/components/Footer.astro` (footer form)

---

## How to Replace Images

All images are stored in: `public/images/`

To replace an image:
1. Take your new photo
2. Rename it to the exact same filename (example: `hero01.jpg`)
3. Drop it into the `public/images/` folder
4. The website will automatically show the new photo

**Recommended image sizes:**

| File | Used on | Recommended size |
|------|---------|-----------------|
| hero01.jpg | Homepage hero background | 1920×1080 |
| hero02.jpg | CTA section background | 1920×1080 |
| about01.jpg | About page, split sections | 1000×800 |
| about02.jpg | Homepage split, about page | 1000×800 |
| service01.jpg | Engine Diagnostics card | 800×600 |
| service02.jpg | Brake Repair card | 800×600 |
| service03.jpg | Transmission card | 800×600 |
| service04.jpg | AC & Heating card | 800×600 |
| service05.jpg | Suspension card | 800×600 |
| service06.jpg | Oil Change card | 800×600 |
| gallery01.jpg | Gallery section | 800×800 |
| gallery02.jpg | Gallery section | 800×800 |
| gallery03.jpg | Gallery section / CTA inset | 800×800 |
| team01.jpg | Team section, footer strip | 600×700 |
| team02.jpg | Team section | 600×700 |
| team03.jpg | Team section | 600×700 |
| team04.jpg | Team section | 600×700 |
| cta01.jpg | CTA dark section background | 1920×1080 |
| contact01.jpg | Contact page banner | 1920×1080 |
| contact02.jpg | Contact page split left | 800×1000 |

---

## How to Replace the Favicon

The favicon is the small icon that appears in the browser tab.

File location: `public/favicon.svg`

To replace it:
1. Create a new SVG or PNG icon (recommended: 32×32 pixels or 512×512)
2. If using SVG: replace the file `public/favicon.svg`
3. If using PNG: save it as `public/favicon.png` and update the link in `src/layouts/MainLayout.astro`:
   - Change `href="/favicon.svg"` to `href="/favicon.png"`

---

## How to Add the Google Map

In `src/pages/contact.astro`, find the comment:
```
<!-- {{GOOGLE_MAP_EMBED}} -->
```

Replace the placeholder div below it with your actual Google Maps embed code.

To get the embed code:
1. Go to maps.google.com
2. Search for the business address
3. Click Share → Embed a map
4. Copy the `<iframe>` code
5. Paste it inside the map section in contact.astro

---

## How to Update Business Hours

In `src/pages/contact.astro`, search for `{{HOURS}}` and replace with real hours.

Example: `Mon–Fri: 8:00 AM – 6:00 PM`

Also update the hours shown in:
- `src/components/Header.astro` — top bar (currently says "Mon–Fri 8h–18h")
- `src/components/Footer.astro` — footer

---

## Deployment Guide

### Step 1 — Upload to GitHub

1. Go to github.com and create a free account if you don't have one
2. Click "New repository"
3. Name it `precision-auto` (or anything you like)
4. Upload all the project files

### Step 2 — Connect to Vercel

1. Go to vercel.com and create a free account
2. Click "Add New Project"
3. Connect your GitHub account
4. Select the repository you just created
5. Click Deploy

Vercel will automatically detect that it's an Astro project and deploy it.

### Step 3 — Set Up Your Domain

1. In your Vercel project, go to Settings → Domains
2. Add your custom domain (example: precisionautorepairca.com)
3. Follow the DNS instructions Vercel provides

### Step 4 — Future Updates

Every time you make a change and push it to GitHub, Vercel will automatically redeploy the website. No manual steps needed.

---

## Placeholders That Still Need to Be Replaced

Before going live, make sure you replace these:

- `{{HOURS}}` — actual business hours (in contact.astro)
- `{{GOOGLE_MAP_EMBED}}` — actual Google Maps iframe (in contact.astro)
- Team member names and roles (James Martinez, Sandra Lee, etc.) — fictional placeholders
- Testimonial names and quotes — fictional placeholders, replace with real customer reviews
- Stats (15+, 8, 10k+, 4.9★) — replace with real numbers if available
- Social media links currently point to facebook.com, instagram.com, etc. — update with real profile URLs

---

## Questions?

If something is unclear, the simplest approach is to open the file in a text editor, use "Find" (Ctrl+F or Cmd+F) to search for the text you want to change, and replace it directly.
