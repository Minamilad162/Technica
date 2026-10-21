# TECHNICA CONSULT v1.13.25 — Safari sharing URL fix

When visiting https://technicaconsult.com/ on an iPhone, Safari's share → Copy option could use the old ChatGPT preview URL.

**Cause:** scripts/prerender.mjs generated the canonical link for every page from a fallback ChatGPT preview origin. Safari can use a page's canonical metadata when sharing. The sitemap and robots were generated from the same origin.

**Changes:**
- Always generate canonical links under https://technicaconsult.com (no staging-origin override).
- Generate matching Open Graph og:url for all prerendered pages.
- Generate sitemap, robots and social-image URLs under the official domain.
- Run scripts/check-sharing-urls.mjs after prerender to catch old preview-domain leakage across all routes.
- Preserve the current layout, footer, pages, and other fixes.

After Cloudflare build and deployment, reload the page on the iPhone and try Safari → Share → Copy again. Old links already copied elsewhere cannot be changed retroactively.
