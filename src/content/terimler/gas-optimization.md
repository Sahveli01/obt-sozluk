---
term: "Gas Optimization"
tr: "Gas optimizasyonu"
aliases: ["gas optimizasyonu"]
category: akilli-sozlesmeler
subcategory: "Dış dünya ve verimlilik"
level: ileri
short: "Bir sözleşmenin yaptığı işi değiştirmeden harcadığı gas miktarını düşürme çalışması."
related: [gas, state-variable, storage-slot, calldata, immutable-variable, gas-estimation]
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

Gas optimization, bir sözleşmenin davranışını değiştirmeden harcadığı [[gas|gas]] miktarını düşürmektir. Bu masrafı geliştirici değil, sözleşmeyi kullanan herkes her çağrıda öder.

En büyük kalem zincire kalıcı veri yazmaktır ve onun hesabı [[state-variable|state variable]] sayfasındadır. Aşağıdakiler onun dışındaki yerleşik başlıklardır.

## Nasıl çalışır?

**Değişken paketleme.** Kalıcı veri 32 baytlık [[storage-slot|slotlar]] hâlinde tutulur. Art arda tanımlanmış küçük tipler aynı slota sığdırılır; araya büyük bir tip girerse paketleme bozulur ve aynı veri fazladan slot işgal eder. Yani alanların sırası tek başına maliyeti değiştirir.

**Parametrelerde `calldata`.** Bir `external` fonksiyonun dizi ya da string parametresini `memory` yerine [[calldata|calldata]] işaretlersen veri kopyalanmaz, olduğu yerden okunur. Fonksiyon parametreyi değiştirmiyorsa kopyalamanın bir karşılığı da yoktur.

**`constant` ve `immutable`.** Değeri hiç değişmeyecek bir sabiti ([[constant|constant]]) ya da yalnızca kurulumda belirlenip bir daha değişmeyecek bir değeri ([[immutable-variable|immutable]]) normal bir alan olarak tutma. Bu değerler doğrudan bytecode'a gömülür, okumak için zincire gidilmez.

**Aynı değeri tekrar tekrar okumamak.** Kalıcı alandan okumak da ücretlidir. Aynı değere bir fonksiyon içinde birkaç kez bakacaksan başta yerel bir kopyasını al.

**Veriyi log'da tutmak.** Sözleşmenin kendisi o veriyi bir daha okumayacaksa, [[event-smart-contract|olay]] olarak yayımlamak kalıcı alana yazmaktan çok ucuzdur. Karşılığında veri sözleşme için erişilemez olur; yalnızca dışarıdan okunabilir.

## Örnek

```solidity
struct Kotu { uint128 a; uint256 b; uint128 c; }  // 3 slot
struct Iyi  { uint128 a; uint128 c; uint256 b; }  // 2 slot
```

İkisi de aynı üç değeri tutar. `Iyi` sürümünde iki küçük alan yan yana geldiği için tek slota sığar; `Kotu` sürümünde aralarına büyük alan girdiğinden ayrı ayrı slot tutarlar.

## Dikkat

Erken iyileştirme bu işin klasik tuzağıdır. Okunabilirliği bozan ya da kontrolleri atlayan kod birkaç bin gas kazandırır, karşılığında gözden kaçan bir açık bırakır. Sıra bellidir: önce doğru, sonra ucuz.

Bir de adı benzeyen iki işi karıştırma. Gas optimization kodun ne kadar harcadığını azaltmaya çalışır; [[gas-estimation|gas estimation]] ise gönderilmek üzere olan bir işlemin ne kadar harcayacağını önceden kestirir. Biri yazma anıyla, diğeri gönderme anıyla ilgilidir.
