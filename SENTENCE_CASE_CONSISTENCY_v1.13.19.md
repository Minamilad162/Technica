# Service list sentence case — v1.13.19

Applied sentence case to all service-detail list items in `src/catalogue.js` (including **What you receive** and **Scope of support**), preserving specialist abbreviations and terminology.

- 202 output items start with an uppercase letter instead of lowercase.
- 58 scope items corrected.
- Other source lists were audited and required no corrections.
- Added a safe first-letter fallback for `ServiceDisclosure` so dynamically supplied list items display consistently.
- Added `npm run check:sentence-case` as part of the build to catch future regressions.
- No changes to service names, URLs, approved-course content, navigation, or images.
