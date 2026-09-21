---
term: "Data Structure"
tr: "Veri yapısı"
aliases: ["veri yapısı", "veri yapıları"]
category: programlama
subcategory: "Algoritmalar"
level: orta
short: "Verinin nasıl düzenlendiği; hangi işlemin ucuz, hangisinin pahalı olacağını bu düzen belirler."
related: [algorithm, array, hash-map-dictionary, merkle-tree, time-complexity, space-complexity]
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

Veri yapısı, elindeki verinin nasıl düzenlendiğidir: hangi eleman nerede durur, yenisi nereye eklenir, aranan nasıl bulunur. [[algorithm|Algoritma]] yöntemse, veri yapısı o yöntemin üzerinde çalıştığı zemindir.

Seçim önemlidir, çünkü her düzen bazı işleri ucuzlatırken bazılarını pahalılaştırır. "En iyi veri yapısı" diye bir şey yoktur, yalnızca "bu işe uygun olan" vardır. Yanlış seçim, kusursuz yazılmış bir yöntemi bile yavaşlatır.

## Benzetme

Mutfaktaki baharat rafı gibi. Aynı kavanozlar, farklı diziliş. Alfabetik dizersen "kimyon nerede?" sorusu bir bakışta biter. Poşetin içine hepsini boşaltırsan her seferinde karıştırman gerekir. Ama en sık yaptığın üç yemeğin baharatlarını öne alırsan, alfabetik raf bu sefer işine yaramaz. Kavanozlar değişmedi; senin ne sorduğun düzeni belirliyor.

## Nasıl çalışır?

Sık kullanılan birkaçı: [[array|dizi]] elemanları sırayla tutar, sıra numarasını bilince anında erişirsin, ama araya ekleme yapmak sonrakileri kaydırmayı gerektirir. [[hash-map-dictionary|Sözlük]] anahtar–değer çiftleri tutar; anahtarı bilince değeri neredeyse anında bulur, karşılığında sıralama bilgisi tutmaz ve daha çok yer kaplar. Ağaçlar veriyi dallanan bir hiyerarşide tutar; sıralı kalmayı ve aramayı daraltarak ilerlemeyi kolaylaştırır.

Blockchain tarafında aynı mantık görünür bir sonuç üretir: bir bloktaki işlemleri düz liste yerine [[merkle-tree|Merkle ağacı]] olarak tutmak, "bu işlem bu blokta var mı?" sorusunu bütün listeyi indirmeden cevaplamayı mümkün kılar.

## Örnek

Aynı veri, iki düzen. Listede aranan kişi bulunana kadar elemanlar tek tek gezilir; sözlükte anahtar doğrudan kullanılır.

```python
liste = [("ada", 31), ("linus", 54), ("grace", 45)]
yas = None
for ad, y in liste:
    if ad == "linus":
        yas = y
print(yas)  # 54

sozluk = {"ada": 31, "linus": 54, "grace": 45}
print(sozluk["linus"])  # 54
```

## Dikkat

Üç elemanlı bir veride hiçbir düzen farkı hissedilmez; fark veri büyüdükçe açılır, bu yüzden seçim küçük örnekle sınanmaz ([[time-complexity|zaman karmaşıklığı]] bunun için vardır).

Hız her zaman bedavaya gelmez: aramayı hızlandıran düzenler genelde fazladan bellek ister, yani [[space-complexity|alan karmaşıklığı]] artar. Bir de veri yapısını dilin hazır tipiyle karıştırma: Python'daki `dict` bir sözlüğün gerçeklenmiş halidir, sözlük fikrinin kendisi dilden bağımsızdır.
