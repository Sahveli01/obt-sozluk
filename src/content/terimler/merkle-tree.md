---
term: "Merkle Tree"
tr: "Merkle ağacı"
aliases: ["merkle agaci", "hash tree"]
category: kriptografi
subcategory: "Veri yapıları"
level: orta
short: "Kayıtları ikişer ikişer özetleyip tek bir kök değere indiren ağaç; bir kaydın kümeye ait olduğu tamamı indirilmeden kanıtlanır."
related: [merkle-root, merkle-proof, merkle-patricia-trie, hash-function, block-header, data-structure]
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

Elinde binlerce kayıt var: bir bloktaki işlemler, bir dağıtıma katılacak adresler, bir dosyanın parçaları. Soru şu: birinin sana uzattığı tek bir kaydın gerçekten o kümeye ait olduğunu, kümenin tamamını indirmeden nasıl anlarsın?

Merkle ağacı bu sorunun cevabıdır. Kayıtları tek tek özetler, özetleri ikişer ikişer birleştirip yeniden özetler ve bunu tepede tek bir değer kalana kadar sürdürür. [[data-structure|Veri yapısı]] olarak sıradan bir ağaçtır; onu özel yapan, her düğümün altındakilerin [[hash-function|hash'i]] olmasıdır.

## Benzetme

Seçim akşamındaki sayım zinciri gibi. Her sandıkta bir tutanak tutulur, tutanaklar ilçede birleşir, ilçeler ilde, iller ülke toplamında. Kendi sandığının sonucunun yukarı doğru geçtiğini merak ediyorsan bütün sandıkları saymana gerek yoktur; kendi sandığından yukarı giden yol üstündeki birkaç tutanağa bakman yeter. Merkle ağacında birleşen şey rakam değil özettir, ama mantık aynıdır: aşağıda bir hane oynarsa yukarısı tutmaz.

## Nasıl çalışır?

En altta yapraklar vardır: her kaydın hash'i alınır. Sonra komşu iki hash yan yana konup birlikte yeniden hash'lenir; çıkan değer bir üst seviyenin düğümüdür. Aynı işlem seviye seviye tekrarlanır, her seferinde düğüm sayısı yarıya iner ve sonunda tek bir değer kalır: [[merkle-root|Merkle kökü]]. Bir seviyede tek sayıda düğüm kalırsa her sistem bunu kendi kuralıyla çözer; [[bitcoin|Bitcoin]] son özeti kendisiyle eşler.

Sonuç şudur: en alttaki tek bir bitin değişmesi, o yapraktan köke çıkan yoldaki bütün özetleri ve dolayısıyla kökü değiştirir. Bir kaydın ağaçta olduğunu göstermek için de bütün ağaç gerekmez; yalnızca o yol üstündeki kardeş özetler yeter ([[merkle-proof|Merkle kanıtı]]).

## Dikkat

Merkle ağacı bir kaydın **içeride olduğunu** gösterir, **olmadığını** göstermez. Yapraklar anahtara göre yerleşmediği sürece "bu kayıt listede yok" iddiası aynı kolaylıkla kanıtlanamaz; [[merkle-patricia-trie|Merkle Patricia trie]] gibi varyantlar tam olarak bunun için vardır.

Bir de kökü nereden aldığın her şeyi belirler. Kökü de sana kanıtı veren taraf söylüyorsa hiçbir şey kanıtlanmış olmaz; kökün bağımsız bir kaynaktan gelmesi gerekir. Zincirde bu kaynak [[block-header|blok başlığıdır]].
