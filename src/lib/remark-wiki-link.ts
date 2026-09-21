/**
 * `[[slug]]` ve `[[slug|görünen metin]]` sözdizimini terim bağlantısına çeviren
 * remark eklentisi.
 *
 * `[[gas]]`                        -> <a href="/terim/gas">gas</a>
 * `[[smart-contract|akıllı sözleşme]]` -> <a href="/terim/smart-contract">akıllı sözleşme</a>
 *
 * Kod blokları ve satır içi kod (`inlineCode`) dokunulmaz kalır: eklenti
 * yalnızca `text` düğümlerine bakar. Var olan bir bağlantının içindeki metin de
 * atlanır, iç içe bağlantı üretmemek için.
 *
 * Hedefin taslakta gerçekten var olup olmadığını bu eklenti denetlemez;
 * o iş `npm run validate` içindedir.
 */

import { visit } from 'unist-util-visit';

import { terimYolu } from './yol.ts';

/** `[[slug]]` veya `[[slug|metin]]`. Slug'da `]` ve `|` olamaz. */
const WIKI_LINK = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;

interface MetinDugumu {
  type: 'text';
  value: string;
}

interface BaglantiDugumu {
  type: 'link';
  url: string;
  title: null;
  data: { hProperties: { 'data-wiki-link': string } };
  children: MetinDugumu[];
}

type Dugum = MetinDugumu | BaglantiDugumu | { type: string; children?: Dugum[] };

export function remarkWikiLink() {
  return function donustur(agac: Dugum): void {
    visit(
      agac as never,
      'text',
      (
        dugum: MetinDugumu,
        dizin: number | undefined,
        ebeveyn: { type: string; children: Dugum[] } | undefined,
      ) => {
        if (!ebeveyn || dizin === undefined) return;
        // İç içe bağlantı üretme.
        if (ebeveyn.type === 'link' || ebeveyn.type === 'linkReference') return;
        if (!dugum.value.includes('[[')) return;

        const yeniDugumler: Dugum[] = [];
        let sonIndeks = 0;

        WIKI_LINK.lastIndex = 0;
        let eslesme: RegExpExecArray | null;
        while ((eslesme = WIKI_LINK.exec(dugum.value)) !== null) {
          const slug = eslesme[1]!.trim();
          const metin = (eslesme[2] ?? eslesme[1]!).trim();

          if (eslesme.index > sonIndeks) {
            yeniDugumler.push({
              type: 'text',
              value: dugum.value.slice(sonIndeks, eslesme.index),
            });
          }

          yeniDugumler.push({
            type: 'link',
            url: terimYolu(slug),
            title: null,
            data: { hProperties: { 'data-wiki-link': slug } },
            children: [{ type: 'text', value: metin }],
          });

          sonIndeks = eslesme.index + eslesme[0].length;
        }

        if (yeniDugumler.length === 0) return;

        if (sonIndeks < dugum.value.length) {
          yeniDugumler.push({ type: 'text', value: dugum.value.slice(sonIndeks) });
        }

        ebeveyn.children.splice(dizin, 1, ...yeniDugumler);
        // Eklenen düğümleri yeniden ziyaret etme.
        return dizin + yeniDugumler.length;
      },
    );
  };
}

/**
 * Ham markdown govdesindeki tüm `[[...]]` hedeflerini döndürür.
 * `validate.ts` bağlantı hedeflerini denetlerken bunu kullanır.
 * Kod blokları ve satır içi kod ayıklanır, böylece örnek kodda geçen
 * `[[...]]` benzeri diziler hata üretmez.
 */
export function wikiLinkHedefleri(govde: string): string[] {
  const kodsuz = govde
    .replace(/^ {0,3}(```|~~~)[\s\S]*?^ {0,3}\1[^\n]*$/gm, '')
    .replace(/`[^`\n]*`/g, '');

  const hedefler: string[] = [];
  WIKI_LINK.lastIndex = 0;
  let eslesme: RegExpExecArray | null;
  while ((eslesme = WIKI_LINK.exec(kodsuz)) !== null) {
    hedefler.push(eslesme[1]!.trim());
  }
  return hedefler;
}
