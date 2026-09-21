---
term: "Formatter"
tr: ""
aliases: ["kod biçimlendirici", "formatting"]
category: araclar
subcategory: "Test ve kalite"
level: baslangic
short: "Kodun ne yaptığını değiştirmeden nasıl göründüğünü tek bir kurala göre yeniden düzenleyen araç."
related: [linter, prettier, eslint, clean-code, code-review]
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

Formatter, kodun ne yaptığını değiştirmeden nasıl göründüğünü düzenleyen araçtır: girintiler, satır sonları, boşluklar, tırnak işaretleri, uzun bir satırın nereden bölüneceği. Çalıştırdığında dosya yeniden yazılır ama programın davranışı birebir aynı kalır.

Asıl faydası tartışmayı bitirmesidir. Girintinin iki boşluk mu dört boşluk mu olacağı hiç kimsenin fikrini değiştirmeyeceği bir konudur; formatter kurulduğunda soru ortadan kalkar. Yan fayda da büyüktür: herkesin kodu aynı biçimde yazıldığı için [[code-review|kod incelemesinde]] görülen fark, gerçekten değişen şeydir.

"Formatter" için Türkçede yerleşmiş tek bir karşılık yok; "biçimlendirici" dendiği olsa da yaygın kullanım İngilizce hâlidir.

## Benzetme

Bir sokaktaki bütün dükkânların tabelasını aynı boyda ve aynı yazıyla yaptırmak gibi. Hangi dükkânın ne sattığı hiç değişmez; değişen tek şey, sokakta yürürken hangisinin ne olduğunu okumanın kolaylaşmasıdır. Göz artık tabelaya değil, yazana takılır.

## Dikkat

Formatter [[linter|linter]] değildir. Formatter kodun görünüşünü düzeltir ve bir sorun bildirmez; linter kodun mantığındaki riskleri bildirir ve çoğunu kendiliğinden düzeltmez. İkisi aynı projede yan yana çalışır, biri diğerinin yerine geçmez.

Pratik bir uyarı: formatter'ı var olan bir projeye ilk kez kurduğunda neredeyse bütün dosyalar aynı anda değişir. Bu devasa değişikliği kendi [[commit|commit]]'inde tutmak önemlidir — aynı commit'in içine gerçek bir değişiklik de karıştırırsan, onu sonradan kimse bulamaz.
