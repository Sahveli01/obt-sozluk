---
term: "Total Supply"
tr: "Toplam arz"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: baslangic
short: "Bir token'dan şu an var olan miktar: bugüne kadar basılmış olanlardan yakılmış olanlar çıkarıldığında geriye kalan sayı."
related: [max-supply, circulating-supply, token-burn, mint, tokenomics]
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

Total supply, bir token'dan **şu anda var olan** toplam miktardır. Hesabı tek satırdır: bugüne kadar basılmış her token, eksi kalıcı olarak yakılmış her token.

Bu sayı sabit değildir. Yeni [[mint|basım]] yapıldıkça büyür, [[token-burn|yakma]] yapıldıkça küçülür. Token sözleşmesine sorarsan sana bu sayıyı verir; `totalSupply`, yaygın token standartlarının zorunlu alanlarından biridir.

## Benzetme

Bir kafenin elindeki bardak sayısı gibi. Açılışta beş yüz bardak alınmış, zaman içinde kırılanlar çöpe gitmiş, sonradan yenileri eklenmiş. "Şu an kaç bardağımız var" sorusunun cevabı ne "bugüne kadar toplam kaç bardak aldık"tır ne de "şu anda kaç bardak masalarda". Üçü üç ayrı sayıdır ve karıştırıldığında hesap tutmaz.

## Dikkat

Arz üçlüsü sürekli birbirine karışır:

- **Total supply** şu an var olan miktardır.
- [[max-supply|Max supply]] protokolün izin verdiği üst sınırdır; total supply ona doğru büyür ve her token'da böyle bir sınır bulunmaz.
- [[circulating-supply|Circulating supply]] var olanların serbestçe el değiştirebilen kısmıdır; kilitli ve hazinede bekleyen token'lar dışarıda kalır.

Yani total supply her zaman circulating supply'dan büyük ya da ona eşittir; varsa max supply'dan da küçük ya da ona eşittir.
