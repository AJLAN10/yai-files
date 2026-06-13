# Technical Architecture — Yemen Architecture Initiative

## System Overview

YAI is a **zero-dependency Progressive Web Application** — deliberately built without a JavaScript framework to maximise longevity, accessibility in low-bandwidth environments, and ease of contribution from international heritage professionals who may not be developers.

## File Structure

```
yai/
├── index.html          # Homepage + PWA shell
├── map.html            # Interactive characters map
├── students.html       # Students sector
├── code.html           # Yemen Building Code (YBC)
├── details.html        # Character documentation
├── general.html        # Public / diaspora portal
├── archives.html       # Kingdom archives
├── offline.html        # Offline fallback
├── manifest.json       # PWA web app manifest
├── sw.js               # Workbox service worker
├── browserconfig.xml   # Microsoft tile config
├── sitemap.xml         # SEO sitemap
├── robots.txt          # Search engine directives
├── icons/              # PWA icons (all sizes)
├── screenshots/        # PWA store screenshots
└── docs/               # Extended documentation
```

## PWA Architecture

### Service Worker (Workbox 7.0)

```
Cache Strategy per content type:

Character cards    → StaleWhileRevalidate  (7 day max-age)
YBC PDF chapters   → CacheFirst            (60 day max-age) ← OFFLINE PRIORITY
Map tiles          → CacheFirst            (30 day max-age)
Images             → CacheFirst            (30 day max-age)
Google Fonts       → CacheFirst            (365 day max-age)
Navigation pages   → NetworkFirst          (30 day fallback)
Analytics calls    → NetworkOnly           (never cache)
Offline fallback   → /offline.html         (always available)
```

### Background Sync
Diaspora memory form submissions are queued in IndexedDB when offline and synced via Background Sync API (`yai-memory-submission` tag) when connection returns.

### Push Notifications
Firebase Cloud Messaging (FCM) compatible — notification payload schema:
```json
{
  "title": "Yemen Architecture Initiative",
  "body": "Notification text",
  "tag": "yai-update",
  "url": "/path/to/content"
}
```

## Caching Architecture

```
┌─────────────────────────────────────────────┐
│                  Browser                     │
│  ┌──────────────┐    ┌──────────────────┐   │
│  │  App Shell   │    │  Dynamic Content │   │
│  │  (CacheFirst)│    │  (SWR / NetFirst)│   │
│  └──────┬───────┘    └────────┬─────────┘   │
│         │                     │              │
│  ┌──────▼─────────────────────▼─────────┐   │
│  │          Service Worker               │   │
│  │  yai-pages / yai-character-cards      │   │
│  │  yai-ybc-pdfs / yai-map-tiles         │   │
│  │  yai-images / yai-fonts               │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## SEO Architecture

### Meta stack (per page)
- `<title>` — bilingual EN/AR
- `<meta name="description">` — 150-160 chars, bilingual-aware
- Open Graph (og:) — Facebook, LinkedIn, WhatsApp
- Twitter Card — summary_large_image
- `<link rel="canonical">` — prevents duplicate content
- `hreflang` — en / ar / x-default
- JSON-LD structured data — WebSite + CulturalOrganization + FAQPage

### Structured Data Schema
```json
{
  "@type": "CulturalOrganization",
  "name": "Yemen Architecture Initiative",
  "knowsAbout": ["Yemen architecture", "Heritage conservation", "Kingdom of Sheba"]
}
```

## Bilingual (RTL/LTR) Architecture

Language state is managed via CSS class on `<html>`:
```html
<html lang="en" dir="ltr" class="lang-en">   <!-- English mode -->
<html lang="ar" dir="rtl" class="lang-ar">   <!-- Arabic mode -->
```

Font families switch via CSS custom properties:
- LTR: Cormorant Garamond (display) + DM Sans (body)
- RTL: Noto Naskh Arabic (display) + Noto Sans Arabic (body)

Language preference persisted in `localStorage('yai-lang')`.

## Analytics Architecture

### Three-layer tracking (Plausible)
```
Layer 1: Traffic — pageviews, geography, device, browser
Layer 2: Roles   — architect / student / government / public / researcher
Layer 3: Sectors — sector entry, YBC downloads, 3D model opens, map clicks
```

Role is set on first visit via localStorage prompt, tagged to all subsequent Plausible events:
```javascript
plausible('Sector Expand', { props: { sector: 'code', role: 'architect' } });
```

## Performance Budget

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Preload fonts, no hero image |
| FID | < 100ms | No blocking JS |
| CLS | < 0.1 | Fixed nav height, no layout shift |
| TTI | < 3.5s | Minimal JS, no framework overhead |
| Lighthouse PWA | 100 | Full manifest + SW + HTTPS |

## Accessibility (WCAG AAA)

- Focus rings: `3px solid #0369A1; offset: 3px`
- Minimum touch target: 44×44px
- Color contrast: 7:1 (text), 4.5:1 (UI components)
- All SVG icons: `role="img"` or `aria-hidden="true"`
- Interactive elements: keyboard navigable (`tabindex`, `role`, `aria-*`)
- Reduced motion: `@media (prefers-reduced-motion: reduce)` — disables intro animation
- Screen reader tested: NVDA + Chrome, VoiceOver + Safari

## Deployment Architecture

```
GitHub repository
       │
       ▼ (push to main)
GitHub Actions → Build check → Deploy to Vercel
       │
       ▼
Vercel Edge Network (40+ regions)
       │
       ├── Closest edge: Bahrain (ME-1) / Dubai (ME-2)
       ├── CDN: Static assets globally cached
       └── Custom domain: yai.org / www.yai.org
```

## Security

- Content-Security-Policy headers via Vercel config
- No user data stored client-side (analytics is server-side Plausible)
- GitHub Actions secrets for deployment tokens
- HTTPS enforced — PWA requirement
