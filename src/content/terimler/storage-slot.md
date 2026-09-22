---
term: "Storage Slot"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Bellek ve depolama"
level: ileri
short: "Sözleşme storage'ındaki 32 baytlık numaralı hücre; state variable'lar derleme sırasında bu hücrelere yerleşir."
related: [storage-evm, state-variable, storage-collision, mapping, keccak-256, upgradeable-contract]
disambiguation: [slot]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Bir sözleşmenin [[storage-evm|storage]] alanı 32 baytlık numaralı hücrelerden oluşur; her hücreye storage slotu denir. Zincirde okunup yazılan en küçük birim budur: tek bir baytı değiştirecek olsan bile EVM o baytın içinde bulunduğu 32 baytı okur, değiştirir ve geri yazar.

Hangi [[state-variable|state variable'ın]] hangi slota düşeceğine derleyici karar verir. Zincirdeki veri kendisinin ne anlama geldiğini bilmez; anlamı bu yerleşim verir.

Terimin yerleşik bir Türkçe karşılığı yok, "slot" olduğu gibi kullanılıyor.

## Benzetme

Haftalık hap kutusu gibi. Gözler aynı boyda ve sırası sabittir; küçük haplardan ikisi aynı göze birlikte sığar, büyük olan tek başına bir gözü kaplar. Kutunun işe yaraması hangi gözde ne olduğunun bilinmesine bağlıdır: araya bir göz eklersen sonraki her şey bir sıra kayar ve pazartesi hapı salı sabahı çıkmaya başlar.

## Nasıl çalışır?

State variable'lar tanımlanma sırasına göre 0 numaralı slottan itibaren dizilir. 32 bayttan küçük tipler art arda geliyorsa aynı slota paketlenir: iki `uint128` tek bir slota sığar, 20 baytlık bir `address`'in yanına bir `bool` rahatça girer. Sabit boyutlu diziler ve `struct`'lar ardışık slotları kaplar.

[[mapping|Mapping]]'ler ve dinamik diziler sıraya girmez, yerleri hesaplanır. Bir mapping'in belirli bir anahtarına ait slot, anahtar ile mapping'in kendi slot numarasının birlikte [[keccak-256|Keccak-256]] ile özetlenmesiyle bulunur. Dinamik dizide uzunluk kendi slotunda durur, elemanlar ise o slot numarasının özetinden başlayarak sıralanır.

Paketleme bilinen bir gas kazancıdır: aynı slota düşen iki alanı tek yazma işleminde güncellemek, iki ayrı slota yazmaktan çok ucuzdur.

## Örnek

```solidity
contract Yerlesim {
    uint128 a;      // slot 0, ilk 16 bayt
    uint128 b;      // slot 0, ikinci 16 bayt
    uint256 c;      // slot 1
    address sahip;  // slot 2, 20 bayt
    bool acik;      // slot 2, yanındaki 1 bayt
}
```

## Dikkat

Paketleme her zaman kazanç değildir. Aynı slottaki bir alanı tek başına güncellemek, slotun okunup ilgili baytların maskelenip geri yazılmasını gerektirir; birlikte kullanılmayan alanları zorla yan yana dizmek bazen fayda yerine ek iş çıkarır.

Asıl tehlike [[upgradeable-contract|yükseltilebilir sözleşmelerdedir]]. Yeni sürümde değişkenlerin sırasını değiştirir ya da araya bir değişken eklersen slot numaraları kayar — ama zincirdeki veri yerinde durur. Yeni kod eski veriyi yanlış anlamda okumaya başlar: bir bakiye adres, bir adres sayı olur. Bunun adı [[storage-collision|storage çakışmasıdır]]; bu yüzden yükseltilebilir sözleşmelerde yeni değişkenler yalnızca listenin sonuna eklenir.

Konsensüsteki [[slot]] ile karıştırma: orası zamanın bölündüğü aralık, burası depolamanın bölündüğü hücredir.
