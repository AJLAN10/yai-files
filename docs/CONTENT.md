# Authoring YAI Heritage Content

All heritage content is **schema-validated** at build time via Astro
Content Collections. The schemas live in
[`src/content.config.ts`](../src/content.config.ts). If a content file is
missing a required field or uses an invalid value, `npm run build` fails
with a precise error — a broken record can never reach the field.

## Collections

| Collection          | Location                          | Format | Renders at        |
| ------------------- | --------------------------------- | ------ | ----------------- |
| `characters`        | `src/content/characters/`         | JSON   | `/details/<id>`   |
| `ybcChapters`       | `src/content/ybc-chapters/`       | JSON   | `/code/<id>`      |
| `climateResilience` | `src/content/climate-resilience/` | MD     | `/climate/<slug>` |

The **filename** (without extension) becomes the entry `id` and the URL
slug. Keep filenames kebab-case and stable — they are public URLs.

## Adding an Architectural Character

Create `src/content/characters/<id>.json`:

```json
{
  "num": "07",
  "name": "Aden",
  "name_ar": "عدن",
  "governorate": "Aden Governorate",
  "type": "coastal",
  "material": "Coral stone · colonial brick · concrete",
  "period": "1839 to present",
  "tag": "Colonial hybrid · port architecture",
  "description": "…",
  "elements": ["Colonial arcade", "Coral stone"],
  "traditional": "…",
  "transitional": "…",
  "contemporary": "…"
}
```

`type` must be one of: `ancient`, `highland`, `desert`, `coastal`,
`island` (these drive the map filter chips).

## Adding a YBC Chapter

Create `src/content/ybc-chapters/ybc-hNN.json`. `code` must match the
pattern `YBC-H05`; `status` is `draft` / `review` / `published`; `specs`
is an array of `[label, value]` pairs.

## Adding a Climate Resilience Case Study

Create `src/content/climate-resilience/<slug>.md` with frontmatter and a
Markdown body:

```markdown
---
title: "…"
summary: "…"
risk_type: flood        # flood | seismic | drought | thermal | conflict | coastal-erosion
risk_level: severe      # low | moderate | high | severe
governorate: Hadramawt
related_ybc_chapter: ybc-h06   # must match an existing YBC chapter id
related_character: hadramawt   # optional; must match a character id
geo_coordinates:
  lat: 15.9270
  lng: 48.6267
order: 1
---

Markdown body here…
```

`related_ybc_chapter` and `related_character` use Astro `reference()`:
the build **fails** if they point at an entry that does not exist. This is
the cross-reference taxonomy that knits the Climate sector to the rest of
the platform. `geo_coordinates` is the interactive hook — it lets these
records be plotted on the map as resilience case studies later with no
schema change.
