---
term: "SQL Database"
tr: "İlişkisel veritabanı"
aliases: ["relational database"]
category: web
subcategory: "Backend"
level: orta
short: "Verinin, sütunları önceden tanımlı tablolarda ve tablolar arası ilişkilerle tutulduğu veritabanı türü."
related: [database, nosql-database, sql, postgresql, orm]
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

SQL veritabanı, veriyi tablolarda tutan veritabanı türüdür; Türkçede ilişkisel veritabanı denir. Her tablonun sütunları önceden tanımlıdır: hangi alanların bulunacağı, her alanın hangi türde olacağı ve hangilerinin boş kalamayacağı baştan yazılır. Bu tanıma şema denir. Sorgular [[sql|SQL]] ile yazılır.

## Benzetme

Sütunları önceden basılmış bir yoklama çizelgesi gibi. Numara, ad, imza haneleri hazırdır; her satır aynı haneleri doldurur ve eksik doldurulan satır hemen göze çarpar. Buna karşılık yeni bir bilgi eklemek istediğinde satırın kenarına iliştiremezsin — çizelgenin tamamına yeni bir sütun açman gerekir.

## Nasıl çalışır?

Veri tekrar etmesin diye parçalara ayrılır: üyeler bir tabloda, ödemeler başka bir tabloda durur ve ödeme satırı üyenin numarasını taşır. Bu bağa yabancı anahtar denir; veritabanı, karşılığı olmayan bir numaraya ödeme yazılmasını engeller. Böylece aynı bilgi iki yerde tutulmadığı için iki yerde farklılaşamaz.

İkinci temel yetenek, birden çok adımı tek parça hâlinde yürütmektir: ya hepsi olur ya hiçbiri. Bir hesaptan düşüp diğerine eklerken elektrik kesilse bile paranın havada kalmamasının sebebi budur.

## Dikkat

Zorlandığı yer ölçeklenmedir. Tek makineyi büyütmek kolaydır, veriyi birçok makineye bölmek zordur: ilişkiler ve tek parça işlemler makineler arasına yayıldığında pahalıya mal olur.

"SQL mi [[nosql-database|NoSQL]] mü iyi" diye bir yarış yoktur. Şeması belli olan, parçaları birbirine bağlı ve tutarlılığı kritik veride ilişkisel veritabanı seçilir; karar hızdan önce verinin biçimiyle ilgilidir.
