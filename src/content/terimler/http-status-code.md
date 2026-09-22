---
term: "HTTP Status Code"
tr: "Durum kodu"
aliases: ["status code"]
category: web
subcategory: "İnternet temelleri"
level: baslangic
short: "Sunucunun cevabının başında duran, isteğin nasıl sonuçlandığını söyleyen üç haneli sayı."
related: [http-response, http, http-request, http-methods, browser]
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

Durum kodu, sunucunun [[http-response|cevabının]] en başında duran üç haneli sayıdır ve isteğin nasıl sonuçlandığını söyler. İlk hanesi kodun ailesini belirtir: `2xx` başarılı, `3xx` başka bir adrese yönlendirme, `4xx` istekte bir sorun var, `5xx` sunucu tarafında bir sorun var.

En sık görülenler `200` (tamam), `301` (kalıcı olarak taşındı), `403` (yetkin yok), `404` (böyle bir kaynak yok) ve `500` (sunucuda beklenmedik hata).

## Benzetme

Kargo takip ekranındaki kısa durum satırları gibi: "dağıtıma çıktı", "adreste bulunamadı", "şubeye iade". Cümle kurmaz, olanı tek kalemde söyler; bundan sonra ne yapman gerektiğini de ona bakarak anlarsın.

## Örnek

```js
const cevap = await fetch('/api/terimler/url');

if (cevap.status === 404) {
  console.log('Böyle bir terim yok');
} else if (!cevap.ok) {
  console.log('Sunucu tarafında sorun:', cevap.status);
}
```

## Dikkat

`4xx` ile `5xx` ayrımı hatayı nerede arayacağını söyler: ilkinde istek yanlıştır, ikincisinde sunucu. Bu ayrımı atlamak, `404` dönen bir isteğin sebebini saatlerce sunucu günlüklerinde aramaya yol açar.
