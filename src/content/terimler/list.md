---
term: "List"
tr: "Liste"
aliases: ["liste"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Sırası korunan, ama eleman eklendikçe ve çıkarıldıkça boyu değişebilen topluluk."
related: [array, tuple, data-structure, loop, mutability]
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

Liste, değerleri bir sıra içinde tutan ama kaç tane değer tutacağı baştan belli olmayan topluluktur. Sonuna yeni eleman ekleyebilir, ortadan bir eleman çıkarabilir, hepsini baştan sona gezebilirsin. Eklediğin sıra korunur: listeye önce "oku" sonra "yaz" koyduysan gezerken de o sırayla karşına gelirler.

Günlük programlamanın en çok kullanılan yapısı budur. Kaç kayıt geleceğini bilmediğin her yerde — bir dosyanın satırları, bir formdan gelen cevaplar, bir kullanıcının seçtikleri — işe listeyle başlarsın.

## Benzetme

Sıraya girmiş insanlar gibi. Kimin kaçıncı olduğu bellidir ve sıra anlam taşır, ama sıranın uzunluğu sabit değildir: arkaya biri eklenir, araya biri alınır, ortadan biri ayrıldığında arkadakiler bir adım öne kayar. Sıra bozulmaz, yalnızca uzar ve kısalır.

## Örnek

```python
gorevler = ["oku", "yaz"]
gorevler.append("test et")
gorevler.remove("oku")

print(gorevler)       # ['yaz', 'test et']
print(len(gorevler))  # 2
print(gorevler[0])    # yaz
```

## Dikkat

Listenin esnekliği bedavaya gelmez. Sonuna eklemek ucuzdur; buna karşılık baştan ya da ortadan eleman silmek, arkadaki bütün elemanların yer değiştirmesi anlamına gelebilir. Küçük listelerde bu fark hiç hissedilmez, yüz binlik listelerde bir [[loop|döngünün]] içinde fark edilir.

Ayrıca "liste" kelimesi bazı dillerde bambaşka bir yapıya, elemanların birbirini işaret ettiği bağlı listeye verilir. Hangi dilde olduğunu bilmeden performans hakkında hüküm verme.
