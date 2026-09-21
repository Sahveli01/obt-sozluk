---
term: "Variable"
tr: "Değişken"
aliases: ["değişken"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir değere verdiğin ad; adı aynı kalırken arkasındaki değer program çalışırken değişebilir."
related: [constant, data-type, scope-programlama, mutability, function]
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

Değişken, bir değere taktığın addır. `puan = 10` yazdığın andan sonra kodun geri kalanında `puan` demen yeter; bilgisayar oraya 10'u koyar. Değerin ne cinsten olduğunu ise [[data-type|veri tipi]] belirler.

Asıl faydası addan gelir. Aynı değeri otuz yere elle yazmak yerine tek bir ada bağlarsın: hem ne olduğu okunur olur, hem de değiştirmen gerektiğinde tek satır düzeltirsin.

İkinci özelliği, adındaki gibi, değişebilmesidir. `puan = 10` deyip birkaç satır sonra `puan = 25` yazabilirsin; ad aynı kalır, arkasındaki değer yenilenir. Bir değişkenin kodun hangi bölgesinde tanınacağını [[scope-programlama|kapsam]] belirler.

## Benzetme

Sınıf başkanı gibi. "Sınıf başkanı toplantıya gelsin" cümlesi yıl boyunca aynı kalır ama kimin geleceği seçime göre değişir. Cümleyi kuran kişinin ismi bilmesi gerekmez; görevin adını söyler, o anda o görevde kim varsa o gelir.

## Örnek

```python
sayac = 0
sayac = sayac + 1
print(sayac)   # 1
```

İkinci satır "sayac'ın şu anki değerini al, bir ekle, sonucu yine sayac'a yaz" demektir. Sağ taraf önce hesaplanır.

## Dikkat

Ada dikkat et. `x` ve `y` yazmak hızlıdır ama altı ay sonra kimse ne olduğunu hatırlamaz; `kalan_sure` gibi adlar kodu okunur kılar.

Değişmeyecek bir değeri değişken olarak tanımlamak da alışkanlık hâline gelmemeli. Böyle değerler için [[constant|sabit]] vardır ve sabit kullanmak, ilerideki bir satırın yanlışlıkla üzerine yazmasını engeller.
