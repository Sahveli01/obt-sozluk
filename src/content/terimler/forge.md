---
term: "Forge"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Foundry'nin derleme ve test aracı; sözleşmeleri derler, Solidity ile yazılmış testleri koşturur."
related: [foundry, fuzzing, invariant-testing, unit-test, gas-reporter]
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

Forge, [[foundry|Foundry]] takımının derleme ve test aracıdır. Takımın geri kalanı ağla konuşmak ve yerel düğüm çalıştırmakla ilgilenirken forge projenin kendisiyle ilgilenir: kaynağı derler, testleri koşturur, kodu biçimlendirir, dağıtım betiklerini çalıştırır.

## Nasıl çalışır?

Testler [[solidity|Solidity]] ile yazılır. Test dosyası bir sözleşmedir; `setUp` adlı işlev her testten önce ortamı baştan kurar, adı `test` ile başlayan her işlev ayrı bir test sayılır ve kendi temiz durumunda çalışır. Beklenti kontrolleri bir doğrulama kütüphanesinden gelir.

Forge'un ayırt edici tarafı, testin çalıştığı EVM'ye normalde mümkün olmayan müdahaleleri yapabilmesidir. "Cheatcode" denen bu çağrılarla başka bir adres adına çağrı yapmış gibi davranabilir, zinciri ileri saran bir zaman ayarı yapabilir, bir hesabın bakiyesini elle belirleyebilir ya da bir çağrının hata vermesini bekleyebilirsin. Test yazarken kurulması zor olan durumlar böylece kurulabilir hâle gelir.

İki test türü daha aynı araçta durur: [[fuzzing|fuzz]] testlerinde işlev parametrelerine rastgele değerler üretilir, [[invariant-testing|değişmez testlerinde]] ise rastgele işlem dizileri koşturulup her adımda doğru kalması gereken bir koşul sınanır.

## Örnek

```bash
forge build
forge test
forge fmt
```

## Dikkat

Testlerin geçmesi sözleşmenin doğru olduğunu değil, yazdığın senaryolarda beklediğin davranışı verdiğini gösterir. Fuzz ve değişmez testleri arama uzayını genişletir ama tüketmez; bir karşı örnek bulunamaması, olmadığı anlamına gelmez.

Test içinde ölçülen [[gas-reporter|gas rakamları]] da mutlak değildir; neden senaryoya bağlı olduğu orada anlatılıyor.
