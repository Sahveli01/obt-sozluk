---
term: "Order Book"
tr: "Emir Defteri"
aliases: []
category: piyasa
subcategory: "Borsa ve alım satım"
level: baslangic
short: "Bir işlem çiftinde bekleyen alım ve satım emirlerinin fiyata göre sıralandığı liste."
related: [exchange, bid-and-ask, limit-order, market-depth, order-book-dex]
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

Emir defteri, bir [[exchange|borsada]] bekleyen bütün alım ve satım emirlerinin tutulduğu listedir. İki taraflıdır: bir yanda almak isteyenlerin verdiği fiyatlar, öteki yanda satmak isteyenlerin istediği fiyatlar.

Her iki taraf da fiyata göre sıralıdır. Alış tarafının en tepesinde en yüksek teklif, satış tarafının en tepesinde en düşük istek durur. Bir emir ancak karşı tarafta kendisiyle uyuşan bir emir bulduğunda gerçekleşir; bulamazsa defterde bekler.

## Benzetme

Kitapçının kasasının yanında duran sipariş defteri gibi. Defterin bir sayfasında "şu kitabı arayanlar ve vermeye razı oldukları fiyat", öteki sayfasında "elinde o kitap olup satmak isteyenler ve istedikleri fiyat" yazılıdır. Kitapçı bir şey satmaz; iki sayfadaki rakamlar tuttuğunda iki kişiyi eşleştirir, o kadar.

## Dikkat

Defterdeki emirler kesinleşmiş işlemler değil, bekleyen niyetlerdir. İptal edilebilirler; defterin kalabalık görünmesi o emirlerin sen işlem yaparken hâlâ orada olacağı anlamına gelmez.

Defterin en tepesindeki iki fiyata [[bid-and-ask|alış ve satış]], alt seviyelerde biriken miktara ise [[market-depth|piyasa derinliği]] denir. Zincir üstünde çalışan [[order-book-dex|emir defterli borsalar]] da aynı mantığı kullanır; yalnızca defteri tutan taraf değişir. Defterde bekleyen emirlerin çoğu [[limit-order|limit emri]] olarak verilmiştir.
