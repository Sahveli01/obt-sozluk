---
term: "Payable"
tr: ""
aliases: ["payable"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir fonksiyonun ya da adresin yerel para kabul edebildiğini bildiren Solidity anahtar sözcüğü."
related: [msg-value, fallback-function, receive-function, access-control-vulnerability, reentrancy-attack]
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

`payable`, bir fonksiyonun ya da bir adresin yerel para (Ethereum'da ETH) kabul edebildiğini bildiren anahtar sözcüktür. İşaretlenmemiş bir fonksiyona para gönderilirse işlem geri alınır.

Sözdizimi öğesi olduğu için çevrilmez; kodda `payable` diye yazılır ve yerleşik bir Türkçe karşılığı yoktur.

## Benzetme

Postanede her gişenin her işlemi yapmaması gibi. Tabelasında havale yazmayan gişeye para uzattığında memur parayı almaz, seni geri çevirir — para masada kalmaz, cebinde kalır. Gişenin parayı alabilmesi için o yetkiyle açılmış olması gerekir; yetkisi yoksa işlem hiç başlamaz.

## Nasıl çalışır?

İki yerde karşına çıkar. Fonksiyon başlığında: `function ode() external payable`. Bir de adres tipinde: `address` ile `address payable` ayrı tiplerdir ve para göndermeden önce dönüşümü `payable(adres)` diye açıkça yazmak gerekir. Bu zorlama kasıtlıdır — para gönderilen yer yanlışlıkla seçilmesin diye.

İşaretlenmemiş bir fonksiyona gönderim, daha gövde çalışmadan EVM tarafından geri alınır; derleyici de o gövdede [[msg-value|`msg.value`]] okumana izin vermez, doğrudan derleme hatası verir. Yani koruma iki katlıdır.

Bir sözleşmenin sade ETH transferi alabilmesi için `payable` bir [[receive-function|`receive`]] fonksiyonuna ya da `payable` bir [[fallback-function|`fallback`]]'e ihtiyacı vardır; hiçbiri yoksa gelen transfer geri alınır. Kurucu fonksiyon da `payable` olabilir, böylece sözleşme daha kurulurken bakiyeyle doğar.

## Örnek

```solidity
contract Vezne {
    event Alindi(address gonderen, uint256 miktar);

    function ode() external payable {
        emit Alindi(msg.sender, msg.value);
    }

    // payable değil: bu fonksiyona ETH gönderen işlem geri alınır
    function bilgi() external pure returns (string memory) {
        return "ETH kabul etmez";
    }
}
```

## Dikkat

`payable` yalnızca "buraya para konabilir" der. **Kimin** para gönderebileceğini, gelen parayla ne yapılacağını ve kasadan kimin para çekebileceğini söylemez — bunlar ayrıca yazılmazsa ortaya bir [[access-control-vulnerability|erişim kontrolü açığı]] çıkar. Klasik hata, para kabul eden bir sözleşmeye sahip kontrolü olmayan bir çekme fonksiyonu eklemektir: kasayı herkes boşaltabilir.

İkincisi: para kabul eden sözleşme er geç para da gönderir. Gönderdiğin adres bir sözleşmeyse kodu çalışır ve daha senin fonksiyonun bitmeden seni yeniden çağırabilir ([[reentrancy-attack|yeniden giriş saldırısı]]). Doğru kalıp bellidir: önce kontrolleri yap, sonra durumu güncelle, transferi en sona bırak ([[checks-effects-interactions|kontrol-etki-etkileşim]]).
