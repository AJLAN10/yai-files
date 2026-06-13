import materialTextures from '../data/material-textures.json';

export interface TextureEntry {
  thumb: string;
  full: string;
  label: string;
  label_ar: string;
  credit: string;
  source: string;
}

const TEXTURES = materialTextures as Record<string, TextureEntry>;

/* Map a single material string to one texture category, or null.
   Order matters: more specific tokens are tested first so that
   "rammed earth (zabur)" doesn't fall through to plain earth, and
   "mudbrick" is never caught by the generic "brick" rule. */
function categoryFor(material: string): string | null {
  const m = material.toLowerCase();
  if (m.includes('coral')) return 'coral';
  if (m.includes('rammed earth') || m.includes('zabur')) return 'rammed-earth';
  if (m.includes('mudbrick') || m.includes('mud brick') || m.includes('libn') || m.includes('clay')) return 'mudbrick';
  if (m.includes('brick') || m.includes('tile')) return 'fired-brick';
  if (m.includes('timber') || m.includes('rawshan') || m.includes('wood')) return 'timber';
  if (m.includes('thatch') || m.includes('reed')) return 'thatch';
  if (m.includes('earth')) return 'mudbrick';
  if (m.includes('stone') || m.includes('limestone') || m.includes('ashlar') || m.includes('schist') || m.includes('alabaster')) return 'stone';
  return null;
}

/* Resolve a character's material_list to a de-duplicated, ordered set
   of macro-texture entries. Materials with no sourced texture (concrete,
   gypsum, …) are simply skipped — the gallery shows only what exists. */
export function materialTexturesFor(materials: string[]): TextureEntry[] {
  const seen = new Set<string>();
  const out: TextureEntry[] = [];
  for (const mat of materials) {
    const cat = categoryFor(mat);
    if (!cat || seen.has(cat) || !TEXTURES[cat]) continue;
    seen.add(cat);
    out.push(TEXTURES[cat]);
  }
  return out;
}
