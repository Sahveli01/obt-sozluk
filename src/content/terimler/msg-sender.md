---
term: "msg.sender"
tr: ""
aliases: ["msg sender"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Çalışan fonksiyonu o an doğrudan çağıran adres; Solidity'de yetkilendirmenin doğru dayanağı budur."
related: [tx-origin, msg-value, access-control, call-low-level, smart-contract]
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

`msg.sender`, çalışmakta olan fonksiyonu **doğrudan** çağıran adrestir. Bu adres bir kullanıcı cüzdanı olabilir, başka bir [[smart-contract|akıllı sözleşme]] de olabilir; sözleşme ikisini aynı biçimde, düz bir adres olarak görür.

Solidity'nin bir sözdizimi öğesi olduğu için çevrilmez: kodda her zaman `msg.sender` diye yazılır, Türkçe bir karşılığı yoktur ve aranmasına da gerek yoktur.

## Benzetme

Telefonun ekranında görünen arayan numarası gibi. Ekranda, o an hattın öbür ucunda duran numara yazar. Aramanın kimin isteğiyle başladığını, kaç santralden aktarıldığını telefon bilmez ve gösteremez — yalnızca son halkayı gösterir.

## Nasıl çalışır?

Her [[transaction|işlem]] bir cüzdanın imzasıyla başlar, ama yol boyunca el değiştirebilir. Cüzdan A, B sözleşmesini çağırsın; B de C'yi çağırsın. B'nin içinde `msg.sender` A'dır. C'nin içinde `msg.sender` artık A değil, B'dir. Yani değer her çağrı halkasında yenilenir ve "beni kim çağırdı" sorusunun cevabını verir.

Yetki kontrolü tam olarak buna dayanır. Sahip yalnızca kendi işlemini yapabilsin isteniyorsa kontrol `msg.sender == sahip` biçiminde yazılır; aynı satır tekrarlanacaksa bir [[modifier|modifier]]'a taşınır. Rol tabanlı kurgularda da sorulan soru değişmez, yalnızca cevaba bakılan yer bir rol tablosu olur ([[access-control|erişim kontrolü]]).

Bir ayrıntı: [[delegatecall|`delegatecall`]] ile çağrılan kodda `msg.sender` korunur, çünkü o kod çağıran sözleşmenin bağlamında çalışır. [[proxy-contract|Proxy]] kurgularında bu davranış bilinçli olarak kullanılır.

## Örnek

```solidity
contract Kasa {
    address public sahip;

    constructor() {
        sahip = msg.sender; // sözleşmeyi kuran adres
    }

    function sahipDegistir(address yeni) external {
        require(msg.sender == sahip, "yalnizca sahip");
        sahip = yeni;
    }
}
```

## Dikkat

`msg.sender` ile [[tx-origin|`tx.origin`]] karıştırılır ama aynı şey değildir: `tx.origin` işlemi başlatan cüzdandır ve zincir boyunca hiç değişmez, `msg.sender` her halkada değişir. **Yetkilendirmede her zaman `msg.sender` kullanılır.** `tx.origin`'e dayanan bir kontrol, kullanıcıyı araya giren bir sözleşmeye çağırtan oltalamaya açıktır ([[tx-origin-phishing|tx.origin oltalaması]]).

İkinci nokta: `msg.sender` bir sözleşme de olabilir. "Buraya yalnızca insan gelir" varsayımıyla kod yazma; gelen adresin ne yapacağını sen belirlemezsin.
