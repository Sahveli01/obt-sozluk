---
term: "Wei"
tr: ""
aliases: []
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Ether'in en küçük birimi: 1 ether = 10^18 wei. Zincirdeki bütün tutarlar wei cinsinden tam sayı olarak tutulur."
related: [ethereum, gwei, decimals, integer, transaction-fee, satoshi-birim]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Wei, [[ethereum|Ethereum]] ağının para birimi olan ether'in en küçük bölünebilir parçasıdır. Tanım gereği 1 ether = 10^18 wei'dir; yani bir ether'in arkasında on sekiz basamaklık bir bölünme vardır. Ethereum'un durumunda, işlemlerinde ve sözleşmelerinde bakiyeler ether cinsinden değil, her zaman wei cinsinden tutulur. Adı, dijital para üzerine erken çalışmalarıyla bilinen Wei Dai'ye atıfla verilmiştir. Wei bir birim adıdır, çevrilmez — metre ya da gram gibi.

## Nasıl çalışır?

Blockchain'ler ondalıklı sayı kullanmaz. [[floating-point|Kayan noktalı]] aritmetik farklı makinelerde farklı sonuç üretebilir, oysa ağdaki bütün düğümlerin aynı sonuca varması şarttır. Çözüm, parayı yeterince küçük bir tam sayı birimiyle saymaktır: protokol açısından "0,5 ether" diye bir şey yoktur, 500000000000000000 wei vardır.

Bu yüzden Ethereum üstündeki tutarlar her zaman [[integer|tam sayıdır]] ve bölme işlemlerinde kalan atılır. Aynı mantık token'larda da geçerlidir; orada bölünme derinliğini sözleşmenin [[decimals]] alanı belirler.

## Dikkat

Cüzdan arayüzleri sana ether gösterir, kod wei görür. Bir sözleşmeye miktar olarak `1` yazdığında 1 ether değil 1 wei göndermiş olursun ve aradaki fark on sekiz basamaktır. Kütüphanelerdeki `parseEther` ve `formatEther` gibi dönüştürücüler tam olarak bu hatayı önlemek için vardır; dönüşümü elle yapmaya kalkmak, unutulan bir sıfırla biten hataların klasik kaynağıdır.
