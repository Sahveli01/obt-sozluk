---
term: "Block Height"
tr: "Blok yüksekliği"
aliases: ["blok yüksekliği"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Bir bloğun genesis bloğundan itibaren kaçıncı sırada olduğunu gösteren sayı; zincirin uzunluğunu da ifade eder."
related: [block, genesis-block, confirmation, block-time, chain-reorganization-reorg]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Blok yüksekliği, bir [[block|bloğun]] zincirin başından itibaren kaçıncı sırada olduğunu söyleyen sayıdır. [[genesis-block|Genesis bloğu]] sıfırıncıdır; ondan sonraki her blok sayıyı bir artırır. "Zincirin yüksekliği" dendiğinde ise o anda bilinen son bloğun numarası kastedilir.

Zincirde zaman çoğu yerde saatle değil yükseklikle ölçülür. Kilitler, ödül değişimleri ve ağ yükseltmeleri genellikle "şu tarihte" değil "şu yükseklikte" diye tanımlanır, çünkü yükseklik bütün düğümlerde aynıdır; saat ise değildir.

## Benzetme

Bir apartmanın kat numaraları gibi. Genesis zemin kattır, her yeni blok üstüne çıkılan bir kattır. Birine "kaçıncı kattasın" diye sormak "saat kaç" diye sormaktan daha kesin bir cevap verir, çünkü bina herkes için aynı binadır.

## Dikkat

Yükseklik benzersiz bir kimlik değildir. Kısa süreliğine aynı yükseklikte iki farklı blok var olabilir; biri [[chain-reorganization-reorg|yeniden düzenlemeyle]] elenir. Bir bloğu kesin olarak belirtmek istiyorsan yüksekliğini değil özetini kullan.

Yükseklik farkı zaman farkı da değildir. İki blok arasındaki gerçek süre ortalamanın altında ya da üstünde olabilir; aradaki fark sana yalnızca kaç [[confirmation|onay]] biriktiğini söyler.
