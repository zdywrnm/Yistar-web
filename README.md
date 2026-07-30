# YiStar Technology Website

Official bilingual website for 宁波义星科技有限公司 / YiStar Technology.

The site is a static Astro project with Chinese default routes and matching
English routes under `/en/`. Product maturity is modeled explicitly so
in-use, development, pre-development, and concept-stage work cannot be
presented as equivalent.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run verify
npm run test:e2e
```

`npm run verify` runs Astro checks, unit tests, and a production build. Browser
tests cover localized routes, navigation, responsive behavior, and the
client-side email handoff.

## Deployment

Pushing `main` triggers the GitHub Pages workflow. It publishes `dist/` and
retains the custom domain configured in `public/CNAME`.
