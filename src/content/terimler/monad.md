---
term: "Monad"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "EVM uyumluluğunu bozmadan işlemleri paralel yürütmeyi hedefleyen blockchain ağı."
related: [evm-compatibility, parallel-execution, ethereum-virtual-machine-evm, layer-1, proof-of-stake-pos]
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

Monad, paralel yürütmenin getirdiği kazanç ile Ethereum ekosisteminin birikimi arasında seçim yapmayı reddeden bir tasarımdır. Sorduğu soru şudur: geliştirici mevcut sözleşmesini, derleyicisini ve araçlarını hiç değiştirmeden bırakabilirse, altta çalışan motor ne kadar hızlandırılabilir?

## Nasıl çalışır?

Ağ [[ethereum-virtual-machine-evm|EVM]] bytecode'unu çalıştırır ve [[evm-compatibility|EVM uyumludur]]: aynı adres biçimi, aynı sözleşme dili, aynı cüzdan ve geliştirme araçları. Değişen şey, işlemlerin arkada nasıl işlendiğidir.

İşlemler birbirini beklemeden, iyimser biçimde [[parallel-execution|paralel]] çalıştırılır; sonradan iki işlemin aynı veriyi değiştirdiği anlaşılırsa sonraki geri alınıp yeniden çalıştırılır. Dışarıdan bakıldığında sonuç, işlemlerin bloktaki sırayla tek tek çalışmasıyla aynıdır — uyumluluk tam da bunu korumayı gerektirir. Buna ek olarak uzlaşma ile yürütme birbirinden ayrılır: düğümler bir bloğun içeriği üzerinde anlaşırken bir önceki bloğun hesabını yapmayı sürdürebilir. Blok üretim hakkı [[proof-of-stake-pos|proof of stake]] ile dağıtılır.

## Dikkat

Uyumluluğu korumanın bedeli, sıfırdan tasarlanan zincirlerin sahip olduğu bazı kolaylıklardan vazgeçmektir: işlemler dokunacakları veriyi önceden bildirmediği için çakışmalar ancak çalıştırdıktan sonra görülür ve aynı veriye yığılan yükte yeniden çalıştırma maliyeti büyür. Yürütme ve depolama katmanından beklenen performans, doğrulayıcı donanımını da yukarı çeker. Yazıldığı tarih itibarıyla ağ genç olduğu için uygulama ve araç ekosistemi hâlâ kuruluyor.
