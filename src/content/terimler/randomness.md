---
term: "Randomness"
tr: "Rastgelelik"
aliases: ["rastgelelik"]
category: kriptografi
subcategory: "Temeller"
level: orta
short: "Bir sonraki değerin önceden bilinememesi özelliği; kriptografik anahtarların güvenliği buna dayanır."
related: [entropy, weak-randomness, verifiable-random-function-vrf, private-key, nonce-kriptografi]
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

Rastgelelik, bir değerin öngörülemez olması özelliğidir. [[entropy|Entropi]] bu özelliğin ölçüsüyken rastgelelik özelliğin kendisidir: entropi "ne kadar" sorusunu, rastgelelik "var mı" sorusunu karşılar.

Kriptografide neredeyse her şeyin altında bu vardır. Anahtarlar, tek kullanımlık değerler ([[nonce-kriptografi|nonce]]), tuz değerleri — hepsi tahmin edilemedikleri sürece iş görür.

## Benzetme

Kart destesini karıştıran bir makine gibi. Makineye her seferinde aynı sırada dizilmiş desteyi verip aynı düğmeye basarsan, çıkan sıra da her seferinde aynı olur. Karışık görünür, ezberlenemez, elle takip edilemez — ama aynı girdiyle aynı sonucu verdiği için sürpriz değildir. Sürpriz olması için makinenin dışarıdan, kimsenin bilmediği bir şeye ihtiyacı vardır.

## Nasıl çalışır?

Bilgisayarlar kural izleyen makinelerdir, dolayısıyla kendiliğinden rastgele sayı üretemezler. Ürettikleri şeye **sözde rastgele** denir: bir başlangıç değerinden (tohum) belirli bir hesapla türetilen, istatistiksel olarak rastgele görünen ama tohumu bilen için tamamen hesaplanabilir bir dizi.

Bu, simülasyon ya da oyun için yeterlidir; kriptografi için değildir. Kriptografik işlerde işletim sisteminin rastgelelik havuzu kullanılır. Bu havuz donanımdaki ölçülemeyen küçük değişimlerden beslenir ve dışarıdan tahmin edilebilecek bir tohuma bağlı değildir.

## Örnek

Tarayıcıda anahtarlık için 32 baytlık bir değer üretmenin doğru yolu, dilin kendi kriptografik kaynağını çağırmaktır:

```js
const anahtar = crypto.getRandomValues(new Uint8Array(32));
```

`Math.random()` bu iş için kullanılmaz: hızlı olmak üzere tasarlanmıştır, tahmin edilemez olmak üzere değil.

## Dikkat

Rastgelelik, üretildiği yer gizli kalabildiği sürece vardır. Akıllı sözleşmelerin içinde böyle bir yer bulunmaz; zincirdeki her veri herkese açıktır ve oradan üretilen sayı öngörülebilir kalır ([[weak-randomness|zayıf rastgelelik]]). Zincirde rastgeleliğe ihtiyaç duyan uygulamalar bu yüzden sayıyı dışarıda üretilip kanıtıyla birlikte getirilen kaynaklardan alır ([[verifiable-random-function-vrf|VRF]]).
