---
term: "HTTP"
tr: ""
aliases: []
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Tarayıcı ile sunucu arasındaki alışverişi yürüten, metin tabanlı ve her isteği birbirinden bağımsız sayan protokol."
related: [http-request, http-response, http-methods, https, browser, server]
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

HTTP, web'in üstünde çalıştığı kuraldır: bir [[client-web|istemcinin]] — yani senin makinendeki [[browser|tarayıcının]] — uzaktaki bir [[server|sunucudan]] bir şey istemesini ve sunucunun buna karşılık vermesini düzenler. Sayfalar, görseller, [[api|API]] cevapları; tarayıcının aldığı hemen her şey bu kuralla taşınır.

İki özelliği baştan bilinirse gerisi kolay gelir. HTTP metin tabanlıdır: gidip gelen mesajlar insanın okuyabileceği satırlardan oluşur. Ve durumsuzdur: sunucu, iki isteği birbirine bağlayan bir hafıza tutmak zorunda değildir.

## Nasıl çalışır?

Alışverişi her zaman istemci başlatır. İstemci bir [[http-request|istek]] gönderir; içinde ne yapmak istediğini söyleyen bir [[http-methods|metot]], hangi kaynağı istediğini söyleyen bir yol, ek bilgileri taşıyan başlıklar ve gerekiyorsa bir gövde bulunur. Sunucu bir [[http-response|cevapla]] karşılık verir: bir [[http-status-code|durum kodu]], başlıklar ve çoğu zaman bir gövde.

Durumsuzluk, sunucunun seni kendiliğinden hatırlamadığı anlamına gelir. Kim olduğunu her istekte yeniden söylemen gerekir; [[cookie|çerezler]] ve [[session|oturumlar]] tam da bu boşluğu doldurmak için vardır.

Protokolün sonraki sürümleri (HTTP/2, HTTP/3) bu mantığı değiştirmez; aynı istek ve cevapları hat üstünde daha verimli taşımanın yollarıdır.

## Dikkat

HTTP'nin kendisi şifreleme içermez. Mesajlar düz metin olarak gider; yol üstündeki bir cihaz bunları okuyabilir ve değiştirebilir. Bu yüzden web'de protokolün şifreli bir kanal üstünden taşınan hâli, yani [[https|HTTPS]] kullanılır.
