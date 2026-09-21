---
term: "World State"
tr: "Dünya durumu"
aliases: ["dünya durumu", "global durum"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: ileri
short: "Bir zincirdeki bütün hesapların o anki toplu hâli ve bunun tek bir kök değerle özetlenmiş biçimi."
related: [state-blockchain, account-model, merkle-patricia-trie, block-header, state-growth, archive-node]
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

Dünya durumu, hesap tabanlı bir zincirdeki bütün hesapların o andaki hâlinin tamamıdır: her adres için bakiye, sayaç, varsa sözleşme kodu ve sözleşmenin sakladığı veriler. Zincirin "veritabanı" gibi düşünülebilecek kısmı budur; bloklar ise bu veritabanına uygulanan değişiklik kayıtlarıdır.

## Nasıl çalışır?

Bu büyük eşleme düz bir tablo olarak tutulmaz, kriptografik bir ağaç yapısında saklanır; yaygın örneği [[merkle-patricia-trie|Merkle Patricia trie]] yapısıdır. Ağacın tepesindeki tek bir özet — durum kökü — bütün hesapların o anki hâlini temsil eder ve [[block-header|blok başlığına]] yazılır.

Bunun iki pratik faydası vardır. Birincisi, iki düğüm devasa veriyi karşılaştırmak yerine tek bir kök değeri karşılaştırarak aynı [[state-blockchain|durumda]] olup olmadıklarını anlar. İkincisi, "şu adresin bakiyesi şudur" iddiası bütün durumu indirmeden bir kanıtla sınanabilir; hafif istemcilerin çalışabilmesinin sebebi budur.

Her blok yeni bir durum kökü üretir. Eski kökler geçersizleşmez: geçmişteki herhangi bir bloğun durumu hâlâ tanımlıdır ve o veriyi saklayan bir [[archive-node|arşiv düğümü]] geçmiş bir andaki bakiyeyi sorgulayabilir.

## Dikkat

Dünya durumu sürekli büyür ve kendiliğinden küçülmez. [[state-growth|Durum büyümesi]] birçok ağda çözülmemiş bir tasarım sorunudur, çünkü saklama maliyeti doğrudan düğüm çalıştırmanın önündeki engele dönüşür.

Bir de bu kavram [[utxo|UTXO]] modelinde birebir karşılık bulmaz: orada da küresel bir küme vardır, ama [[account-model|hesap]] diye adreslenen kalıcı bir yapı yoktur.
