---
term: "Git"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Dosyaların her değişikliğini yerelde kaydeden, geri dönmeyi ve paralel çalışmayı ucuzlaştıran dağıtık sürüm kontrol programı."
related: [version-control, github, commit, branch, repository]
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

Git, bilgisayarına kurduğun bir programdır; [[version-control|sürüm kontrolünü]] yapan araçtır. Bir klasörü Git deposuna çevirdiğin andan itibaren oradaki her değişikliği tek tek kaydedebilir, eski bir hâline dönebilir, denemeler için ayrı bir [[branch|dal]] açabilirsin.

Git dağıtıktır: projeyi [[clone|klonlayan]] herkesin elinde geçmişin tamamı bulunur. Bu yüzden internet bağlantın olmasa bile kayıt alabilir, geçmişi okuyabilir, dal açabilirsin; ortak bir sunucu yalnızca kopyaları birbirine yetiştirmek için gerekir. Adı özel isim olduğu için Türkçeye çevrilmez.

## Örnek

```
git init
git add .
git commit -m "ilk kayit"
git log --oneline
```

Sırasıyla: klasörü depoya çevir, dosyaları kayda hazırla, kaydı al, geçmişi tek satırlık özetlerle listele.

## Dikkat

Git ile GitHub aynı şey değildir; bu, en sık karıştırılan ayrımdır. Git, bilgisayarında çalışan ve kimseye ait olmayan açık kaynaklı bir programdır, hesap açmayı gerektirmez. [[github|GitHub]] ise Git depolarını internette barındıran bir şirkettir ve bu işi yapan tek servis değildir. Git'i hiç GitHub kullanmadan da kullanabilirsin; servis erişilemez olsa bile depon ve bütün geçmişi kendi diskinde durmaya devam eder.
