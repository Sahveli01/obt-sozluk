---
term: "Clone"
tr: "Klonlama"
aliases: ["klonlama"]
category: araclar
subcategory: "Git ve GitHub"
level: baslangic
short: "Bir depoyu tüm geçmişiyle birlikte kendi bilgisayarına indirip üzerinde çalışılabilir hâle getirme."
related: [repository, remote, git, fetch, fork-git]
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

Klonlamak, bir [[repository|deponun]] adresini verip tamamını kendi bilgisayarına indirmektir. İnen şey yalnızca dosyaların son hâli değildir: bütün [[commit|commit'ler]], dallar ve etiketler de gelir. Yani klondan sonra geçmişi okumak, eski bir sürüme dönmek ya da dal açmak için internete ihtiyacın kalmaz.

Klonlama sırasında Git, indirdiğin adresi `origin` adıyla bir [[remote|uzak depo]] olarak kaydeder; sonraki alışverişlerde bu adı kullanırsın.

## Benzetme

Bir arkadaşının ders defterinin fotokopisini çekmek gibi. Tek bir sayfa değil, ilk günden bugüne bütün sayfalar gelir. Artık senin elindeki nüshaya istediğini yazarsın, onun defteri bundan etkilenmez.

## Örnek

```
git clone https://github.com/ornek/proje.git
cd proje
git log --oneline -5
```

## Dikkat

Klon ile [[fork-git|fork]] karıştırılır: klon deponun kendi bilgisayarındaki kopyasıdır, fork ise sunucudaki kendi hesabına açılmış kopyasıdır. Bir projeye katkı verirken çoğu zaman ikisi de gerekir.

Klonlamak sana o depoya yazma hakkı vermez. Kopyanda istediğini yaparsın ama değişikliği karşı tarafa göndermen için yetkin olması ya da katkını önerecek bir yol izlemen gerekir.
