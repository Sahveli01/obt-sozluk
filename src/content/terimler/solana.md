---
term: "Solana"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "İşlem yükünü katmanlara bölmek yerine tek zincirde paralel yürütmeyle karşılamayı hedefleyen blockchain ağı."
related: [parallel-execution, proof-of-history-poh, solana-virtual-machine-svm, proof-of-stake-pos, rust]
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

Solana, yüksek işlem hacmini tek bir zincir üzerinde karşılamak üzere tasarlanmış bir blockchain ağıdır. Temel tercih şudur: durumu parçalara bölmek ya da işlemleri üst katmanlara taşımak yerine, tek bir küresel durum korunsun ve ağ bunun altından donanımı sonuna kadar kullanarak kalksın. Bütün uygulamalar aynı defteri paylaşır, aralarında köprü gerekmez.

## Nasıl çalışır?

İşlemler, dokunacakları hesapları baştan bildirir. Aynı hesaba yazmayan işlemler birbirini beklemek zorunda olmadığı için [[parallel-execution|paralel olarak]] yürütülebilir; sıraya girme yalnızca gerçekten çakışanlar için gerekir.

İkinci tercih zamandır: [[proof-of-history-poh|proof of history]] ile olayların sırası önceden doğrulanabilir bir biçimde damgalanır, böylece doğrulayıcılar "bu önce mi oldu" tartışmasını her turda yeniden yapmaz. Blok üretim hakkı [[proof-of-stake-pos|proof of stake]] ile dağıtılır. Sözleşmeler [[solana-virtual-machine-svm|SVM]] üzerinde çalışır ve çoğunlukla [[rust|Rust]] ile yazılır.

## Dikkat

Bu tasarımın kabul ettiği bedeller nettir. Doğrulayıcı olmak ciddi donanım ve bant genişliği ister; düğüm çalıştırabilecek kişi sayısı bu yüzden kendiliğinden daralır. Her şey tek zincirde olduğu için bir sorun ağın tamamını aynı anda etkileyebilir. Ağ [[ethereum-virtual-machine-evm|EVM]] uyumlu da değildir: hesap yapısı, araçları ve [[spl-token|token standardı]] ayrıdır, Ethereum tarafında yazılmış bir sözleşme buraya olduğu gibi taşınmaz; yazıldığı tarih itibarıyla iki tarafın araç ve kütüphane birikimi ayrı hatlar olarak gelişmektedir.
