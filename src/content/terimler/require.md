---
term: "require"
tr: ""
aliases: []
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir ön koşul sağlanmazsa işlemi geri alan denetim; Solidity'de girdi ve yetki kontrolünün standart yoludur."
related: [revert, assert, custom-error, modifier, transaction]
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

`require(kosul, "mesaj")`, koşul sağlanmıyorsa fonksiyonu olduğu yerde durdurur ve o ana kadar yapılmış bütün durum değişikliklerini geri alır. Girdi denetimi, ön koşul ve yetki kontrolü için kullanılır.

Sözdizimi öğesi olduğu için çevrilmez; kodda `require` diye yazılır.

## Benzetme

Bir kuruma evrak verirken memurun yaptığı ön kontrol gibi. Memur dosyayı alır almaz bakar: imza atılmış mı, ekler tam mı. Eksikse dosyayı işleme koymaz, elindekini olduğu gibi sana geri verir — kayıtlara hiçbir şey geçmez, yarım kalmış bir başvuru kalmaz. Geri gelmeyen tek şey, oraya kadar harcadığın zamandır.

## Nasıl çalışır?

`require`, `revert` ve `assert` bu alt başlığın en çok karıştırılan üçlüsüdür. Üçü de işlemi geri alır; ayrıldıkları yer **neden** geri aldıkları ve **hangi hatayı** ürettikleridir.

- **`require`** — dışarıdan gelen bir şey yanlış: parametre, bakiye, yetki, zaman. `Error(string)` üretir; cüzdanlar bu mesajı kullanıcıya gösterir. Hata çağıranındır.
- **`revert`** — aynı durum, ama koşulu `if` ile sen yazarsın. Yine `Error(string)` üretir; bir custom error ile kullanıldığında mesajı metin olarak taşımadığı için gas'ı ucuzdur.
- **`assert`** — asla gerçekleşmemesi gereken bir içsel tutarsızlık. `Panic(uint256)` üretir ve "burada kodun kendisi bozuk" demektir. Hata senindir.

Pratik kural: kullanıcının yapabileceği bir hata `require` ya da [[revert|`revert`]] ile karşılanır; senin kodunun hiçbir koşulda düşmemesi gereken varsayımı [[assert|`assert`]] ile korunur.

`require`'ın metin mesajı zincire yazılır ve her karakteri yer kaplar. Sık çağrılan yollarda bunun yerine [[custom-error|custom error]] kullanılır: aynı işi görür, çok daha az gas harcar. Aynı kontrol birden çok fonksiyonda tekrarlanıyorsa satır bir [[modifier|modifier]]'a taşınır.

Geri alma her zaman bütün [[transaction|işlemi]] kapsar. Harcanan gas geri gelmez, harcanmamış olan iade edilir.

## Örnek

```solidity
error YetersizBakiye(uint256 istenen, uint256 mevcut);

contract Cuzdan {
    uint256 public toplamArz;
    mapping(address => uint256) public bakiye;

    function gonder(address kime, uint256 miktar) external {
        require(kime != address(0), "sifir adres");            // girdi denetimi
        if (bakiye[msg.sender] < miktar) {
            revert YetersizBakiye(miktar, bakiye[msg.sender]); // aynı işin ucuzu
        }
        bakiye[msg.sender] -= miktar;
        bakiye[kime] += miktar;
        assert(bakiye[kime] <= toplamArz);                     // içsel tutarlılık
    }
}
```

## Dikkat

`require` her zaman geri alır; "sessizce `false` döner" diye bir hâli yoktur. Bir koşul sağlanmadığında akışın devam etmesini istiyorsan `require` değil, düz bir `if` yazmalısın.

Mesajları kısa tut ve anlamlı yaz. Cüzdanlar bu metni kullanıcıya gösterir; "hata" yazan bir mesaj kimseye bir şey anlatmaz, ama uzun bir cümle de her çağrıda maliyet olarak geri döner.
