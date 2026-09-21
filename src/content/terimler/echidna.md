---
term: "Echidna"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: ileri
short: "Sözleşmeye rastgele işlem dizileri göndererek yazdığın özelliğin bozulduğu bir örnek arayan fuzzing aracı."
related: [fuzzing, invariant-testing, slither, formal-verification, smart-contract-audit]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Echidna, akıllı sözleşmeler için özellik tabanlı bir [[fuzzing|fuzzing]] aracıdır. Ona tek tek test senaryosu yazmazsın; sözleşme her ne yaparsa yapsın doğru kalması gereken bir koşul yazarsın. Echidna da bu koşulu bozacak bir işlem dizisi bulmaya çalışır.

Örnek koşullar: "toplam arz, bakiyelerin toplamına eşit kalmalı", "havuzdaki iki varlığın çarpımı hiçbir takas sonrası azalmamalı", "sahibi olmayan bir adres para çekemez".

## Nasıl çalışır?

Koşulu [[solidity|Solidity]] ile, test sözleşmesinin içinde yazarsın. İki yaygın biçim vardır: belirli bir ad kalıbıyla yazılmış ve doğru/yanlış döndüren işlevler, ya da gövdesinde `assert` bulunan işlevler. Araç, sözleşmenin dışarı açık işlevlerini rastgele sıralarla ve rastgele argümanlarla çağırır; her adımdan sonra koşulun hâlâ geçerli olup olmadığına bakar.

Bir karşı örnek bulduğunda sonuç ham hâliyle uzun olur — onlarca çağrı. Araç bunu küçültmeye çalışır: aynı ihlali üreten daha kısa ve daha basit bir diziye indirger, böylece elindeki hata raporu okunabilir olur.

Arama tamamen rastgele değildir; hangi çağrıların kodun yeni bölgelerine ulaştığını izleyip aramayı oralara yoğunlaştıracak biçimde yönlendirilebilir. Çalışma süresi, çağrı sayısı ve başlangıç durumu yapılandırmayla belirlenir.

## Dikkat

Echidna "hata yok" demez, "verdiğim bütçe içinde karşı örnek bulamadım" der. Bu bir kanıt değildir; [[formal-verification|biçimsel doğrulamanın]] aksine tüm durum uzayını taramaz.

Aracın kalitesi yazdığın koşulun kalitesidir. Zayıf ya da yanlış bir özellik, saatlerce koşup hiçbir şey bulmaz ve sana yanlış bir güven verir. Özelliğin gerçekten bozulabildiğini görmek için kodda bilerek bir hata açıp aracın onu yakaladığını doğrulamak iyi bir alışkanlıktır.

Fuzzing, [[slither|statik analizin]] ve insan denetiminin yerine geçmez; farklı türde hataları yakalayan tamamlayıcı bir katmandır.
