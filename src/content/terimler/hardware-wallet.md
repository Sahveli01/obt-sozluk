---
term: "Hardware Wallet"
tr: "Donanım cüzdanı"
aliases: ["donanim cuzdani"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Özel anahtarı kendi içinde üreten ve dışarı çıkarmadan işlem imzalayan, tek işe ayrılmış küçük cihaz."
related: [cold-wallet, seed-phrase, private-key, blind-signing, signing-request]
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

Donanım cüzdanı, tek işi anahtar saklamak ve imzalamak olan küçük bir cihazdır. [[private-key|Özel anahtar]] cihazın içinde üretilir ve olağan kullanımda cihazdan hiç çıkmaz; bilgisayara bağlandığında dışarı çıkan şey anahtar değil, yalnızca o işleme ait imzadır. Böylece bilgisayara bulaşmış bir zararlı yazılım anahtarı kopyalayamaz.

## Benzetme

Kart okuyucuya PIN girmek gibi: PIN dükkânın bilgisayarına değil, cihazın kendi tuş takımına yazılır ve dışarıya yalnızca "onaylandı" bilgisi çıkar.

## Nasıl çalışır?

Cüzdan yazılımı işlemi hazırlar ve cihaza gönderir. Cihaz işlemin özetini — kime, ne kadar, hangi ağda — kendi ekranında gösterir; sen üzerindeki düğmeyle onaylarsın; cihaz imzayı üretip geri verir; imzalı işlemi ağa bilgisayar yayınlar.

Kritik nokta cihazın kendi ekranı ve kendi düğmesidir. Bilgisayarın ekranındaki adres değiştirilmiş olsa bile cihazın ekranında işlemin gerçek hâli görünür. Bu yüzden onaydan önce okunması gereken yer bilgisayar değil, cihazın ekranıdır ([[signing-request|imza isteği]]).

## Dikkat

Donanım cüzdanı her riski kapatmaz. Ekranda ne yazdığını anlamadan onay veriyorsan ([[blind-signing|kör imzalama]]) zararlı bir işlemi kendi elinle imzalayabilirsin; cihaz anahtarın kopyalanmasını engeller, kötü kararı engellemez.

Cihaz kaybolduğunda kurtarma yine [[seed-phrase|kurtarma ifadesiyle]] yapılır; asıl sır cihaz değil o ifadedir. Kurulumda kelimeleri cihazın kendisi üretmelidir — kutudan hazır kelime listesiyle çıkan ya da güvenilmeyen bir kanaldan alınan bir cihaz, anahtarı başkasının bildiği anlamına gelebilir.
