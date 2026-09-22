---
term: "Endpoint"
tr: "Uç Nokta"
aliases: ["uç nokta"]
category: web
subcategory: "API'ler"
level: baslangic
short: "Bir API'nin tek bir işe ayrılmış adresi; istek tam olarak buraya gider."
related: [api, url, http-methods, rest-api, json-rpc]
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

Endpoint, bir [[api|API]]'nin tek bir işe ayrılmış adresidir. `https://example.com/api/kullanicilar` ile `https://example.com/api/urunler` aynı sunucuda durur ama farklı uç noktalardır: biri kullanıcı listesini, diğeri ürün listesini döndürür.

Bir uç nokta iki parçadan okunur. Adresin kendisi ([[url|URL]]) neyden söz edildiğini, isteğin yöntemi ([[http-methods|HTTP metodu]]) o şeye ne yapılmak istendiğini söyler.

## Benzetme

Apartman girişindeki zil paneli gibi. Binanın sokakta tek bir adresi vardır ama paneldeki her düğme başka bir daireyi çalar. Yanlış düğmeye basarsan kapı yine açılır, sadece karşına başka biri çıkar. Sunucu binadır, uç noktalar düğmelerdir.

## Dikkat

Blockchain dünyasında "RPC endpoint" tek bir işin değil, bütün bir düğümün adresi anlamında kullanılır. Klasik web API'lerinde her iş için ayrı adres vardır; [[json-rpc|JSON-RPC]]'de ise tek adrese farklı metot adlarıyla yazılır. İki kullanım da aynı kelimeyi taşır, ayrımı akılda tutmak karışıklığı önler.
