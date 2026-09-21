---
term: "Null"
tr: ""
aliases: ["none"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Bir değerin hiç olmadığını belirten özel değer; sıfırdan da boş metinden de farklıdır."
related: [data-type, variable, error-handling, boolean, type-safety]
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

Null, "burada bir değer yok" demenin yoludur. Bir [[variable|değişken]] tanımlanmıştır, ona ayrılmış bir yer vardır, ama içi doldurulmamıştır.

Önemli olan, bunun bir değersizlik değil, özel bir değer olmasıdır ve üç şeyden ayrılır: `0` bir sayıdır, `""` boş bir metindir, `False` bir karardır. Üçü de "cevap verildi" demektir; null "cevap yok" demektir.

Dillerin ona verdiği ad değişir: Python'da `None`, JavaScript'te `null` (ve ayrıca `undefined`). [[solidity|Solidity]] gibi bazı dillerde böyle bir kavram hiç yoktur; orada tanımlanmamış her değer sıfırdır ve bu, "girilmedi" ile "sıfır girildi" arasındaki farkı yazılımcının kendi eliyle saklamasını gerektirir. Türkçede yerleşik bir karşılığı yok; kodda hangi kelime yazılıysa o kullanılır.

## Nasıl çalışır?

Null'ın sorunu, üzerinde işlem yapılmaya çalışıldığında çıkar. Bir metnin uzunluğunu sorarsın ama elindeki şey metin değil, null'dır; program o noktada durur. Bu duruş çoğu zaman hatanın kaynaklandığı yerde değil, değerin çok uzaktan geldiği bir yerde olur ve izini sürmek zahmetlidir.

Modern diller bu yüzden "değer olmayabilir" ihtimalini [[data-type|tipin]] kendisine yazdırır: Rust'ta `Option`, TypeScript'te `string | null` gibi. Böylece derleyici, sen kontrol etmeden o değeri kullanmana izin vermez.

## Benzetme

Bir işe alım formundaki "maaş beklentisi" satırını düşün. Üç ihtimal var: kişi `30000` yazmış, `0` yazmış ya da satırı boş bırakmış. İlk ikisi cevaptır. Üçüncüsü cevabın yokluğudur; ortalamayı hesaplarken onu sıfır saymak sonucu bozar ve "boş bırakanları arayalım" diyen kişi de sıfır yazanı aramamalıdır.

## Örnek

```python
ad = None
if ad is None:
    print("ad girilmemis")
else:
    print(len(ad))
```

Kontrol yapılmadan `len(ad)` çağrılsaydı program `TypeError` ile dururdu.

## Dikkat

Null kontrolünü "boş mu?" kontrolüyle karıştırma. Python'da `if not ad:` yazarsan boş metin de, `0` da, `None` da aynı dala düşer; oysa bunlar farklı durumlardır ve farklı davranman gerekebilir.

Veride null gördüğünde sorulacak ilk soru şudur: burası neden boş? Cevap "henüz doldurulmadı" ile "böyle bir bilgi hiç yok" arasında değişir; ikisi aynı çözümü istemez.
