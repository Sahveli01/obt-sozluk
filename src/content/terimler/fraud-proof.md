---
term: "Fraud Proof"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Bir rollup'ın yayımladığı sonucun yanlış olduğunu, hatalı adımı zincire tek tek göstererek ispatlayan itiraz mekanizması."
related: [optimistic-rollup, challenge-period, validity-proof, rollup, sequencer]
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

[[optimistic-rollup|Optimistic rollup]] sonucu baştan denetlemediği için, yanlış bir sonucu geri alacak bir yola ihtiyaç duyar. Hile kanıtı bu yoldur: itiraz eden taraf "bu sonuç yanlış" demekle yetinmez, yanlışın tam olarak hangi adımda olduğunu ana zincire gösterir. Türkçede yerleşmiş bir karşılığı yoktur; "hile kanıtı" karşılığı açıklama olarak kullanılır, terim olarak değil.

## Benzetme

İki oyuncu, oynanmış uzun bir maçın kaydı üzerinde anlaşamıyor. Hakem bütün maçı baştan oynatmaz — bu zaten mümkün olmazdı. Kaydı ikiye böler, "ilk yarının sonunda pozisyon buydu, katılıyor musun?" diye sorar; anlaşılan yeri eler, anlaşılmayan yarıda aynı soruyu tekrarlar. Birkaç turda tartışma tek bir hamleye iner. Hakemin kontrol etmesi gereken tek şey o hamledir.

## Nasıl çalışır?

İtirazcı teminat yatırıp itirazını açar. Ardından iki taraf, yürütmenin ara durum özetleri üzerinden ikili aramaya benzer bir düelloya girer: her turda anlaşmazlık alanı yarıya iner.

Sonunda geriye tek bir yürütme adımı kalır. Ana zincirdeki sözleşme yalnızca o adımı çalıştırır — bir işlem sığacak kadar küçük bir iş. Sonuç kimi doğruluyorsa diğerinin teminatı yanar ve yanlış sonuç geri alınır.

Bazı tasarımlar bu düelloyu ortadan kaldırıp tek hamlede sunulan kanıtlar kullanır; fikir aynıdır, tartışmanın uzunluğu değişir.

## Dikkat

Mekanizmanın güvenliği kanıtın kendisinden değil, kanıtı sunacak birinin var olmasından gelir. Şu üçü aynı anda gerekir: yanlışı fark eden bir taraf, itirazı hazırlayacak kaynak ve [[challenge-period|itiraz süresi]] dolmadan ana zincire ulaşabilmek. Üçüncüsü bir sansür ya da tıkanıklık saldırısıyla engellenebilirse mekanizma sessizce devre dışı kalır.

İtiraz hakkının kimde olduğu da sorulmalıdır: yalnızca izinli adresler kanıt sunabiliyorsa, güven o adreslere kaymış demektir.
