---
term: "YAML"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "Girintiye dayanan, yapılandırma dosyalarında sık kullanılan; JSON'ın taşıdığı veriyi daha az noktalamayla yazan biçim."
related: [json, toml, serialization, ci-cd, docker]
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

YAML, insanın elle yazması ve okuması için tasarlanmış bir veri biçimidir. [[json|JSON]]'ın taşıyabildiği veriyi taşır, ama süslü parantez ve tırnak yerine girinti ve tire kullanır. Bu yüzden en çok elle düzenlenen yapılandırma dosyalarında karşına çıkar: [[ci-cd|CI/CD]] iş akışları, [[docker|konteyner]] tanımları, sunucu ve araç ayarları.

## Nasıl çalışır?

Girinti burada süs değil, yapının kendisidir. Satır başındaki boşluk sayısı bir alanın hangi bloğa ait olduğunu belirler; sekme karakteri kabul edilmez. Tire ile başlayan satırlar liste elemanıdır.

İkinci önemli kural tip tahminidir: tırnak koymadığın sürece bir değerin sayı mı, mantıksal değer mi, metin mi olduğuna ayrıştırıcı karar verir. Bu, dosyayı kısaltır ama kararın senden alındığı anlamına gelir.

## Örnek

```yaml
ad: cuzdan
aktif: true
bakiye: 12.5
etiketler:
  - test
  - demo
```

Bu dosya, JSON maddesindeki örnekle birebir aynı veriyi taşır: aynı dört alan, aynı iki elemanlı liste. Aradaki tek fark yazım biçimidir.

## Dikkat

Tip tahmini sürpriz yapabilir. `surum: 1.10` yazarsan bu bir metin değil sayı olarak okunur ve değer `1.1`e dönüşür; sondaki sıfır kaybolur. Sürüm numarası, telefon numarası ya da baştaki sıfırı anlamlı olan kodlar gibi değerleri tırnak içine almak alışkanlık haline getirilmelidir.

Benzer şekilde `evet`, `hayır`, `on`, `off` gibi kelimelerin nasıl okunacağı YAML'ın sürümüne ve kullandığın ayrıştırıcıya göre değişebilir. Kesinlik istediğin her değeri tırnaklamak en güvenli yoldur.
