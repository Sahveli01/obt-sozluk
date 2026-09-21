---
term: "Commit Message"
tr: "Commit mesajı"
aliases: ["commit mesaji"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Bir commit'in ne yaptığını ve neden yapıldığını anlatan, ilk satırı özet olan kısa metin."
related: [commit, conventional-commits, code-review, git, diff]
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

Commit mesajı, bir [[commit]]'in yanına yazılan açıklamadır. Kodun ne olduğunu kodun kendisi zaten söyler; mesajın işi, o değişikliğin **neden** yapıldığını anlatmaktır. Mesajı altı ay sonra okuyacak kişi çoğu zaman sensin.

## Nasıl çalışır?

Mesajın yapısı yerleşmiştir: ilk satır kısa bir özettir (genelde 50–72 karakter sınırında tutulur), sonra boş bir satır, sonra isterse uzun gövde gelir. `git log --oneline` gibi çıktılarda yalnızca ilk satır görünür, bu yüzden özet tek başına anlamlı olmalıdır.

Yaygın gelenek özeti emir kipinde yazmaktır: "hata giderildi" yerine "hatayı gider" gibi. Takımların Türkçe mi İngilizce mi yazacağı da bir karardır; önemli olan depo içinde tutarlı olmasıdır. Biçimi bir standarda bağlamak isteyen ekipler [[conventional-commits|Conventional Commits]] kullanır.

## Örnek

```
git commit -m "giris formunda bos sifre kontrolu ekle" -m "Kullanicilar bos sifreyle kayit olabiliyordu; sunucu tarafinda da dogrulama eklendi."
```

İkinci `-m` gövdeyi ayrı bir paragraf olarak ekler.

## Dikkat

"güncelleme", "düzeltme", "son hâli" gibi mesajlar geçmişi okunamaz hâle getirir. Ne değiştiğini zaten [[diff|fark]] gösterir; mesajın katacağı tek şey gerekçedir.

Bir de mesaj, hakkında konuştuğu değişikliğe sadık olmalıdır. Tek cümleyle özetlemekte zorlanıyorsan sorun mesajda değil, commit'in çok şey içermesindedir.
