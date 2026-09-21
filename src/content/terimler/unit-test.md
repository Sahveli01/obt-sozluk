---
term: "Unit Test"
tr: "Birim test"
aliases: ["birim test", "unit testing"]
category: araclar
subcategory: "Test ve kalite"
level: baslangic
short: "Programın tek bir küçük parçasını, çevresinden ayırarak deneyen hızlı test."
related: [software-testing, integration-test, mock, test-coverage, test-driven-development-tdd]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Birim test, programın tek bir küçük parçasını — genelde tek bir [[function|fonksiyonu]] — çevresinden ayırarak deneyen testtir. Parçaya belli bir girdi verilir, çıktının ne olması gerektiği yazılır, makine ikisini karşılaştırır.

Birim testler hızlı ve çoktur; binlercesi saniyeler içinde çalışır. Bu yüzden [[software-testing|yazılım testi]] piramidinin en geniş basamağıdır. Bir birim test kırmızı yandığında nereye bakacağını da bilirsin: hata, test ettiğin o küçük parçanın içindedir.

Parçanın dış bağımlılıkları varsa (veritabanı, ağ isteği, saat) bunlar testte gerçek hâlleriyle kullanılmaz; yerlerine [[mock|mock]] konur. Amaç, testin yalnızca o parçanın kendi davranışını ölçmesidir.

## Benzetme

Elektrikçi, anahtarı duvara monte etmeden önce tezgâhta tek başına dener: uçlara akım verir, düğmeye basar, lambanın yanıp söndüğüne bakar. Duvardaki tesisatın durumu o an konu değildir. Sorulan tek soru şudur: bu parça kendi başına doğru çalışıyor mu?

## Örnek

Vitest sözdizimiyle, iki sayıyı toplayan bir fonksiyonun birim testi:

```js
import { describe, it, expect } from 'vitest';
import { topla } from './topla.js';

describe('topla', () => {
  it('iki pozitif sayıyı toplar', () => {
    expect(topla(2, 3)).toBe(5);
  });

  it('negatif sayıyla çalışır', () => {
    expect(topla(-1, 1)).toBe(0);
  });
});
```

## Dikkat

Birim test her şeyi kanıtlamaz. Bütün parçalar tek tek doğru çalışırken sistem yine bozuk olabilir; parçaların arasındaki uyum ayrı bir testin konusudur. Ayrıca bir testin yalnızca kodu çalıştırması yetmez — sonucu gerçekten bir beklentiyle karşılaştırmıyorsa o test hiçbir şey kontrol etmiyor demektir.
