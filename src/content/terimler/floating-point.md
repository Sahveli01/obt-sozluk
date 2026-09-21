---
term: "Floating Point"
tr: "Kayan noktalı sayı"
aliases: ["kayan noktalı sayı", "float", "ondalıklı sayı"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Ondalıklı sayıları sınırlı sayıda basamakla, çoğu zaman yaklaşık olarak saklayan sayı tipi."
related: [data-type, integer, bit, wei]
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

Kayan noktalı sayı, ondalık kısmı olan sayıları saklamak için kullanılan [[data-type|veri tipi]]dir: `3.14`, `-0.5`, `2.0`. Adındaki "kayan nokta", ondalık ayracının sabit bir yerde durmamasından gelir; sayı büyüdükçe nokta sağa kayar ve ondalık tarafa daha az yer kalır.

Asıl mesele şu: bir sayı sınırlı sayıda [[bit|bit]] ile, yani sınırlı sayıda basamakla saklanır. Onluk tabanda gayet basit görünen birçok sayı ikilik tabanda sonsuz basamak ister ve bir yerden sonra kesilir. Sonuç, çoğu zaman gerçek değerin kendisi değil, ona çok yakın bir değerdir.

Bu yaklaşıklık tek başına zararsızdır. Zarar, yaklaşık sonuçlar üst üste bindiğinde ve bir eşitlik kontrolü yapıldığında ortaya çıkar.

## Nasıl çalışır?

Sayı üç parçada tutulur: işaret, anlamlı basamaklar ve üs. Değer kabaca "anlamlı basamaklar çarpı ikinin üssü" biçiminde kurulur. Üs sayesinde çok büyük ve çok küçük sayılar aynı formatta gösterilebilir; bedeli, anlamlı basamak sayısının sabit kalmasıdır. Bu yüzden sayı büyüdükçe ayırt edebildiğin en küçük fark da büyür.

## Benzetme

Cebindeki hesap makinesinde `1 ÷ 3` yaz: ekranda `0,3333333` çıkar. Makine yalan söylemiyor, ekranı bu kadar. Şimdi bu sonucu 3 ile çarp: `0,9999999`. Kâğıt üstünde 1 eder, makinede etmez. Kayan noktalı sayılarda olan da tam olarak budur, sadece basamak sayısı çok daha fazladır.

## Örnek

```python
print(0.1 + 0.2)          # 0.30000000000000004
print(0.1 + 0.2 == 0.3)   # False
```

## Dikkat

Para hesaplarında kayan noktalı sayı kullanılmaz. Kuruşların kaybolması ya da fazladan belirmesi kabul edilemez olduğu için tutarlar genellikle en küçük birim cinsinden [[integer|tam sayı]] olarak tutulur. Blockchain tarafında bu kural daha da katıdır: [[solidity|Solidity]] kayan noktalı sayıyı desteklemez, Ethereum'da tutarlar [[wei|wei]] cinsinden tam sayılarla yazılır.

İkinci kural: iki kayan noktalı sayıyı `==` ile karşılaştırma. Aradaki farkın yeterince küçük olup olmadığına bak.
