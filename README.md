# Webro Nexzen website

One-page, read-only website for Webro Nexzen, Bengaluru: turnkey and interior projects, and import and export of building materials, furniture and lightings (India, Hong Kong, China). It also links to the partner company Meean Enterprises for medical products.

Plain HTML, CSS and a small amount of JavaScript. No forms, no login, no build step.

**Live link:** https://nitishsavadakar.github.io/webronexzen/ (works once GitHub Pages is switched on, see below)

## What is in this folder

| Path | What it is |
|---|---|
| `index.html` | The whole page |
| `css/style.css` | Styles (colours are at the top, in `:root`) |
| `js/main.js` | Pop-ups, photo viewer, menu highlight |
| `assets/images/web/` | Web photos (WebP, with JPG fallback and small thumbnails) |
| `assets/images/alt-text.md` | Alt text for every photo |
| `assets/images/CREDITS.md` | Photo credits for the Unsplash sample photos |
| `content/content.md` | All text from the company PDF, business card and flyer |
| `PROMPT.md` | The brief this site was built from |

## How to update

- **Change text:** open `index.html`, find the text, change it, save, commit, push.
- **Change a phone number:** search for `919900541368` (used in the Call and WhatsApp buttons) and for `+91 99005 41368`.
- **Add or replace a photo:** put a WebP, a JPG and a small `-thumb.webp` (about 640 px wide) into `assets/images/web/`, then point to it in `index.html`. Keep the `alt` text in simple English.
- **Real photos of club house, residential, hotel and restaurant, office and landscape work** should replace the sample photos in the "Style Ideas" block.

## Publishing with GitHub Pages

A free GitHub Pages site needs a **public** repository, so everything in the repo is visible to anyone. In the repo: Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`. The link appears after about a minute.

To use `www.webronexzen.com`: add the domain in Settings > Pages, then at the domain registrar add four `A` records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a `CNAME` record for `www` pointing to `nitishsavadakar.github.io`. Then tick "Enforce HTTPS". Also change the two `nitishsavadakar.github.io/webronexzen` addresses in the `<head>` of `index.html` to the new domain.

## Photos

Photos of the company's own work come from its PDF. Sample photos in "Style Ideas", the hero and the Import and Export section are from Unsplash (see `assets/images/CREDITS.md`). They are not Webro Nexzen projects.
