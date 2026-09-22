---
term: "Smart Contract"
tr: "Akıllı sözleşme"
aliases: ["akıllı sözleşme"]
category: akilli-sozlesmeler
subcategory: "Temeller"
level: baslangic
short: "Bir blockchain üzerinde duran, koşulları sağlandığında kendiliğinden işleyen ve tek bir tarafın durduramadığı program."
related: [ethereum-virtual-machine-evm, bytecode, contract-deployment, composability, trustless, solidity]
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

Akıllı sözleşme, bir [[blockchain]] ağı üzerinde duran ve kuralları önceden yazılmış bir programdır. Kim ne yaparsa ne olacağı koda gömülüdür: parayı kim alır, hangi koşulda iade edilir, kim neyi değiştirebilir. Yayımlandıktan sonra ağdaki herkes kodu okuyabilir ve çoğu zaman kimse onu değiştiremez.

Adı iki bakımdan yanıltıcıdır: ne hukuki anlamda bir sözleşmedir ne de akıllıdır. Yalnızca yazıldığı şeyi yapar.

## Benzetme

Kantindeki içecek otomatı gibi. Parayı atıp tuşa basarsın, makine ürünü verir. Satıcının keyfi, tanıdığının olup olmaması, saatin kaç olduğu sonucu değiştirmez; kural camın arkasında görünür durur ve makine yalnızca o kuralı işletir. Nick Szabo akıllı sözleşme fikrini tam da bu örnekle anlatmıştı: aracıya güvenmek yerine, kuralı kendi işleten bir düzeneğe güvenmek.

## Dikkat

"Kod kanundur" cümlesi kulağa güven verici gelir ama iki yüzü vardır. Sözleşme yazıldığı gibi çalışır — yazarken hata yaptıysan o hata da aynen çalışır ve sonucu çoğu zaman geri alınamaz. [[immutability|Değiştirilemezlik]] hem en büyük garantidir hem de en büyük risktir.
