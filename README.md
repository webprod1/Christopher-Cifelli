# Darkwind Chronicles

Independent local React + TypeScript + Vite website. Nothing has been published or connected to the former site.

## Run
Install dependencies with pnpm install, then pnpm dev. Production: pnpm build; pnpm exec vite preview --host 127.0.0.1.

Content and configuration: src/content.ts. Styling: src/style.css. Local original SVG landscape: public/assets/hearth.svg. Wordmark and typographic book covers are provisional designs, not official assets. Fonts use local system fonts; no font services.

## Required before launch
- Approved logo (or approval of provisional wordmark).
- Book covers supplied by the user are included locally.
- Approved author biography and portrait.
- Verified gallery images and captions; currently omitted.
- Verified press/review text with attribution; currently omitted.
- Approved purchase destinations and publication information; no purchase links currently exist.
- Contact recipient/service and newsletter provider, privacy/consent text, backend validation and abuse protection. Forms are explicitly unavailable and never transmit or persist input.
- Confirm ownership wording and supply a deployment URL if canonical/social URL metadata is desired.

## Research
Attempted archive reference: https://web.archive.org/web/20240000000000/https://www.darkwind-chronicles.com/
Result: inaccessible through research tool; no historical snapshots were reviewed. Design is original and summaries use only supplied facts. The URL above is documentation only, never included in the application or production bundle.

## Validation
Production build and TypeScript check passed. Browser checks at 360, 390, 768, 1024, 1440 px: no horizontal overflow; mobile navigation, Escape, book dialogs, return focus and reduced motion passed. No browser page errors or external network requests. All rendered anchors are internal. Static runtime source/assets contain no former-domain/archive dependencies. Screenshots: preview-desktop.png and preview-mobile.png. qa.mjs uses the available local Playwright/Edge runtime for repeatable checks.

No gallery lightbox is exposed because no approved gallery assets exist. Supply assets before implementing and enabling gallery content. No analytics, publisher credits, inherited forms, or remote assets are included.
