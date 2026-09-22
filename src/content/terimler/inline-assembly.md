---
term: "Inline Assembly"
tr: ""
aliases: ["assembly"]
category: programlama
subcategory: "Solidity kavramları"
level: ileri
short: "Solidity kodunun içine doğrudan Yul yazma imkânı; derleyicinin eklediği bütün güvenlik kontrollerini devre dışı bırakır."
related: [yul, storage-slot, memory-safety, gas-optimization, opcode]
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

`assembly { ... }` bloğu, Solidity'nin içine doğrudan [[yul|Yul]] yazmanı sağlar. Yul, EVM [[opcode|opcode]]'larının üzerine geçirilmiş ince bir dildir: değişken adları ve döngüleri vardır ama soyutlaması burada biter.

Türkçeye çevrilmiş yerleşik bir adı yoktur; kodda `assembly` anahtar sözcüğüyle yazıldığı için "inline assembly" diye anılır.

## Nasıl çalışır?

Blok içinde sözdizimi değişir: değişken `let` ile tanımlanır, atama `:=` ile yapılır, opcode'lar fonksiyon gibi çağrılır (`mload`, `sstore`, `call`, `chainid`). Dışarıdaki Solidity değişkenlerine erişilebilir; depolama değişkenlerinin yeri `.slot` ve `.offset` sonekleriyle okunur.

Asıl mesele, orada **olmayan** şeylerdir. Derleyicinin normalde senin için yaptığı her denetim blok içinde yoktur: tip kontrolü, aritmetik taşma kontrolü, dizi sınırı kontrolü, bellek yönetimi. Serbest bellek işaretçisini (`0x40` adresindeki değer) elle güncellemek senin işindir.

Bloğun başına yazılabilen `assembly ("memory-safe") { ... }` notu, belleği derleyicinin kurallarına göre kullandığını bildirir ve eniyileştiricinin daha iyi kod üretmesini sağlar. Bu bir söz verme biçimidir; derleyici sözün tutulup tutulmadığını denetlemez.

Kullanım yerleri dardır ve hepsi "Solidity'nin üretemediği kod" başlığı altındadır: `extcodesize` ile adreste kod olup olmadığına bakmak, zincir kimliğini okumak, dönen ham veriyi elle kopyalamak, proxy'lerde çağrıyı yönlendirmek, sıkı gas bütçeli kütüphaneler yazmak.

## Örnek

```solidity
contract Zincir {
    function zincirKimligi() external view returns (uint256 id) {
        assembly {
            id := chainid()
        }
    }

    function kodVarMi(address hedef) external view returns (bool) {
        uint256 boy;
        assembly { boy := extcodesize(hedef) }
        return boy > 0;
    }
}
```

## Dikkat

Assembly yazdığın anda [[memory-safety|bellek güvenliği]] güvencesi derleyiciden sana geçer. İki hata sınıfı sessizdir, yani uyarı vermez.

Birincisi yanlış [[storage-slot|depolama slotu]]. `sstore` ile hedeflediğin slotu bir sayı kaydırarak yazarsan orada duran bambaşka bir değişkeni ezersin — sahip adresi, bir bakiye, bir kilit bayrağı. Kod çalışmaya devam eder ve hatayı ancak çok sonra, bozulan değer kullanıldığında fark edersin.

İkincisi bellek. Serbest bellek işaretçisini güncellemeden yazmak, derleyicinin az sonra oraya koyacağı veriyle çakışır; sonuç yine hata değil, yanlış veridir.

Pratik kural: assembly ölçülmüş ve gerçekten gereken bir kazanç için yazılır, "daha hızlı olur" tahminiyle değil ([[gas-optimization|gas eniyileştirme]]). Yazdığın her bloğun başına neden gerektiğini ve hangi varsayıma dayandığını yorum olarak koy — denetimde o bloklar ayrı ve satır satır okunur.
