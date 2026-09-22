---
term: "Design System"
tr: "Tasarım sistemi"
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "Bir ürünün görünüm ve davranış kararlarının, ortak kurallar ve hazır bileşenler hâlinde tek yerde toplanması."
related: [design-token, component, figma, css, responsive-design]
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

Tasarım sistemi, bir ürünün arayüz kararlarının ortak ve yazılı hâlidir: hangi renkler kullanılır, yazı boyutları hangi ölçekten seçilir, boşluklar hangi aralıklarla artar, düğmenin kaç türü vardır ve hangisi ne zaman kullanılır.

Tek bir ekranın tasarımı değildir; bütün ekranların uyacağı bir anlaşmadır. İki parçası vardır: kararların kendisi — kurallar, adlandırmalar, kullanım örnekleri — ve o kararları taşıyan hazır [[component|bileşenler]].

## Nasıl çalışır?

Sistem yoksa her ekranı yapan kişi kendi rengini ve kendi boşluğunu seçer; ürün zamanla birbirine benzemeyen parçalar yığınına döner. Sistem bu kararları bir kez verip tekrar tekrar kullanmaya yarar. "Bu düğme ne renk olsun" sorusu her ekranda yeniden tartışılmaz, çünkü cevabı bir yerde durur.

Kararlar koda geçerken adlandırılmış değerlere dönüşür; bunlara [[design-token|tasarım token'ı]] denir. Bileşenler [[css|CSS]] içine renk kodu yazmak yerine bu adları kullanır — böylece karar değiştiğinde bileşenlere dokunulmaz.

Tasarım tarafı genellikle [[figma|Figma]] gibi bir araçta, kod tarafı bir bileşen kütüphanesinde durur. Sistemin işe yaraması iki tarafın aynı adları kullanmasına bağlıdır.

## Dikkat

Tasarım sistemi bir dosya değil, sürdürülen bir anlaşmadır: güncellenmiyorsa ya da kimse uymuyorsa ürünü değil yalnızca arşivi düzenler.

Küçük bir projeye baştan büyük bir sistem kurmak da gereksizdir. Birkaç token, birkaç bileşen ve [[responsive-design|dar ekran]] için birkaç kuralla başlayıp ihtiyaç doğdukça büyütmek daha yaygın bir yoldur.
