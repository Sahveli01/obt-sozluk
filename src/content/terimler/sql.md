---
term: "SQL"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "İlişkisel veritabanlarından veri sormak ve veriyi değiştirmek için kullanılan sorgu dili."
related: [database, query, indexer, subgraph, backend]
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

SQL, ilişkisel veritabanlarıyla konuşmak için kullanılan dildir. İlişkisel [[database|veritabanı]] veriyi satır ve sütunlardan oluşan tablolarda tutar; SQL ile bu tablolardan veri sorar, yeni satır ekler, var olanı günceller ya da silersin.

Diğer dillerden ayrılan yanı şudur: ne istediğini yazarsın, nasıl bulunacağını yazmazsın. "Bakiyesi sıfırdan büyük cüzdanları bakiyeye göre büyükten küçüğe sırala" dersin; hangi indeksin kullanılacağına, tabloların hangi sırayla birleştirileceğine veritabanı karar verir.

## Nasıl çalışır?

Bir [[query|sorgu]] veritabanına ulaştığında önce ayrıştırılır, sonra planlanır. Planlayıcı, aynı sonucu üreten çok sayıda yol arasından tahmini maliyeti en düşük olanı seçer ve bu tahmini tablolardaki veri dağılımına bakarak yapar. Bunun pratik sonucu şudur: bir sorgu küçük tabloda anında dönerken aynı sorgu tablo büyüdüğünde bambaşka bir hızda çalışabilir. Performans işinin çoğu, doğru indeksi koymak ve planlayıcının seçtiği yolu okumaktan ibarettir.

SQL'in ortak bir çekirdeği vardır, ama her veritabanı kendi eklerini getirir; bir sistemde çalışan sorgu diğerinde birebir çalışmayabilir.

## Örnek

```sql
SELECT ad, bakiye FROM cuzdanlar WHERE bakiye > 0 ORDER BY bakiye DESC;
```

Bu satır `cuzdanlar` tablosundan iki sütun seçer, bakiyesi sıfırdan büyük olanları süzer ve sonucu büyükten küçüğe sıralar.

## Dikkat

Blockchain tarafında SQL'i zincirin kendisinde değil, çevresinde görürsün. Zincir bir SQL veritabanı değildir ve "şu tarihten sonra bu tokenı almış adresleri listele" gibi bir soruyu doğrudan cevaplayamaz. Bu yüzden [[indexer|indeksleyiciler]] zincirden okudukları olayları tablolara yazar ve sorgular o tablolara sorulur; [[subgraph|subgraph]] gibi araçlar da aynı ihtiyaçtan doğmuştur.

İkinci nokta güvenliktir: kullanıcıdan gelen metni sorgunun içine doğrudan yapıştırmak, saldırganın sorguyu yeniden yazmasına izin verir. Değerler sorguya parametre olarak geçirilir.
