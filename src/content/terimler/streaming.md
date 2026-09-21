---
term: "Streaming"
tr: "Akış"
aliases: ["akışlı yanıt"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: baslangic
short: "Modelin cevabını tamamlanmasını beklemeden, üretildiği sırayla parça parça iletmesi."
related: [token-ai, latency, llm-api, max-tokens, structured-output]
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

Streaming, modelin cevabın tamamını bitirmesini beklemek yerine ürettiği her [[token-ai|token]] hazır olduğunda göndermesidir. Ekranda kelimelerin tek tek belirmesinin sebebi budur. Cevabın toplam üretilme süresi değişmez; değişen, ilk kelimeyi görme anıdır.

## Benzetme

Yazıcıdan çıkan uzun bir belge gibi. Kâğıt çıkmaya devam ederken ilk satırları okumaya başlarsın. Belgenin tamamının basılma süresi aynıdır, ama elinde bir şey olması için sonuna kadar beklemen gerekmez.

## Dikkat

Streaming cevabı hızlandırmaz, bekleme hissini azaltır. İyileştirdiği şey toplam [[latency|gecikme]] değil, ilk parçanın gelme süresidir.

Bir de iptal edilebilirlik kazandırır: yanlış yola giden bir cevabı sonunu görmeden durdurabilir, hem süre hem ücret tasarruf edebilirsin.

Buna karşılık cevabın tamamını işlemesi gereken yazılım için zorluk çıkarır. Parça parça gelen metin henüz geçerli bir bütün değildir; [[structured-output|yapılandırılmış çıktı]] bekleyen bir kod, akışı ancak tamamlandığında ayrıştırabilir. Akışın ortasında da hata gelebilir: ilk kelimeler ekrana düşmüş olması isteğin başarıyla bittiği anlamına gelmez.
