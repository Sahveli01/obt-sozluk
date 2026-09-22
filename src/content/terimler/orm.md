---
term: "ORM"
tr: ""
aliases: ["object-relational mapping"]
category: web
subcategory: "Backend"
level: orta
short: "Veritabanı satırlarını koddaki nesnelere eşleyen ve sorguları metin yerine dilin kendi çağrılarıyla yazdıran ara katman."
related: [sql-database, query, database, typescript]
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

ORM (Object-Relational Mapping), tablo satırlarıyla koddaki nesneler arasında köprü kuran kütüphanedir. Sorguyu metin olarak yazmak yerine dilin kendi çağrılarıyla tarif edersin; ORM bunu [[sql|SQL]]'e çevirir, dönen satırları da nesnelere dönüştürür.

Türkçede yerleşik bir karşılığı yoktur; açılımın çevirisi olan "nesne–ilişkisel eşleme" ifadesi günlük kullanımda geçmez.

## Nasıl çalışır?

Tabloların tanımı bir kez yazılır. ORM bu tanımdan hem sorgu çağrılarını hem de [[typescript|TypeScript]] tiplerini üretir; böylece var olmayan bir sütun adı yazdığında hata çalışma anında değil, kod yazılırken ortaya çıkar. Şema değişiklikleri de sıralı göç (migration) dosyalarına dönüşür ve her ortamda aynı sırayla uygulanır.

## Örnek

```ts
const uyeler = await db.uye.findMany({
  where: { sehir: 'Ankara', aktif: true },
  take: 10,
});
```

ORM'lerin çoğu buna benzer bir çağrıyı kabaca şu [[query|sorguya]] çevirir:

```sql
SELECT * FROM uye WHERE sehir = 'Ankara' AND aktif = true LIMIT 10;
```

## Dikkat

En sık düşülen tuzağın adı N+1: listeyi tek çağrıyla alıp her eleman için ilişkili kaydı ayrı ayrı istemek. Kodda tek satır gibi görünen şey veritabanına yüzlerce gidiş gelişe dönüşür.

ORM kullanmak SQL bilmemeyi mazur göstermez. Her ORM ürettiği sorguyu kayda yazma seçeneği sunar; bir sayfa beklenmedik biçimde yavaşladığında ilk bakılacak yer orasıdır.
