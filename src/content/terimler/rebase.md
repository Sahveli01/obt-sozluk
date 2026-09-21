---
term: "Rebase"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir daldaki commit'leri başka bir commit'in üzerine yeniden uygulayarak geçmişi tek bir düz hat hâline getirme."
related: [merge, cherry-pick, commit, branch, main-branch]
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

Rebase, bir [[branch|dalın]] başlangıç noktasını değiştirmektir. Dalını açtıktan sonra ana hat ilerlediyse, rebase senin commit'lerini ana hattın yeni ucunun üzerine taşır; sonuçta dalın sanki en baştan güncel koddan başlamış gibi görünür. Türkçede yerleşik bir karşılığı yok, sektörde İngilizcesiyle kullanılıyor.

## Nasıl çalışır?

Önemli ayrıntı şudur: rebase [[commit|commit'leri]] taşımaz, **yeniden üretir**. Her commit'in getirdiği değişiklik yeni temelin üzerine sırayla uygulanır ve her biri yeni bir kimlikle yeniden yazılır. Eski commit'ler bir süre diskte durur ama artık hiçbir dal onları göstermez.

Değişiklikler tek tek uygulandığı için çakışma da tek tek çıkar; her birini çözüp devam edersin ya da işlemi iptal edip dalını eski hâline döndürürsün.

## Örnek

```
git switch giris-formu
git rebase main
```

Çakışma çıkarsa: dosyayı düzelt, `git add`, sonra `git rebase --continue`. Vazgeçmek için `git rebase --abort`.

## Dikkat

Commit taşıyan üç işlem vardır ve farkları şudur: [[merge|merge]] iki dalın geçmişini olduğu gibi birleştirir, dallanmanın izi kalır ve commit kimlikleri değişmez. Rebase bir dalın commit'lerini yeni bir temele kopyalar, geçmiş düz görünür ama kimlikler değişir. [[cherry-pick|cherry-pick]] ise dalın tamamını değil, seçtiğin tek tek commit'leri başka bir dala kopyalar.

Hangisinin seçileceği ekibe göre değişir: dallanma tarihini bilgi sayan ekipler merge'ü, `git log` çıktısının düz okunmasını önceleyen ekipler rebase'i tercih eder. Üzerinde neredeyse herkesin anlaştığı tek kural şudur: başkalarının da çalıştığı ortak bir dalı rebase etme — onların geçmişiyle seninki tutmaz ve herkes çakışma temizlemek zorunda kalır.
