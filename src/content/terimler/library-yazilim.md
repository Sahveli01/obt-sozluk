---
term: "Library (Yazılım)"
tr: "Kütüphane"
aliases: ["kütüphane", "kod kütüphanesi"]
category: programlama
subcategory: "Kod organizasyonu"
level: baslangic
short: "Başkalarının yazıp paylaştığı, projende ihtiyacın olduğunda çağırarak kullandığın hazır kod topluluğu."
related: [framework, sdk, package, dependency, library-solidity, openzeppelin]
disambiguation: [library-solidity]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Kütüphane, birinin yazıp paylaştığı, senin de kendi projende çağırarak kullandığın hazır koddur. Tarih biçimlendirmek, bir resmi küçültmek, bir adresin geçerli olup olmadığını denetlemek gibi işleri her projede sıfırdan yazmak yerine, o işi çözmüş bir kütüphaneyi projene ekler ve içindeki fonksiyonları çağırırsın.

Kütüphane sana bir [[package|paket]] olarak gelir ve projene eklendiği anda bir [[dependency|bağımlılık]] hâline gelir. Akıllı sözleşme tarafında da aynı fikir vardır: [[openzeppelin]] gibi kütüphaneler sık kullanılan sözleşme parçalarını hazır sunar.

## Benzetme

Sözlükten bir kelimeye bakmak gibi. Sözlük senin ne yazdığını bilmez ve sana ne yazacağını söylemez; sen bir kelimeye takıldığında açar, karşılığını alır, kendi cümlene kaldığın yerden devam edersin. Kontrol baştan sona sende kalır.

## Dikkat

`library` kelimesi Solidity'de bambaşka bir şeydir: orada bir anahtar kelimedir ve zincire bir kez yüklenip birçok sözleşmenin ortak kullandığı özel bir sözleşme türünü tanımlar. Ayrıntısı [[library-solidity]] maddesinde.

Bir de [[framework]] ile karıştırılır; ikisinin farkı orada anlatılıyor.
