---
term: "Big O Notation"
tr: ""
aliases: ["big o", "büyük o gösterimi"]
category: programlama
subcategory: "Algoritmalar"
level: orta
short: "Girdi büyüdükçe bir algoritmanın işinin nasıl arttığını, kesin süre vermeden anlatan gösterim."
related: [time-complexity, space-complexity, algorithm, data-structure]
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

Big O, bir [[algorithm|algoritmanın]] kaç saniye süreceğini söylemez. Girdi büyüdükçe yaptığı işin **nasıl** arttığını söyler: girdi iki katına çıkınca iş de iki katına mı çıkıyor, dört katına mı, yoksa neredeyse hiç mi değişmiyor? Ölçtüğü şey hız değil, büyümenin biçimidir — iki yöntemi farklı bilgisayarlarda ölçsen bile karşılaştırabilirsin.

Türkçede yerleşmiş bir karşılığı yok; sektörde İngilizce okunuşuyla "Big O" denir, o yüzden burada da çevrilmedi.

## Benzetme

Bir düğün düşün. Davetli sayısını iki katına çıkarırsan masa sayısı da iki katına çıkar: düz bir artış. Ama "herkes herkesle tokalaşsın" dersen tokalaşma sayısı iki değil, yaklaşık dört katına çıkar. Daha büyük salon tutmak bu farkı kapatmaz; kalabalık büyüdükçe tokalaşma işi masa dizmeyi mutlaka geçer. Big O, salonun kalitesini değil, tam olarak bu "neye göre artıyor" sorusunu konuşur.

## Nasıl çalışır?

Yaygın birkaç gösterim ve kelimeyle karşılığı:

- `O(1)`: girdi ne kadar büyürse büyüsün iş aynı kalır. Sözlükten anahtarla değer almak böyledir.
- `O(log n)`: her adımda kalan işin yarısı elenir; girdi iki katına çıktığında iş yalnızca bir adım artar. Sıralı bir listeyi ortadan bölerek aramak böyledir.
- `O(n)`: girdi iki katına çıkınca iş de iki katına çıkar. Listeyi baştan sona gezmek böyledir.
- `O(n²)`: girdi iki katına çıkınca iş dört katına çıkar. Her elemanı her elemanla karşılaştırmak böyledir.

Gösterim yazılırken sabit çarpanlar ve küçük terimler atılır: "3n + 50 adım" da, "n adım" da `O(n)` sayılır. Sebebi şu: girdi yeterince büyüdüğünde sonucu belirleyen şey bu sabitler değil, artışın biçimidir.

## Örnek

Her çifti bir kez ele alan iç içe döngü `O(n²)` davranır; girdi ikiye katlanınca sonuç yaklaşık dörde katlanıyor:

```python
def cift_sayisi(n):
    sayac = 0
    for i in range(n):
        for j in range(i + 1, n):
            sayac += 1
    return sayac

print(cift_sayisi(10))  # 45
print(cift_sayisi(20))  # 190
```

## Dikkat

Atılan sabitler her zaman zararsız değildir. `3n` ile `1000n` aynı gösterime düşer ama biri diğerinden çok daha yavaştır; küçük girdilerde `O(n²)` bir yöntem `O(n)` bir yöntemi rahatlıkla geçebilir. Big O, "girdi yeterince büyüdüğünde" cümlesiyle okunur; elindeki girdi hep küçük kalacaksa ölçüp karar vermek daha doğrudur.

Bir de gösterim tek başına neyin ölçüldüğünü söylemez. Aynı `O(n)` yazısı adım sayısı için de ([[time-complexity|zaman karmaşıklığı]]) bellek için de ([[space-complexity|alan karmaşıklığı]]) kullanılır; hangisinden söz edildiği bağlamdan anlaşılır.
