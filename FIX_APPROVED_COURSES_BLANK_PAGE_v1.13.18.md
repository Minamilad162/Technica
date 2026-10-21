# Approved Courses blank-page hotfix v1.13.18

Route: `/learning/accredited-approved-programmes`

- Restored the **missing** `ApprovedCoursesSection` component in `src/main.jsx` (the route previously referenced it without a definition).
- Kept IOSH Leading Safely and Managing Safely courses and both logos.
- Replaced repeated Accreditation / Recognition labels with one shared **Accreditation** heading.
- Updated the source for pre-rendered HTML and client-side JS and CSS assets so direct navigation and subsequent SPA navigation are consistent after the GitHub build.
- No other pages or links changed.

To rebuild locally: `npm ci`, `npm run build`.
