---
term: "Terminal"
tr: ""
aliases: ["uçbirim", "terminal emülatörü"]
category: araclar
subcategory: "Geliştirme ortamı"
level: baslangic
short: "Komutları yazıp cevaplarını okuduğun metin penceresi; işi kendisi yapmaz, yazdığını kabuğa iletir."
related: [shell, command-line-interface-cli, bash, powershell, working-directory]
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

Terminal, bilgisayarla fareyle değil yazarak konuştuğun penceredir. Açtığında seni bir satır ve yanıp sönen bir imleç karşılar: bir komut yazıp Enter'a basarsın, cevap alt satıra metin olarak düşer. Hiç açmadıysan soğuk görünür ama yaptığı iş tek cümleye sığar — tuşlarına bastığın harfleri içeri taşır, dönen metni ekrana basar.

Asıl işi yapan terminal değildir. Terminal yalnızca giriş-çıkış penceresidir; yazdığın satırı okuyup çalıştıran program [[shell|kabuk]]tur. Aynı terminalde farklı kabuklar açabilirsin.

Türkçe çevirilerde "uçbirim" karşılığına rastlarsın, ama konuşurken herkes terminal der; bu yüzden terim burada İngilizce bırakıldı.

## Benzetme

Öğrenci işlerinin camlı penceresi gibi. Kâğıdı pencereden içeri uzatırsın, cevap aynı pencereden geri gelir. Pencere hiçbir işlem yapmaz, sadece iki tarafı birbirine geçirir; işi içerideki görevli yapar.

## Örnek

Hayatındaki ilk komut şu olabilir:

```
echo merhaba
```

Hem bash'te hem PowerShell'de aynı satırı yazdırır. PowerShell'de `echo`, `Write-Output` komutunun kısa adıdır.

## Dikkat

Üç kelime sürekli birbirine karışır:

- **Terminal** penceredir: metni gösterir, tuşları iletir.
- **Kabuk (shell)** yorumlayıcıdır: satırı okur, hangi programın çalışacağına karar verir.
- **[[command-line-interface-cli|CLI]]** arayüz biçimidir: bir programın düğmelerle değil yazılı komutlarla kullanılması.

Bu yüzden "terminalim bash" değil, "terminalimde bash çalışıyor" demek doğrudur.
