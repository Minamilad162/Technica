# TECHNICA v1.13.26 — Canonical reliability and deployment diagnosis

**Browser behaviour:** iOS Safari may copy/share a page's canonical URL instead of the URL in the address bar.

## Changes in code
- The Vite SPA `index.html` now has a safe public-domain canonical and og:url for the homepage even if prerender is skipped.
- The prerender script removes the SPA shell's default metadata before writing exactly one unique canonical and Open Graph URL for each route.
- The React Router updates both canonical and og:url upon client-side route navigation (including browser Back/Forward).
- Automated build checks assert exactly one matching canonical and one og:url for every static route; no `chatgpt.site` URLs allowed.
- All page content/layout remains unchanged.

## Critical deployment note
This repository includes `.openai/hosting.json` with a ChatGPT Sites project_id, while `CLOUDFLARE_DEPLOYMENT.md` documents Cloudflare Pages Direct Upload. A GitHub commit **does not prove** either provider's live site was republished.

1. In Cloudflare Dashboard → Workers & Pages → TECHNICA project → Deployments, inspect the last deployed time and whether it is Git-integrated or Direct Upload.
2. In ChatGPT Work → Sites → TECHNICA Site → Settings, inspect its custom domains and last published version. If `technicaconsult.com` points there, publish a new Sites version that includes the updated source rather than just committing to GitHub.
3. Ensure DNS and custom-domain attachment point to the **intended** host. Do not modify DNS until verified.
4. After deployment inspect View Source → canonical and og:url; both must be `https://technicaconsult.com/` on the homepage. Then test Safari Share → Copy and paste.

No live deployment was performed by this GitHub-only change.
