/*
  Minimalist line glyphs for the YBC chapters — a standardised visual
  shorthand per material/topic. Inner SVG only (24x24, currentColor
  stroke). Honest iconography, not technical schematics.
  Keyed by chapter number ("00".."07").
*/
export const ybcIconPaths: Record<string, string> = {
  // Overview & legal framework — document
  '00': '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
  // Mudbrick (libn) — running-bond brick wall
  '01': '<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M3 12h18M9 6v6M15 6v6M6 12v6M12 12v6M18 12v6"/>',
  // Fired brick & gypsum — Sana'a tower with diwan bands + qamaria
  '02': '<rect x="7" y="3" width="10" height="18" rx="1"/><path d="M7 7.5h10M7 10.5h10"/><rect x="10" y="13.5" width="4" height="4.5" rx="0.5"/>',
  // Coral stone & timber — rawshan lattice screen
  '03': '<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9.3h16M4 14.6h16M9.3 4v16M14.6 4v16"/>',
  // Rammed earth (zabur) — compacted horizontal courses + tamper
  '04': '<path d="M12 7V3"/><rect x="3" y="7" width="18" height="3.2" rx="0.5"/><rect x="3" y="11.4" width="18" height="3.2" rx="0.5"/><rect x="3" y="15.8" width="18" height="3.2" rx="0.5"/>',
  // Seismic — seismograph trace
  '05': '<path d="M2 12h4l2.2-7 3 14 2.8-10 1.8 3H22"/>',
  // Flood resilience — building on a raised platform above waves
  '06': '<rect x="8" y="3.5" width="8" height="6" rx="0.5"/><path d="M3 11h18"/><path d="M3 15.5c2-2 4-2 6 0s4 2 6 0 4-2 3 0"/><path d="M3 19.5c2-2 4-2 6 0s4 2 6 0"/>',
  // Post-conflict reconstruction — structure with a repair crack
  '07': '<path d="M4 21V9l8-6 8 6v12z"/><path d="M12 9l-1.5 4 3 1-1.5 4"/>',
};

export const ybcIconInner = (code: string) =>
  ybcIconPaths[code.replace(/.*H/i, '')] ?? ybcIconPaths['00'];
