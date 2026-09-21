---
term: "Ledger"
tr: "Defter"
aliases: ["defter", "kayit defteri"]
category: temeller
subcategory: "Temel kavramlar"
level: baslangic
short: "Kimin neye sahip olduğunu ve hangi işlemin ne zaman yapıldığını sırayla tutan kayıt."
related: [blockchain, transaction, distributed-ledger-technology-dlt, utxo, account-model]
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

Ledger, işlemleri sırasıyla kaydeden ve o kayıtlardan kimin neye sahip olduğunu çıkarabildiğin defterdir. Muhasebenin en eski aracıdır; bankanın hesap hareketleri de bir ledger'dır.

Blockchain'in getirdiği yenilik defter fikri değil, defterin **kimde durduğu**. Klasik bir ledger'ın tek bir sahibi vardır ve doğruluğuna o sahibe güvenerek inanırsın. [[blockchain|Blockchain]] aynı defteri binlerce kopyaya dağıtır; artık tek bir kuruma değil, kopyaların birbirini tutmasına güvenirsin.

## Benzetme

Mahalle bakkalının veresiye defterini düşün. Defter bakkaldadır; ne yazdığını görmek için ona sormak, doğru yazdığına da inanmak zorundasın. Şimdi aynı defterin bir kopyasının mahalledeki her evde durduğunu ve her yeni satırın hepsine birden geçtiğini düşün. Bakkal tek başına bir rakamı değiştiremez, çünkü diğer kırk defter onu yalanlar.

## Dikkat

Bir ledger'ın bakiyeyi nasıl tuttuğu tasarımdan tasarıma değişir. Bazı zincirler harcanmamış çıktıları tek tek izler ([[utxo]]), bazıları her adres için tek bir bakiye tutar ([[account-model|hesap modeli]]). İkisi de aynı soruyu cevaplar ama sözleşme yazarken ve işlem kurarken çok farklı davranırlar.
