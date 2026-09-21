/**
 * Arama arayüzünün tarayıcı tarafı.
 *
 * Hem ana sayfa hem `/ara` bunu kullanır; iki ayrı uygulama olmasın diye
 * tek yerde durur. İndeks derlemede üretilen `search-index.json`'dan gelir
 * ve tamamen istemcide indekslenir.
 *
 * Kapsanan durumlar: yükleniyor, boş sorgu, sonuç yok, indeks yüklenemedi.
 */

import MiniSearch from 'minisearch';

import { ARAMA_AYARLARI, type AramaIndeksi } from './arama.ts';

export interface AramaOgeleri {
  form: HTMLFormElement;
  girdi: HTMLInputElement;
  durum: HTMLElement;
  sonuclar: HTMLElement;
  /** Sorgu yazılınca gizlenecek gözatma bölümü. Ana sayfada var, /ara'da yok. */
  gozat?: HTMLElement | null;
}

/** Bir ekranı dolduracak kadar sonuç yeter. */
const EN_FAZLA = 30;

function durumYaz(durum: HTMLElement, metin: string, hataMi = false): void {
  durum.textContent = metin;
  if (hataMi) durum.dataset['durum'] = 'hata';
  else delete durum.dataset['durum'];
}

function satirYap(sonuc: Record<string, unknown>, terimTabani: string): HTMLLIElement {
  const satir = document.createElement('li');
  satir.className = 'terim-satiri';

  const bag = document.createElement('a');
  bag.className = 'terim-satiri__ad';
  bag.href = `${terimTabani}/${String(sonuc['id'])}`;
  bag.textContent = String(sonuc['term']);
  satir.append(bag);

  if (sonuc['tr']) {
    const tr = document.createElement('span');
    tr.className = 'terim-satiri__tr';
    tr.textContent = String(sonuc['tr']);
    satir.append(tr);
  }

  // Tanım yazıldıysa görünür; yazılmadıysa kategorisi görünür. Böylece okur
  // rozete bakmadan, satırın kendisinden durumu anlar.
  const kisa = document.createElement('span');
  kisa.className = 'terim-satiri__kisa';
  if (sonuc['short']) {
    kisa.textContent = String(sonuc['short']);
  } else {
    kisa.textContent = `${String(sonuc['kategoriAdi'])} · henüz yazılmadı`;
    kisa.dataset['yazilmadi'] = 'evet';
  }
  satir.append(kisa);

  return satir;
}

/**
 * Arama arayüzünü bağlar. İndeks arka planda yüklenir; kullanıcı indeks
 * gelmeden yazmaya başlarsa yazdığı sorgu indeks hazır olunca uygulanır.
 */
export function aramayiBagla(ogeler: AramaOgeleri): void {
  const { form, girdi, durum, sonuclar, gozat } = ogeler;
  const indeksUrl = form.dataset['indeksUrl'];
  const hamTaban = form.dataset['terimTabani'];
  if (!indeksUrl || !hamTaban) return;
  // Daraltılmış kopya: aşağıdaki kapanış içinde tipin string kaldığı kesin olsun.
  const terimTabani: string = hamTaban;

  let miniSearch: MiniSearch | null = null;

  form.addEventListener('submit', (olay) => olay.preventDefault());

  function goster(sorgu: string): void {
    sonuclar.replaceChildren();
    if (!miniSearch) return;

    const temiz = sorgu.trim();
    if (temiz === '') {
      sonuclar.hidden = true;
      if (gozat) gozat.hidden = false;
      durumYaz(durum, `${miniSearch.documentCount} terim aranabilir.`);
      return;
    }

    // Sorgu varken gözatma listesi kapanır: sayfanın odağı tek şey olsun.
    if (gozat) gozat.hidden = true;

    const bulunan = miniSearch.search(temiz).slice(0, EN_FAZLA);
    if (bulunan.length === 0) {
      sonuclar.hidden = true;
      durumYaz(
        durum,
        `"${temiz}" için sonuç yok. Terimin İngilizcesini ya da kısaltmasını dene.`,
      );
      return;
    }

    durumYaz(durum, `${bulunan.length} sonuç.`);
    sonuclar.hidden = false;
    for (const sonuc of bulunan) {
      sonuclar.append(satirYap(sonuc as Record<string, unknown>, terimTabani));
    }
  }

  girdi.addEventListener('input', () => goster(girdi.value));

  void (async () => {
    try {
      const yanit = await fetch(indeksUrl);
      if (!yanit.ok) throw new Error(`HTTP ${yanit.status}`);
      const indeks = (await yanit.json()) as AramaIndeksi;

      miniSearch = new MiniSearch(ARAMA_AYARLARI);
      miniSearch.addAll(indeks.belgeler);

      durumYaz(durum, `${indeks.belgeler.length} terim aranabilir.`);
      // Kullanıcı indeks gelmeden yazmış olabilir.
      goster(girdi.value);
    } catch (sebep) {
      durumYaz(
        durum,
        'Arama indeksi yüklenemedi — bağlantı sorunu olabilir. Sayfayı yenileyip ' +
          `tekrar dene. (${(sebep as Error).message})`,
        true,
      );
    }
  })();
}

/**
 * "/" tuşuna basınca arama kutusunu odaklar.
 * Kullanıcı zaten bir metin alanındayken devreye girmez.
 */
export function kisayolBagla(girdi: HTMLInputElement): void {
  document.addEventListener('keydown', (olay) => {
    if (olay.key !== '/' || olay.metaKey || olay.ctrlKey || olay.altKey) return;

    const hedef = olay.target;
    if (hedef instanceof HTMLElement) {
      const yazilabilir =
        hedef.isContentEditable ||
        hedef instanceof HTMLInputElement ||
        hedef instanceof HTMLTextAreaElement ||
        hedef instanceof HTMLSelectElement;
      if (yazilabilir) return;
    }

    olay.preventDefault();
    girdi.focus();
    girdi.select();
  });
}
