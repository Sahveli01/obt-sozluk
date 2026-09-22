---
term: "Application Binary Interface (ABI)"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: orta
short: "Sözleşmenin fonksiyonlarını ve bu fonksiyonlara yapılan çağrıların bayta nasıl çevrileceğini tanımlayan arayüz."
related: [function-selector, calldata, contract-verification, bytecode, event-smart-contract, ethers-js]
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

EVM fonksiyon adı, parametre ya da tip bilmez; yalnızca bayt görür. ABI, bu iki dünya arasındaki anlaşmadır: bir çağrının hangi baytlara çevrileceğini ve dönen baytların nasıl okunacağını tanımlar.

Terim pratikte iki anlamda kullanılır. Birincisi kodlama kurallarının kendisi. İkincisi derleyicinin ürettiği JSON dosyası: sözleşmenin fonksiyonları, parametre tipleri, dönüş değerleri ve [[event-smart-contract|event]]'leri orada listelenir. Cüzdanlar, arayüzler ve [[ethers-js|ethers.js]] gibi kütüphaneler sözleşmeyle bu dosyaya bakarak konuşur.

Türkçede yerleşik bir karşılığı yok; herkes kısaltmasıyla ABI der.

## Benzetme

Üstünde hiçbir yazı olmayan, hepsi aynı boy kolilerle taşınmak gibi. Koliler kamyondan indiğinde hangisinde ne olduğunu açmadan bilemezsin; elindeki tek şey "birinci koli mutfak, ikinci koli kitap" diyen kâğıttır. Kâğıdı kaybedersen koliler yerinde durur ama anlamları kaybolur.

## Nasıl çalışır?

Bir çağrı şöyle paketlenir. Başta 4 baytlık [[function-selector|fonksiyon seçicisi]] gelir; hangi fonksiyonun çağrıldığını o söyler. Arkasından argümanlar sırayla dizilir ve her biri 32 baytlık kutulara hizalanır — `uint8` de 32 bayt yer kaplar, `address` de.

Uzunluğu önceden belli olmayan tipler (`string`, `bytes`, diziler) kutuya sığmaz. Onların yerine "veri şu kadar ilerde" diyen bir konum yazılır; içerik, uzunluğuyla birlikte [[calldata|calldata]]'nın arka tarafında durur. Dönüş değerleri de aynı kurallarla paketlenir, çağıran taraf ABI'ye bakarak çözer.

## Dikkat

ABI zincirde durmaz. Zincirde yalnızca [[bytecode|bytecode]] vardır; ABI'yi derleyici üretir ve birinin onu saklaması gerekir. Bir sözleşmenin ABI'sini bulmanın en yaygın yolu [[contract-verification|doğrulanmış]] kaynak koddur.

İkincisi: ABI bir güvenlik denetimi değildir. EVM senin elindeki dosyaya bakmaz, gelen baytları kendi seçicilerine göre yorumlar. Eski ya da yanlış bir ABI ile çağrı yaparsan baytlar yine gider; sözleşme onları kendi bildiği tiplere göre okur ve ortaya anlamsız bir sonuç veya hiç istemediğin bir işlem çıkabilir.
