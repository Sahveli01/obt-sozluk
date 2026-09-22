---
term: "Solidity Compiler (solc)"
tr: "Solidity derleyicisi"
aliases: ["solc", "solidity derleyicisi"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Solidity kaynak kodunu EVM'in çalıştıracağı bytecode'a ve dışarıdan konuşmak için gereken ABI'ye çeviren resmî derleyici."
related: [solidity, compiler, bytecode, application-binary-interface-abi, pragma, foundry]
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

`solc`, [[solidity|Solidity]] dilinin resmî [[compiler|derleyicisidir]]. Yazdığın `.sol` dosyasını alır ve iki ana çıktı üretir: [[ethereum-virtual-machine-evm|EVM]]'in çalıştıracağı [[bytecode]] ve dışarıdaki uygulamaların sözleşmeyle konuşabilmesi için gereken [[application-binary-interface-abi|ABI]] tanımı. Zincire yüklenen şey senin yazdığın metin değil, `solc`'un ürettiği bytecode'dur.

## Nasıl çalışır?

Derleyici kaynağı ayrıştırır, tipleri denetler, tanımsız değişken ya da eksik `override` gibi hataları bulur ve en sonunda komutları üretir. Yol boyunca uyarı da verir: kullanılmayan parametre, gölgelenen isim, eksik lisans satırı. Uyarılar derlemeyi durdurmaz ama çoğu, gerçek bir sorunun ilk işaretidir.

`solc`'un bir de optimizasyon aşaması vardır. Açtığında kod küçülür ve çalışması ucuzlar; karşılığında derleme uzar. Hangi sürümle derlendiğinden optimizasyon ayarına kadar bütün bu seçimler üretilen üstveride kayıtlıdır — [[contract-verification|sözleşme doğrulama]] tam olarak bunları karşılaştırır.

Günlük işte `solc`'u elle çağırmazsın. [[foundry]] ya da [[hardhat]] gibi araçlar dosyadaki [[pragma]] satırına bakar, uygun `solc` sürümünü kendisi indirir ve senin yerine çalıştırır. Bu yüzden çoğu geliştirici `solc`'u ayrıca kurmaz bile.

## Örnek

```bash
# Foundry, pragma satırına bakıp uygun solc sürümünü kendisi indirir
forge build
```

## Dikkat

`solc` sürümü bir tercih değil, çıktının parçasıdır: aynı kaynak dosya iki farklı sürümle derlendiğinde iki farklı bytecode çıkar. Optimizasyon ayarı için de aynısı geçerlidir. Bir sözleşmeyi doğrularken hangi sürümle ve hangi ayarlarla derlediğini bildirmen tam olarak bu yüzden istenir.
