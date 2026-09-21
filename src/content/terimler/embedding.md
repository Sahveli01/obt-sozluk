---
term: "Embedding"
tr: ""
aliases: ["embedding vektörü"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Bir metnin ya da nesnenin anlamını, benzerleri birbirine yakın düşecek biçimde sayı dizisine çevirme."
related: [vector, vector-database, semantic-search, token-ai, transformer]
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

Embedding, bir kelimenin, cümlenin ya da belgenin anlamını sayılara çevirme işi — ve bu çevirinin sonucunda ortaya çıkan [[vector|vektör]]dür. Kural şudur: anlamca yakın şeyler birbirine yakın sayılara düşer. Böylece "anlam" dediğimiz bulanık şey, karşılaştırılabilir bir şeye dönüşür. Türkçede yerleşik bir karşılığı yok; "gömme" çevirisi akademik metinlerin dışında pek kullanılmaz.

## Benzetme

Renkleri düşün. Bir bilgisayara "lacivert ile mavi birbirine benziyor" demek zordur; ama her rengi üç sayıyla yazarsan iş kendiliğinden çözülür, çünkü birbirine yakın sayılar birbirine yakın renkler demektir. Embedding aynı numarayı anlam için yapar: kelimeleri öyle bir sayı takımıyla temsil eder ki, yakınlık sayılardan okunabilir hâle gelir.

## Nasıl çalışır?

Bu sayılar elle yazılmaz, eğitimle ortaya çıkar. Model çok sayıda metinde hangi ifadelerin hangi bağlamlarda geçtiğini görür; benzer bağlamlarda geçenler birbirine yakın temsiller alır. "Hastane" ile "klinik" yakınlaşır, "hastane" ile "lastik" uzak kalır — kimse bunu kurala bağlamadığı hâlde.

Yalnızca kelimeler değil, cümleler, belgeler, görseller ve sesler de aynı biçimde temsil edilebilir. Üretilen temsiller genelde bir [[vector-database|vektör veritabanında]] saklanır ve [[semantic-search|anlamsal arama]] gibi işlerde kullanılır.

## Dikkat

Embedding metni saklamaz, anlamını saklar: sayı dizisine bakarak orijinal cümleyi doğrudan okuyamazsın. Yine de bunu anonimlik sanmak yanlış olur; benzerlik üzerinden içerik hakkında epey şey çıkarılabilir, bu yüzden kişisel veriden üretilmiş temsiller de korunmalıdır.

Farklı modellerin ürettiği embedding'ler birbiriyle karşılaştırılamaz. Aynı cümlenin iki modeldeki temsili birbirini tutmaz; bir koleksiyondaki bütün kayıtların aynı modelle üretilmiş olması şarttır.
