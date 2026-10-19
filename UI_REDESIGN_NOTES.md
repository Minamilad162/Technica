# TECHNICA CONSULT UI redesign v1.1

Reference: the three user-supplied TalentLMS screenshots and both UI Component Reference Guide documents. Bencho (https://bencho.dev/) and Untitled UI (https://www.untitledui.com/react) were checked as visual/interaction references.

## Design decisions

- DM Serif Display gives major headings an expressive editorial character close to the reference. DM Sans supports readable body copy and interface labels. The existing logo remains unchanged.
- Teal remains the core brand colour. Coral, lavender, lime and sky-blue accents distinguish service themes and soften the former monochrome appearance.
- Photo collage in the hero combines industrial equipment, engineering work and professional learning, without presenting stock images as company projects or staff.
- Full-width warm collaboration band and image-led industry/programme cards add human and contextual imagery.
- A service explorer uses keyboard-accessible tabs to show relevant support, with descriptive links to existing pages.
- Staggered section entrances, floating photo badges, rotating graphic accents, sequential process emphasis and press/hover feedback provide a consistent motion vocabulary.
- Motion can be paused using the hero control. System reduced-motion preference disables nonessential animation. Content remains readable in SSR HTML before JavaScript.

## Implementation and licensing

All layouts, graphic shapes and interaction code are original adaptations. No third-party component code, paid assets, customer logos or product screenshots were copied. No new JavaScript dependencies. Lucide icons and SIL OFL fonts retain their own licences. All photographs are bundled locally and are illustrative.

## Checks

Production build, static rendering of all routes, internal links, image/font asset existence, primary heading structure and unchanged email-draft behaviour are checked during packaging. Desktop/mobile breakpoints, touch input, keyboard tab navigation and reduced-motion handling are included in the implementation. Browser visual/interaction QA is unavailable in the managed environment and remains unverified.

English remains the only published language. RTL content has not been introduced or claimed as tested.

## v1.2 alignment and internal pages

Fixed the wide-screen hero alignment: its 1500px maximum width now uses automatic horizontal margins at every breakpoint, including the later wide-screen rules. The title has staggered word entrances, a subtle accent glow and an animated underline. Service-line and detailed-service pages now include a large contextual photograph, secondary image and a scope-aware animated workflow. Pause/reduced-motion behaviour remains supported. No business workflow or enquiry delivery behaviour changed.

Added a service ribbon immediately below the hero: four linked service cards with locally bundled photographs and Lucide icons. Desktop continuous scrolling pauses on hover, keyboard focus or the global motion control. Touch devices and reduced-motion mode use a manually scrollable single set. Duplicate desktop cards are hidden from accessibility navigation and keyboard tab order.

## v1.3 image ribbon and scroll motion

Replaced boxed ribbon cards with images and captions only. Removed all visible pause controls as requested; hover/focus carousel pause and reduced-motion preferences remain. Section headings, copy, photos, cards, lists, forms and resources now reveal individually across all routes, with a no-JavaScript-readable SSR fallback. Added a bright AI-generated generic industrial asset (industrial-vibrant.png) across relevant pages. The original industrial photo remains in the source archive. The hero now uses an SVG objectBoundingBox clip path for true concave top/bottom and side curves, preserving automatic centering.

## v1.4 compact engineering hero

Reduced desktop hero maximum width to 1320px, headline scale, vertical spacing and image height. Mobile is edge-to-edge with a flat top, softly curved bottom and one primary action, following the supplied reference. Replaced the multi-photo collage and floating badges with one generated portrait of a fictional young Egyptian female engineer, without a headscarf, wearing appropriate engineering work clothing and a safety helmet. The foreground image is cropped to keep her face and helmet visible. Prior scroll-motion and image-caption service ribbon remain.

## v1.4.1 softly integrated hero photograph

Removed the border, rectangular background, decorative stack shadows and nearby star from the hero photograph. It now renders at its full 3:2 proportions using height:auto/object-fit:contain, without the earlier fixed-height crop. Horizontal and vertical alpha fades blend all edges into the existing teal hero background. The image stays inside the hero silhouette at desktop and mobile breakpoints, and entry motion respects reduced-motion preferences.

## v1.4.2 transparent hero cutout
- Replaced the faded photograph with a genuine alpha-transparent cutout of the same Egyptian engineer and her blueprint. Removed the industrial background and colleague's arm.
- Source: imagegen edit of `public/assets/egyptian-engineer-hero.png`; output: `public/assets/egyptian-engineer-cutout.png`.
- Prompt: preserve the woman's appearance, PPE, own hands and blueprint; remove all background and other people's limbs; center on a wide 3:2 transparent canvas with natural edges, no fade, glow or shadow.
- Removed CSS fade masks. Kept the approved centered sizing and added an eight-second 1–1.025 scale cycle, disabled for reduced motion.
- Removed the trailing periods from both homepage headline lines.
