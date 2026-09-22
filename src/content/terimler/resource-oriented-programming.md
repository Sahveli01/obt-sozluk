---
term: "Resource-oriented Programming"
tr: "Kaynak odaklı programlama"
aliases: ["kaynak odaklı programlama", "resource oriented programming"]
category: programlama
subcategory: "Move kavramları"
level: orta
short: "Varlığı defterdeki bir sayı olarak değil, kopyalanamayan ve sessizce yok olamayan bir tip olarak tanımlama yaklaşımı."
related: [move, resource-move, abilities-move, smart-contract, double-spending, solidity]
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

Çoğu [[smart-contract|akıllı sözleşme]] dilinde bir token bakiyesi, bir [[mapping|eşlemenin]] içindeki sayıdan ibarettir. [[solidity|Solidity]]'de o sayıyı bir hesaptan düşmeyi unutmak ya da aynı miktarı iki yere yazmak dilin izin verdiği şeylerdir; engelleyen tek şey programcının dikkatidir.

Kaynak odaklı programlama bunu tersine çevirir: varlık, tipin kendisinde kaynak olarak tanımlanır. Kaynak kopyalanamaz, sessizce silinemez; yalnızca bir yerden alınıp başka bir yere konabilir. Böylece aynı değeri iki kez harcama hatasını ([[double-spending]]) sözleşme mantığı değil [[compiler|derleyici]] engeller. Fikrin en bilinen uygulaması [[move|Move]] dilidir.

## Benzetme

Kuyumcunun defterindeki gram kaydı ile tezgâhın altındaki külçe arasındaki fark gibi. Deftere "180 gram" yazarsın; iki kez yazabilir, silip başka bir rakam koyabilirsin — kâğıt her şeyi kabul eder. Külçe öyle değildir: çoğaltamazsın, yok sayamazsın. Yapabileceğin tek şey onu birinin elinden alıp ötekinin eline koymaktır.

## Nasıl çalışır?

Güvence tip sistemindedir. Derleyici her kaynak değerini tek tek takip eder: bir fonksiyona giren değer oradan çıkmak zorundadır — ya saklanır, ya devredilir, ya da açıkça yok edilir. Üçü de olmazsa kod derlenmez. Bir tipin hangi işlemlere açık olduğu [[abilities-move|yetenek]] denen etiketlerle ilan edilir; Move'da bu tipin adı [[resource-move|resource]]'tur.

Ödünleşme açıktır: derleme anında daha çok güvence, karşılığında daha dar bir programlama modeli ve zahmetli bir öğrenme eğrisi. Yazıldığı tarih itibarıyla bu yaklaşımı kullanan zincirlerin ([[sui|Sui]], [[aptos|Aptos]]) geliştirici birikimi de Ethereum tarafına kıyasla küçüktür.

## Örnek

Bir oyunda dağıtılan kılıçları düşün. Sayı tutan bir tasarımda, transfer fonksiyonunda çıkarma satırını unutmak kılıcı iki yerde birden bırakır.

Kaynak odaklı tasarımda kılıç bir tiptir. Değeri alıcıya verirsin, artık sende değildir; ondan kopya üretmenin bir yolu yoktur. Aynı kılıcı ikinci kez vermeyi denersen elinde verecek bir şey kalmadığı için derleme durur.

## Dikkat

Bu yaklaşım bir hata sınıfını kapatır, sözleşmeyi güvenli yapmaz. Yanlış fiyat hesabı ya da eksik yetki kontrolü burada da mümkündür. Kapanan şey dar ama can yakıcı bir sınıftır: varlığın yoktan var edilmesi ya da kazara buharlaşması.

Buradaki "kaynak" sunucu kaynağı (işlemci, bellek) anlamında değildir; kastedilen, tek nüsha olması gereken bir değerdir.
