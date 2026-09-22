---
term: "APR"
tr: ""
aliases: ["annual percentage rate"]
category: defi
subcategory: "Temeller"
level: orta
short: "Bileşik getiriyi hesaba katmadan, bir getirinin ya da borçlanma maliyetinin yıllık orana çevrilmiş hâli."
related: [apy, interest-rate-model, utilization-rate, lending-protocol, real-yield]
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

APR, *Annual Percentage Rate* kısaltmasıdır: bir getirinin ya da borçlanma maliyetinin yıllık orana çevrilmiş hâli. Ayırt edici yanı şudur: kazanılan tutarın yeniden yatırılmadığı varsayılır, yani bileşiklenme hesaba katılmaz.

Kısaltmanın Türkçede yerleşik bir karşılığı yok; İngilizce hâliyle kullanılır.

## Nasıl çalışır?

Hesap, dönemsel oranın yıl içindeki dönem sayısıyla çarpılmasıdır. Günlük bir oran varsa yıllık APR bunun 365 katıdır, haftalıksa 52 katı. Formülde bileşiklenme yer almadığı için APR sade ve karşılaştırması kolay bir sayıdır.

DeFi'de bu oran bir taahhüt değildir. [[lending-protocol|Borç verme protokollerinde]] faiz, havuzun ne kadarının ödünç alındığına bakan bir [[interest-rate-model|faiz modeliyle]] belirlenir; [[utilization-rate|kullanım oranı]] değiştikçe oran da blok blok değişir. Takas havuzlarında ise APR, yakın geçmişte toplanmış ücretlerden geriye dönük olarak hesaplanıp yıllığa çevrilir.

## Dikkat

APR ile [[apy|APY]] arasındaki tek fark bileşiklenmedir: APR kazancın yeniden yatırılmadığını varsayar, APY yatırıldığını. Aynı pozisyon bu yüzden iki farklı sayı olarak ilan edilebilir ve hangisine baktığını bilmeden ikisini yan yana koyamazsın.

İkinci nokta: ekranda gördüğün oran o anın durumuna göre hesaplanır. Geçmişte kazanılmış bir getiri değildir, yarın aynı kalacağının sözü de değildir; havuza para girip çıktıkça ya da talep değiştikçe oran da değişir.

Üçüncüsü: ödülün bir kısmı protokolün kendi token'ıyla veriliyorsa oran o token'ın hesaplama anındaki fiyatını içerir. [[real-yield|Getirinin nereden geldiği]] sorusu tam olarak buradan çıkar.
