# TECHNICA CONSULT

React + Vite corporate website. Frontend only, without a database. Includes the supplied TECHNICA CONSULT logo, responsive navigation, corporate and service pages, industry pages, learning programme areas, filtering, resources and an email-draft enquiry flow.

## Run locally

Use Node 22.12+ (or a compatible supported Node release).

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

Publish `dist/` to a static host. Every known route has a generated `index.html`; configure unknown routes to use `404.html` where supported. `dist/_redirects` provides an SPA fallback for hosts that support that format.

## Content

- `src/data.js`: services, service detail pages, industries, programme areas and FAQs.
- `src/main.jsx`: React components and navigation.
- `src/styles.css` and `src/redesign.css`: branding, responsive layouts and motion.
- `public/assets/`: bundled logo, fonts and illustrative photographs.

There are no invented customer logos, testimonials, certifications, dates, fees or project claims. Programme areas are introductory corporate-learning themes, not scheduled course records. The company overview is printable. The original seven-phase internal document is not published.

## Enquiries

The form opens a `mailto:` draft. Visitors must review and send it from their email application. The copy action copies text locally; no form data is stored or submitted by this site. To enable direct delivery, add a form provider or a small server-side email function. Never place private email API keys in React.

The displayed mailbox comes from the existing company contact page; confirm operational delivery before launching on the company domain. Add a phone, address or social links only after verification. Any future submission service or analytics integration requires updating the privacy notice.

## Assets

- Logo: user-supplied TECHNICA CONSULT image, used without redrawing.
- Industrial photograph: https://images.unsplash.com/photo-1516937941344-00b4e0337589
- Professional collaboration photograph: https://images.unsplash.com/photo-1522071820081-009f0129c71c
- Fonts: DM Serif Display and DM Sans for the refreshed website; Montserrat and Source Sans 3 are retained as baseline assets. Obtained from Google Fonts; see `FONT_LICENSES.md`.
- Icons: Lucide, ISC licence supplied by the dependency.

Stock photography is illustrative and does not identify TECHNICA CONSULT projects or clients.

## v1.1 visual refresh

Expressive serif headings, colourful service themes, hero photo collage, keyboard-accessible service explorer, photo cards, collaboration band and enhanced CSS motion. The hero includes a pause/resume control; reduced-motion preferences are respected. See UI_REDESIGN_NOTES.md.

Additional illustrative photographs:
- https://images.unsplash.com/photo-1581091226825-a6a2a5aee158
- https://images.unsplash.com/photo-1454165804606-c3d57bc86b40

## v1.3 updates

The service ribbon uses unboxed images with captions. Visible pause buttons are removed; carousel hover/focus pause and system reduced motion remain available. Headings, text, photos, service cards and forms now reveal individually across all pages. The hero uses a responsive SVG clipping path with concave top/bottom and curved sides.

Industrial visual: public/assets/industrial-vibrant.png, generated using the built-in image-generation tool. Prompt: premium photorealistic modern petrochemical facility in clear daylight, crisp stainless steel towers and blue/orange pipework, vivid blue sky, warm sunlight, natural contrast, no text/logos/watermark. Generic illustrative image; not project evidence.

## v1.4 hero

Compact desktop hero, edge-to-edge mobile presentation and one main image. Asset: `public/assets/egyptian-engineer-hero.png`, generated and refined with the built-in image-generation tool. Prompt: fictional young Egyptian female engineer, no hijab/headscarf, dark hair visible under a white hard hat, navy work shirt, high-visibility vest, engineering plans at a bright modern industrial facility; same editorial lighting and vivid natural style. The image is illustrative, not a real staff or project photograph.

Latest update (1.4.2): transparent Egyptian engineer and blueprint hero asset, gentle zoom motion with reduced-motion support, and homepage headline without trailing periods.

## v1.8 services catalogue

Eight main service lines plus standalone Energy Optimization, grouped category filters, service briefs, business challenges, practical value and deliverables. The five supplied portfolios contribute 99 canonical services; duplicate mentions are consolidated. Existing detail URLs are preserved. Software applications read vertically with HSE immediately below PSM.

Portfolio photos in `public/assets/services` are extracted illustrations from the five user-supplied PDFs. Source/page provenance is retained in `SERVICE_IMAGE_SOURCES.json`; photos are service illustrations, not claims of owned equipment or completed TECHNICA projects. Contents-only entries retain concise scoped descriptions. No accreditation, certification, fleet ownership or portfolio performance claims were imported.

Validation: production build, 155 prerendered pages plus 404, 6,268 local link checks, coverage of all 99 canonical portfolio services, and local asset verification. Browser visual review was unavailable in this environment.

## v1.8.1 learning categories and heading repair

Professional Learning & Development now uses the eight requested streams, each with a brief, challenge, value, outputs and illustration. Existing portfolio training entries are grouped under the appropriate new streams; earlier URLs remain available. Corporate Learning renders its heading break as JSX instead of literal HTML text. Prerendering now rejects visible escaped HTML tags across every route.

## v1.9.0 service experience

Replaced wrapping category pills with a searchable illustrated directory. Each service area expands through native keyboard-accessible disclosure, and every existing service remains linked. Detail pages use a concise image-led hero, challenge/value panels, expandable deliverables/scope/inputs and a compact enquiry card. Applied across eight service lines, standalone Energy Optimization and Learning. Responsive layouts stack naturally on mobile; reduced-motion settings are respected.

Validation: 163 prerendered routes plus 404, 6,912 link checks, image-path validation and all 129 detail pages checked for required content. Eight learning streams and software ordering preserved. Browser visual QA was unavailable.

## v1.10.0 FAQ assistant

A site-wide bottom-right assistant offers 25 curated questions with concise answers and direct page links. Visitors can browse all questions, search topics and open telephone, email, address and Contact details through Need more support. This is a local FAQ guide: it does not call an AI endpoint, invent answers, send messages or persist conversations. Unsupported queries show contact options. Keyboard support includes focus on opening, Escape to close, focus restoration, and labelled controls. The panel respects small viewports and is hidden when printing.

Validation covers 25 unique complete FAQs, every FAQ route, topic searches, unsupported-query fallback, and launcher presence across all pages. Browser visual QA was unavailable.

## v1.11.0 service-specific imagery

Added 148 editable SVG concept illustrations across 62 visual concepts: all 129 service detail pages, nine main expertise areas (including Energy Optimization), four programme areas and six software applications. Bowtie, HAZOP, FERA, hazardous zones, firewater, relief/flare, risk, inspection, energy, competency and learning each use relevant visual language. The artwork is illustrative, not project evidence, engineering design or a product screenshot. Original portfolio photos remain available for contextual use.

Every service row has its own preview. Detail and main service heroes show the related vector illustration, with an accessible native dialog for enlargement and Escape-to-close. Learning and application visuals follow the same brand palette. Asset/topic mapping is listed in SERVICE_VISUALS.json.

Validation: all assets parsed and rendered, image references and route links checked, and every detail page checked for its own illustration and enlargement control. Browser visual QA was unavailable.

## v1.12.0 photographic service imagery

Replaced the rejected flat/vector artwork throughout the service experience with topic-matched photographic imagery. Four generated industrial scenes cover Bowtie, HAZOP, QRA and FERA; risk/fire contours and barrier models remain restrained overlays on realistic scenes. Other subjects use relevant photographic extracts from the supplied portfolios, with suitable alternatives for previously diagram-only entries. All 148 visual placements now use raster imagery. Image enlargement and responsive layouts remain available. Generated image paths, mode and prompts are documented in GENERATED_SERVICE_PHOTOS.md.

Validation: decoded all selected raster assets, repaired one older malformed portfolio extract, verified every detail hero, checked all rendered image paths, and built all 163 pages. Browser visual QA was unavailable.

## v1.12.1 homepage, image repair and developer credit

Removed the FOCUSED ON INDUSTRIAL NEEDS sector strip from Home. Replaced the empty FERA WebP with a complete JPEG from its original generated source and updated every reference. Production builds now reject empty or incomplete PNG/JPEG/WebP assets. Added Developed by Boost Mind Technology and the existing Boost Mind logo to the bottom footer on every page.

Content photographs also use a gentle 4.5% hover zoom with an 850ms transition, clipped within their frames. Brand logos and certificates are excluded; reduced-motion preferences disable this effect.

## v1.12.2 transparent identity and assistant motion

Footer uses an actual alpha-channel Boost Mind PNG without a background plaque. Its symbol retains the blue/cyan colours and the wordmark is displayed in white for contrast. The standard copyright line is © 2026 TECHNICA CONSULT. All rights reserved.

Assistant opening uses a subtle upward scale/fade from the launcher, with a brief stagger for initial questions. Closing remains mounted for its 220ms exit, becomes inert immediately, restores focus and cancels pending timers on reopen/unmount. Reduced-motion preferences disable motion. Validation includes image-container checks, alpha-channel verification, footer checks across 163 routes, and production build/link checks. Browser visual QA was unavailable.

Logo background was removed using the built-in image tool; selected PNG: public/assets/company-logos/boostmind-transparent.png. Prompt: remove only the white background, retain the original blue/cyan symbol and navy typography, preserve geometry and spelling, transparent gaps/counters, no redesign or checkerboard. The white footer lettering is a CSS presentation of that alpha mask.

## v1.12.3 developer logo link

Reduced the footer developer logo to 140px on desktop and 130px on mobile. The complete logo links to https://www.boostmind-tech.com/ in a new tab, with safe external-link attributes and a visible keyboard-focus outline.

## v1.12.4 contact icon consistency

Telephone links now use the Lucide Phone icon, and email actions use Mail. Removed navigation arrows from those contact actions in the footer, office details, mobile menu, Contact page and assistant support. Added Phone to the actual icon registry to prevent the generic arrow fallback. Contact icon spacing and stroke weight are consistent, with no decorative icon movement.

## v1.12.5 telephone display spacing

Removed the redundant Telephone heading from office contact details. Phone numbers display as +20 122 717 1000 and +20 111 102 0399 throughout office details and assistant support, with a 14px icon gap. Raw tel destinations remain unchanged.

## v1.12.6 office hours and payment logos

About now lists Working Hours: Monday - Friday: (9:00 AM - 5:00 PM, Cairo Time). A responsive footer strip shows the same eight payment brands as the supplied reference, using crisp SVG assets: Apple Pay, Google Pay, Stripe, Visa, Mastercard, mada, Tabby and Tamara. Provenance is recorded in PAYMENT_ASSET_SOURCES.md.

The v1.12.6 delivery also includes a clean Cloudflare Pages upload archive. Retired vector artwork has been removed from tracked source; production image checks reject its reintroduction. See CLOUDFLARE_DEPLOYMENT.md for dashboard ZIP upload and Wrangler fallback instructions.

## v1.13.0 image delivery optimization

The same 144 raster images were re-encoded for delivery, with proportionate size limits suited to their use. PNG/JPEG artwork now uses WebP; logo transparency is preserved. SVG logos and payment marks are unchanged. No image was regenerated, cropped, replaced or recoloured. Full certificate images retain enough resolution for reading and enlargement.

Raster image assets dropped from 22,689,619 bytes to 9,280,923 bytes (about 59%). Photos use asynchronous decoding; below-the-fold application imagery and closed image dialogs load lazily, while page heroes retain eager/high-priority loading. All existing pages, content, features and styles are preserved. IMAGE_OPTIMIZATION_REPORT.json records per-file dimensions, size comparisons and encoding checks. Browser timing benchmarks were not available; reductions describe file sizes, not measured load-time claims.

## v1.13.1
Aligned footer contact band with consistent typography, icon columns and a two-line address. Energy Optimization now appears under Services; Software Solutions has a dedicated main navigation tab. Existing URLs remain available.

## v1.13.2
Added the supplied ISO 29994:2021 certificate to the existing image gallery, with an optimised WebP preview and full image for zoom. No PDF is served.

## v1.13.3
Professional Learning & Development is a direct top-level navigation item at /learning and no longer appears under Services. Its eight approved service areas are the primary content. Previous learning routes remain accessible.

## v1.13.4
Professional Learning & Development now opens an eight-item desktop and mobile submenu linking directly to the approved training areas.

## v1.13.5
Software Solutions now opens a submenu of six applications; each link jumps to its corresponding application card.
