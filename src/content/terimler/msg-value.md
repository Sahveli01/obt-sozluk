---
term: "msg.value"
tr: ""
aliases: ["msg value"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir çağrıyla birlikte sözleşmeye gönderilen yerel para miktarı; wei cinsinden, salt okunur bir değerdir."
related: [msg-sender, payable, wei, transaction, fallback-function]
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

`msg.value`, o çağrıyla birlikte sözleşmeye gönderilen yerel para miktarıdır — Ethereum'da ETH. Birimi her zaman [[wei|wei]]'dir, yani ETH'nin en küçük parçası: `1 ether` tam olarak `10**18 wei` eder.

Sözdizimi öğesi olduğu için çevrilmez; kodda `msg.value` diye yazılır ve yerleşik bir Türkçe karşılığı yoktur.

## Benzetme

Bankamatikten para yatırdıktan sonra elindeki makbuz gibi. Makbuzu okuduğunda para çoktan hesaba geçmiştir; makbuz yalnızca ne kadar yatırıldığını bildirir. Rakamı beğenmemen makbuzu değiştirmez — yapabileceğin tek şey bütün işlemi iptal ettirmektir.

## Nasıl çalışır?

Bir fonksiyonun para alabilmesi için [[payable|`payable`]] işaretlenmiş olması gerekir. Değilse gönderim daha fonksiyon çalışmadan geri alınır; dahası, `payable` olmayan bir fonksiyonun gövdesinde `msg.value` okumak derleme hatası verir.

Fonksiyon çalışmaya başladığında para sözleşmenin bakiyesine **zaten eklenmiştir**. Yani `address(this).balance` içinde `msg.value` de vardır; gelen parayı bakiyeye ikinci kez eklemeye çalışmak klasik bir hesap hatasıdır. Değer salt okunurdur: azaltamaz, bölemez, geri "almayabilirsin". Kabul etmek istemiyorsan tek yol işlemi geri almaktır ([[revert|`revert`]]); o zaman para da gönderene döner.

Solidity, okunabilirlik için `wei`, `gwei` ve `ether` soneklerini tanır: `0.01 ether` ifadesi derlenirken doğrudan wei'ye çevrilir. Karşılaştırmayı hep aynı birimde yap; `msg.value > 1` demek "1 ETH'den fazla" değil, "1 wei'den fazla" demektir.

## Örnek

```solidity
contract Bagis {
    mapping(address => uint256) public toplam;

    function bagisla() external payable {
        require(msg.value > 0, "bos bagis");
        toplam[msg.sender] += msg.value; // wei cinsinden
    }
}
```

## Dikkat

`msg.value` yalnızca ağın yerel parası içindir. Bir [[erc-20|ERC-20]] token'ı gönderildiğinde `msg.value` sıfır kalır, çünkü token transferi ayrı bir sözleşmenin defterinde yapılan bir kayıttır. "Token gönderdi mi?" sorusunu `msg.value` ile soramazsın.

İkincisi: bir işlemin içinde birden çok çağrı varsa her çağrının kendi `msg.value`'su olur ve bunlar birbirinden bağımsızdır. Bir fonksiyon zincirin içinden `msg.value`'ya bakıp "bu parayı aldım" diye defalarca sayarsa ortaya gerçekte var olmayan bir bakiye çıkar. Parayı kimin gönderdiğini [[msg-sender|`msg.sender`]] söyler, ne kadar gönderdiğini `msg.value`; ikisini tek seferde, aynı çağrıda işle.
