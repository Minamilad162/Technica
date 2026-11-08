# TECHNICA v1.13.31 — About page office address

- Root cause: the shared OfficeDetails component had two explicitly separate block-level address lines, so changing footer CSS did not fix About.
- Add an opt-in singleLineAddress prop to OfficeDetails and use it only for the About-page Our office panel.
- Render the existing complete officeAddress constant in one span for About; retain the original two spans for Contact and other uses.
- Use a container query on the About office panel: at widths >=445px show the address on one line with a modest 14px type size, and allow wrapping on narrower panels to prevent horizontal overflow.
- Preserve phone numbers, contact layout, typography elsewhere, icon alignment and footer.
- Deploy the new build on Cloudflare if the site uses Direct Upload.
