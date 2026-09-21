---
term: "Conventional Commits"
tr: ""
aliases: []
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Commit mesajlarının başına tip ve isteğe bağlı kapsam ekleyen, makinenin de okuyabildiği yaygın bir yazım standardı."
related: [commit-message, semantic-versioning, release, ci-cd, commit]
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

Conventional Commits, [[commit-message|commit mesajlarını]] sabit bir kalıba sokan bir yazım standardıdır. Kalıp şudur: `tip(kapsam): özet`. Tip, değişikliğin türünü söyler — `feat` yeni özellik, `fix` hata düzeltmesi, `docs` belge, `refactor` davranışı değiştirmeyen düzenleme, `test`, `chore` gibi. Kapsam isteğe bağlıdır ve değişikliğin hangi bölümü ilgilendirdiğini belirtir. Standardın adı özel isim olduğu için çevrilmez.

## Nasıl çalışır?

Kalıbın asıl amacı, mesajı insanın yanı sıra araçların da okuyabilmesidir. Bir araç geçmişteki tipleri sayarak sürüm numarasını kendi belirleyebilir: `fix` yama, `feat` küçük sürüm, uyumu bozan değişiklik büyük sürüm artışı anlamına gelir ([[semantic-versioning|semantic versioning]]). Uyumu bozan değişiklik tipin sonuna `!` koyarak ya da gövdeye `BREAKING CHANGE:` satırı ekleyerek belirtilir.

Aynı kalıp sayesinde değişiklik günlüğü otomatik üretilebilir ve [[release|yayın]] notları elle yazılmak zorunda kalmaz. [[ci-cd|CI]] tarafında mesaj biçimini denetleyen bir adım da eklenebilir.

## Örnek

```
git commit -m "feat(auth): e-posta ile giris ekle"
git commit -m "fix: bos sifre hatasini gider"
```

## Dikkat

Standart bir zorunluluk değil, takım kararıdır. Mesajları ayrıştıran bir otomasyon kurmadıysan kazancı tutarlı görünümle sınırlı kalır.

Doğru tipi seçmek de mesajı iyi yapmaz. `feat:` yazmak özetin gerekçeyi anlatma sorumluluğunu ortadan kaldırmaz; kalıp mesajın yerine geçmez, önüne eklenir.
