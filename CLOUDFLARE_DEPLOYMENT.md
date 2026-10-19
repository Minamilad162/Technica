# Cloudflare Pages deployment

## Ready-to-upload ZIP

Use `TECHNICA_Cloudflare_Pages_Dist_v1.13.5.zip`. This contains only the generated static site, with `index.html` at the archive root. Upload that ZIP directly in your existing Cloudflare Pages Direct Upload deployment. Do not upload the full source-project ZIP or merge this build with an earlier dist folder.

If you prefer a folder, extract this ZIP into a new empty folder and upload that folder. The same folder should contain `index.html`, `assets/`, `_redirects` and the page subfolders.

## If the dashboard still reports Unknown

The error list does not identify a definitive cause. Retry in a fresh Cloudflare dashboard tab. If the browser uploader continues failing, extract the clean ZIP into a folder called `dist`, open a terminal in its parent folder and run:

```sh
npx wrangler login
npx wrangler pages deploy dist
```

Choose the existing Pages project when prompted. Wrangler takes a folder, not a ZIP. If asked about a branch, use the production branch configured for your existing project.

## Verified package constraints

Cloudflare documents ZIP/folder support for dashboard drag-and-drop, a 1,000-file limit for that method, and a 25 MiB maximum per file. This build is checked against those limits before packaging. These limits alone do not explain an Unknown upload error.

References:
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://developers.cloudflare.com/pages/platform/limits/
