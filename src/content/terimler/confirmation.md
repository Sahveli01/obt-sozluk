---
term: "Confirmation"
tr: "Onay"
aliases: ["blok onayı", "confirmations"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: baslangic
short: "Bir işlemin bulunduğu bloğun üstüne kaç blok eklendiğini gösteren sayı; geri alınma ihtimalinin ölçüsüdür."
related: [transaction, block, finality, probabilistic-finality, chain-reorganization-reorg, block-height]
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

Onay, bir [[transaction|işlemin]] içinde bulunduğu [[block|bloğun]] üstüne kaç blok eklendiğini gösteren sayıdır. İşlem bloğa girdiği anda bir onay almış sayılır; üstüne gelen her yeni blok sayıyı bir artırır.

Bu sayı bir güvenlik ölçüsüdür. Ağın bu işlemi geri alabilmesi için üstündeki bütün blokları yeniden üretip ana zinciri geçmesi gerekir; iş her yeni blokla katlanarak zorlaşır.

## Benzetme

Kar yağışı gibi. Yere ilk düşen kar bir süpürgeyle silinir. Üstüne yarım metre daha yağdığında o ilk tabakaya dokunmak için bütün yığını kaldırman gerekir — ve kar yağmaya devam ettiği sürece asla yetişemezsin.

## Dikkat

"Kaç onay yeter" sorusunun evrensel bir cevabı yoktur. Tutar büyüdükçe beklenen onay sayısı artar; her zincirin ve her uygulamanın kendi eşiği vardır.

Onay ile kesinlik de aynı şey değildir. İş ispatı kullanan ağlarda güvence [[probabilistic-finality|olasılıksal]] kalır: geri alınma ihtimali sıfıra yaklaşır ama teknik olarak sıfır olmaz. Bazı ağlarsa belirli bir noktadan sonra protokol düzeyinde [[finality|kesinlik]] ilan eder; orada onay saymak yerine kesinleşme anını beklemek gerekir. Kesinleşmemiş bir işlem [[chain-reorganization-reorg|yeniden düzenlemeyle]] zincirden düşebilir.
