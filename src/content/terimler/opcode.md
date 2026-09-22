---
term: "Opcode"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Sanal makinenin tanıdığı tek bir komut; EVM'de her opcode'un bir bayt karşılığı ve bir gas maliyeti vardır."
related: [bytecode, ethereum-virtual-machine-evm, stack-evm, gas, gas-optimization, yul]
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

Opcode, bir sanal makinenin anladığı en küçük iş birimidir: "topla", "bellekten oku", "depoya yaz", "yürütmeyi durdur". [[bytecode|Bayt kod]] bu komutların uç uca dizilmiş hâlinden başka bir şey değildir.

[[ethereum-virtual-machine-evm|EVM]]'de her opcode tek bir bayta karşılık gelir ve okunabilmesi için kısa bir adı vardır: `01` toplamadır (`ADD`), `55` depoya yazmadır (`SSTORE`). Türkçede "işlem kodu" karşılığı kullanılabilir ama sektörde terim opcode olarak geçer.

## Nasıl çalışır?

EVM yığın tabanlı olduğu için çoğu opcode girdilerini [[stack-evm|yığından]] alır ve sonucunu yığına bırakır. `ADD` en üstteki iki sayıyı alır, toplamlarını koyar; o sayıların nereden geldiğini sormaz.

Her opcode'un kendi [[gas]] maliyeti vardır ve aradaki fark küçük değildir. Aritmetik neredeyse bedavadır. [[storage-evm|Depoya]] yazmak ise en pahalı işlerdendir, çünkü ağdaki her düğümün kalıcı olarak saklayacağı yeni bir veri üretir. [[gas-optimization|Gas optimizasyonu]] denen uğraşın büyük bölümü, aynı işi daha ucuz opcode'larla yapmanın yolunu aramaktır.

## Dikkat

Opcode kümesi konsensüs kurallarının bir parçasıdır. Yeni bir opcode eklemek ya da var olan birinin gas maliyetini değiştirmek ancak bir ağ yükseltmesiyle olur ve bu tür değişiklikler geçmişte birkaç kez yapıldı. Dolayısıyla maliyetleri ezberlemek yerine sözleşmeni ölçerek çalışmak daha sağlıklıdır.

Bir uyarı daha: bir baytın komut mu yoksa bir önceki komutun verisi mi olduğunu ancak diziyi baştan okuyarak anlarsın. Bayt kodun ortasından bakıp "burada şu komut var" demek yanıltıcıdır.
