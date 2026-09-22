---
term: "Cliff"
tr: ""
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Vesting takviminin ilk eşiği: o tarihe kadar hiçbir token açılmaz, tarih geldiğinde o güne kadar biriken kısım bir anda açılır."
related: [vesting, token-unlock, allocation, circulating-supply]
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

Cliff, bir [[vesting]] takviminin başındaki bekleme eşiğidir. Eşik tarihine kadar hiçbir token hak edilmez. Tarih geldiğinde ise sıfırdan başlanmaz: o güne kadar birikmiş olan kısım tek seferde açılır ve takvim oradan itibaren normal akışına devam eder.

Kelimenin Türkçe karşılığı yerleşmedi; "uçurum" çevirisi anlamı taşımadığı için kullanılmaz.

## Benzetme

Kıdem tazminatındaki bir yıl şartı gibi. Bir iş yerinde on bir ay çalışıp ayrılan kişi kıdem tazminatına hak kazanmaz; on iki ayı doldurup ayrılan kişi geçmişe dönük olarak bir yılın tamamının karşılığını alır. Aradaki fark bir günlük emek değil, eşiğin geçilmiş olmasıdır.

## Nasıl çalışır?

Takvimde iki süre yan yana durur: cliff süresi ve toplam vesting süresi. Sözleşme her sorgulandığında önce "cliff tarihi geçti mi" diye bakar; geçmediyse hak edilen miktar sıfırdır. Geçtiyse hak ediş, takvimin başlangıcından o ana kadar geçen süreye göre hesaplanır — yani cliff gününde birikmiş olan kısım aniden görünür hâle gelir.

Amaç basittir: kısa sürede ayrılan birinin, kalış süresiyle orantısız bir pay almasını engellemek.

## Dikkat

Cliff'i kilit süresinin tamamıyla karıştırma. Cliff takvimin bitişi değil, ilk eşiğidir; eşik geçildikten sonra kalan token'lar hâlâ takvime bağlıdır ve yavaş yavaş açılmaya devam eder.

İkinci nokta: cliff tarihi, bir takvimdeki ilk ve genellikle tek seferde en büyük [[token-unlock|açılıştır]]. O gün [[circulating-supply|dolaşımdaki arz]] tek adımda artar. Bu tarihler sürpriz değildir — takvim duyurulduğu andan itibaren bilinir ve sözleşmeden okunabilir.
