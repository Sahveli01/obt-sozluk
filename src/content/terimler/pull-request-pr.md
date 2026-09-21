---
term: "Pull Request (PR)"
tr: ""
aliases: ["pr", "merge request"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir daldaki değişikliklerin hedef dala alınması için açılan, inceleme ve tartışmanın üzerinde yürüdüğü birleştirme talebi."
related: [code-review, merge, branch, github, fork-git, main-branch]
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

Pull request, "şu daldaki değişikliklerimi şu dala alır mısınız" teklifidir. Ekip çalışmasında değişikliklerin ana hatta girme kapısıdır: teklif açılır, konuşulur, gerekirse düzeltilir, sonra birleştirilir.

Pull request Git'in bir özelliği değildir; [[github|GitHub]] gibi servislerin Git'in üzerine eklediği bir katmandır. Bazı servislerde aynı şeye "merge request" denir. Türkçede kısaca "PR" diye kullanılır.

## Nasıl çalışır?

Bir [[branch|dalda]] çalışır, commit'lerini gönderir ve o dal ile hedef dal arasında PR açarsın. Servis iki dal arasındaki [[diff|farkı]] gösterir; inceleyenler satır satır yorum bırakır ([[code-review|kod incelemesi]]), testler [[ci-cd|CI]] tarafından otomatik koşar.

Onay ve kontroller tamamlanınca değişiklik [[merge|birleştirilir]]. Yazma yetkin yoksa aynı akış [[fork-git|fork]] üzerinden yürür: kendi kopyandaki daldan asıl depoya PR açarsın.

## Dikkat

Adı yanıltıcıdır: sen bir şey çekmezsin, karşı tarafa "benim dalımı çekip alın" dersin.

PR ne kadar büyükse inceleme o kadar yüzeysel olur. Birkaç yüz satırlık bir farkı kimse aynı dikkatle okuyamaz; tek konuya odaklanan küçük PR'lar hem daha hızlı hem de daha gerçek bir incelemeden geçer.

Bir de PR'ın açıklaması boş bırakılmamalıdır. İnceleyen kişinin bilmesi gereken şey neyin değiştiği değil, neyin hedeflendiğidir.
