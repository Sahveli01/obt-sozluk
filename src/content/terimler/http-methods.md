---
term: "HTTP Methods"
tr: "HTTP metotları"
aliases: ["http verbs"]
category: web
subcategory: "İnternet temelleri"
level: orta
short: "Bir isteğin sunucudan ne yapmasını istediğini söyleyen GET, POST, PUT, PATCH, DELETE gibi fiiller."
related: [http-request, http, rest-api, fetch, http-status-code]
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

HTTP metodu, bir [[http-request|isteğin]] sunucudan ne yapmasını istediğini söyleyen fiildir. Aynı adrese gönderilen iki istek, yalnızca metotları farklı olduğu için bambaşka iki anlam taşır: `GET /terimler` listeyi okumak, `POST /terimler` listeye yeni bir kayıt eklemek demektir.

En çok kullanılanlar şunlardır: `GET` okur, `POST` yeni bir şey oluşturur, `PUT` bir kaynağı baştan yazar, `PATCH` bir kısmını değiştirir, `DELETE` siler.

## Nasıl çalışır?

Metotların iki özelliği ayrıca tanımlanmıştır. Güvenli sayılan metotlar sunucuda hiçbir şeyi değiştirmez; `GET` böyledir. Aynı isteği tekrar tekrar göndermenin sonucu değiştirmediği metotlara ise idempotent denir: `PUT` ve `DELETE` böyledir, ikinci kez çalıştırmak yeni bir şeye yol açmaz. `POST` ikisi de değildir — iki kez gönderilen bir `POST` iki kayıt oluşturabilir.

Bu ayrım kâğıt üstünde kalmaz. Tarayıcılar, ara sunucular ve [[cdn|CDN]]'ler `GET` cevaplarını [[cache|önbelleğe]] alabilir; bağlantı koptuğunda güvenli ve idempotent istekleri kendiliğinden tekrarlayabilir.

## Örnek

```js
await fetch('/api/terimler', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ terim: 'URL', seviye: 'baslangic' }),
});
```

## Dikkat

Veri değiştiren bir işlemi `GET` ile yapmak yaygın ve pahalı bir hatadır. Sayfadaki bağlantıları önceden ziyaret eden bir araç ya da bir tarama motoru, "sil" bağlantısına da girer. Değiştiren işlem `GET` dışında bir metotla yapılır.
