---
term: "Derivatives"
tr: "Türev ürünler"
aliases: ["türev ürünler"]
category: defi
subcategory: "Türevler"
level: baslangic
short: "Değeri kendi başına değil, bağlı olduğu başka bir varlığın fiyatından gelen sözleşme."
related: [futures, options, perpetual-futures-perps, hedging, synthetic-asset, leverage]
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

Türev, değeri kendinden değil, bağlı olduğu başka bir varlığın fiyatından gelen sözleşmedir. O varlığa **dayanak varlık** denir; bir kripto para, bir hisse ya da bir emtia olabilir. Sözleşmeyi elinde tutmak dayanak varlığa sahip olmak değildir — taşıdığın şey, onun fiyatına bağlanmış bir hak ya da yükümlülüktür.

İki sebeple kullanılır. Birincisi riski devretmektir: elinde bir varlık varsa ve fiyatının düşmesinden çekiniyorsan, bu riski üstlenmeye razı bir karşı tarafa aktarabilirsin ([[hedging]]). İkincisi, varlığı hiç almadan fiyatının yönüne bağlı bir pozisyon taşımaktır.

Türkçede "türev ürün" ya da "türev araç" yerleşik karşılıktır.

## Benzetme

Fındık üreticisiyle fabrikanın hasattan aylar önce fiyatta anlaşması gibi. Ortada henüz fındık yoktur, anlaşma fındığın ileride ne edeceği üzerinedir. Fiyat düşerse üretici korunmuş olur, yükselirse fabrika. İkisi de belirsizlikten kurtulur; karşılığında fiyat kendi lehine hareket ederse o farktan vazgeçmiş olur.

## Dikkat

Bir türev sözleşmesi, karşı taraf yükümlülüğünü yerine getirebildiği sürece değerlidir. Klasik piyasalarda bu işi bir takas kurumu üstlenir; zincir üstü protokollerde karşı taraf genellikle bir teminat havuzudur. Yani soru "fiyat hakkında haklı mıyım" ile bitmez, "haklı çıkarsam ödeyecek para orada duruyor mu" diye devam eder. Teminat düzeni ve fiyatın nereden okunduğu ([[oracle]]) bu yüzden sözleşmenin kendisi kadar belirleyicidir.
