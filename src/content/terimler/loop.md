---
term: "Loop"
tr: "Döngü"
aliases: ["dongu", "for döngüsü", "while döngüsü"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Aynı adımların bir topluluğun her elemanı için ya da bir koşul sürdüğü sürece tekrar tekrar çalıştırılması."
related: [conditional-statement, array, recursion, iterator, time-complexity]
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

Döngü, aynı adımları tekrar tekrar çalıştırmanın yoludur. Beş yüz kullanıcıya tek tek e-posta göndermek için beş yüz satır yazmazsın; bir kez "her kullanıcı için şunu yap" dersin.

İki temel biçimi vardır. `for` döngüsü bir topluluğu — bir [[array|dizinin]] ya da listenin elemanlarını — baştan sona gezer; kaç tur döneceği baştan bellidir. `while` döngüsü ise bir [[conditional-statement|koşul]] doğru olduğu sürece dönmeye devam eder; kaç tur süreceği çalışırken belli olur.

## Benzetme

Lavabodaki bulaşıkları yıkamak gibi. Her tabak için aynı üç hareketi yaparsın: ıslat, ovala, durula. Kaç tabak varsa o kadar tekrar edersin ve tabak kalmayınca durursun. Musluğu kapatmayı unutup lavaboya sürekli yeni tabak düşseydi, işin hiç bitmezdi.

## Örnek

```python
sepet = ["elma", "ekmek", "peynir"]
for urun in sepet:
    print(urun)

sayac = 3
while sayac > 0:
    print(sayac)
    sayac -= 1     # bu satır olmazsa döngü hiç bitmez
```

## Dikkat

Bir `while` döngüsünün bitmesi, içindeki bir şeyin koşulu er geç yanlış yapmasına bağlıdır. Sayacı azaltmayı unutursan program sonsuza kadar döner; ekran boş kalır, işlemci ısınır, hiçbir hata mesajı gelmez.

Döngünün maliyeti de gözden kaçar. Bir döngünün içine ikinci bir döngü koyduğunda iş sayısı çarpılarak artar; yüz elemanlı iki listede on bin tur olur. Akıllı sözleşmelerde bu doğrudan paraya dönüşür: zincir üstünde uzunluğu belli olmayan bir döngü, kullanıcının ödeyeceği [[gas]] miktarını öngörülemez hâle getirir.
