# MB1Call website

A production rebuild of [mb1call.ca](https://mb1call.ca) for review before it replaces the live WordPress site.

This is a marketing catalog plus inquire/order workflow—not ecommerce. There is no cart, checkout, or payment flow.

## Local preview

Requires Node.js 20+.

```
npm install
npm run dev
```

Open http://localhost:3000.

```
npm run build
npm start
```

## What’s included

- Next.js App Router, TypeScript, Tailwind CSS
- Pages: home, shop, marking paint, pin flags, survey stakes, about, contact, privacy, price list
- Permanent redirects from old WordPress URLs (see `next.config.ts`)
- Live-site logo (`public/media/logos/MB1Call-MarkingPaints.png`) in the header, hero, and about page
- Product photography and manufacturer PDFs from the current catalog
- Unique titles, Open Graph image, JSON-LD `LocalBusiness` with NAP, `sitemap.xml`, `robots.txt`
- Canonical host: `https://mb1call.ca`
- Order / information CTAs to the existing Jotforms, plus a mailto contact form
- Hosted copy of the June 1, 2026 retail price PDF (no invented on-page prices)

## Deploy

Point DNS at the new host only after this rebuild has been reviewed. Keep `www.mb1call.ca` redirecting to the apex host.
