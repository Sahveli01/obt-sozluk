/**
 * Terim adından kalıcı slug üretimi.
 *
 * DİKKAT: Yayına girmiş bir slug asla değişmez (dış linkler kırılır).
 * Bu dosyadaki kurallar değiştirilirse var olan tüm dosya adları etkilenir;
 * değişiklik şartsa eski slug'dan yönlendirme eklenir.
 */

import { normalize } from './normalize.ts';

/**
 * Slug'dan tamamen düşürülen karakterler. Kesme işaretleri tire'ye dönüşmemeli:
 * `Shamir's Secret Sharing` -> `shamirs-secret-sharing`, `shamir-s-...` değil.
 */
const DUSURULEN = /['’`´]/g;

/**
 * Terim adını slug'a çevirir.
 *
 * Türkçe harfler ASCII'ye indirgenir, kalan her karakter grubu tek tire olur,
 * baştaki ve sondaki tireler atılır.
 *
 * @example
 * slugla('Reentrancy Attack')  // 'reentrancy-attack'
 * slugla('Fork (Blockchain)')  // 'fork-blockchain'
 * slugla('Akıllı Sözleşme')    // 'akilli-sozlesme'
 * slugla('msg.sender')         // 'msg-sender'
 * slugla('51% Attack')         // '51-attack'
 */
export function slugla(ad: string): string {
  return normalize(ad.replace(DUSURULEN, ''))
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Terim adının sonundaki anlam ayrımı parantezini atıp taban adı döndürür.
 *
 * Yalnızca **sondaki** parantez atılır: `PFP (Profile Picture) Project`
 * gibi ortada parantez taşıyan adlar olduğu gibi kalır.
 *
 * @example
 * tabanAd('Fork (Blockchain)')          // 'Fork'
 * tabanAd('Proof of Work (PoW)')        // 'Proof of Work'
 * tabanAd('PFP (Profile Picture) Project') // 'PFP (Profile Picture) Project'
 */
export function tabanAd(ad: string): string {
  return ad.replace(/\s*\([^()]*\)\s*$/, '').trim();
}

/** Terim adında sonda anlam ayrımı parantezi var mı? */
export function parantezliMi(ad: string): boolean {
  return /\s*\([^()]*\)\s*$/.test(ad);
}
