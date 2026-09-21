---
term: "Cherry-pick"
tr: ""
aliases: ["cherry pick"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir daldaki tek bir commit'i, dalın tamamını birleştirmeden başka bir dala kopyalama."
related: [rebase, merge, commit, branch, main-branch]
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

Cherry-pick, bir [[branch|daldaki]] commit'lerin hepsini değil, yalnızca işine yarayan birini alıp bulunduğun dala uygulamaktır. Adı "tek tek seçmek" anlamındadır ve Türkçede olduğu gibi kullanılır.

En tipik kullanımı acil düzeltmelerdir: hata düzeltmesi geliştirme dalında yazılmıştır ama yayındaki sürüme de hemen gitmesi gerekir; geliştirme dalının yarım kalan geri kalanını taşımadan yalnızca o düzeltme alınır.

## Nasıl çalışır?

Git, seçtiğin [[commit|commit'in]] getirdiği [[diff|farkı]] hesaplar ve bulunduğun dalda bu farkı uygulayıp yeni bir commit oluşturur. Yeni commit'in içeriği aynıdır ama kimliği farklıdır: artık başka bir ata üzerine oturan, ayrı bir kayıttır.

Uygulanan fark hedef dalın koduna uymuyorsa çakışma çıkar; çözüm, birleştirme çakışmasıyla aynı biçimde yapılır.

## Örnek

```
git log --oneline gelistirme
git switch yayin
git cherry-pick 9f2c1ab
```

İlk komut hangi commit'i seçeceğine karar vermek için geçmişi listeler.

## Dikkat

Aynı düzeltme artık iki dalda iki ayrı commit olarak durur. İleride bu dallar birleşirse Git aynı değişikliği iki farklı kayıt olarak görebilir ve gereksiz [[merge-conflict|çakışma]] çıkabilir. Bu yüzden cherry-pick alışkanlık hâline getirilmez; tek tek, gerekçesi belli durumlarda kullanılır.

Commit taşıyan üç işlemin ([[merge|merge]], [[rebase|rebase]], cherry-pick) karşılaştırması rebase maddesinde toplanmıştır.
