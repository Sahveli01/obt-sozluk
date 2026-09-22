---
term: "WebSocket"
tr: ""
aliases: ["web socket"]
category: web
subcategory: "API'ler"
level: orta
short: "Tarayıcı ile sunucu arasında açık kalan, iki tarafın da istediği an veri gönderebildiği bağlantı."
related: [http, json-rpc, webhook, client-web, server, latency]
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

WebSocket, tarayıcı ile sunucu arasında bir kez kurulup açık kalan bir bağlantıdır. Sıradan [[http|HTTP]] isteklerinde konuşmayı hep [[client-web|istemci]] başlatır — yani kullanıcının önündeki program: sorarsın, cevap gelir, iş biter. WebSocket'te hat açık kaldığı için veriyi tutan taraf, yani [[server|sunucu]], kendiliğinden de veri gönderebilir.

## Nasıl çalışır?

Bağlantı sıradan bir HTTP isteğiyle başlar. İstemci "bu bağlantıyı WebSocket'e yükselt" der; sunucu kabul ederse aynı bağlantı protokol değiştirir ve iki yönlü bir kanala dönüşür. Adres `ws://`, güvenli hâliyle `wss://` ile yazılır.

Kazanç [[latency|gecikmede]]dir. Yeni veri olup olmadığını saniyede bir sormak (buna "polling" denir) hem boş istek üretir hem de haberi ancak bir sonraki soruda verir. Açık bağlantıda ise veri oluştuğu anda düşer.

Blockchain tarafındaki en yaygın kullanımı aboneliktir: yeni blokları ya da bir sözleşmenin ürettiği [[event-smart-contract|olayları]] tek tek sormak yerine bir kez abone olursun, düğüm her yenisini kendiliğinden yollar. [[json-rpc|JSON-RPC]] istekleri de aynı bağlantı üzerinden taşınabildiği için tek kanal hem soru sormaya hem haber almaya yeter.

## Örnek

```js
const soket = new WebSocket('wss://example.com/akis');
soket.onopen = () => soket.send(JSON.stringify({ abone: 'yeni-blok' }));
soket.onmessage = (olay) => console.log('gelen:', olay.data);
soket.onclose = () => console.log('bağlantı kapandı');
```

`onmessage` her yeni mesajda yeniden çalışır; sen bir daha istek yapmazsın.

## Dikkat

Açık bağlantı kopar. Ağ değişir, telefon uykuya geçer, sunucu yeniden başlar. Bu yüzden WebSocket kullanan her uygulamanın yeniden bağlanma mantığı olmalıdır; üstelik kopukluk sırasında kaçan mesajlar kendiliğinden geri gelmez, eksik kalan veriyi ayrıca sorman gerekir.

[[webhook|Webhook]] ile karıştırılır. Farkı şurada: WebSocket senin açtığın ve sen kapatana kadar yaşayan bir hattır, mesajlar o hattın içinde akar.
