---
term: "Interoperability"
tr: "Birlikte çalışabilirlik"
aliases: ["interop"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Ayrı blokzincirlerin birbirinin durumunu doğrulayıp birbirine varlık ve mesaj geçirebilmesi."
related: [cross-chain, blockchain-bridge, cross-chain-messaging, inter-blockchain-communication-ibc, chain-abstraction, light-client]
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

Her blokzincir kendi kurallarıyla kendi defterini tutar ve dışarıdaki hiçbir zinciri kendiliğinden göremez. Birlikte çalışabilirlik, bu ayrı sistemlerin birbirinin durumunu doğrulayıp birbirine varlık ya da bilgi geçirebilmesidir.

Üç kademesi vardır: yalnızca varlık taşımak (en dar), herhangi bir mesajı geçirebilmek ([[cross-chain-messaging|zincirler arası mesajlaşma]]) ve güvenliğin paylaşılması (en geniş).

## Benzetme

Diploma denkliği gibi. İki ülke de kendi sınavını kendi yapar; denklik, karşı tarafın sonucunu yeniden sınav yapmadan kabul edebilmenin kuralıdır. Kabul eden taraf ya belgenin gerçekliğini kendi kontrol eder ya da "ben bu belgeyi tanıyorum" diyen bir aracıya güvenir. Zincirler arasındaki bütün tartışma da bu iki seçenek arasında geçer.

## Nasıl çalışır?

Asıl zorluk şu: A zinciri, B zincirinde bir şeyin gerçekten olduğunu nereden bilecek? A'nın düğümleri B'yi takip etmez. İki yol vardır.

**Doğrulamak.** A, B'nin konsensüsünü kendi içinde doğrular; bunun için B'nin [[light-client|hafif istemcisi]] A üzerinde bir sözleşme olarak çalışır. Ek bir güven varsayımı doğmaz ama pahalıdır ve iki zincirin kesinlik modelinin uyumlu olması gerekir.

**Birine sormak.** Dışarıdaki bir imzacı kümesi "B'de şu oldu" der, A da bu imzalara bakar. Ucuzdur ve neredeyse her zincir çiftinde çalışır; karşılığında artık o kümeye güveniyorsundur.

## Dikkat

"Birlikte çalışabilir" etiketi tek başına bir güvenlik seviyesi anlatmaz. Doğru soru "bu zincir ötekiyle konuşabiliyor mu" değil, "konuşurken kime güveniyor"dur.

Zincirlerin ikisi de sağlam olsa bile en zayıf halka aradaki doğrulama katmanıdır; kayıpların neden orada yoğunlaştığını [[bridge-exploit|köprü istismarı]] anlatıyor.
