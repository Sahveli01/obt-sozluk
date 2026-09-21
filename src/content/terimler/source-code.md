---
term: "Source Code"
tr: "Kaynak kod"
aliases: ["kaynak kod"]
category: programlama
subcategory: "Temel kavramlar"
level: baslangic
short: "Bir programın insanın okuyup yazabildiği metin hâli; çalışan program bu metinden üretilir."
related: [programming-language, syntax, comment-kod, compiler, open-source]
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

Kaynak kod, bir programın bir [[programming-language|programlama dili]] ile yazılmış, insanın okuyabildiği metin hâlidir. Düz metindir: bir metin düzenleyicide açtığında harfleri görürsün. Bilgisayarın çalıştırdığı şey ise bu metin değil, ondan üretilmiş makine diline çevrilmiş hâlidir; çeviriyi [[compiler|derleyici]] ya da [[interpreter|yorumlayıcı]] yapar.

"Kaynak" kelimesi buradan gelir: değişiklik her zaman burada yapılır. Çalışan programda bir hata görürsen çıktıyı kurcalamazsın; metne döner, düzeltir, programı yeniden üretirsin.

Bir de şu var: kaynak kod yazıldığından çok daha fazla okunur. Aynı dosyayı altı ay sonra sen, bir yıl sonra bir başkası açacaktır. Bu yüzden okunaklılık süs değil, işin bir parçasıdır.

## Benzetme

Bir binanın mimari projesi gibi. Bina projeden doğar. Duvar yanlış yere çıkmışsa duvarı kırmak tek başına yetmez; proje de düzeltilmezse bir sonraki uygulamada aynı hata geri gelir. Üstelik projeyi çizen kişi yıllar önce ayrılmış olabilir, kâğıdı okuyacak olan bir sonraki ekiptir.

## Örnek

Aşağıdaki iki satır tek başına bir [[python|Python]] kaynak dosyasıdır; `merhaba.py` adıyla kaydedilip çalıştırılabilir.

```python
isim = "Ayse"
print("Merhaba " + isim)
```

## Dikkat

Kaynak kodu paylaşmak ile programı paylaşmak aynı şey değildir. Kurulum dosyasını indirdiğin bir programın kaynak kodunu görmen gerekmez ve çoğu zaman göremezsin; [[open-source|açık kaynak]] tam olarak bu metnin herkese açılması demektir.
