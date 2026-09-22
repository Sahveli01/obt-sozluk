---
term: "REST API"
tr: ""
aliases: ["restful"]
category: web
subcategory: "API'ler"
level: orta
short: "Veriyi adreslenebilir kaynaklar hâlinde sunan, ne yapılacağını HTTP metoduyla belirten yaygın API üslubu."
related: [api, endpoint, http-methods, http-status-code, graphql, json]
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

REST, bir [[api|API]] tasarlamanın en yaygın üslubudur. Temel fikri şudur: sistemdeki her şey bir "kaynak"tır ve her kaynağın kendi adresi vardır. Kullanıcı listesi bir kaynaktır, tek bir kullanıcı ayrı bir kaynaktır.

REST bir protokol değil, bir yaklaşımdır; kuralları [[http|HTTP]]'nin zaten var olan araçlarını olduğu gibi kullanmak üzerine kuruludur.

## Nasıl çalışır?

Adres neyden söz edildiğini, [[http-methods|metot]] ne yapılmak istendiğini söyler: `GET /kullanicilar/7` yedi numaralı kullanıcıyı getirir, `DELETE /kullanicilar/7` aynı kaynağı siler. Aynı adres, farklı fiil, farklı iş.

Cevap çoğunlukla [[json|JSON]] olarak döner ve sonucu [[http-status-code|durum kodu]] anlatır: 200 oldu, 404 böyle bir kaynak yok, 500 sunucu tarafında bir şey patladı.

Bu düzenin gücü öngörülebilirliktir. Bir kaynağın adresini bilen, diğerlerini tahmin edebilir. Zayıf tarafı ise ihtiyacın olan veri birkaç kaynağa dağılmışsa art arda birkaç istek yapman gerekmesidir; [[graphql|GraphQL]] tam bu noktaya cevap olarak çıktı.

## Örnek

```js
const cevap = await fetch('https://example.com/api/kullanicilar/7');
if (!cevap.ok) throw new Error('istek başarısız: ' + cevap.status);
const kullanici = await cevap.json();
console.log(kullanici.ad);
```

Tarayıcının [[fetch|fetch]] fonksiyonu adrese `GET` isteği atar; `cevap.ok` durum kodunun 200'ler aralığında olup olmadığını söyler.

## Dikkat

"RESTful" diye anılan API'lerin çoğu kuralların yalnızca bir kısmını uygular. Pratikte bu ad, "adresler kaynak gibi yazılmış ve metotlar anlamına uygun kullanılmış" demeye gelir; bir uygunluk belgesi değildir.

Adı bir standart adı ("representational state transfer") olduğu için Türkçeye çevrilmez. Bir de şu beklentiyi unutma: `GET` isteğinin hiçbir şeyi değiştirmemesi gerekir. Bu beklentiyi bozan bir uç nokta, araya giren önbellekler yüzünden bir gün hiç beklemediğin biçimde davranır.
