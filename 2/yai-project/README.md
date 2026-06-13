# Yemen Architecture Initiative (YAI)
### مبادرة العمارة اليمنية

> **The global platform for Yemen's built heritage** — 23 architectural characters, Yemen Building Code, 13 kingdom archives, and education resources in Arabic and English.

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-0369A1?style=flat-square&logo=pwa)](https://yai.org)
[![WCAG AAA](https://img.shields.io/badge/WCAG-AAA-15803D?style=flat-square)](https://yai.org/accessibility)
[![UNESCO](https://img.shields.io/badge/UNESCO-Aligned-B45309?style=flat-square)](https://whc.unesco.org)
[![ALIPH](https://img.shields.io/badge/ALIPH-Protocol-7C3AED?style=flat-square)](https://www.aliph.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## Overview

The **Yemen Architecture Initiative (YAI)** is a Progressive Web Application (PWA) that serves as the definitive global platform for Yemen's architectural heritage. Built in response to the urgent need to document and preserve Yemen's built environment — endangered by conflict, neglect, and the loss of generational craft knowledge — YAI delivers:

- **23 Architectural Characters** across 22 governorates + the Sheba Kingdom
- **Yemen Building Code (YBC)** — 8-chapter Heritage Module for construction and restoration
- **13 Kingdom Archives** spanning 2,700 years from Awsan (800 BCE) to the Ottoman withdrawal (1918)
- **Education sector** for students, universities, and schools globally
- **Diaspora portal** connecting Yemenis worldwide to their heritage

---

## Platform Architecture

```
YAI PWA
├── Home           → index.html     — Hero, sectors, Sheba feature, stats
├── Map            → map.html       — Interactive 23-character SVG map
├── Students       → students.html  — Learning hub, research library
├── Code (YBC)     → code.html      — 8-chapter Yemen Building Code
├── Details        → details.html   — Character cards, materials, 3D docs
├── General        → general.html   — City guides, diaspora portal, news
├── Archives       → archives.html  — 13 kingdom profiles
├── Offline        → offline.html   — PWA offline fallback
├── Service Worker → sw.js          — Workbox caching strategies
└── Manifest       → manifest.json  — PWA configuration
```

---

## Five Sectors

| Sector | Primary audience | Content |
|--------|-----------------|---------|
| 🎓 **Students** | Architecture students, schools | Learning hub, 51-source research library, classroom toolkits, annual competition |
| 📋 **Code (YBC)** | Architects, government | 8 YBC Heritage chapters — mudbrick, brick, coral, rammed earth, seismic, flood, conflict |
| 🏛️ **Details** | Architects, researchers | 23 character cards, material library, element catalogue, 3D documentation |
| 🌍 **General** | Public, diaspora | 22 city guides, diaspora portal, heritage news, global partners |
| 📚 **Archives** | Researchers, public | 13 kingdom archives — pre-Islamic to Ottoman |

---

## 23 Architectural Characters

### Pre-Islamic foundational character
| # | Character | Governorate | Type | Primary Material |
|---|-----------|-------------|------|-----------------|
| ★ | **Sheba Kingdom** | Ma'rib · Al Jawf · Shabwah | Ancient | Ashlar limestone · alabaster |

### 22 Governorate characters
| # | Character | Governorate | Type | Signature element |
|---|-----------|-------------|------|------------------|
| 01 | Sana'a Capital | Amanat al-Asimah | Highland | Qamaria window · mafraj |
| 02 | Sana'a Governorate | Sana'a | Highland | Mountain village · stone |
| 03 | Aden | Aden | Coastal | Colonial hybrid · coral |
| 04 | Amran | Amran | Highland | Walled town · defensive |
| 05 | Abyan | Abyan | Coastal | Lowland courtyard |
| 06 | Ad Dali' | Ad Dali' | Highland | Ottoman hill town |
| 07 | Al Bayda | Al Bayda | Highland | Central transitional |
| 08 | Al Hudaydah | Al Hudaydah | Coastal | Rawshan screen · coral |
| 09 | Al Jawf | Al Jawf | Desert | Desert oasis · walled |
| 10 | Al Mahrah | Al Mahrah | Coastal | Frankincense coast |
| 11 | Al Mahwit | Al Mahwit | Highland | Terraced cliffside |
| 12 | Socotra | Socotra Archipelago | Island | Cave dwelling · endemic |
| 13 | Dhamar | Dhamar | Highland | Volcanic basalt stone |
| 14 | Hadramawt | Hadramawt | Ancient | Mudbrick skyscrapers |
| 15 | Hajjah | Hajjah | Highland | Cliffside defensive village |
| 16 | Ibb | Ibb | Highland | Green highland medieval |
| 17 | Lahij | Lahij | Coastal | Sultanate courtyard palace |
| 18 | Ma'rib | Ma'rib | Ancient | Sabaean capital · UNESCO |
| 19 | Raymah | Raymah | Highland | Isolated terraced village |
| 20 | Sa'dah | Sa'dah | Desert | Rammed earth · zabur |
| 21 | Shabwah | Shabwah | Ancient | Hadramite · desert gateway |
| 22 | Ta'izz | Ta'izz | Highland | Rasulid golden age |

---

## Yemen Building Code (YBC) — Heritage Module

| Chapter | Title | Tradition | Govs |
|---------|-------|-----------|------|
| YBC-H00 | Overview & Legal Framework | All | All 22 |
| YBC-H01 | Mudbrick (Libn) | Hadramawt, Marib | Hadramawt, Ma'rib, Al Jawf |
| YBC-H02 | Fired Brick & Gypsum | Sana'a highland | Sana'a, Amran, Dhamar |
| YBC-H03 | Coral Stone & Timber | Tihama coastal | Hudaydah, Aden, Lahij |
| YBC-H04 | Rammed Earth (Zabur) | Northern highland | Sa'dah, Hajjah, Amran |
| YBC-H05 | Seismic Standards | Highland tower house | Sana'a, Sa'dah, Hajjah |
| YBC-H06 | Flood Resilience | Wadi-adjacent | Hadramawt, Ma'rib, Hudaydah |
| YBC-H07 | Post-Conflict Reconstruction | All | All 22 — priority: Sana'a, Ta'izz |

> Modelled on **Saudi SBC 902** — adapted to Yemen's specific materials, geology, and conflict context. Aligned with **ALIPH** and **UNESCO** protocols.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Vanilla HTML/CSS/JS | Zero-dependency, maximum longevity |
| **PWA** | Workbox 7.0 (service worker) | Offline-first, CacheFirst for YBC PDFs |
| **Fonts** | Cormorant Garamond · DM Sans · Noto Naskh Arabic | EN display · EN body · AR display/body |
| **Icons** | SVG inline (no icon font) | Accessible, crisp, no external dependency |
| **Analytics** | Plausible (privacy-first) | No cookies, GDPR compliant |
| **Maps** | Custom SVG Yemen map | No external map service, fully offline |
| **PDF generation** | ReportLab (Python) | YBC chapter PDF exports |
| **Deployment** | Vercel (recommended) | Global edge, ISR-compatible |

---

## Design System

```css
/* Primary tokens */
--ink:       #0F172A   /* Headings, nav background */
--stone:     #334155   /* Subheadings */
--sky:       #0369A1   /* CTA, links, Students accent */
--parchment: #F8FAFC   /* Page background */
--sand:      #C4A77D   /* Yemen earth tone accent */
--gold:      #B45309   /* Sheba Kingdom, Details accent */

/* Sector accents */
--c-students: #0369A1
--c-code:     #15803D
--c-details:  #B45309
--c-general:  #9F1239
--c-archives: #7C3AED
```

Typography: **Cormorant Garamond** (EN display) · **DM Sans** (EN body) · **Noto Naskh Arabic** (AR display) · **Noto Sans Arabic** (AR body) · **Fira Code** (technical/YBC)

---

## PWA Features

- ✅ **Installable** — add to home screen, no app store required
- ✅ **Offline-first** — character cards and YBC chapters cached for field use
- ✅ **Background sync** — diaspora submissions queue when offline, sync on reconnect
- ✅ **Push notifications** — Firebase FCM compatible
- ✅ **Bilingual** — Arabic (RTL) / English (LTR) with one-click toggle
- ✅ **WCAG AAA** — keyboard navigable, screen reader tested
- ✅ **Role-based analytics** — Plausible with architect/student/government/public segmentation

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-org/yemen-architecture-initiative.git
cd yemen-architecture-initiative

# No build step required — open index.html directly
# For local development with service worker:
npx serve . -p 3000

# For Next.js migration (recommended for production):
npx create-next-app@latest yai-next --typescript --tailwind --app
```

---

## Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel deploy
```

### Netlify
```bash
netlify deploy --dir . --prod
```

### GitHub Pages
Push to `main` branch — the included GitHub Actions workflow deploys automatically.

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Key areas where contributions are welcome:

1. **Character card content** — additional documentation for under-researched governorates (Socotra, Al Mahrah, Raymah, Sa'dah)
2. **Translations** — French, German, Italian versions of the interface
3. **YBC technical review** — architects and engineers reviewing chapter specifications
4. **Diaspora memories** — community submissions for the General sector portal
5. **3D documentation** — photogrammetry data for character card 3D models

---

## Scholarly Foundation

51 sources across 5 languages underpin the platform's content:

| Language | Sources | Key works |
|----------|---------|-----------|
| English | 18 | Damluji (2017), Marchand (2017), Serjeant & Lewcock (1983) |
| French | 12 | Bonnenfant (2004, 2008), Hirschi (1983), CEFAS publications |
| German | 8 | Daum (1988), DAI excavation reports, Finster (Rasulid architecture) |
| Italian | 7 | De Maigret (2002), Loreto (2011), MAIRY mission publications |
| Journals | 6 | Chroniques Yéménites, PSAS, Arabian Archaeology & Epigraphy |

---

## Global Partners

UNESCO · ALIPH · CEFAS (Centre Français d'Archéologie et de Sciences Sociales) · DAI (Deutsches Archäologisches Institut) · MAIRY (Missione Archeologica Italiana in Yemen) · AIYS (American Institute for Yemeni Studies) · British-Yemeni Society · Iconem (3D documentation)

---

## License

MIT License — see [LICENSE](LICENSE) for details.

Documentation and research content © 2026 Yemen Architecture Initiative. Architectural scholarship referenced with full attribution.

---

<div align="center">
  <p>Built with care for Yemen's built heritage</p>
  <p><em>بُني بعناية لإرث اليمن المعماري</em></p>
</div>
