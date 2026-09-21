---
term: "Tag"
tr: "Etiket"
aliases: ["etiket"]
category: araclar
subcategory: "Git ve GitHub"
level: orta
short: "Belirli bir commit'e kalıcı bir ad veren, dallar gibi ilerlemeyen sabit işaretçi."
related: [commit, release, semantic-versioning, main-branch, head]
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

Etiket, geçmişteki bir [[commit|commit'e]] isim takmaktır. En yaygın kullanımı yayınlanan sürümleri işaretlemektir: `v1.0.0` etiketi, o sürümün tam olarak hangi koddan çıktığını sonsuza kadar gösterir.

## Benzetme

Yol kenarındaki kilometre taşı gibi. Yolu değiştirmez, trafiği yönlendirmez; sadece "burası şu nokta" der ve yerinden kıpırdamaz.

## Nasıl çalışır?

Etiketin [[branch|daldan]] farkı hareketsiz olmasıdır: dala commit attıkça dal ilerler, etiket ise gösterdiği commit'te kalır.

İki tür etiket vardır. Hafif etiket yalnızca bir addır. Açıklamalı etiket ise kendi başına bir kayıttır; etiketi kimin, ne zaman ve hangi notla oluşturduğunu taşır ve imzalanabilir. Yayınlanan sürümler için açıklamalı etiket tercih edilir. Adlandırmada genelde [[semantic-versioning|semantic versioning]] biçimi kullanılır.

## Örnek

```
git tag -a v1.0.0 -m "ilk kararli surum"
git push origin v1.0.0
git tag --list
```

## Dikkat

Sıradan bir `git push` etiketleri göndermez; etiketi ayrıca göndermen gerekir. Yeni yazanların en sık takıldığı nokta budur.

Yayına çıkmış bir etiketi silip aynı adı başka bir commit'e vermek de tehlikelidir: o etiketi daha önce indirmiş olanlarda eski hâli durmaya devam eder ve aynı sürüm adı iki farklı kodu gösterir. Etiket yanlış yere konduysa doğrusu yeni bir ad vermektir.
