---
term: "Solana Virtual Machine (SVM)"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: ileri
short: "Solana'nın program yürütme ortamı; işlemlerin önceden bildirdiği hesaplara bakıp birbiriyle çakışmayanları aynı anda çalıştırır."
related: [solana, parallel-execution, rust, account-model, virtual-machine-blockchain, smart-contract]
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

SVM, [[solana|Solana]] ağında sözleşmelerin çalıştığı ortamdır. Solana'da sözleşmelere **program** denir ve programlar veriyi kendi içlerinde tutmaz: kod bir yerde, veri başka yerde, ayrı ayrı hesaplarda durur. Program bir fonksiyona benzer; hangi hesapları okuyup yazacağı ona dışarıdan verilir.

## Nasıl çalışır?

Programlar çoğunlukla [[rust|Rust]] ile yazılır ve Linux çekirdeğindeki eBPF'ten türetilmiş, SBF adı verilen kompakt bir bayt koda derlenir. Bu format küçüktür, dar bir komut kümesi vardır ve yüklenmeden önce hızlıca doğrulanabilir.

Asıl tasarım kararı şudur: bir işlem, dokunacağı bütün hesapları ve her birine yalnızca okuyup okumayacağını mı yoksa yazacağını mı baştan bildirmek zorundadır. Çalıştırıcı bu listelere bakarak hangi işlemlerin birbirinin yoluna çıkmadığını daha çalıştırmadan görür ve onları [[parallel-execution|paralel]] yürütür. Aynı hesaba yazan işlemler ise sıraya girer.

Hesaplama bütçesi gas yerine **compute unit** ile ölçülür; bir işlemin harcayabileceği birim sayısı ve dokunabileceği veri sınırlıdır.

## Dikkat

"Paralel" her şeyin hızlandığı anlamına gelmez. Popüler bir programın aynı hesabına yazmak isteyen işlemler birbirini bekler; o anki darboğaz zincirin tamamı değil, o tek hesaptır. Yüksek talep gören bir uygulamada veriyi tek bir hesapta toplamak ile birçok hesaba dağıtmak arasındaki fark bu yüzden mimari bir karardır.

Bir de SVM [[ethereum-virtual-machine-evm|EVM]] değildir. [[solidity|Solidity]] ile yazılmış bir sözleşme burada olduğu gibi çalışmaz; hesap modeline göre yeniden tasarlanması gerekir.
