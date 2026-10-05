# Tallahassee Vinyl Siding (GCE Improvements)

Standalone pitch landing page for a Tallahassee, FL vinyl siding / general contractor lead.
Static Astro + Cloudflare Worker (static assets + contact form handler).

**Live:** https://tallahassee-vinyl-siding.james-welbes.workers.dev

## Verified facts (sourced, not invented)
- Business: GCE Improvements (site: tallahasseevinylsiding.com)
- Owner: Gerald Hires
- Phone: (850) 399-3777
- 20+ years construction/remodeling; licensed & bonded general contractor
- Services: vinyl siding install + repair, screen rooms/porches, gutters, soffit, fascia, decks, sun rooms
- Area: Tallahassee & the Big Bend

Note: this business already has a basic site. This workers.dev page is a fresh pitch
landing to show them, not a takeover of their existing site.

## Design
- Direction: Ramp-inspired clean/trust system, reskinned for a general contractor
  (warm paper neutral + evergreen accent, Hanken Grotesk / Inter).
- Hero image generated with Higgsfield (gpt_image_2), vision-checked, compressed.

## Deploy
```
npm install
npm run build
export CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=a3b10674bc6373a81438a11c1c93b3de
npx wrangler deploy
```
