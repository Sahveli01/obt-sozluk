---
term: "NoSQL Database"
tr: ""
aliases: []
category: web
subcategory: "Backend"
level: orta
short: "Verinin sabit tablo şeması yerine belge, anahtar-değer ya da graf gibi esnek biçimlerde tutulduğu veritabanı ailesi."
related: [database, sql-database, json, cache]
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

NoSQL tek bir ürün değil, ortak özelliği ilişkisel tablo modelini kullanmamak olan bir veritabanı ailesidir. En yaygın biçimi belge veritabanıdır: bir kayıt, parçalara ayrılıp tablolara dağıtılmak yerine [[json|JSON]] benzeri tek bir belge olarak bütün hâlinde saklanır. Anahtar-değer depoları ve graf veritabanları da bu ailededir.

Ad Türkçeye çevrilmez; kelimesi kelimesine karşılığı ("SQL değil") aileyi yanlış anlatır, çünkü bu sistemlerin bir kısmı SQL'e benzeyen sorgu dilleri de sunar.

## Nasıl çalışır?

Kayıt bir arada durduğu için tek okumayla alınır; tabloları birleştirmeye gerek kalmaz. Şemayı veritabanı dayatmaz: aynı koleksiyondaki iki belgenin alanları farklı olabilir, yeni bir alan eklemek için kimseden izin alınmaz.

Bu gevşeklik veriyi birçok makineye bölmeyi kolaylaştırır; kayıtlar birbirine bağlı olmadığı için hangi belgenin hangi makinede durduğu çoğu zaman önemsizdir. Bunun karşılığında bazı sistemler tutarlılığı biraz gevşetir: yazılan bir değer bütün kopyalarda aynı anda görünmeyebilir, kısa bir süre eski hâli okunabilir.

## Dikkat

"Şemasız" demek şema yok demek değildir. Şema ortadan kalkmaz, veritabanından koda taşınır: "bu alan eksik" diyecek bir kontrol olmadığı için kontrolü uygulamanın kendisi yapmak zorundadır. Eski kayıtların yeni alanı taşımadığı durumlar bu yüzden zamanla birikir.

Seçim ekseni "hangisi daha iyi" değil, verinin biçimidir. Alanları değişken, ilişkisi az ve hızla büyüyen veri bu tarafta rahat eder; ilişkileri sıkı veride [[sql-database|ilişkisel veritabanı]] işi kolaylaştırır.
