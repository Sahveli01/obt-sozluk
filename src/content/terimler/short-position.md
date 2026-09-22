---
term: "Short Position"
tr: "Kısa pozisyon"
aliases: ["açığa satış"]
category: defi
subcategory: "Türevler"
level: baslangic
short: "Dayanak varlığın fiyatı düşerse kazanan, yükselirse kaybeden pozisyon."
related: [long-position, perpetual-futures-perps, margin, liquidation, hedging]
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

Kısa pozisyon, [[long-position|uzun pozisyonun]] tersidir: fiyat düşerse kazanır, yükselirse kaybeder. Klasik yolu ödünç almaktır — varlığı ödünç alıp satarsın, sonra geri almak ve iade etmek zorundasındır. Türev tarafında ödünç alma adımı yoktur; doğrudan aşağı yönlü bir sözleşme açarsın.

Kısa pozisyon yalnızca düşüşe oynamak için kullanılmaz. Elinde bir varlık varken ters yönde açılan kısa pozisyon, o varlığın fiyat riskini azaltmaya yarar ([[hedging]]).

## Benzetme

Arkadaşından ödünç aldığın bisikleti satmak gibi. Bir gün aynı bisikleti alıp ona geri vermen gerekir. O gün bisiklet ucuzlamışsa aradaki fark sende kalır; pahalanmışsa aradaki farkı cebinden koyarsın. Arkadaşın bisikletini ister, fiyatın ne olduğu onu ilgilendirmez.

## Dikkat

İki pozisyon birbirinin aynası gibi görünür ama riskleri simetrik değildir. Bir varlığın fiyatı en fazla sıfıra iner, yani uzun pozisyonda kaybın koyduğun tutarla sınırlıdır. Yukarı doğru ise bir üst sınır yoktur: kısa pozisyonda kayıp teoride sınırsızdır.

Uygulamada sınırsıza kadar beklenmez, çünkü teminatın ([[margin]]) tükendiği anda pozisyon kapatılır ([[liquidation]]). Yani kaybın pratikteki sınırı fiyatın nereye gittiği değil, teminatının ne kadar dayandığıdır.
