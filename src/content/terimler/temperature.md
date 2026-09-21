---
term: "Temperature"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Modelin cevap üretirken ne kadar beklenen, ne kadar beklenmedik kelimeleri seçeceğini ayarlayan düğme."
related: [sampling-top-p-top-k, max-tokens, token-ai, inference, llm-api]
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

Temperature, bir dil modelinin cevabını üretirken ne kadar temkinli davranacağını ayarlayan bir sayıdır. Model her adımda sıradaki [[token-ai|token]] için birçok aday arasından seçim yapar; temperature, en beklenen adaya ne kadar sıkı bağlı kalacağını belirler. Düşük değerlerde model hep en güvenli seçeneği alır ve aynı soruya neredeyse aynı cevabı verir. Yüksek değerlerde daha az beklenen seçenekler de yarışa girer: cevaplar çeşitlenir, konudan sapma ihtimali artar. Türkçede "sıcaklık" demek yanıltıcı olduğu için terim İngilizce kullanılır.

## Benzetme

Nota kâğıdına bakan bir müzisyen gibi. Düşük temperature, yazılanı harfiyen çalan müzisyendir: her seferinde aynı, güvenli ve tahmin edilebilir. Yüksek temperature doğaçlama yapandır: bazen akılda kalacak bir şey çıkar, bazen parça dağılır.

## Dikkat

Bu bir "yaratıcılık ayarı" değildir. Yüksek değer modele yeni fikir vermez; yalnızca daha az olası kelimeleri seçme payını açar.

Doğru değer işe göre değişir. Veri çıkarma, sınıflandırma ve kod üretiminde düşük değerler; taslak metin ve fikir listesi üretiminde daha yüksek değerler tercih edilir. Bu düğmeyi [[sampling-top-p-top-k|örnekleme ayarlarıyla]] birlikte iyice kıstığında model tekrara düşebilir.
