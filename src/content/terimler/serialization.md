---
term: "Serialization"
tr: "Serileştirme"
aliases: ["serilestirme"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Bellekteki yapılı bir verinin, saklanabilecek ya da gönderilebilecek tek sıra hâlinde bir diziye çevrilmesi."
related: [deserialization, json, byte, encoding, calldata]
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

Serileştirme, bellekteki yapılı bir veriyi — iç içe geçmiş nesneleri, listeleri, alanları — baştan sona okunabilen tek sıra hâlinde bir diziye çevirmektir. Ortaya çıkan şey ya okunabilir bir metindir ([[json|JSON]] gibi) ya da doğrudan bir [[byte|bayt]] dizisidir.

Buna neden ihtiyaç duyulduğu şuradan anlaşılır: bellekteki bir nesne, o anki makinedeki adreslere ve o dilin iç düzenine bağlıdır. Bu hâliyle ne bir dosyaya yazılabilir ne de ağdan geçirilebilir. Diskin ve ağın anladığı tek şey sırayla gelen baytlardır. Serileştirme, nesneyi taşınabilir bir anlatıma çevirir; karşı taraf aynı kuralı bildiği için onu yeniden kurabilir. Ters yöndeki işlemin adı [[deserialization|deserileştirmedir]].

## Nasıl çalışır?

Önce bir format seçilir: insanın okuyabildiği metin formatları mı, yoksa yer kaplamayan ikili formatlar mı. Sonra veri düzleştirilir — hangi alanın hangi sırayla yazılacağı, iç içe yapıların nasıl temsil edileceği, sayıların kaç baytla yazılacağı kararlaştırılır. Bu kararların toplamı formatın kendisidir ve iki taraf aynı kararları bilmek zorundadır.

Blockchain'de bu adım görünmez ama kritiktir: imzaladığın işlem aslında belirli bir kurala göre serileştirilmiş bir bayt dizisidir. İmza o dizinin üzerine atılır ve ağa o dizi gider; sözleşmeye giden [[calldata]] da aynı mantıkla paketlenmiştir.

## Benzetme

Bir kazağın örgü şeması gibi. Kazak üç boyutludur, kolları vardır, bir yerinden tutulup ölçülür. Şema ise tek bir satır dizisidir: "2 ters, 2 düz, 14 sıra". Kazağın kendisi postayla gitmez ama şeması bir kâğıda sığar; aynı kuralları bilen biri onu okuyup aynı kazağı yeniden örer.

## Örnek

```python
import json

islem = {"gonderen": "ada", "tutar": 15}
metin = json.dumps(islem)

print(metin)        # {"gonderen": "ada", "tutar": 15}
print(type(metin))  # <class 'str'>
```

## Dikkat

Aynı veri birden fazla biçimde serileştirilebilir. Alanların sırası değişirse ortaya çıkan bayt dizisi de değişir; imza ve özet hesaplarında bu, aynı verinin farklı sonuç vermesi demektir. Bu yüzden kriptografik işlerde "kanonik" yani tek bir doğru serileştirme biçimi belirlenir.

Her şey de serileştirilemez. Açık bir dosya, bir ağ bağlantısı ya da çalışan bir işlev, taşındığı yerde anlamını yitirir; bu tür şeyleri yazmaya çalışmak yerine karşı tarafta yeniden kurmak gerekir.
