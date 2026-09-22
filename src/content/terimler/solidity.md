---
term: "Solidity"
tr: ""
aliases: []
category: programlama
subcategory: "Diller ve formatlar"
level: orta
short: "EVM üstünde çalışan akıllı sözleşmeler yazmak için tasarlanmış, statik tipli, C çizgisinde sözdizimine sahip dil."
related: [smart-contract, ethereum-virtual-machine-evm, solidity-compiler-solc, vyper, yul, foundry]
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

Solidity, [[smart-contract|akıllı sözleşme]] yazmak için tasarlanmış bir dildir. Yazdığın kod derlenip [[bytecode|bayt koda]] çevrilir ve [[ethereum-virtual-machine-evm|EVM]] üstünde çalışır. Genel amaçlı bir dil değildir: dosya okuyamaz, internete istek atamaz, kendi başına rastgele sayı üretemez. Yapabildiği tek şey zincirdeki durumu okumak ve kurala uyan bir işlem geldiğinde o durumu değiştirmektir.

Sözdizimi C ve [[javascript|JavaScript]] çizgisindedir: süslü parantez kullanır, satırlar noktalı virgülle biter, tipleri açıkça yazmanı ister ([[static-typing|statik tipleme]]). Bu yüzden bu dillerden birini bilen biri Solidity kodunu ilk bakışta okuyabilir. Asıl öğrenme yükü sözdiziminde değil, ortamın kendisindedir: kodun herkese açıktır, yayımlandıktan sonra çoğu zaman değiştirilemez ve çalıştırdığın her satır [[gas]] harcar.

## Nasıl çalışır?

Kaynak kodu [[solidity-compiler-solc|solc]] derler ve iki şey üretir: EVM'nin çalıştıracağı bayt kod ile dışarıdaki programların sözleşmeyle konuşmasını sağlayan [[application-binary-interface-abi|ABI]] tanımı. Dosyanın başındaki `pragma` satırı kodun hangi derleyici sürüm aralığıyla uyumlu olduğunu söyler; derleyici sürümleri arasında davranış değişebildiği için bu satır süs değildir.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Sayac {
    uint256 public deger;

    function artir() external {
        deger += 1;
    }
}
```

`deger` zincirde saklanan bir sayıdır; `public` yazdığın için derleyici onu okumaya yarayan fonksiyonu kendiliğinden üretir. `artir` her çağrıldığında sayı bir artar ve bu artış kalıcıdır.

## Dikkat

EVM için yazılan tek dil Solidity değildir. Aynı makinede dört ayrı soyutlama düzeyi vardır; aralarındaki fark üstünlük değil, denetim ile okunabilirlik arasındaki dengedir:

- Solidity ve [[vyper|Vyper]] yüksek düzeydedir: tiplerle ve fonksiyonlarla çalışırsın, bayt kodu derleyici üretir. Vyper dilde bilerek daha az özellik bulundurur.
- [[yul|Yul]] ara düzeydedir: EVM komutlarına birebir yakındır ama hâlâ okunabilir bir sözdizimi sunar.
- [[huff|Huff]] en aşağı iner: yığını ve komutları elle sen yönetirsin.

Aşağı indikçe üretilen kod üzerindeki denetimin artar, hata yapma payın da artar.
