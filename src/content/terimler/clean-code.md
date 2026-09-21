---
term: "Clean Code"
tr: "Temiz kod"
aliases: ["temiz kod"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: baslangic
short: "Çalışmanın yanı sıra sonradan okunmak üzere yazılmış, niyeti açıkça görünen kod."
related: [refactoring, code-review, linter, technical-debt, dry]
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

Temiz kod, çalışmanın yanı sıra sonradan okunmak üzere yazılmış koddur. Bir kod tek bir kez yazılır ama onlarca kez okunur: hata ararken, özellik eklerken, altı ay sonra kendi yazdığına bakarken. "Temiz" sıfatı, bu okumaların ne kadar sürdüğüyle ilgilidir.

Pratikte birkaç şeye dönüşür: değişkenin adının ne tuttuğunu söylemesi, bir fonksiyonun tek bir iş yapması, sürprizli kısayollardan kaçınılması. Hiçbiri programın çıktısını değiştirmez — değiştirdiği şey, o çıktıyı anlamak için harcanan zamandır.

## Benzetme

Noktalama işareti olmayan bir metin gibi. Cümleler aynı cümleler, bilgi eksiksiz, okuyan sonunda anlıyor. Ama nerede durulacağını kendisi bulmak zorunda kaldığı için üç kat yavaş anlıyor ve bazı satırları iki kez okuyor. Noktalama metne bilgi eklemez; okuyanın işini hafifletir.

## Örnek

Aynı işi yapan iki kod:

```python
hesaplar = [("ayse", 50), ("can", 0)]

def h(l):
    return [x[0] for x in l if x[1] > 0]

def bakiyesi_olanlar(hesaplar):
    return [ad for ad, bakiye in hesaplar if bakiye > 0]

print(h(hesaplar))                  # ['ayse']
print(bakiyesi_olanlar(hesaplar))   # ['ayse']
```

## Dikkat

"Temiz" ölçülebilir bir şey değil; bir ekipte alışılmış yazım biçimi başka bir ekipte fazla dağınık ya da fazla süslü bulunabilir. Bu yüzden tartışmanın mekanik kısmı araçlara bırakılır: [[linter|linter]] ve biçimlendirici, tekrar eden itirazları otomatikleştirir; geriye [[code-review|kod incelemesinde]] konuşulacak asıl şey kalır.

İki yanlış anlamaya da dikkat. Birincisi, temiz kod doğru kod demek değildir; güzel adlandırılmış bir fonksiyon pekâlâ yanlış hesap yapıyor olabilir. İkincisi, bu bir karakter meselesi değildir: acele yazılmış dağınık bir kod bazen o an verilebilecek en makul karardır ve [[technical-debt|teknik borç]] olarak kayda geçirilir.
