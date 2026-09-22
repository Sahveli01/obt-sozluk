---
term: "Role-Based Access Control (RBAC)"
tr: "Rol tabanlı erişim denetimi"
aliases: ["rbac", "rol tabanlı erişim denetimi"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Yetkiyi tek tek adreslere değil rollere bağlayan, rolleri de adreslere dağıtan erişim denetimi kalıbı."
related: [access-control, ownable, access-control-vulnerability, multisig, openzeppelin]
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

RBAC, [[access-control|erişim denetimini]] iki kademeye ayırır. Önce iş tanımlanır — "token basabilen", "duraklatabilen", "parametre değiştirebilen" — sonra bu tanım adreslere dağıtılır. Yetki kişiye değil **role** bağlıdır.

[[ownable|Ownable]]'dan farkı burada. Ownable tek bir kişiye her şeyi verir; RBAC yetkiyi parçalara böler, her parçayı ayrı ayrı dağıtır ve geri alır. Bir ekipte fiyat oracle'ını güncelleyen adres ile yükseltme yetkisi olan adres aynı olmak zorunda değildir.

## Benzetme

Hastanedeki yaka kartları gibi. Kart bir kişinin adına değil, yaptığı işe göre verilir: hemşire kartı ilaç dolabını açar, muhasebe kartı açmaz ama vezneye girer. Yeni bir hemşire işe girdiğinde kapıların kilitleri yeniden ayarlanmaz, ona hemşire kartı verilir; biri ayrıldığında kartı iptal edilir. Kapılar kimi tanıdığını değil, hangi kartı gördüğünü bilir.

## Nasıl çalışır?

Her rol, genellikle bir metnin hash'inden üretilmiş sabit bir tanımlayıcıdır. Sözleşme bir iç içe eşleme tutar: rol → adres → izinli mi. Korunan fonksiyonların başında, çağıranın ilgili role sahip olup olmadığı denetlenir.

Rolleri kimin dağıtacağı da bir kuraldır. Yaygın uygulamalarda her rolün bir **yönetici rolü** vardır ve yalnızca o rolün üyeleri o role adres ekleyip çıkarabilir. En tepede duran varsayılan yönetici rolü ise kendi kendisinin yöneticisidir.

## Örnek

```solidity
bytes32 public constant BASICI_ROLU = keccak256("BASICI_ROLU");
mapping(bytes32 => mapping(address => bool)) private _roller;

modifier rolGerekir(bytes32 rol) {
    require(_roller[rol][msg.sender], "yetki yok");
    _;
}

function bas(address kime, uint256 miktar) external rolGerekir(BASICI_ROLU) {
    // basma işlemi
}
```

## Dikkat

RBAC yetkiyi dağıtır ama kendiliğinden merkezsizleştirmez. En üstteki yönetici rolü tek bir adreste duruyorsa, alttaki bütün ince ayrımlar görüntüden ibarettir: o adres istediği role kendini ekleyebilir. Ciddi sözleşmelerde en üst rol bir [[multisig|çoklu imza]] cüzdanında tutulur.

İkinci sık hata, **rol vermenin kolay, geri almayı hatırlamanın zor olmasıdır**. Bir test adresine ya da ayrılan bir ekip üyesine verilen rol, kimse fark etmediği sürece yıllarca açık kalır ([[access-control-vulnerability|erişim denetimi açığı]]). Rol listesi zincirden okunabildiği için, bir sözleşmeyi incelerken bakılacak ilk yerlerden biridir. Hazır bir kütüphane ([[openzeppelin|OpenZeppelin]] gibi) kullanmak bu listeyi tutmayı kolaylaştırır ama kimin listede olacağına yine sen karar verirsin.
