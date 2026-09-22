---
term: "Ownable"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Sözleşmenin tek bir sahip adresi olduğu ve yetkili fonksiyonların yalnızca o adrese açıldığı en basit erişim denetimi kalıbı."
related: [access-control, role-based-access-control-rbac, msg-sender, openzeppelin, multisig]
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

Ownable, [[access-control|erişim denetiminin]] en sade hâlidir: sözleşmenin tek bir `owner` adresi vardır ve ayrıcalıklı fonksiyonları yalnızca o adres çağırabilir. Sahip, dağıtımı yapan hesaptır; sonradan başka bir adrese devredilebilir.

Bir kütüphane sözleşmesinin adı olduğu için çevrilmez; kodda `Ownable` diye geçer ve kalıbın kendisi de bu adla anılır. Neredeyse her projede aynı biçimde yazıldığından genelde sıfırdan değil, [[openzeppelin|OpenZeppelin]] gibi denetlenmiş kütüphanelerden alınır.

## Nasıl çalışır?

Sahip adresi bir durum değişkeninde durur. Korunacak her fonksiyonun başına, çağıranın sahip olup olmadığını denetleyen bir modifier eklenir; uymuyorsa işlem geri alınır. Devir işlemi de aynı modifier ile korunur, yoksa sahipliği herkes alabilirdi.

## Örnek

```solidity
contract Sahipli {
    address public sahip;
    event SahipDegisti(address eski, address yeni);
    constructor() { sahip = msg.sender; }

    modifier yalnizcaSahip() { require(msg.sender == sahip, "sahip degil"); _; }

    function devret(address yeni) external yalnizcaSahip {
        require(yeni != address(0), "sifir adres");
        emit SahipDegisti(sahip, yeni);
        sahip = yeni;
    }
}
```

## Dikkat

Ownable'ın iki bilinen tuzağı var.

Birincisi **devrin geri alınamaz olması**. Sahipliği sıfır adrese devretmek (yaygın adıyla "renounce"), sözleşmeyi kalıcı olarak sahipsiz bırakır. Bu bazen bilinçli bir tercihtir — "artık kimse müdahale edemez" demenin yoludur — ama yükseltme, duraklatma ya da parametre değiştirme yeteneği de o anda biter. Aynı şey yanlış yazılmış bir adrese devirde de geçerlidir. Bu yüzden devri iki adıma bölmek, yani yeni sahibin ayrıca kabul etmesini istemek yerleşmiş bir uygulamadır.

İkincisi **tek arıza noktası** olmasıdır. Sahiplik tek bir özel anahtara bağlıysa, o anahtarı ele geçiren kişi sözleşmenin ayrıcalıklı fonksiyonlarının tamamını eline geçirir. Ciddi tutar taşıyan sözleşmelerde sahipliğin bir [[multisig|çoklu imza]] cüzdanında durmasının sebebi budur. Yetki birden çok işe ve kişiye dağılıyorsa Ownable dar gelir; orada [[role-based-access-control-rbac|RBAC]] kullanılır.
