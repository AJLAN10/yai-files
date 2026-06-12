import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ───────────────────────────────────────────────────────────────
   YAI Content Collections — the schema (data-integrity) layer.

   Heritage content is treated as a validated database. Adding a
   field here makes it required across every entry: the build fails
   loudly if any content file is missing it, so a broken record can
   never ship to the field. See docs/CONTENT.md for authoring notes.
   ─────────────────────────────────────────────────────────────── */

/* Shared vocabularies — keep enums centralized so the map filters,
   the YBC index, and the Climate sector all speak the same taxonomy. */
const climateZone = z.enum(['ancient', 'highland', 'desert', 'coastal', 'island']);
const riskLevel = z.enum(['low', 'moderate', 'high', 'severe']);

/* ── Architectural Character Cards ──────────────────────────────
   The 23 characters that anchor the map and Details sector. */
const characters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/characters' }),
  schema: z.object({
    /* Display number on the map ("01", "14", or "★" for Sheba). */
    num: z.string(),
    name: z.string(),
    /* Optional Arabic name — bilingual content lands incrementally. */
    name_ar: z.string().optional(),
    /* Governorate(s) this character is found in. */
    governorate: z.string(),
    /* Geographic/typological family — drives the map filter chips. */
    type: climateZone,
    material: z.string(),
    period: z.string(),
    /* One-line tagline shown on the map pin tooltip. */
    tag: z.string(),
    description: z.string(),
    /* Defining architectural elements (qamaria, mafraj, …). */
    elements: z.array(z.string()).min(1),
    /* The three-register narrative every character shares. */
    traditional: z.string(),
    transitional: z.string(),
    contemporary: z.string(),
  }),
});

/* ── Yemen Building Code (YBC) Heritage Chapters ────────────────
   Structured technical chapters; specs are label/value pairs. */
const ybcChapters = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/ybc-chapters' }),
  schema: z.object({
    /* Canonical code, e.g. "YBC-H05". */
    code: z.string().regex(/^YBC-H\d{2}$/, 'Code must look like YBC-H05'),
    name: z.string(),
    subtitle: z.string(),
    status: z.enum(['draft', 'review', 'published']),
    governorates: z.array(z.string()).min(1),
    description: z.string(),
    /* Technical specifications as [label, value] rows. */
    specs: z.array(z.tuple([z.string(), z.string()])).min(1),
    traditional: z.string(),
    transitional: z.string(),
    contemporary: z.string(),
  }),
});

/* ── Climate Resilience & Adaptive Reuse (new sector) ───────────
   Case studies of heritage structures adapting to climate and
   conflict risk. Markdown bodies hold the narrative; frontmatter
   carries the cross-references that knit the sector to the rest
   of the platform. */
const climateResilience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/climate-resilience' }),
  schema: z.object({
    title: z.string(),
    title_ar: z.string().optional(),
    summary: z.string(),
    /* Primary climate/hazard the case study addresses. */
    risk_type: z.enum(['flood', 'seismic', 'drought', 'thermal', 'conflict', 'coastal-erosion']),
    risk_level: riskLevel,
    governorate: z.string(),
    /* Cross-reference taxonomy: link back to the governing YBC
       chapter. reference() validates the target exists at build,
       so a dangling pointer fails the build. */
    related_ybc_chapter: reference('ybcChapters'),
    /* Optional link to the architectural character involved. */
    related_character: reference('characters').optional(),
    /* Interactive hook: lets these records be plotted on the map
       later as "resilience case studies" with zero refactoring. */
    geo_coordinates: z.object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
    }),
    /* The adaptive-reuse intervention, if any. */
    adaptive_reuse: z.string().optional(),
    /* Ordering for the sector index. */
    order: z.number().default(99),
  }),
});

export const collections = { characters, ybcChapters, climateResilience };
