---
term: "Push"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Yerel depodaki commit'leri uzak depoya gönderip başkalarının da görebilmesini sağlama."
related: [pull, fetch, remote, commit, branch]
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

Push, kendi bilgisayarında aldığın [[commit|commit'leri]] [[remote|uzak depoya]] göndermektir. Commit almak yerel bir iştir; push etmediğin sürece yaptığın hiçbir şey ekibin geri kalanında görünmez.

Türkçede yerleşik bir karşılığı yoktur; "push etmek" diye kullanılır.

## Benzetme

Grup ödevinde kendi bilgisayarındaki slaytları sınıfın ortak sunum dosyasına eklemek gibi. Slaytları hazırlamış olman yetmez; ortak dosyaya geçirmediğin sürece grubun geri kalanı onları göremez.

## Örnek

```
git push origin main
git push -u origin giris-formu
```

İkinci komut yeni bir [[branch|dalı]] ilk kez gönderirken kullanılır; `-u` sayesinde sonraki seferlerde sadece `git push` yazman yeter.

## Dikkat

Push yalnızca commit'leri gönderir. Kaydetmediğin dosyalar bilgisayarında kalır; önce commit almak gerekir.

Uzak dalda senin bilmediğin commit'ler varsa Git push'u reddeder ve önce onları almanı ister ([[pull|pull]]). Bu bir arıza değil, başkasının işini silmeni önleyen bir korumadır. `--force` bu korumayı kapatır ve ortak bir dalda kullanıldığında başkalarının commit'lerini gerçekten yok edebilir; ne yaptığını bilmiyorsan kullanma.
