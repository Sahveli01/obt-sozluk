---
term: "Token Burn"
tr: "Token yakma"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: baslangic
short: "Token'ları kimsenin erişemeyeceği bir adrese göndererek ya da bakiyeden silerek kalıcı olarak dolaşım dışına çıkarmak."
related: [total-supply, token-deflation, mint, eip-1559, buyback]
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

Token burn, token'ları kalıcı olarak kullanılamaz hâle getirmektir. İki yolu vardır: sözleşmedeki bir `burn` fonksiyonu bakiyeyi siler ve [[total-supply|toplam arzı]] o kadar düşürür; ya da token'lar özel anahtarı hiç kimsede olmayan bir adrese gönderilir.

Yakma, [[mint|basımın]] tersidir. Biri arza ekler, diğeri çıkarır; ikisi de aynı sözleşmenin işidir.

## Benzetme

Dibi kaynakla kapatılmış, kapağı ve kilidi olmayan bir kumbara gibi. İçine attığın para hâlâ orada durur, kaybolmaz — ama ne sen ne de bir başkası bir daha çıkarabilir. Bir şeyin dolaşımdan çıkması için yok olması gerekmez; erişilemez olması yeter.

## Dikkat

Yakma arzı azaltır. Buradan "öyleyse değer artar" sonucu çıkmaz: fiyat, arzın yanında talebin de belirlediği bir şeydir ve yakma talep tarafında hiçbir şeyi değiştirmez. Bu sözlük yakmanın fiyata etkisi konusunda hüküm vermez, yalnızca mekanizmayı anlatır.

İkinci nokta: "yakıldı" denen her şey yakılmış olmaz. Token'lar bazen yalnızca bir sözleşmeye kilitlenir ya da proje cüzdanında bekletilir; bunlar geri alınabilir. Kontrol edilecek şey, gönderilen adresin gerçekten erişilemez olup olmadığıdır.
