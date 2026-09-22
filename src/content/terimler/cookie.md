---
term: "Cookie"
tr: "Çerez"
aliases: []
category: web
subcategory: "İnternet temelleri"
level: baslangic
short: "Sunucunun tarayıcıya saklattığı ve tarayıcının aynı siteye giden her istekte geri gönderdiği küçük veri parçası."
related: [session, http, browser, local-storage, authentication]
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

Çerez, sunucunun [[browser|tarayıcıya]] saklattığı küçük bir veri parçasıdır. Tarayıcı onu saklar ve aynı siteye giden her istekte kendiliğinden geri gönderir. [[http|HTTP]] sunucuyu her istekte unutkan bıraktığı için siteler seni ancak böyle hatırlayabilir.

## Benzetme

Otelde resepsiyonun eline tutuşturduğu oda kartı gibi. Kartın üstünde adın yazmaz, yalnızca bir numara vardır; kim olduğunu bilen kart değil, o numaraya karşılık gelen kayıttır. Sen kartı cebinde taşırsın ve her geçişte uzatırsın.

## Örnek

```js
document.cookie = 'tema=koyu; path=/; max-age=31536000; SameSite=Lax';
console.log(document.cookie); // "tema=koyu"
```

## Dikkat

Oturum çerezleri genellikle `HttpOnly` işaretiyle gönderilir. Bu işaretli çerezleri JavaScript okuyamaz, dolayısıyla `document.cookie` içinde görünmezler; sayfaya sızan kötü niyetli bir betiğin [[session|oturumu]] çalmasını zorlaştıran şey budur.

Çerezin kendisi bir takip aracı değildir. Takip, aynı çerezin birçok farklı sitede okunabilmesinden doğar; tarayıcılar da kısıtlamalarını bu ayrımın üstüne kurar.
