---
term: "Sampling (Top-p, Top-k)"
tr: "Örnekleme"
aliases: ["top-p", "top-k", "nucleus sampling"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin sıradaki kelimeyi hangi aday kümesinden seçeceğini daraltan ayarlar."
related: [temperature, max-tokens, token-ai, inference, llm-api]
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

Örnekleme, modelin sıradaki [[token-ai|token]] için ürettiği aday listesinden nasıl seçim yapacağını belirleyen işlemdir. Top-k ve top-p bu listeyi daraltmanın iki yaygın yoludur. [[temperature|Temperature]] seçimin ne kadar temkinli olacağını ayarlarken, bu iki ayar hangi adayların yarışa gireceğine karar verir. Farklı işler yaparlar ve genellikle birlikte kullanılırlar.

## Benzetme

İşe alımda kısa liste hazırlamak gibi. Top-k, "her ilanda en iyi beş adayı görüşürüm" demektir: sayı sabittir, havuz güçlü de olsa zayıf da olsa beş kişi girer. Top-p, "puanları toplandığında belirlediğim payı dolduran kadar adayı görüşürüm" demektir: bir aday açık ara öndeyse listede tek kişi kalır, adaylar birbirine yakınsa liste uzar.

## Nasıl çalışır?

Model her adımda bütün kelime dağarcığına bir ağırlık verir. Top-k, en yüksek ağırlıklı ilk k adayı bırakır ve gerisini eler. Top-p ise adayları yüksekten alçağa sıralar; ağırlıkları toplana toplana belirlenen orana ulaşılan yere kadar olanları bırakır. Nihai seçim, kalan adaylar arasından yapılır.

Pratik fark şudur: top-k sabit genişlikte bir pencere açar, top-p pencereyi duruma göre daraltıp genişletir. Model bir sonraki kelimeden çok eminse top-p kendiliğinden kısıtlar; emin değilse seçenekleri açık bırakır.

## Dikkat

Üç ayarı birden kısmak tekrarlayan, donuk metin üretir; üçünü birden açmak dağınık metin. Yaygın uygulama, top-p'yi makul bir yerde sabit bırakıp yalnızca temperature ile oynamaktır.

Bu ayarlar doğruluğu artırmaz. Model yanlış bir şey söyleyecekse aday listesini daraltmak onu düzeltmez; yalnızca hangi yanlışı söyleyeceğini daha öngörülebilir hâle getirir. Uzunluğu da belirlemezler — onun için [[max-tokens]] vardır.
