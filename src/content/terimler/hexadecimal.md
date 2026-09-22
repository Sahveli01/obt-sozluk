---
term: "Hexadecimal"
tr: "Onaltılık"
aliases: ["onaltılık", "hex"]
category: kriptografi
subcategory: "Temeller"
level: baslangic
short: "0-9 ve a-f karakterleriyle yazılan onaltı tabanlı sayı sistemi; bir baytı tam iki karakterle gösterir."
related: [binary, byte, encoding, base64, wallet-address]
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

Onaltılık, sayıları on altı farklı karakterle yazan sistemdir: `0`'dan `9`'a rakamlar, sonra `a`, `b`, `c`, `d`, `e`, `f`. Yani `f`, onluk sistemdeki 15'tir.

Neden tercih edildiği pratiktir. Bir onaltılık karakter tam olarak dört [[binary|ikili]] basamağa, iki karakter de tam olarak bir [[byte|bayta]] karşılık gelir. Bu yüzden zincirde gördüğün neredeyse her şey — [[wallet-address|adresler]], hash değerleri, imzalar — onaltılık yazılır. Başlarındaki `0x` öneki sayının parçası değildir, "bundan sonrası onaltılık" demektir.

## Benzetme

Saatin dakikaları gibi. Kimse "bir buçuk saat" yerine "0,0625 gün" demez; altmışlık sayma günlük hayata daha rahat oturduğu için kullanılır. Onaltılık da baytlarla çalışırken böyledir: aynı sayının daha kısa ve daha düzgün bölünen yazımıdır.

## Dikkat

Onaltılık bir [[encoding|kodlamadır]], şifreleme değildir. Gizlediği hiçbir şey yoktur: `0x48` ile `72` aynı sayıdır, biri diğerinin başka yazımıdır. Bir veriyi hex'e çevirip "okunmaz hâle getirdim" demek, sayıyı Roma rakamıyla yazıp saklandığını sanmaktır.

Büyük-küçük harf farkı da çoğu yerde anlam taşımaz; Ethereum adreslerinde ise harflerin büyüklüğü bir sağlama bilgisi taşır ([[checksum|sağlama]]).
