# Bombay Creamery — Premium Website

A responsive Next.js 14 + TypeScript + Tailwind CSS website starter built from the supplied Bombay Creamery brief. It includes original page copy, business opportunity pages, a product category catalogue framework, enquiry forms, metadata, sitemap and robots configuration.

## Important content and verification notes

- The product catalogue supplied in the brief contains categories, but no verified individual SKU names, pack sizes or prices. The website therefore does not invent them; add the confirmed catalogue in `src/lib/site.ts` when available.
- The brief provides indicative investment, territory, infrastructure and gross invoice margin information. These are presented as supplied information, not a verified offer, profit promise or guaranteed return.
- The brief says stage-wise payment details do not reconcile exactly with the investment ranges and does not include every stage amount. The site explicitly asks applicants to obtain an itemised written payable schedule instead of inventing figures.
- Confirm that the supplied phone, email, corporate address, business model figures, application workflow and Formspree endpoint are current and authorised for publication before launch.
- The site does not use the restricted terms identified in the brief in its marketing copy.

## Requirements

- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Install and run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Formspree

The enquiry forms submit with a browser POST to the configured Formspree endpoint and only show success after a successful HTTP response.

Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mwlovovk
```

The endpoint is included from the supplied brief. Verify the endpoint in the Formspree account and test submissions before production. Form fields include name, mobile, email, city, state, business model, investment capacity, message, consent and source page. A hidden honeypot field is included. For production-grade abuse prevention, consider adding server-side rate limiting and CAPTCHA through a trusted provider.

## Environment variables

```env
NEXT_PUBLIC_SITE_URL=https://your-live-domain.example
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/mwlovovk
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
```

`NEXT_PUBLIC_SITE_URL` is used for canonical metadata base and sitemap/robots URLs. Replace it with the actual deployed URL. Analytics IDs are intentionally not hardcoded; analytics event wiring should be added only after real IDs and consent requirements are confirmed.

## GitHub

```bash
git init
git add .
git commit -m "Build Bombay Creamery premium website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Vercel deployment

1. Import the GitHub repository in Vercel.
2. Framework preset: Next.js.
3. Add the environment variables from `.env.example` in Project Settings → Environment Variables.
4. Set `NEXT_PUBLIC_SITE_URL` to the Vercel production URL (or custom domain).
5. Deploy and verify all routes and form submissions.

## Custom domain

In Vercel Project Settings → Domains, add the domain and apply the DNS records Vercel provides. Wait for domain verification and HTTPS issuance. Update `NEXT_PUBLIC_SITE_URL` to the final canonical domain and redeploy.

## Google Search Console

1. Add the deployed domain property in Google Search Console.
2. Verify domain ownership using the DNS TXT record supplied by Search Console.
3. Submit `https://YOUR-DOMAIN/sitemap.xml`.
4. Inspect key URLs and request indexing where appropriate.
5. Monitor indexing, search queries, Core Web Vitals and enhancements. Rankings and indexing are not guaranteed.

## Routes included

- `/` — Home
- `/about` — About
- `/products` — Product categories
- `/business-opportunities` — Overview of business models
- `/business/dealership`
- `/business/distributorship`
- `/business/super-stockist`
- `/application-process`
- `/faq`
- `/contact`

## Production checks

Run:

```bash
npm run build
```

Before launch, test all form submissions from the deployed domain, verify contact details and commercial information, add the approved product catalogue and photography, configure analytics only with real IDs, and review privacy/cookie requirements for your target audience.
