---
term: "Stellar"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Sınır ötesi ödeme ve varlık ihracı için tasarlanmış, her düğümün kendi güven kümesini seçtiği bir uzlaşmaya dayanan ağ."
related: [federated-byzantine-agreement-fba, wasm-smart-contracts, stablecoin, finality, xrp-ledger]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Stellar, para göndermenin ülkeler arasında hâlâ yavaş ve pahalı olması sorununa odaklanarak tasarlandı. Genel amaçlı bir hesaplama platformu olmak yerine ödeme ve varlık transferini protokolün kendi işi hâline getirir.

## Nasıl çalışır?

Defter üzerinde varlık ihraç etmek temel bir işlemdir: bir kurum, karşılığını kendi tuttuğu bir para birimini ya da başka bir değeri defterde temsil eden bir varlık çıkarabilir — [[stablecoin|stabilcoin]] mantığının protokole gömülmüş hâli budur. Bir hesabın böyle bir varlığı tutabilmesi için önce onu kabul ettiğini bildirmesi gerekir; yani varlıklar kimsenin cüzdanına habersiz düşmez. Ağda yerleşik bir emir defteri bulunduğu için gönderen bir varlıkla ödeyip alıcının başka bir varlıkla almasını sağlayan yol, defterin kendi içinde bulunur.

Uzlaşma [[federated-byzantine-agreement-fba|federe Bizans anlaşmasına]] dayanır: her düğüm kimlerin sözüne bakacağını kendisi seçer, bu kümeler yeterince kesiştiği sürece ağ ortak bir sonuca varır ve işlemler kısa sürede [[finality|kesinleşir]]. Yazıldığı tarih itibarıyla ağda [[wasm-smart-contracts|WebAssembly tabanlı]] bir sözleşme ortamı da bulunur.

## Dikkat

Güven kümelerini katılımcıların seçmesi, kimin belirleyici olduğunu protokolün değil topluluğun yapısının tayin etmesi demektir; kötü kurulmuş kümeler ağı bölünmeye açık hâle getirebilir.

Ödeme odaklı tasarımın bedeli de şudur: programlanabilirlik sonradan eklenen bir katmandır, ağın merkezinde duran şey değildir.
