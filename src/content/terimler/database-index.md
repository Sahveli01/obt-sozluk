---
term: "Database Index"
tr: "Veritabanı indeksi"
aliases: []
category: web
subcategory: "Backend"
level: orta
short: "Bir sütundaki değerleri aramayı hızlandırmak için veritabanının ayrıca tuttuğu sıralı yardımcı yapı."
related: [database, query, sql-database, indexer, cache]
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

İndeks, veritabanının bir sütun için ayrıca tuttuğu sıralı bir listedir: hangi değerin hangi satırda olduğunu gösterir. İndeks yoksa veritabanı aradığı kaydı bulmak için tablonun tamamını baştan sona tarar. Bin satırda bu fark edilmez; on milyon satırda aynı sayfa açılmaz.

## Benzetme

Kitabın sonundaki dizin gibi. Bir kavramın geçtiği yeri bulmak için dört yüz sayfayı tek tek çevirebilirsin ya da dizine bakıp doğruca sayfaya gidebilirsin. Ama dizin bedava değildir: kitapta yer kaplar ve kitaba her yeni bölüm eklendiğinde dizinin de güncellenmesi gerekir.

## Nasıl çalışır?

İndeks, değerleri sıralı bir ağaç yapısında tutar; aranan değere birkaç adımda inilir. Karşılığında her ekleme ve güncellemede indeksin de yazılması gerekir — okuma hızlanır, yazma biraz yavaşlar, disk alanı artar.

İndeks yalnızca [[query|sorgu]] onun sıralamasından yararlanabiliyorsa devreye girer. Sütunun üstünde bir işlem yapan ya da metnin ortasında eşleşme arayan koşullarda sıralama işe yaramaz ve veritabanı yine tarama yapar.

## Örnek

```sql
CREATE INDEX transfer_gonderen_idx ON transfer (gonderen);

SELECT * FROM transfer
WHERE gonderen = '0xabc...';
```

İndeks olmadan bu sorgu bütün transfer tablosunu tarar; indeksle doğrudan ilgili satırlara gider.

## Dikkat

Her sütuna indeks açmak çözüm değildir: kullanılmayan her indeks yazmayı yavaşlatır ve yer kaplar. Hangi indeksin gerektiğini tahminle değil, yavaş çalışan sorgulara bakarak bulursun.

Zincir verisiyle çalışan uygulamalar bu yüzden "şu adresin bütün transferleri" gibi soruları doğrudan node'a sormaz. Bir [[indexer|indeksleyici]] zinciri takip edip olayları kendi veritabanına yazar, sorgular orada indekslenmiş hâlde çalışır.
