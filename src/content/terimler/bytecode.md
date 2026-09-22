---
term: "Bytecode"
tr: "Bayt kod"
aliases: ["bayt kod"]
category: akilli-sozlesmeler
subcategory: "Temeller"
level: orta
short: "Kaynak kodun derlenmesiyle çıkan, insanın değil sanal makinenin okuduğu kompakt komut dizisi."
related: [opcode, compiler, ethereum-virtual-machine-evm, contract-deployment, contract-verification, solidity]
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

Bayt kod, yazdığın kaynak kodun makinenin anlayacağı hâle getirilmiş sürümüdür. [[solidity|Solidity]] dosyanı [[compiler|derleyici]] işler ve arkasında uzun bir onaltılık sayı dizisi bırakır: `0x60806040...`. Zincire giden, adreste duran ve her çağrıda çalışan şey budur; kaynak kodun kendisi zincire hiç gitmez.

Diziyi oluşturan her bayt ya bir komuttur ([[opcode]]) ya da bir komutun hemen ardından gelen veridir.

## Nasıl çalışır?

Derleyici aslında iki parça üretir. Birincisi yalnızca [[contract-deployment|dağıtım]] anında çalışır: kurucuyu işletir, başlangıç değerlerini zincire yazar ve geriye asıl sözleşmeyi döndürür. İkincisi o asıl sözleşmedir; adreste kalıcı olarak saklanan ve bundan sonraki her çağrıda çalıştırılan parça odur. Dağıtımdan sonra birinci parça zincirde hiç durmaz.

## Örnek

`0x6001600201` yalnızca beş bayttır ve şu üç komuta karşılık gelir:

```
60 01    PUSH1 0x01    yığına 1 koy
60 02    PUSH1 0x02    yığına 2 koy
01       ADD           en üstteki iki sayıyı topla
```

Sağdaki açıklamalar okuyabilmen için yazıldı. Zincirde duran şey yalnızca soldaki baytlardır; adlar da, girintiler de derleme sırasında kaybolur.

## Dikkat

Bayt kodu makine koduyla karıştırma: makine kodunu işlemci doğrudan çalıştırır, bayt kodu ise bir [[virtual-machine-blockchain|sanal makinenin]] yorumlaması için üretilir.

Bir de bir adreste bayt kodu görebiliyor olmak onu okuyabildiğin anlamına gelmez. [[contract-verification|Doğrulama]] tam olarak bunun için vardır: yayımlanan kaynak kodun gerçekten bu baytları ürettiğini kanıtlar.
