---
term: "Query"
tr: "Sorgu"
aliases: []
category: web
subcategory: "Backend"
level: baslangic
short: "Veritabanından belirli koşullara uyan kayıtları istemek ya da kayıtları değiştirmek için yazılan talep."
related: [database, sql, database-index, orm]
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

Sorgu, [[database|veritabanına]] yazdığın talebin adıdır: "şu koşullara uyan kayıtları getir", "şu kaydı güncelle", "şunu sil". Uygulamanın veriyle her teması bir sorgudur.

Sorguda sonucu nasıl bulacağını değil, ne istediğini söylersin. Hangi sıraya bakılacağına, hangi kısayolun kullanılacağına veritabanının kendisi karar verir.

## Benzetme

Kayıt bürosundaki memura "geçen ay kaydolan bütün üyelerin listesini istiyorum" demek gibi. Hangi dolabın açılacağını, kartların hangi sırayla taranacağını sen söylemezsin; koşulu söylersin, gerisi memurun işidir.

## Örnek

```sql
SELECT ad, sehir
FROM uye
WHERE sehir = 'Ankara'
ORDER BY ad;
```

Bu sorgu, Ankara'daki üyelerin adını ve şehrini ada göre sıralı olarak ister. Yazıldığı dil [[sql|SQL]]'dir.

## Dikkat

Aynı sonucu veren iki sorgunun hızı çok farklı olabilir; fark çoğu zaman aranan sütunda bir [[database-index|indeks]] bulunup bulunmamasından gelir.

Kullanıcıdan gelen metni sorgunun içine doğrudan yapıştırmak ise web'in en bilinen [[vulnerability|açıklarından]] birini doğurur: girdi, veri olarak değil sorgunun parçası olarak yorumlanır. Değerler her zaman ayrı bir parametre olarak geçirilir.
