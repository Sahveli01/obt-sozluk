---
term: "Return Value"
tr: "Dönüş değeri"
aliases: ["dönüş değeri"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir fonksiyonun işini bitirince kendisini çağıran koda geri verdiği değer."
related: [function, parameter, argument, "null"]
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

Dönüş değeri, bir [[function|fonksiyonun]] işini bitirdiğinde kendisini çağıran koda geri verdiği değerdir. `return` satırı çalıştığı anda fonksiyon durur ve o değer, çağrının yazıldığı yere yerleşir.

Faydası, sonucun kullanılabilir olmasıdır. Dönen değeri bir [[variable|değişkene]] atayabilir, bir hesaba sokabilir, başka bir fonksiyona [[argument|argüman]] olarak verebilirsin.

Her fonksiyonun değer döndürmesi şart değildir. Bazıları sadece bir iş yapar — ekrana yazar, dosyaya kaydeder — ve geriye bir şey vermez. Python'da böyle bir fonksiyon aslında [[null|None]] döndürür.

## Benzetme

Bir arkadaşının senden bir hesap yapmanı istediğini düşün. İki türlü davranabilirsin: sonucu yüksek sesle söylersin, odadakiler duyar ve iş orada biter; ya da bir kâğıda yazıp eline verirsin, o da kâğıdı cebine koyup bir sonraki hesapta kullanır. `print` birincisidir, `return` ikincisi.

## Örnek

```python
def topla(a, b):
    return a + b

sonuc = topla(2, 3)
print(sonuc * 10)   # 50
```

`return` yerine `print(a + b)` yazsaydı ekranda `5` görürdün ama `sonuc` boş kalırdı ve son satır hata verirdi.

## Dikkat

`print` ile `return` karıştırılır ve bu, yeni başlayanların en sık takıldığı noktadır. `print` değeri ekrana yazar; program içinde o değerle bir şey yapamazsın. `return` ise değeri kodun kendisine verir ve ekranda hiçbir şey görünmez.

Bir de `return` satırından sonra yazılan kod hiç çalışmaz; fonksiyon o satırda biter.
