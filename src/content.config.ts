/**
 * İçerik koleksiyonları ve Zod şeması.
 *
 * Alanlar CLAUDE.md'deki "Terim dosyası şeması" bölümüyle birebir aynıdır.
 * `category` alanı `src/data/kategoriler.ts` içindeki slug'lardan üretilen bir
 * enum'dur: kategori listesine dokunmadan yeni kategori slug'ı kullanılamaz.
 */

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

import { KATEGORI_SLUGLARI } from './data/kategoriler.ts';

/** `short` alanının üst sınırı. CLAUDE.md: "en fazla 160 karakter". */
export const SHORT_MAKS = 160;
/** `related` alanının üst sınırı. Yazılmış terimlerde alt sınır 2'dir. */
export const RELATED_MAKS = 6;

/** Terimin yazım durumu. `incelendi` değerini yalnızca insan koyar. */
export const DURUMLAR = ['stub', 'taslak', 'incelendi'] as const;
export type Durum = (typeof DURUMLAR)[number];

/** Okur seviyesi. */
export const SEVIYELER = ['baslangic', 'orta', 'ileri'] as const;
export type Seviye = (typeof SEVIYELER)[number];

/** Dosya adı = slug olduğu için slug alanı şemada tutulmaz. */
const terimSemasi = z.object({
  /** İngilizce kanonik ad, taslaktaki hâliyle. */
  term: z.string().min(1),
  /** Yerleşik Türkçe karşılık. Yoksa boş bırakılır; uydurulmaz. */
  tr: z.string().default(''),
  /** Aramada aynı terime götüren diğer yazımlar. Bir alias tek terime aittir. */
  aliases: z.array(z.string().min(1)).default([]),
  /** Kategori slug'ı; `src/data/kategoriler.ts` ile sınırlıdır. */
  category: z.enum(KATEGORI_SLUGLARI),
  /** Taslaktaki `###` alt başlığı. Düz kategorilerde boş. */
  subcategory: z.string().default(''),
  level: z.enum(SEVIYELER),
  /** Tek cümlelik tanım. */
  short: z.string().max(SHORT_MAKS).default(''),
  /** İlgili terimlerin slug'ları. Yazılmış terimlerde 2-6 arası beklenir. */
  related: z.array(z.string().min(1)).max(RELATED_MAKS).default([]),
  /** Aynı kelimenin diğer anlamlarının slug'ları. */
  disambiguation: z.array(z.string().min(1)).default([]),
  tags: z.array(z.string().min(1)).default([]),
  status: z.enum(DURUMLAR).default('stub'),
  /** Yalnızca insanlar yazar; seed ve diğer script'ler doldurmaz. */
  reviewedBy: z.array(z.string().min(1)).default([]),
  /** Rakam, sürüm, tarih ya da "şu anda" gibi ifade içeriyorsa true. */
  dateSensitive: z.boolean().default(false),
  sources: z.array(z.string().url()).default([]),
  added: z.coerce.date(),
  updated: z.coerce.date(),
});

export type TerimVerisi = z.infer<typeof terimSemasi>;

const terimler = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/terimler' }),
  schema: terimSemasi,
});

/** Öğrenme yolu: belirli bir sırayla okunması önerilen terim listesi. */
const yolSemasi = z.object({
  title: z.string().min(1),
  short: z.string().max(SHORT_MAKS),
  level: z.enum(SEVIYELER),
  /** Okuma sırası. Her biri var olan bir terim slug'ı olmalıdır. */
  terms: z.array(z.string().min(1)).min(2),
  /** Yolların listelenme sırası. */
  order: z.number().int().nonnegative().default(0),
  status: z.enum(DURUMLAR).default('stub'),
  added: z.coerce.date(),
  updated: z.coerce.date(),
});

export type YolVerisi = z.infer<typeof yolSemasi>;

const yollar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yollar' }),
  schema: yolSemasi,
});

export const collections = { terimler, yollar };
