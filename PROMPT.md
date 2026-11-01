# PROMPT

The brief this website was built from (input fields filled in).

```
<role>
You are a two-expert team with 20+ years of experience each:
1. PRINCIPAL UI/UX DESIGNER – designs clean, professional websites for industrial, installation and import/export companies. Expert in visual storytelling, mobile-first design, and designing for users with basic English and limited reading time.
2. SENIOR WEB DEVELOPER – builds fast, reliable static websites, handles PDF/image extraction and image processing, Git/GitHub, and public hosting (GitHub Pages).
The designer decides how it looks and reads; the developer makes it work, fast and correct.
</role>

<context>
- A company does installation services and import/export. All company details are in a PDF in this folder, which also contains images.
- Extra photos (e.g. business card, product/service photos) are also in this folder.
- I will give you a reference company website link (below). Use it to understand the style I want.
- Phase 1 goal: a public, read-only website link. I share it with the owner, the owner sends it to customers, customers understand the company and services, then call or message.
- Target users: small business owners in India with basic English, mostly on mobile phones. They look at pictures more than text.
</context>

<input_data>
<company_pdf>WEBRONEXZEN (1).pdf</company_pdf>
<extra_images>PHOTO-2026-10-17-14-33-46.jpg (business card), PHOTO-2026-10-17-14-33-47.jpg (flyer)</extra_images>
<reference_website>https://arkayaoptics.com/</reference_website>
</input_data>

<instructions>
Think step by step inside <thinking> tags. Stop after each phase and wait for my "go".

PHASE 1 – Understand the company and requirements
- Read the full PDF and all images, including the business card.
- Extract ALL text from the PDF into `content/content.md`, section by section, unchanged.
- Summarize: company name, what they do, every service, products, process, locations, contact details, any certifications or clients.
- List every requirement from this prompt as a checklist.
STOP.

PHASE 2 – Research and design direction
- Study the reference website: layout, sections, colours, fonts, image style, navigation, call-to-action.
- Search online for 3–5 similar companies (installation + import/export, India and international). Note what works.
- | Website | What's good | What to adopt |
- Propose 2 design directions with: wireframe (ASCII), colour palette (hex), fonts, section order, image style. Recommend one.
- Design must look professional and hand-crafted, NOT like a generic AI template (avoid purple gradients, emoji icons, generic glassmorphism, filler text).
STOP and wait for my choice.

PHASE 3 – Images
- Extract every image from the PDF into `assets/images/original/` (never modify originals).
- For each image: improve quality (upscale if small, sharpen, fix brightness/contrast), crop to remove borders/empty space, and resize for web (WebP + JPG fallback) into `assets/images/web/`.
- Give each image a clear file name and alt text in simple English.
- Show me a table: | Image | Source page | What it shows | Edits made | Used in section |
- Extra images: only if a section clearly needs one and no PDF image fits. Use real-looking photos from free-license sources (e.g. Unsplash, Pexels), credit them, and list them for my approval. Never use cartoonish or obviously fake AI images. Never use images of other companies' brands or products.
STOP.

PHASE 4 – Build the website
Structure (adjust to the content):
- Hero: company name, one simple line on what they do, strong photo, "Call" and "WhatsApp" buttons
- Services: one card per service with a photo + 1-line simple description; tap a card to open a popup with full details and more photos
- How we work: simple step-by-step with icons/photos (1 → 2 → 3)
- Import / Export: what they import/export, countries, simple visuals
- Gallery: all project/service photos, tap to enlarge
- About / why choose us
- Contact: phone, WhatsApp, email, address, map link, business card details
Writing rules:
- Every word and detail from the PDF must appear somewhere on the site (short version visible, full text inside popups/expandable sections).
- Visible text: very simple English, short sentences, max 1–2 lines per card. Let the images explain.
- Do not invent services, numbers, clients or claims that are not in the PDF.
Technical rules:
- Plain HTML, CSS, small vanilla JS (no heavy frameworks), one-page site with smooth navigation.
- Mobile-first, fast on slow Indian mobile networks (compressed images, lazy loading).
- Large tap-friendly buttons; click-to-call (tel:) and WhatsApp (wa.me) links.
- Read-only: no forms, no login, no editing, no admin area.
- Basic SEO: title, description, Open Graph image so the link previews nicely in WhatsApp.
STOP.

PHASE 5 – Quality check
- Content coverage: compare `content/content.md` with the site text line by line. Show a table: | PDF content | Found on site? | Where | — every row must be ✔.
- Every PDF image used ✔, no broken images or links ✔.
- Test on mobile and desktop sizes; check loading speed and readability.
- Designer review: clean, consistent, easy for a basic-English user to understand in 10 seconds?
STOP.

PHASE 6 – GitHub and public link
- Initialise Git, create `.gitignore`, and a README (what the project is, how to update, the link).
- Save this full prompt as `PROMPT.md` in the repo.
- Create a new GitHub repository (ask me for the name), commit and push: website, assets, content.md, PROMPT.md, README.
- Enable GitHub Pages and give me the public link. Confirm it opens without login on a phone.
- Warn me before pushing: a free GitHub Pages site needs a PUBLIC repo, so everything in it is visible to anyone. Confirm nothing private (e.g. internal prices, personal IDs) is included.
</instructions>

<constraints>
- Use only information from the PDF and provided images. If something is unclear or missing (e.g. phone number), ask; never guess.
- Never delete or modify original files.
- No push, publish, or repo creation without my explicit approval.
- Explain what you did in simple words.
</constraints>

<output_format>
Each phase ends with:
<summary> 3–5 key points </summary>
<details> tables / wireframes / changes </details>
<open_questions> what you need from me </open_questions>
<next_step> what happens after "go" </next_step>
Final output: the public GitHub Pages link + repo link + content coverage table.
</output_format>

Start with PHASE 1.
```

## Changes the owner asked for during the build

- Direction A (Warm Navy Gallery) was chosen.
- The Mission and Vision in the PDF are about medical products. They belong to a partner company, Meean Enterprises (https://www.meeanenterprises.com/), which works with Webro Nexzen. They are shown in a Medical and Healthcare section.
- Import and export is done between India (home), Hong Kong and China.
- One number (+91 99005 41368) is used for both Call and WhatsApp. Both Bengaluru addresses are shown.
- Where the PDF photos were unusable (another company's watermark, very small), free Unsplash sample photos are used and labelled as samples.
