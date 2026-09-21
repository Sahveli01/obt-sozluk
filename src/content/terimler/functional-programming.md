---
term: "Functional Programming"
tr: "Fonksiyonel programlama"
aliases: ["fonksiyonel programlama"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: orta
short: "Programı, girdisini çıktıya çeviren ve dışarıda iz bırakmayan fonksiyonların birleşimi olarak kuran yaklaşım."
related: [pure-function, object-oriented-programming-oop, immutability, closure, recursion]
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

Fonksiyonel programlama, programı girdisini çıktıya çeviren fonksiyonların birleşimi olarak kuran yaklaşımdır. Buradaki fonksiyon matematikteki anlamına yakındır: aynı girdiye her zaman aynı cevabı verir ve dışarıda hiçbir iz bırakmaz.

"İz bırakmamak" şu demektir: fonksiyon dışarıdaki bir değişkeni değiştirmez, verilen listeyi bozmaz, ekrana bir şey yazmaz. Böyle fonksiyonlara [[pure-function|saf fonksiyon]] denir. Bir fonksiyonun ne yaptığını anlamak için yalnızca kendisini okuman yeter; programın geri kalanını bilmek zorunda kalmazsın.

## Nasıl çalışır?

Yaklaşımı ayakta tutan birkaç alışkanlık var:

- **Değiştirmemek.** Var olan veri üstüne yazılmaz, değiştirilmiş yeni bir kopya üretilir. Bu [[immutability|değişmezlik]] sayesinde elindeki değerin ayağının altından çekilmediğinden emin olursun.
- **Fonksiyonu değer gibi kullanmak.** Fonksiyonlar başka fonksiyonlara verilebilir, onlardan döndürülebilir; `map`, `filter`, `sorted(key=...)` bunun günlük hâlidir. [[closure|Closure]] da buradan doğar.
- **Döngü yerine dönüşüm.** Sayaç artırıp liste güncellemek yerine veriyi bir zincirden geçirirsin; bazı dillerde döngünün yerini [[recursion|özyineleme]] alır.

## Örnek

```python
def zam_yap(fiyatlar, artis):
    return [f + artis for f in fiyatlar]   # yeni liste döner

eski = [100, 200]
yeni = zam_yap(eski, 10)
print(eski)    # [100, 200]  — dokunulmadı
print(yeni)    # [110, 210]
```

## Dikkat

Fonksiyonel programlama ile [[object-oriented-programming-oop|nesne yönelimli programlamanın]] karşılaştırması, hangisinin neyi kolaylaştırdığı ve neyi zorlaştırdığı OOP maddesinde toplandı.

Burada iki pratik nokta kalıyor. Birincisi: bir program tamamen saf olamaz. Dosya okumak, veritabanına yazmak, zinciri sorgulamak tanımı gereği dış dünyaya dokunur. Yaygın çözüm saf olmayan kodu kenarlara toplayıp ortayı saf tutmaktır.

İkincisi: her değişiklikte yeni kopya üretmek bedava değildir. Küçük veride fark edilmez, çok büyük veride bellek ve hız sorunu olabilir; bu yüzden bazı diller aradaki farkı kapatan özel veri yapıları getirir. Python, JavaScript, Rust gibi diller iki yaklaşımı da desteklediği için seçim dil düzeyinde değil, dosya düzeyinde yapılır.
