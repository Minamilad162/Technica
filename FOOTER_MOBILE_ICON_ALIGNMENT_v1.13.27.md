# TECHNICA v1.13.27 — Mobile footer vertical alignment

Changes limited to the contact information block inside the footer showcase:

- Center the email, office address, and phone text vertically against their respective circular icons on screens 700px wide and below.
- Group both phone links in a single dedicated `.tech-footer-phone-list` so a two-line phone block is centered as one unit.
- Align the icon and text block to the same CSS grid row and center each along its vertical axis.
- Override an older minimum-height rule for the email block on mobile to remove unwanted blank space.
- Preserve icon appearance, background, email address, office address, phone links and desktop layout.

Check on iOS/Android at 320px, 375px, 390px and 430px widths. GitHub source changes alone do not guarantee a Cloudflare Direct Upload deployment.
