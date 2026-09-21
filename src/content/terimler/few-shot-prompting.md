---
term: "Few-shot Prompting"
tr: ""
aliases: ["few shot"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Prompt'un içine birkaç çözülmüş örnek koyarak modele istediğin biçimi göstermek."
related: [zero-shot-prompting, role-prompting, prompt, structured-output, fine-tuning]
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

Few-shot prompting, görevi anlatmakla yetinmeyip birkaç çözülmüş örnek de göstermektir. Model bu örneklerden bir örüntü çıkarır ve yeni girdiyi aynı kalıba oturtur. Türkçede yerleşik bir karşılığı olmadığı için İngilizcesi kullanılır.

Önemli bir ayrım: örnekler modelin ağırlıklarını değiştirmez. Sadece o istek boyunca, [[prompt]] metninin içinde yaşarlar. Kalıcı davranış değişikliği istiyorsan konu [[fine-tuning]]'dir.

## Nasıl çalışır?

Birkaç pratik kural işi belirler. Örnekler birbiriyle tutarlı biçimde yazılmalı; model biçimdeki tutarsızlığı da taklit eder. Sınır durumlarını örneklemek en çok işe yarayan hamledir: modelin en çok hata yaptığı yerden iki örnek, kolay örneklerden onundan iyidir. Sınıflandırma yapıyorsan etiketleri dengeli dağıt, yoksa model çok gördüğü etikete kayar.

## Örnek

```
Metni duyguya göre etiketle. Yalnızca etiketi yaz.

Metin: Kargo iki gün erken geldi.
Etiket: olumlu

Metin: Kutu ezilmişti ama ürün sağlam çıktı.
Etiket: karışık

Metin: Üç haftadır destek talebime cevap yok.
Etiket:
```

## Dikkat

Üç teknik sık sık aynı şeyin dereceleri sanılıyor; değiller, farklı işler yaparlar:

- [[zero-shot-prompting|Zero-shot]] görevi **tarif eder**. En ucuz ve en hızlı yol; tanıdık görevlerde yeterlidir.
- Few-shot biçimi **gösterir**. Çıktı kalıbı katı olduğunda ya da görev senin kurumuna özgü olduğunda fark yaratır.
- [[role-prompting|Role prompting]] üslup ve bakış açısı **ayarlar**. Doğruluğu artırdığına dair güvenilir bir garanti yoktur.

Örnekler bedava değildir: her biri bağlamda yer kaplar, ücret ve gecikme yazar. Katı bir veri biçimi istiyorsan örnek yığmak yerine [[structured-output|yapılandırılmış çıktı]] daha güvenilir bir araçtır.
