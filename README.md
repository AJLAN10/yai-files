# Yemen Architecture Initiative (YAI)

The global platform for Yemen's architectural heritage — covering 23 architectural
character zones, the Yemen Building Code (YBC), cultural archives, and educational
resources across 5 languages.

## Pages

| File | Description |
| --- | --- |
| `index.html` | Home page — overview of the platform's sectors (map, students, code, details, general, archives) |
| `map.html` | Interactive map of Yemen's 23 architectural character zones |
| `code.html` | Yemen Building Code (YBC) heritage module |
| `archives.html` | Kingdom Archives — 3,000 years of history across 13 kingdom records |
| `offline.html` | Fallback page shown when the app is offline |

## Progressive Web App

This site is set up as an installable PWA:

- `manifest.json` — app metadata, icons, and shortcuts
- `sw.js` — Workbox-based service worker that caches pages, images, fonts, and PDFs for offline use, and falls back to `offline.html` when navigation fails offline

## Running locally

Serve the directory with any static file server, for example:

```sh
npx serve .
```

Then open `http://localhost:3000` in your browser.
