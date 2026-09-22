---
term: "API"
tr: "Uygulama Programlama Arayüzü"
aliases: []
category: web
subcategory: "API'ler"
level: baslangic
short: "Bir yazılımın dışarıya açtığı, başka yazılımların ondan neyi nasıl isteyebileceğini tanımlayan arayüz."
related: [endpoint, rest-api, http, client-web, server]
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

API, bir yazılımın dışarıya açtığı arayüzdür: başka bir programın ondan neyi, hangi biçimde isteyebileceğini ve karşılığında ne alacağını tanımlar.

İki taraf vardır. İsteği yapan tarafa [[client-web|istemci]] denir — kullanıcının önündeki program, örneğin tarayıcıdaki sayfa ya da telefondaki uygulama. İsteği karşılayan, veriyi tutan tarafa [[server|sunucu]] denir. API ikisi arasındaki anlaşmadır.

Asıl mesele API'nin neyi sakladığıdır: bir hava durumu servisinin veriyi nereden topladığını bilmen gerekmez. Tanımlı isteği yaparsın, tanımlı cevabı alırsın.

## Benzetme

Lokantada mutfağa girmezsin. Garson elinde menüyle gelir ve o menü, isteyebileceğin şeylerin tam listesidir. "Üç numara" dersin, tabak önüne gelir; mutfakta kimin ne yaptığını görmezsin, menüde olmayan bir şeyi de isteyemezsin. API'nin tanımı bu menüdür.

## Dikkat

"API" bazen bütün servisi anlatır, bazen tek bir adresi. Tek tek adreslere [[endpoint|uç nokta]] denir; API bunların tamamıdır.

API bir sözleşme olduğu için sağlayıcı bir alanın adını değiştirdiğinde onu kullanan bütün programlar aynı anda bozulur. API'lerin sürüm numarasıyla yayımlanmasının sebebi budur.
