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

Bir binanın girişindeki danışma masası gibi. Odayı biliyorsan doğruca oraya yürürsün, kimseye uğramazsın. Bilmiyorsan ya da öyle bir oda hiç yoksa masadaki görevliyle muhatap olursun: ya işini orada halleder ya da seni geri çevirir. Sözleşmenin `fallback`'i bu masadır — adresini bulamayan her çağrı ona iner.

## Nasıl çalışır?

Bir çağrı geldiğinde sözleşme [[calldata|calldata]]'nın ilk dört baytına bakar; bu, çağrılmak istenen fonksiyonun seçicisidir. Seçici tablodaki hiçbir fonksiyonla eşleşmezse `fallback` çalışır.

Kardeşi [[receive-function|`receive`]] ile iş bölümünü, çağrıda **veri olup olmadığı** belirler. EVM'in izlediği sıra şudur:

1. **Calldata boş** (düz ETH transferi): `receive` varsa o çalışır. Yoksa ve `fallback` `payable` ise `fallback` çalışır. İkisi de yoksa işlem geri alınır.
2. **Calldata dolu**: `receive` hiç devreye girmez. Seçici bir fonksiyonla eşleşiyorsa o fonksiyon, eşleşmiyorsa `fallback` çalışır; o da yoksa geri alınır.
3. **Çağrıyla ETH de geliyor**: çalışacak fonksiyonun — `fallback` dahil — `payable` olması gerekir, değilse işlem geri alınır.

Ayrımın ETH gönderilip gönderilmediğiyle değil, çağrıda veri olup olmadığıyla kurulduğuna dikkat et.

İki imzası vardır: `fallback() external` ve veriyi görüp cevap döndürebilen `fallback(bytes calldata) external returns (bytes memory)`. Her ikisi de isteğe bağlı olarak [[payable|`payable`]] işaretlenebilir.

En yaygın ciddi kullanımı [[proxy-contract|proxy sözleşmelerdir]]: proxy'nin kendi fonksiyonu neredeyse yoktur, gelen her çağrı `fallback`'e düşüp mantık sözleşmesine iletilir.

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

İkinci tuzak gas'tır. `transfer` ve `send` karşı tarafa yalnızca 2300 gas bırakır; bu, depolamaya yazmaya yetmez. `fallback`'i ağır yazarsan sözleşmen bu yolla para alamaz hâle gelir.
