---
term: "Component"
tr: "Bileşen"
aliases: []
category: web
subcategory: "Frontend"
level: baslangic
short: "Arayüzün, görünümü ve davranışıyla birlikte bir kez tanımlanıp birçok yerde yeniden kullanılan parçası."
related: [props, state-frontend, react, design-system, html]
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

Bileşen, arayüzün tek başına tanımlanmış bir parçasıdır: bir düğme, bir kart, bir arama kutusu. Parçanın nasıl görüneceği ve neye nasıl tepki vereceği bir kez yazılır, sonra sayfanın istediğin yerinde tekrar tekrar kullanılır.

Bileşenler iç içe geçer: kartlar bir listeyi, liste bir sayfayı kurar. Bu fikir tek bir araca ait değildir — [[react|React]] gibi kütüphaneler onu merkeze alır, ama sade [[html|HTML]] ile çalışırken de arayüzü parçalara bölersin.

## Benzetme

Lego parçası gibi. Parçanın kalıbı bir kez çıkarılır, sonra aynı parçadan yüzlercesi üretilir. Nereye takacağına sen karar verirsin; parçanın kendi şekli her takıldığı yerde aynıdır. Birkaç parça birleşince bir duvar, duvarlar birleşince bir ev olur — ama en küçük parça hâlâ o tek parçadır.

## Dikkat

Bileşen ikiye ayrılır: dışarıdan aldığı, kullanıldığı yere göre değişen girdiler ([[props|props]]) ve kendi içinde zaman içinde değişen veri ([[state-frontend|state]]). Bu ayrım, aynı parçayı farklı yerlerde yeniden kullanabilmeni sağlayan şeydir.

Bölmenin dozu da önemlidir. Bir ekranın tamamını tek bir dev bileşene yazmak da, her yazıyı ayrı bir bileşen yapmak da kodu okunmaz hâle getirir; ölçü, parçanın tek bir işi olup olmadığıdır.
