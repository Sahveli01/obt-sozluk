---
term: "revert"
tr: ""
aliases: []
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "İşlemi durdurup bütün durum değişikliklerini geri alan ifade; custom error ile hatayı ucuza ve ayrıştırılabilir biçimde bildirir."
related: [require, custom-error, assert, transaction]
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

`revert`, fonksiyonu durdurup o ana kadar yapılmış bütün durum değişikliklerini geri alan ifadedir. İki yazımı vardır: `revert("mesaj")` ve `revert HataAdi(arg1, arg2)`. İkincisi bir [[custom-error|custom error]] ile çalışır ve daha ucuzdur.

Sözdizimi öğesi olduğu için çevrilmez; kodda `revert` diye yazılır.

## Nasıl çalışır?

Aynı ad iki ayrı şeyi anlatır, karıştırma: "revert" hem bu ifadenin adıdır hem de EVM'in bir işlemi geri alma davranışının adıdır. İfade çalıştığında davranış tetiklenir ve zincir o işlemden hiç etkilenmemiş gibi kalır — yazılan depolama değerleri eski hâline döner, yayılan olaylar silinir, gönderilen para geri gider. Harcanmış gas geri gelmez, harcanmamış olan iade edilir.

Sonuç olarak [[require|`require`]] ile arasında bir fark yoktur; ikisi de aynı geri alma davranışını tetikler, üçlünün ayrımı `require` maddesinde toplanmıştır. Aradaki fark yazımdadır: `require` "olması gereken"i, `revert` "olmaması gereken"i tarif eder. Koşul karmaşıksa ve birkaç dalı varsa `if`/`revert` okunaklı olur.

Custom error tarafı asıl kazancı sağlar. Metin mesaj yerine, hatanın adından türetilen dört baytlık bir seçici ve parametreler döner. Bu hem daha az gas harcar hem de çağıran tarafın hatayı programla ayırt etmesini sağlar: arayüz "yetersiz bakiye" ile "kapalı pazar" hatasını metin karşılaştırarak değil, tipine bakarak ayırır.

## Örnek

```solidity
error TransferReddedildi(address kime, uint256 miktar);

contract Odeme {
    mapping(address => bool) public engelli;

    function gonder(address kime, uint256 miktar) external view {
        if (engelli[kime]) {
            revert TransferReddedildi(kime, miktar);
        }
        // ... transfer
    }
}
```

## Dikkat

Geri alma, geri alınan çağrının **kendi** bağlamıyla sınırlıdır. Bir sözleşme başka bir sözleşmeyi [[call-low-level|düşük seviyeli `call`]] ile çağırdığında karşı tarafın geri alması otomatik olarak yukarı taşınmaz; çağrı yalnızca `false` döner. Bu değer kontrol edilmezse iş yarım kalmış olur ve kod bunu fark etmez ([[unchecked-external-call|kontrol edilmeyen dış çağrı]]).

İkincisi: `revert` bir hata yakalama aracı değil, bir durdurma aracıdır. `try`/`catch` ile yakalanabilen tek şey, senin çağırdığın başka bir sözleşmenin geri alması olabilir; kendi `revert`'ünü kendi içinde yakalayamazsın.
