---
term: "Diff"
tr: "Fark"
aliases: ["fark"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "İki dosya, commit ya da dal arasındaki farkı satır satır gösteren çıktı."
related: [commit, code-review, merge, git, pull-request-pr]
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

Diff, iki hâl arasındaki farkın dökümüdür: hangi satır silinmiş, hangisi eklenmiş, hangi dosyaya dokunulmuş. Git'te hemen her şeyi diff üzerinden okursun — kaydetmeden önce ne değiştiğini, iki [[commit]] arasında ne olduğunu, bir dalın ana hattan nerede ayrıldığını.

## Benzetme

İki resim arasındaki farkları bulma oyunu gibi; aradaki fark, resimleri sana kimsenin elle karşılaştırtmaması. Araç iki hâli üst üste koyar ve yalnızca oynanan yerleri işaretler.

## Nasıl çalışır?

Çıktı satır bazlıdır. Başında `-` olan satırlar eski hâlde vardı ve gitti, `+` olanlar yeni geldi, `@@` ile başlayan satır ise farkın dosyanın kaçıncı satırı civarında olduğunu söyler. Değişmemiş birkaç satır da bağlam olarak gösterilir, çünkü tek başına bir satırı okumak çoğu zaman yetmez.

Git farkı istediğin iki nokta arasında çıkarabilir: kaydedilmemiş değişiklikler, kayda hazırlanmış değişiklikler, iki dal ya da iki commit arası.

## Örnek

```
git diff
git diff --staged
git diff main..giris-formu -- src/giris.js
```

Sırasıyla: henüz hazırlanmamış değişiklikler, kayda hazırlanmış olanlar, iki dal arasında tek bir dosyanın farkı.

## Dikkat

Diff satır bazlı olduğu için bir satırın tek harfi değişse bile satır tümüyle değişmiş görünür. Uzun satırlar ve biçimlendirme değişiklikleri bu yüzden [[code-review|incelemeyi]] zorlaştırır; biçim düzenlemesini ayrı bir commit'te tutmak okunabilirliği ciddi biçimde artırır.

Görsel, ses, PDF gibi ikili dosyalarda anlamlı bir fark üretilemez; Git sadece "dosya değişti" der.
