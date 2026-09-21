---
term: "Merge Conflict"
tr: "Birleştirme çakışması"
aliases: ["birlestirme cakismasi", "cakisma"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Birleştirilen iki tarafın aynı satırları farklı değiştirmesi yüzünden Git'in kararı insana bırakması."
related: [merge, rebase, diff, branch, pull]
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

Çakışma, [[merge|birleştirme]] sırasında Git'in iki değişiklikten hangisinin geçerli olduğuna karar veremediği durumdur. Farklı dosyalarda ya da aynı dosyanın farklı yerlerinde yapılan değişiklikler sorunsuz birleşir; çakışma yalnızca aynı satırlara iki taraftan da dokunulduğunda çıkar.

## Benzetme

Bir kitabın aynı paragrafını iki düzeltmen farklı biçimde düzeltmiş olsun. Dizgici kendi kafasına göre birini seçmez; iki hâli yan yana koyup "hangisi geçerli" diye sorar. Git de tam olarak bunu yapar.

## Nasıl çalışır?

Git işlemi yarıda durdurur ve çakışan dosyanın içine iki hâli de yazar: `<<<<<<<` ile `=======` arasında senin bulunduğun daldaki hâl, `=======` ile `>>>>>>>` arasında karşı taraftan gelen hâl durur.

Çözüm elle yapılır: dosyayı açar, olması gereken son hâli yazar, işaretçi satırlarını silersin. Sonra dosyayı kayda hazırlar ve birleştirmeyi tamamlarsın. Hiç uğraşmak istemezsen işlemi iptal edip başladığın yere dönebilirsin.

## Örnek

```
git merge giris-formu
git status
git add giris.js
git merge --continue
```

Vazgeçmek için: `git merge --abort`.

## Dikkat

Çakışma bir hata değildir; Git'in "bu kararı ben veremem" demesidir. Asıl risk, iki taraftan birini okumadan toptan kabul etmektir: kod derlense bile sessizce birinin işi silinmiş olur.

Çakışmalar [[pull|pull]] ve [[rebase|rebase]] sırasında da çıkar. Uzun yaşayan dallar çakışmayı hem büyütür hem de çözümünü riskli hâle getirir.
