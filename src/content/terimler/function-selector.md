---
term: "Function Selector"
tr: "Fonksiyon seçicisi"
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: ileri
short: "Fonksiyon imzasının keccak-256 özetinin ilk 4 baytı; bir çağrının hangi fonksiyona gideceğini bu dört bayt belirler."
related: [application-binary-interface-abi, calldata, keccak-256, fallback-function, diamond-pattern-eip-2535, visibility]
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

Fonksiyon seçicisi, bir çağrının hangi fonksiyona gideceğini söyleyen 4 baytlık etikettir. [[calldata|Calldata]]'nın ilk dört baytıdır; sözleşmenin girişinde duran dağıtıcı kod bu dört baytı kendi fonksiyon listesiyle karşılaştırır ve eşleşen fonksiyona atlar.

## Nasıl çalışır?

Seçici, fonksiyonun **kanonik imzasından** hesaplanır. İmza, fonksiyonun adı ve parantez içinde parametre tipleridir. Üç kuralı vardır: arada boşluk olmaz, parametre adları yazılmaz ve tipler kısaltılmadan yazılır — `uint` değil `uint256`. Bu metnin [[keccak-256|keccak-256]] özeti alınır; özetin **ilk 4 baytı** seçicidir.

Örneğin `transfer(address,uint256)` imzasının seçicisi `0xa9059cbb`'dir. Solidity'de aynı fonksiyonu `transfer(address alici, uint256 miktar)` diye yazmış olman sonucu değiştirmez, çünkü imzada adlar yer almaz.

Seçici yalnızca dışarıya açık fonksiyonlar için üretilir; [[visibility|`internal` ve `private`]] olanların seçicisi olmaz. Hiçbir seçiciyle eşleşmeyen bir çağrının başına ne geleceğini ise [[fallback-function|`fallback`]] belirler.

## Örnek

```solidity
contract Secici {
    function hesapla() external pure returns (bytes4) {
        return bytes4(keccak256("transfer(address,uint256)"));
    }

    function gelen() external pure returns (bytes4) {
        return msg.sig; // bu çağrının seçicisi
    }
}
```

## Dikkat

Dört bayt az yer kaplar ama az da ayırt eder. Farklı imzaların aynı seçiciye düşmesi mümkündür ve bu teorik bir ihtimal değil, arayanın bulabileceği bir şeydir. Tek bir sözleşme içinde iki fonksiyonun seçicisi çakışırsa derleyici hata verir; asıl risk, çağrıları başka sözleşmelere yönlendiren kurgulardadır. [[diamond-pattern-eip-2535|Diamond]] gibi kalıplarda aynı seçicinin iki ayrı yüze ait olması sessiz bir karışıklık yaratır, bu yüzden çakışmalar dağıtımdan önce denetlenir.

Bir de şu: seçiciye bakarak fonksiyonun ne yaptığını anlayamazsın. Gezginlerde `0xa9059cbb` yerine `transfer` yazdığını görüyorsan, bunun sebebi gezginin bilinen imzalardan oluşan bir tabloya bakmasıdır. Zincirde o ad hiçbir yerde yazmaz.
