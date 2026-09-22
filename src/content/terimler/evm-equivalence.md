---
term: "EVM Equivalence"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Bir zincirin EVM'yi ne kadar birebir taklit ettiğinin ölçüsü; uyumluluk 'kodum çalışıyor', eşdeğerlik 'hiçbir şey değişmiyor' demektir."
related: [evm-compatibility, ethereum-virtual-machine-evm, zkevm, zk-rollup, solidity]
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

[[evm-compatibility|EVM uyumluluğu]] bir eşiktir: [[solidity|Solidity]] ile yazdığın sözleşme derlenip o zincirde çalışıyorsa zincir uyumludur. EVM eşdeğerliği ise bir derecedir: sözleşmenin yalnızca çalışması değil, [[ethereum-virtual-machine-evm|EVM'de]] olduğunun **tıpatıp aynısı** olması beklenir — aynı bayt kodu, aynı adresler, aynı gaz davranışı, aynı hata mesajları. Terim çevrilmeden kullanılır; "eşdeğerlik" karşılığı açıklama olarak geçer.

## Benzetme

Bir kitabın çevirisiyle tıpkıbasımı arasındaki fark gibi. İyi bir çeviride anlam korunur, kitabı okuyabilirsin; ama satırlar kayar, dipnot numaraları değişir, bazı deyimler başka türlü karşılanır. "37. sayfanın ikinci paragrafı" diye atıf yapan biri orada başka bir şey bulur. Tıpkıbasımda ise sayfa sayfa aynı şey durur.

## Nasıl çalışır?

Eşdeğerlik basamaklıdır. En gevşek uçta zincir Solidity kaynağını kendi ara diline derler: kod çalışır ama bayt kodu ve adres üretimi farklıdır. Ortalarda bayt kodu düzeyinde aynılık gelir: derlenmiş sözleşmeyi olduğu gibi kopyalayabilirsin. En sıkı uçta gaz ölçümü ve iç veri yapıları da birebir kopyalanır.

Her basamak yukarı çıkıldığında mevcut araçlar sorunsuz çalışır; ama özellikle kanıt üreten tasarımlarda hesap maliyeti artar. Tartışma bu takas üzerinedir.

## Dikkat

"Aynı kodu deploy ettim" ile "aynı biçimde davranıyor" aynı şey değildir. Farklı gaz ölçümü, eksik ya da değişik davranan bir ön derlenmiş fonksiyon, farklı adres türetimi — bunların her biri, denetlenmiş bir sözleşmeyi başka bir zincirde başka türlü çalıştırabilir.

Bu yüzden bir zincirin "EVM uyumlu" olması, o zincirde denetim tekrarına gerek olmadığı anlamına gelmez. Sorulacak soru "çalışıyor mu" değil, "hangi basamakta ve tam olarak ne değişiyor" sorusudur.
