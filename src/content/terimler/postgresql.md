---
term: "PostgreSQL"
tr: ""
aliases: ["postgres"]
category: web
subcategory: "Backend"
level: orta
short: "Açık kaynaklı bir ilişkisel veritabanı yönetim sistemi; standart SQL desteğinin yanında JSON sütunları ve eklentilerle genişler."
related: [sql-database, database, query, orm, open-source]
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

PostgreSQL, bir ilişkisel veritabanı yönetim sistemidir: tabloları, sorguları ve işlemleri yöneten sunucu yazılımı. [[open-source|Açık kaynak]] bir lisansla dağıtılır, yani kendi makinene kurabilir ya da bir bulut sağlayıcıdan çalışır hâlde kiralayabilirsin.

Kısaca "Postgres" de denir; iki yazım da aynı şeyi anlatır.

## Nasıl çalışır?

Ayrı bir program olarak çalışır ve bağlantı bekler. Uygulama bir bağlantı açar, [[query|sorgusunu]] gönderir, sonucu alır; aynı anda birçok bağlantıyı yürütür. Standart [[sql-database|ilişkisel]] modelin üstüne iki şey ekler.

Birincisi, yapısı sabit olmayan veriyi JSON sütunlarında tutabilmesidir: şeması belli alanlarla değişken alanlar aynı tabloda yan yana durabilir. İkincisi eklenti mimarisidir — tam metin arama, coğrafi veri ya da vektör araması gibi yetenekler çekirdeği değiştirmeden eklenir.

## Dikkat

"PostgreSQL" ile "veritabanı" aynı şey değildir: PostgreSQL sistemin adıdır, veritabanı ise o sistemin içinde açtığın adlandırılmış veri kümesidir. Tek bir kurulumda yan yana duran birçok veritabanı olabilir; bağlantı adresini yazarken bu ayrım karşına çıkar.

Bir veritabanı sistemi seçerken "en iyisi hangisi" sorusunun genel bir cevabı yoktur. Ekibin bildiği, projenin veri biçimine uyan ve yayına aldığın yerde desteklenen sistem doğru seçimdir.
