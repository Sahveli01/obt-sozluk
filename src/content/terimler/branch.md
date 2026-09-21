---
term: "Branch"
tr: "Dal"
aliases: ["dal"]
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Ana geçmişi bozmadan üzerinde ayrıca çalışılabilen, adı olan paralel bir commit hattı."
related: [main-branch, merge, commit, head, pull-request-pr]
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

Dal, projenin paralel bir çalışma hattıdır. Yeni bir özelliğe başlarken dal açarsın, [[commit|commit'lerini]] oraya atarsın, iş bitince o dalı asıl hattın üzerine [[merge|birleştirirsin]]. Deneme tutmazsa dalı silersin ve asıl hat hiç etkilenmemiş olur.

Teknik olarak dal, belirli bir commit'i gösteren adlandırılmış bir işaretçidir. Üzerine commit attıkça işaretçi kendiliğinden ilerler. Bu yüzden dal açmak neredeyse bedavadır: dosyalar kopyalanmaz.

## Benzetme

Aynı yemeği ana tencereye hiç dokunmadan küçük bir tavada başka türlü denemek gibi. Tuttuysa tavadakini tencereye katarsın, tutmadıysa tavayı boşaltırsın; sofraya çıkacak yemek bu sırada bozulmaz.

## Örnek

```
git switch -c giris-formu
git commit -am "giris formu eklendi"
git switch main
```

## Dikkat

Dal değiştirmeden önce elindeki işi kaydetmiş olman gerekir; yarım değişikliklerle dal atlamak istemediğin sonuçlar doğurabilir. Kaydetmeye hazır değilsen [[stash|stash]] kullanılır.

Bir de dallar ne kadar uzun yaşarsa ana hattan o kadar uzaklaşır ve birleştirme o kadar zorlaşır. Küçük ve kısa ömürlü dallar, büyük ve aylarca açık kalan dallardan çok daha az sorun çıkarır.
