import type { CollectionEntry } from 'astro:content';

type CharData = CollectionEntry<'characters'>['data'];
type Chapter = CollectionEntry<'ybcChapters'>;

/*
  Intelligent cross-link: given a character, surface the YBC chapters that
  govern it. A chapter matches when any of its `governs` tokens is:
    • the character's type (highland / desert / coastal / ancient / island),
    • the character's risk_level (low / moderate / high / severe), or
    • a substring of one of its materials (e.g. "mudbrick" in "Sun-dried
      mudbrick (libn)").
  The logic lives here once and is reused by the character page and the map.
*/
export function relatedYbc(c: CharData, chapters: Chapter[]): Chapter[] {
  const materials = c.material_list.map((m) => m.toLowerCase());
  return chapters
    .filter((ch) =>
      (ch.data.governs ?? []).some(
        (t) =>
          t === c.type ||
          t === c.risk_level ||
          materials.some((m) => m.includes(t)),
      ),
    )
    .sort((a, b) => a.data.chapter_number - b.data.chapter_number);
}
