---
term: "zkEVM"
tr: ""
aliases: ["zk-evm"]
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "EVM işlemlerinin kurallara uygun yürütüldüğünü kanıt üreterek gösteren sanal makine; zkVM fikrinin EVM komut setine özelleşmiş hâli."
related: [zkvm, ethereum-virtual-machine-evm, zk-rollup, evm-equivalence, validity-proof]
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

[[zkvm|zkVM]], sıradan kodu çalıştırıp çalıştırmanın kurallara uygun olduğunu kanıtlayan sanal makinedir. zkEVM aynı fikrin tek bir komut setine — [[ethereum-virtual-machine-evm|EVM'ye]] — kilitlenmiş hâlidir.

Bu özelleşmenin sebebi pratiktir: EVM için yazılmış sözleşmeler, derleyiciler, cüzdanlar ve test araçları zaten vardır. Kanıtlanabilir makine EVM'yi konuşursa, bütün bu birikim yeniden yazılmadan bir [[zk-rollup|ZK rollup]] üzerinde çalışabilir.

## Nasıl çalışır?

Yürütmenin izi alınır ve EVM kurallarına uygunluğu bir kanıt sistemine dökülür. Sonuçta üretilen [[validity-proof|geçerlilik kanıtı]] ana zincirde doğrulanır.

Zorluk, EVM'nin kanıtlanmak için tasarlanmamış olmasıdır. Keccak karma fonksiyonu, 256 bitlik sözcükler ve yığın tabanlı komutlar, kanıt sistemlerinin verimli çalıştığı yapılara pek benzemez; her biri kanıt maliyetini yukarı çeker.

Tasarımcıların önünde bu yüzden bir yelpaze vardır: EVM'yi bayt kodu düzeyinde birebir kanıtlamak, ya da sözleşmeleri kanıtlaması daha ucuz bir ara dile derleyip orada çalıştırmak. Bu seçim doğrudan [[evm-equivalence|EVM eşdeğerliği]] tartışmasıdır.

## Dikkat

Addaki "zk" gizlilik vaadi değildir. Kanıtlar burada işlemleri saklamak için değil, büyük bir hesabı küçük bir kanıtla doğrulatmak için kullanılır.

zkEVM tek başına bir rollup da değildir; bir bileşendir. Bir rollup'ın güvenliği ayrıca verisinin nereye yayımlandığına, sıralayıcısına ve sözleşmelerinin kimin tarafından yükseltilebildiğine bağlıdır.

Son olarak kanıt, sözleşmenin EVM kurallarına göre çalıştığını gösterir; sözleşmenin doğru yazıldığını değil. Hatalı bir sözleşmenin hatalı sonucu da geçerli bir kanıtla gelir.
