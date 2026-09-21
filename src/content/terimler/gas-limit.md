---
term: "Gas Limit"
tr: "Gas limiti"
aliases: ["gas limiti"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Bir işlemin harcamasına izin verilen en yüksek gas miktarı; aynı ad blok başına üst sınır için de kullanılır."
related: [gas, gas-price, gas-estimation, transaction-fee, revert, blockspace]
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

Gas limit, bir işlem gönderirken koyduğun üst sınırdır: "bu işlem en fazla şu kadar [[gas]] harcayabilir". İşlem daha azını harcarsa aradaki fark sana kalır. Sınıra dayanırsa işlem orada kesilir, yaptığı bütün değişiklikler [[revert|geri alınır]], ama harcanan gas geri gelmez.

## Benzetme

Kredi kartına koydurduğun harcama limiti gibidir. Limit, ay sonunda ne ödeyeceğini belirlemez; sadece kontrolden çıkmayı engelleyen bir tavandır. Limiti yükseltmekle harcamaların artmaz, limiti çok düşük tutarsan da gerçekten yapman gereken bir ödeme yarıda kalır.

## Nasıl çalışır?

Bir işlemin ne kadar gas harcayacağı ancak çalıştırılınca kesinleşir. Bu yüzden cüzdanlar işlemi önce bir düğümde deneme amaçlı çalıştırır ([[gas-estimation|gas tahmini]]) ve çıkan sayının üzerine bir pay ekleyerek limiti belirler. Pay gerekir, çünkü işlem sıraya girene kadar zincirin durumu değişebilir ve gerçek maliyet biraz kayabilir.

Limiti yüksek tutmak ücreti artırmaz; ücret harcanan gas üzerinden hesaplanır. Ama bedelsiz de değildir: gönderenin bakiyesinde, limitin tamamını karşılayacak kadar para bulunmak zorundadır, yoksa işlem hiç yola çıkamaz.

## Dikkat

Aynı terim iki ayrı yerde geçer. İşlem seviyesindeki gas limit yukarıda anlatılandır. Blok seviyesindeki gas limit ise tek bir bloğa toplam ne kadar iş sığabileceğini belirler; [[blockspace|blok alanını]] kıt bir kaynak yapan şey tam olarak budur. "Out of gas" hatası aldığında sorun genellikle birincisidir: konulan tavan, işlemin gerçek maliyetinin altında kalmıştır.
