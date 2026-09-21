---
term: "Module"
tr: "Modül"
aliases: ["modül"]
category: programlama
subcategory: "Kod organizasyonu"
level: orta
short: "Kodun kendi içinde anlamlı bir parçasını bir arada tutan, dışarıya yalnızca seçtiğini açan birim."
related: [package, import, module-bundler, scope-programlama, function]
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

Modül, kodun kendi içinde anlamlı bir parçasını bir arada tutan birimdir. Çoğu dilde bir modül bir dosyadır: para hesaplarını yapan satırlar bir dosyada, kullanıcı doğrulaması yapanlar başka dosyada durur.

Modülün iki yüzü vardır. İçeride kendi değişkenleri ve yardımcı [[function|fonksiyonları]] vardır, bunlar dışarıdan görünmez ([[scope-programlama|kapsam]]). Dışarıya ise yalnızca seçtiği adları açar; başka bir dosya bu adlara [[import]] ile ulaşır.

Kelime dilden dile kayar: Python'da modül bir dosyadır, Rust'ta `mod` ile açılan ve iç içe geçebilen bir ad alanıdır, Node.js'te her dosya kendi modülüdür. Ortak fikir hep aynı: sınırı ve adı olan bir kod parçası.

## Nasıl çalışır?

Python ve JavaScript'te bir modül ilk kez içeri alındığında bir kez çalıştırılır, sonucu bellekte tutulur; aynı modülü on dosya kullansa da tek kopya olur. Bu yüzden modülün en üst seviyesine "iş yapan" kod koymak sürpriz davranış üretir.

Tarayıcıya giderken çok sayıda küçük modül tek dosyada birleştirilir; bu işi [[module-bundler|modül paketleyici]] yapar.

## Örnek

İki dosyayı aynı klasöre koyup `python main.py` çalıştırırsan çalışır; dışarıdan hiçbir şey kurman gerekmez.

```python
# para.py
KURUS = 100

def liraya_cevir(kurus):
    return kurus / KURUS
```

```python
# main.py
import para

print(para.liraya_cevir(2550))  # 25.5
```

## Dikkat

Modül ile [[package|paket]] sık karışır. Modül dosya düzeyinde bir düzen birimidir; paket ise dağıtılan, kurulan, sürümü olan birimdir. Bir paketin içinde onlarca modül olabilir.

İşi zorlaştıran şey, dillerin bu iki kelimeyi farklı yerlerde kullanmasıdır: Python'da içinde modüller bulunan bir klasöre de "package" denir. Hangi dilde konuştuğunu bilmeden kelimeye güvenme.
