---
term: "Database"
tr: "Veritabanı"
aliases: []
category: web
subcategory: "Backend"
level: baslangic
short: "Veriyi, sonradan hızlıca bulunup güncellenebileceği bir düzende saklayan yazılım."
related: [sql-database, nosql-database, query, database-index, state-blockchain]
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

Veritabanı, veriyi düzenli biçimde saklayan ve dört temel işi kolaylaştıran yazılımdır: kayıt ekleme, arama, güncelleme, silme. Sıradan bir dosyaya yazmaktan farkı, aynı anda yüzlerce kişinin okuyup yazabilmesi, aramanın milyonlarca kayıtta bile hızlı olması ve yarıda kalan bir işin veriyi bozuk bırakmamasıdır.

## Benzetme

Muayenehanenin eski kart çekmecesi gibi. Her hasta için bir kart vardır, kartlar soyadına göre dizilidir; yeni hasta gelince kart eklenir, adres değişince kartın üstü düzeltilir, kart gerekmeyince çıkarılıp atılır. Veritabanının yaptığı da budur — farkı, çekmecenin milyonlarca kart tutabilmesi ve aynı anda birçok elin ona uzanabilmesidir.

## Dikkat

Zincir de bir veri deposudur ama sıradan bir veritabanı değildir. Veritabanında bir satır silinebilir, bir değer yerinde değiştirilebilir ve eski hâlinden geriye iz kalmayabilir. Zincirde ise kayıtlar yalnızca eklenir: bakiye "değiştirilmez", yeni bir işlem yazılır ve güncel [[state-blockchain|durum]] bütün kayıtların toplamından çıkar. [[immutability|Değişmezlik]] denen özellik budur.

Bu yüzden zincir veritabanının yerini almaz. Uygulamalar genellikle ikisini birlikte kullanır: değerli ve tartışmasız olması gereken kayıt zincire, geri kalan her şey veritabanına yazılır.
