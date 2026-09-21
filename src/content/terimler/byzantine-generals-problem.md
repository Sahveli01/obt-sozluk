---
term: "Byzantine Generals Problem"
tr: "Bizans Generalleri Problemi"
aliases: ["bizans generalleri problemi", "byzantine generals"]
category: temeller
subcategory: "Temel kavramlar"
level: orta
short: "Bazıları yalan söyleyebilen katılımcıların ortak bir karara nasıl varabileceğini soran klasik bilgisayar bilimi problemi."
related: [consensus-mechanism, byzantine-fault-tolerance-bft, nakamoto-consensus, trustless, decentralization]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Bir şehri kuşatmış birkaç general düşün. Hepsi aynı anda saldırırsa kazanırlar, bir kısmı saldırıp bir kısmı çekilirse kaybederler. Birbirleriyle yalnızca haberci yoluyla konuşabiliyorlar ve generallerden bazıları hain olabilir: birine "saldır", diğerine "çekil" diyebilirler.

Soru şu: dürüst generaller, aralarında hainler varken bile aynı kararda buluşabilir mi? Bu problem 1982'de yayımlanan bir makaleyle bu adla tanımlandı ve dağıtık sistemlerin kurucu problemlerinden biri oldu.

## Nasıl çalışır?

Klasik sonuç, sistemin ancak hainler belli bir oranın altında kaldığı sürece anlaşabileceğidir; buna [[byzantine-fault-tolerance-bft|Bizans hatası toleransı]] denir. Ama bu çözümler generallerin kim olduğunun bilinmesini gerekseydi, herkese açık bir ağda işe yaramazdı — orada kimse kimseyi tanımıyor ve bir kişi binlerce sahte general üretebilir.

[[satoshi-nakamoto|Satoshi Nakamoto]] problemi farklı bir yerden çözdü. Oy vermeyi kimliğe değil maliyete bağladı: [[proof-of-work-pow|Proof of Work]] ile bir öneride bulunmak gerçek enerji harcamayı gerektirir. Böylece "çoğunluk" kafa sayısıyla değil harcanan işle ölçülür ve sahte kimlik üretmek bedava olmaktan çıkar.

Bu çözümün bedeli de açıktır: anlaşma anlık değil olasılıksal hâle gelir. Bir karar zaman geçtikçe ve üzerine yeni bloklar eklendikçe güçlenir, ama hiçbir anda "artık kesinlikle değişmez" noktasına matematiksel olarak varmaz.

## Dikkat

Problemin adı kulağa tarihî geldiği için eski ya da teorik sanılabilir; bugün çalışan her [[consensus-mechanism|konsensüs mekanizması]] tam olarak bunun bir cevabıdır. "Bu zincir kaç kötü niyetli katılımcıya dayanır" sorusunun teknik adı da budur.
