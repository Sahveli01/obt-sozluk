---
term: "Tuple"
tr: ""
aliases: ["demet"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Uzunluğu sabit, sırası anlam taşıyan ve genellikle sonradan değiştirilemeyen küçük değer topluluğu."
related: [list, array, mutability, struct, pattern-matching]
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

Tuple, birkaç değeri tek bir paket hâlinde taşıyan, uzunluğu sabit bir topluluktur. [[list|Listenin]] aksine kaç parçadan oluştuğu baştan bellidir ve parçaların sırası anlamın kendisidir: birinci değer hep aynı şeyi, ikinci değer hep başka bir şeyi ifade eder. Parçaların aynı türden olması da gerekmez; bir metin ile bir sayı aynı tuple içinde yan yana durabilir.

Türkçede "demet" karşılığı ders kitaplarında geçer ama sektörde yerleşmemiştir; yazılımcılar terimi İngilizce hâliyle kullanır, bu yüzden burada da çevrilmedi.

## Nasıl çalışır?

Python'da `list` ile `tuple` iki ayrı tiptir ve aralarındaki asıl fark [[mutability|değiştirilebilirliktir]]. Listenin içeriği sonradan değiştirilebilir; tuple oluşturulduktan sonra değiştirilemez. "Değiştirdim" dediğin an aslında yeni bir tuple üretmiş olursun.

Bu değiştirilemezliğin iki pratik sonucu var. Birincisi, tuple bir hash map'te anahtar olarak kullanılabilir, çünkü değeri zaman içinde kaymaz. İkincisi, bir fonksiyondan birden fazla değer döndürmenin en doğal yolu tuple'dır: değerler sırayla paketlenir, çağıran taraf da tek satırda tek tek isimlere açar.

## Benzetme

Haritadaki bir noktanın enlem–boylam çifti gibi. Her zaman iki sayıdır; üçüncüsü yoktur. Sıraları yer değiştirirse nokta başka bir kıtaya düşer. Ve bir noktayı "biraz düzeltmek" diye bir şey yoktur — başka bir yer kastediyorsan onun kendi çifti vardır.

## Örnek

```python
konum = (41.015, 28.979)
enlem, boylam = konum

print(enlem)      # 41.015
print(len(konum)) # 2

# konum[0] = 0  ->  TypeError: 'tuple' object does not support item assignment
```

## Dikkat

Tek elemanlı tuple yazarken sondaki virgül şarttır: `(5)` sadece parantez içine alınmış bir sayıdır, `(5,)` ise tuple'dır. Bu, yeni başlayanların en sık düştüğü tuzaklardan biridir.

Bir de tuple her dilde yoktur. Bulunmadığı dillerde aynı işi ya küçük bir [[struct]] ya da iki alanlı bir sınıf görür; alanların adı olduğu için çoğu zaman daha okunaklı olur da.
