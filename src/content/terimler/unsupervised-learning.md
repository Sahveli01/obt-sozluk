---
term: "Unsupervised Learning"
tr: "Denetimsiz öğrenme"
aliases: ["denetimsiz öğrenme", "gözetimsiz öğrenme"]
category: yapay-zeka
subcategory: "Temeller"
level: orta
short: "Doğru cevap verilmeden, yalnızca verinin kendisine bakarak yapı ve benzerlik çıkaran öğrenme biçimi."
related: [supervised-learning, clustering, reinforcement-learning, dataset, embedding]
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

Denetimsiz öğrenme, elinde etiket yokken başvurulan yaklaşımdır. Modele yalnızca örnekler verilir; "bunun cevabı şuydu" diyen bir kaynak yoktur. Model verinin içindeki düzeni arar: hangi örnekler birbirine benziyor, hangi ölçümler aslında aynı şeyi söylüyor, hangi kayıt geri kalanına hiç uymuyor.

Üç öğrenme biçiminin yan yana karşılaştırması için [[supervised-learning|denetimli öğrenmeye]] bak; orada denetimli, denetimsiz ve pekiştirmeli yaklaşımların farkı tek yerde toplandı.

## Nasıl çalışır?

Tipik olarak üç iş yapılır.

Birincisi [[clustering|kümeleme]]: benzer örnekleri aynı gruba koymak. İkincisi boyut indirgeme: çok sayıda ölçümü, bilginin çoğunu koruyan daha az sayıda sayıya sıkıştırmak — metin ve görüntüde kullanılan [[embedding|gömme]] vektörleri bu fikrin yaygın bir hâlidir. Üçüncüsü aykırı değer bulma: geri kalanına benzemeyen kaydı işaretlemek; dolandırıcılık ve arıza tespitinde bu şekilde kullanılır.

Ortak yanları, bir "doğru cevap" tanımının olmamasıdır. Başarı, çıkan yapının bir işe yarayıp yaramadığıyla ölçülür ve bu değerlendirmeyi çoğu zaman insan yapar. Bu yüzden denetimsiz yöntemler sık sık nihai çözüm olarak değil, bir [[dataset|veri kümesini]] anlamak ya da hazırlamak için kullanılır.

## Dikkat

Denetimsiz bir yöntem her zaman bir sonuç üretir. Veride gerçek bir grup yapısı olmasa bile kümeleme algoritması istediğin sayıda grup çıkarır; çıktının var olması, verinin öyle bir düzeni olduğunu göstermez.

Sonuca anlam yüklemek de insana ait bir karardır. Algoritma "bu grup şehirli müşteriler" demez, yalnızca "bunlar birbirine yakın" der.
