/**
 * Tema tercihi: açık / koyu / sistem.
 *
 * Tercih `<html data-theme>` üzerinden uygulanır. `tokens.css` bunu
 * `color-scheme` ile okur; renkler `light-dark()` içinde tek yerde tanımlı
 * olduğu için ikinci bir koyu tema bloğu yoktur.
 */

export type Tema = 'system' | 'light' | 'dark';

/** localStorage anahtarı. Yanıp sönmeyi önleyen satır içi betik de bunu okur. */
export const ANAHTAR = 'tema';

/** Kök öğeye temayı uygular. `system` seçildiğinde öznitelik kaldırılır. */
export function temaUygula(tema: Tema): void {
  const kok = document.documentElement;
  if (tema === 'system') delete kok.dataset['theme'];
  else kok.dataset['theme'] = tema;
}

/** Kök öğedeki mevcut tercihi okur. */
export function temaOku(): Tema {
  const deger = document.documentElement.dataset['theme'];
  return deger === 'light' || deger === 'dark' ? deger : 'system';
}
