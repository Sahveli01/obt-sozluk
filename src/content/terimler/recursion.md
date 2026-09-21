---
term: "Recursion"
tr: "Özyineleme"
aliases: ["ozyineleme", "recursive"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Bir fonksiyonun, problemi her seferinde biraz küçülterek kendi kendini çağırmasıyla çözüme ulaşması."
related: [function, loop, stack-and-heap, algorithm, reentrancy-attack]
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

Özyineleme, bir [[function|fonksiyonun]] kendi kendini çağırmasıdır. Mantığı şudur: büyük problemi doğrudan çözemiyorsan, onu aynı biçimde ama daha küçük bir probleme indirgersin ve aynı fonksiyonu bu küçük hâl için çağırırsın. Küçülme yeterince ilerleyip artık çözmenin gerekmediği en basit hâle varıldığında iş biter.

O en basit hâle **taban durumu** denir ve özyinelemenin kalbi odur. İç içe klasörleri gezmek, bir ağaç yapısında arama yapmak, iç içe geçmiş bir veriyi açmak gibi işlerde özyineleme, aynı işi [[loop|döngüyle]] yazmaktan çok daha kısa durur.

## Nasıl çalışır?

Her fonksiyon çağrısı, çalışma sırasında **yığın** üzerinde kendine bir yer açar: parametreleri, yerel değişkenleri ve "işim bitince nereye döneceğim" bilgisi orada tutulur. Özyinelemede bu çağrılar üst üste birikir; on kez kendini çağıran bir fonksiyonun aynı anda on çerçevesi açıktır.

Taban durumuna varıldığında zincir tersine işler: en içteki çağrı bir değer döndürür, bir üstteki onu kullanıp kendi değerini döndürür ve cevap yukarı doğru toplanır.

Taban durumu yoksa ya da hiçbir zaman ulaşılamıyorsa hiçbir çağrı cevap veremez. Çağrılar birikmeye devam eder, [[stack-and-heap|yığın]] için ayrılan alan dolar ve program "stack overflow" diyerek çöker. Bu bir yavaşlama değil, ani bir duruştur.

## Benzetme

Sinemada arka sırada oturup kaçıncı sırada olduğunu merak etmek gibi. Öndeki kişiye sorarsın, o da kendi önündekine sorar; soru en öne kadar gider. Ön sıradaki "ben birinci sıradayım" dediği anda cevap geri dönmeye başlar, herkes duyduğu sayıya bir ekleyip arkasındakine söyler. Ama ön sıradaki de dönüp önüne sorsaydı, kimse cevap veremeden bütün salon beklemede kalırdı.

## Örnek

```python
def faktoriyel(n):
    if n <= 1:          # taban durumu
        return 1
    return n * faktoriyel(n - 1)

print(faktoriyel(5))    # 120
```

## Dikkat

Her tekrarı özyinelemeyle yazmak zorunda değilsin; basit sayma işlerinde döngü hem daha okunaklı hem daha ucuzdur. Ayrıca dillerin çoğu çağrı derinliğine bir üst sınır koyar; derinliği veriye bağlı olan özyinelemelerde bu sınırı hesaba kat.

Akıllı sözleşmelerde benzer bir fikir kötüye kullanılabilir: bir fonksiyon işini bitirmeden aynı fonksiyona yeniden girilmesi [[reentrancy-attack|reentrancy saldırısının]] temelidir. Aradaki fark, oradaki ikinci girişi fonksiyonun kendisinin değil, dışarıdaki bir sözleşmenin tetiklemesidir.
