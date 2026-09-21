/**
 * Derleme sırasında üretilen arama indeksi.
 *
 * Tarayıcı bu dosyayı bir kez indirip MiniSearch ile tamamen istemci tarafında
 * arar; sunucu tarafında arama yoktur.
 */

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

import { KATEGORI_HARITASI } from '../data/kategoriler.ts';
import type { AramaBelgesi, AramaIndeksi } from '../lib/arama.ts';

export const GET: APIRoute = async () => {
  const terimler = await getCollection('terimler');

  const belgeler: AramaBelgesi[] = terimler.map((terim) => ({
    id: terim.id,
    term: terim.data.term,
    tr: terim.data.tr,
    short: terim.data.short,
    aliases: terim.data.aliases.join(' '),
    kategori: terim.data.category,
    kategoriAdi: KATEGORI_HARITASI.get(terim.data.category)?.ad ?? terim.data.category,
    altKategori: terim.data.subcategory,
    seviye: terim.data.level,
    durum: terim.data.status,
  }));

  belgeler.sort((a, b) => a.term.localeCompare(b.term, 'tr'));

  const indeks: AramaIndeksi = {
    uretildi: new Date().toISOString(),
    belgeler,
  };

  return new Response(JSON.stringify(indeks), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
