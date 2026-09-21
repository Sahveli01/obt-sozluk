---
term: "Conditional Statement"
tr: "Koşul ifadesi"
aliases: ["if-else", "kosul ifadesi"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Programın bir koşula bakıp iki yoldan hangisini izleyeceğine karar vermesini sağlayan ifade."
related: [boolean, loop, syntax, function]
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

Koşul ifadesi, programın yoluna nasıl devam edeceğine karar verdiği yerdir. Kodun tamamı yukarıdan aşağı akar; koşul ifadesi bu akışa bir soru sokar: "bakiye fiyattan büyük mü?" Cevap doğruysa bir grup satır çalışır, yanlışsa başka bir grup çalışır ya da hiçbiri çalışmaz.

Sorulan sorunun cevabı her zaman iki değerden biridir: doğru ya da yanlış. Bu ikili değere [[boolean|boolean]] denir. Karşılaştırmalar (`>`, `==`, `!=`) ve bunların "ve / veya" ile birleştirilmiş hâlleri hep bu iki cevaptan birini üretir.

## Benzetme

Sabah evden çıkmadan pencereden bakmak gibi. Tek bir soru sorarsın: yağmur yağıyor mu? Yağıyorsa şemsiyeyi alırsın, yağmıyorsa almazsın. Soruyu bir kez sorarsın ve o anki cevaba göre iki davranıştan yalnızca biri gerçekleşir; ikisini birden yapamazsın.

## Örnek

```python
bakiye = 120
fiyat = 150

if bakiye >= fiyat:
    print("satın alındı")
elif bakiye > 0:
    print("bakiye yetmiyor")
else:
    print("hiç bakiye yok")

# bakiye yetmiyor
```

## Dikkat

En sık yapılan hata `=` ile `==` işaretlerini karıştırmaktır. Tek eşittir "şunu şuna ata" demektir, çift eşittir "şu şuna eşit mi" diye sorar. Bazı diller bunu hata olarak yakalar, bazıları sessizce kabul eder ve hata gece yarısı seni bulur.

Koşulların sırası da önemlidir. Yukarıdaki örnekte ilk uyan koşul çalışır ve altındakilere hiç bakılmaz; geniş bir koşulu dar olanın üstüne koyarsan alttaki hiçbir zaman çalışmaz.
