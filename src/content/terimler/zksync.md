---
term: "zkSync"
tr: ""
aliases: ["zksync era"]
category: aglar
subcategory: ""
level: ileri
short: "Geçerlilik ispatı üreten, buna karşılık Solidity ile yazmayı sürdürebilmek için EVM'e yakın durmayı seçen bir Ethereum katman 2 ağı."
related: [zk-rollup, validity-proof, evm-equivalence, starknet, zkevm, layer-2]
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

zkSync, [[ethereum|Ethereum]] üzerinde çalışan ve [[validity-proof|geçerlilik ispatına]] dayanan bir [[zk-rollup|zk-rollup]]'tır. İşlemler zincir dışında yürütülür; ardından bu yürütmenin kurallara uygun olduğunu gösteren kriptografik bir ispat üretilip Ethereum'daki bir sözleşmeye doğrulatılır. Sonuç itirazla değil matematikle kabul edildiği için tasarım, iyimser ailenin itiraz penceresine ihtiyaç duymaz.

## Nasıl çalışır?

Ayırt edici tercih uyumlulukta yatar. Kendi dilini getiren [[starknet|Starknet]] tasarımının aksine zkSync, geliştiricinin Solidity ve Vyper ile yazmayı sürdürmesini seçti: kaynak kod kendi derleyicisinden geçirilip ispatlanması daha kolay olan kendi bayt koduna çevrilir.

Bunun sonucu ikiliktir. Ağ kaynak kod seviyesinde EVM'e yakındır, bayt kodu seviyesinde birebir aynı değildir; düşük seviyeli varsayımlara dayanan bazı sözleşmeler ve araçlar farklı davranabilir. Buna karşılık [[account-abstraction|hesap soyutlaması]] gibi bazı özellikler hesap modeline baştan gömülüdür.

## Dikkat

Ödünleşme [[evm-equivalence|EVM eşdeğerliği]] tartışmasının tam ortasındadır: EVM'e ne kadar birebir uyarsan mevcut sözleşmeler ve araçlar o kadar sorunsuz çalışır, ne kadar uzaklaşırsan ispat üretmek o kadar ucuzlar. zkSync bu ekseni uyumluluk tarafına yakın bir yerden keser — ama "yakın", "aynı" demek değildir.

Güven varsayımı tarafında da iş bitmiş değildir. Yazıldığı tarih itibarıyla hem [[sequencer|sıralayıcı]] hem de ispat üreten altyapı merkezî olarak işletiliyor; ayrıca sözleşmeleri yükseltebilecek anahtarların kimde durduğu, ispat mekanizmasından tamamen bağımsız ikinci bir sorudur. İspat yalnızca "yürütme kurallara uygundu" der; "yöneticiler kuralları değiştiremez" demez.
