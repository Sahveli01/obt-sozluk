---
term: "Entropy"
tr: "Entropi"
aliases: ["entropi"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Bir değerin ne kadar öngörülemez olduğunun ölçüsü; kaç farklı ihtimal arasından seçildiğini anlatır."
related: [randomness, private-key, seed-phrase, bip-39, bit]
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

Entropi, bir değerin tahmin edilmesinin ne kadar zor olduğunun ölçüsüdür. Değerin kendisine bakarak anlaşılmaz; **nasıl seçildiğine** bakarak anlaşılır. Soru hep aynıdır: bu değer kaç ihtimal arasından, ne kadar eşit şansla seçildi?

## Benzetme

Tombala torbası gibi. Torbadan çekilen taş her iki durumda da rastgeledir, ama içinde iki taş olan torbayla doksan taş olan torba aynı şey değildir. Birinde tahmin yürütmek anlamlıdır, diğerinde değildir. Entropi taşın kendisini değil, torbanın büyüklüğünü ölçer.

## Nasıl çalışır?

Ölçü birimi [[bit|bit]]'tir ve her ek bit ihtimal sayısını ikiye katlar: `n bit entropi = 2^n ihtimal`. Burada `2^n` demek, 2'yi n kere kendisiyle çarpmak demektir — 128 bit entropi, iki üzeri yüz yirmi sekiz farklı ihtimal arasından seçim yapmak anlamına gelir.

Bu yüzden kriptografik anahtarların uzunluğu bit cinsinden konuşulur. Bir [[private-key|özel anahtarın]] güvenliği, o sayının kaç basamaklı olmasından değil, üretilirken gerçekten kaç ihtimal arasından seçildiğinden gelir.

Cüzdanlar da böyle kurulur: önce belirli miktarda entropi üretilir, sonra bu değer okunabilir kelimelere çevrilir ([[bip-39|BIP-39]]) ve o kelimeler [[seed-phrase|kurtarma kelimeleri]] olur.

## Dikkat

Entropi verinin içinde saklı bir özellik değildir. Rastgele **görünen** bir dizi, öngörülebilir bir kuralla üretildiyse entropisi düşüktür: doğum tarihinden, isimden ya da bilgisayarın saatinden türetilmiş bir anahtar ne kadar karışık görünürse görünsün küçük bir torbadan çekilmiştir.

Sonradan karıştırmak da entropi eklemez. Zayıf bir kaynağı başka bir fonksiyondan geçirmek ihtimal sayısını artırmaz, yalnızca aynı ihtimalleri başka sayılara eşler ([[randomness|rastgelelik]]).
