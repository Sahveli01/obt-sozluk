---
term: "Gas"
tr: ""
aliases: ["gaz"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: baslangic
short: "Bir işlemin zincire yaptırdığı işi sayan ölçü birimi; ödenecek ücret bu miktardan hesaplanır."
related: [gas-limit, gas-price, transaction-fee, ethereum-virtual-machine-evm, opcode, blockspace]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Gas, bir [[transaction|işlemin]] ağa yaptırdığı işin ölçü birimidir. [[ethereum-virtual-machine-evm|EVM]] üzerinde çalışan her [[opcode|komutun]] protokolde belirlenmiş bir gas maliyeti vardır: iki sayıyı toplamak ucuz, zincire kalıcı veri yazmak pahalıdır. Bir işlemin harcadığı gas, çalıştırdığı bütün komutların maliyetlerinin toplamıdır.

Gas bir para birimi değildir, bir miktardır. Ödeyeceğin ücret ise bu miktarla o anki birim fiyatın çarpımından çıkar. "Yakıt" çevirisi ölçü birimi olduğunu gizlediği için yerleşmedi; terim İngilizce kalır.

## Benzetme

Elektrik faturası gibi düşün. Sayaç kilovatsaati sayar; kilovatsaat başına ödediğin tarife bambaşka bir şeydir. Klimayı bir saat çalıştırmak hangi ayda olursa olsun aynı kadar elektrik harcar, ama fatura tarifeye göre değişir. Gas sayaçtaki rakamdır, [[gas-price|gas fiyatı]] ise tarife.

## Dikkat

İşin miktarıyla ücreti ayırmak önemlidir: bir işlemin gas maliyetini yaptığı iş belirler, ücretini ise ağın o anki yoğunluğu. Ayrıca gas sadece başarılı işlemler için ödenmez. Yarıda kesilip [[revert|geri dönen]] bir işlem de o ana kadar yaptırdığı işi ödetir, çünkü ağ o işi gerçekten yapmıştır; sonucun atılması harcanan emeği geri getirmez.
