import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ───────────────────────────────────────────────────────────────
   YAI Content Collections — the schema (data-integrity) layer.

   Heritage content is treated as a validated database. Adding a
   field here makes it required across every entry: the build fails
   loudly if any content file is missing it, so a broken record can
   never reach the field. See docs/CONTENT.md for authoring notes.

   Cross-reference model (inverted, per architecture review):
   content does NOT point at the Resilience sector — instead each
   YBC chapter is additively tagged (`related_resilience_tags`) and
   the Climate sector *queries* those tags. This keeps the
   collections decoupled and the Resilience sector from becoming a
   bloated master-file.
   ─────────────────────────────────────────────────────────────── */

/* Shared vocabularies — one taxonomy across map filters, the YBC
   index, and the Climate sector. */
const characterType = z.enum(['ancient', 'highland', 'desert', 'coastal', 'island']);
const riskLevel = z.enum(['low', 'moderate', 'high', 'severe']);

/* Geographic point — the interactive hook. Carried as real-world
   coordinates so records can be exported, queried, or plotted on a
   future projected map without a schema change. */
const geoPoint = z.object({
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
});

/* ── Architectural Character Cards ──────────────────────────────
   Structured records (JSON). `description` is a prose string; the
   map's client panel injects these fields directly. */
const characters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/characters' }),
  schema: z.object({
    /* Map display number ("01", "14", or "★" for Sheba). */
    num: z.string(),
    name: z.string(),
    name_ar: z.string().optional(),
    governorate: z.string(),
    type: characterType,
    era: z.string(),
    material_list: z.array(z.string()).min(1),
    risk_level: riskLevel,
    geo_coordinates: geoPoint,
    /* One-line tagline for the map pin tooltip. */
    tag: z.string(),
    description: z.string(),
    elements: z.array(z.string()).min(1),
    /* The three-register narrative every character shares. */
    traditional: z.string(),
    transitional: z.string(),
    contemporary: z.string(),
  }),
});

/* ── Yemen Building Code (YBC) Heritage Chapters ────────────────
   Structured technical chapters; specs are [label, value] rows
   (markdown can't express the table). `related_resilience_tags`
   is the additive cross-link the Climate sector queries. */
const ybcChapters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/ybc-chapters' }),
  schema: z.object({
    code: z.string().regex(/^YBC-H\d{2}$/, 'Code must look like YBC-H05'),
    chapter_number: z.number().int().min(0),
    title: z.string(),
    subtitle: z.string(),
    status: z.enum(['draft', 'peer-reviewed']),
    governorates: z.array(z.string()).min(1),
    /* Free-form resilience tags — additive and searchable as the
       platform grows (flood, seismic, drought, thermal, conflict,
       coastal-erosion, governance, …). */
    related_resilience_tags: z.array(z.string()),
    content: z.string(),
    specs: z.array(z.tuple([z.string(), z.string()])).min(1),
    traditional: z.string(),
    transitional: z.string(),
    contemporary: z.string(),
  }),
});

/* ── Climate Resilience & Adaptive Reuse ────────────────────────
   Narrative case studies (Markdown). Decoupled: a case study
   declares which resilience themes it concerns via `resilience_tags`
   and is matched to YBC chapters that share those tags — no hard
   reference into another collection. */
const climateResilience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/climate-resilience' }),
  schema: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    summary: z.string(),
    risk_type: z.enum(['flood', 'seismic', 'drought', 'thermal', 'conflict', 'coastal-erosion']),
    risk_level: riskLevel,
    governorate: z.string(),
    /* Themes this study concerns; matched against YBC chapters'
       related_resilience_tags. */
    resilience_tags: z.array(z.string()).min(1),
    /* Soft pointer to a character by id (no reference() — kept
       decoupled and optional). */
    related_character: z.string().optional(),
    geo_coordinates: geoPoint,
    adaptive_reuse: z.string().optional(),
    order: z.number().default(99),
  }),
});

/* ── Kingdom Archives ───────────────────────────────────────────
   The 13 historical kingdoms/dynasties. Structured JSON records
   consumed by the archives index grid, timeline, and the
   /archives/<id> detail pages. */
const kingdoms = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/kingdoms' }),
  schema: z.object({
    name: z.string(),
    name_ar: z.string(),
    era: z.enum(['pre', 'islamic']),
    dates: z.string(),
    capital: z.string(),
    description: z.string(),
    /* Signature architectural works/elements. */
    architecture: z.array(z.string()).min(1),
    /* Research/status badges (UNESCO, excavations, gaps…). */
    badges: z.array(z.string()),
    /* Sheba gets special foundational-character treatment. */
    special: z.boolean().default(false),
    /* Chronological position for ordering. */
    order: z.number().int(),
  }),
});

export const collections = { characters, ybcChapters, climateResilience, kingdoms };
