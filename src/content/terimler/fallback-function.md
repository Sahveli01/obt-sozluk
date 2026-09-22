---
term: "Fallback Function"
tr: ""
aliases: ["fallback"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Gelen çağrı hiçbir fonksiyonla eşleşmediğinde çalışan son çare fonksiyon."
related: [receive-function, payable, msg-value, calldata, reentrancy-attack]
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

`fallback`, sözleşmeye gelen bir çağrı hiçbir fonksiyonla eşleşmediğinde çalışan son çare fonksiyondur. Adı yoktur, `fallback() external` diye yazılır ve sözleşme başına bir tane olur.

Terim Türkçeye yerleşmiş bir karşılıkla çevrilmez; kodda anahtar sözcük olarak geçtiği için `fallback` diye anılır.

## Benzetme

Bir binanın girişindeki danışma masası gibi. Hangi odaya gideceğini biliyorsan doğruca oraya yürürsün, kimseye uğramazsın. Odayı bilmiyorsan ya da öyle bir oda hiç yoksa masadaki görevliyle muhatap olursun: ya işini orada halleder ya da "burada böyle bir birim yok" deyip seni geri çevirir. Sözleşmenin `fallback`'i de bu masadır — adresini bulamayan her çağrı ona iner.

## Nasıl çalışır?

Bir çağrı geldiğinde sözleşme [[calldata|calldata]]'nın ilk dört baytına bakar; bu, çağrılmak istenen fonksiyonun seçicisidir. Seçici tablodaki hiçbir fonksiyonla eşleşmezse `fallback` çalışır. `fallback` de yoksa işlem geri alınır.

Kardeşi [[receive-function|`receive`]] ile iş bölümü şöyledir: gelen çağrının verisi boşsa — yani düz bir para transferiyse — ve sözleşmede `receive` varsa o çalışır. `receive` yoksa aynı transfer `payable` bir `fallback`'e düşer. Veri doluysa `receive` hiç devreye girmez.

İki imzası vardır: `fallback() external` ve veriyi görüp cevap döndürebilen `fallback(bytes calldata) external returns (bytes memory)`. Her ikisi de isteğe bağlı olarak [[payable|`payable`]] işaretlenebilir.

En yaygın ciddi kullanımı [[proxy-contract|proxy sözleşmelerdir]]: proxy'nin kendi fonksiyonu neredeyse yoktur, gelen her çağrı `fallback`'e düşer ve oradan mantık sözleşmesine iletilir.

## Örnek

```solidity
contract Kapi {
    event Dustu(bytes veri, uint256 miktar);

    receive() external payable {
        emit Dustu("", msg.value);       // boş veriyle gelen ETH
    }

    fallback() external payable {
        emit Dustu(msg.data, msg.value); // eşleşmeyen çağrı
    }
}
```

## Dikkat

Asıl risk `fallback`'i kendin yazarken değil, **başkasının** `fallback`'ini tetiklerken doğar. Bir adrese ETH gönderdiğinde o adres bir sözleşmeyse `receive` ya da `fallback` kodu çalışır — ve o kod, senin fonksiyonun daha bitmeden seni geri çağırabilir. Bakiyeyi transferden sonra güncelleyen bir çekme fonksiyonu bu yüzden boşaltılabilir ([[reentrancy-attack|yeniden giriş saldırısı]]). Savunma iki adımdır: durumu transferden önce yaz, gerekiyorsa bir [[reentrancy-guard|yeniden giriş kilidi]] ekle.

İkinci tuzak gas'tır. `transfer` ve `send` ile gelen ETH'de karşı tarafa yalnızca 2300 gas verilir; bu miktar depolamaya yazmaya yetmez. `fallback`'i ağır yazarsan sözleşmen bu yolla para alamaz hâle gelir.
