---
term: "Regular Expression (Regex)"
tr: "Düzenli ifade"
aliases: ["regex", "duzenli ifade", "regexp"]
category: programlama
subcategory: "Temel kavramlar"
level: orta
short: "Metinde aranan şeyi tek tek yazmak yerine deseniyle tarif etmeyi sağlayan küçük arama dili."
related: [string, pattern-matching, syntax, debugging]
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

Düzenli ifade, bir metinde aradığın şeyi tek tek saymak yerine deseniyle tarif etmeni sağlayan küçük bir dildir. "AB-1234" veya "XY-9087" gibi bütün sipariş kodlarını listeleyemezsin; ama "iki büyük harf, bir tire, dört rakam" diye tarif edebilirsin. Regex bu tarifi yazmanın yoludur.

Neredeyse bütün programlama dillerinde, metin düzenleyicilerde ve komut satırı araçlarında aynı fikir ve büyük ölçüde aynı sözdizimi kullanılır. Bu yüzden bir kez öğrenildiğinde çok farklı yerlerde işe yarar.

## Nasıl çalışır?

Desen üç tür parçadan kurulur: hangi karakterlerin kabul edileceği, her parçanın kaç kez tekrarlanabileceği ve eşleşmenin metnin neresinde aranacağı. Bunları yazdıktan sonra motor metni soldan sağa tarar ve desene uyan ilk parçayı — ya da istersen hepsini — geri verir.

Regex'in iyi olduğu yer bellidir: biçimi düzenli ve kısa metinler. Bir kayıt satırından tarih ayıklamak, bir dosyada belli kalıba uyan satırları bulmak, bir girdinin kabaca beklenen şekilde olup olmadığına bakmak bunlara örnektir.

Yanlış araç olduğu yer de bellidir. İç içe geçmiş yapılarda — HTML, JSON, kod — regex çalışmaz; bunlar için o biçimi gerçekten anlayan bir ayrıştırıcı gerekir. "Bu e-posta adresi gerçekten var mı", "bu cümle kızgın mı" gibi anlam isteyen sorular da regex'in işi değildir: o yalnızca şekle bakar.

## Benzetme

Kayıp eşya bürosuna verilen eşkâl tarifi gibi. "Siyah, kulaklıklı, sol köşesinde çizik var" dersin; görevli tarife uyan ne varsa önüne getirir. Tarifi dar tutarsan aradığın şey hiç gelmez, geniş tutarsan on tane yanlış eşya gelir. Görevli eşyanın senin olup olmadığını bilmez; yalnızca tarife uyup uymadığına bakar.

## Örnek

```python
import re

metin = "sipariş no: AB-1234"
eslesme = re.search(r"[A-Z]{2}-\d{4}", metin)

print(eslesme.group())   # AB-1234
```

## Dikkat

Regex yazması kolay, okuması zordur. Üç ay sonra kendi desenini anlamayabilirsin; bu yüzden karmaşık desenlerin yanına ne aradığını açıklayan bir yorum ve birkaç örnek girdiyle test bırakmak neredeyse zorunludur. Denemeyi gözle yapmak yerine birkaç zor girdiyle sınamak, [[debugging|hata ayıklama]] saatlerini baştan kurtarır.

Bir de performans tuzağı var: iç içe tekrar içeren bazı desenler, belirli girdilerde şaşırtıcı derecede yavaşlayabilir. Kullanıcıdan gelen metne uyguladığın desenlerde bu, saldırıya açık bir kapı hâline gelebilir.
