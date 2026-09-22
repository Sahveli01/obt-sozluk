---
term: "tx.origin Phishing"
tr: "tx.origin oltalaması"
aliases: ["tx.origin oltalaması"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Yetkiyi tx.origin ile kontrol eden sözleşme, kullanıcıyı araya giren bir sözleşmeye çağırtan saldırıya açıktır."
related: [tx-origin, msg-sender, access-control-vulnerability, phishing, account-abstraction, access-control]
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

Bir işlem bir kişiden başlar ve yolda birkaç sözleşmeden geçebilir. [[tx-origin|`tx.origin`]] bu zincirin **en başındaki** dış hesabı verir; [[msg-sender|`msg.sender`]] ise seni o an çağıran **son halkayı**. Tek sözleşmeli basit bir çağrıda ikisi aynı adresi gösterir — hata tam da bu yüzden uzun süre fark edilmeden yaşar.

Fark, araya bir sözleşme girdiği anda ortaya çıkar. Kullanıcı bir sözleşmeyle etkileşime geçer, o sözleşme de senin sözleşmeni çağırır. Artık `msg.sender` aradaki sözleşmedir ama `tx.origin` hâlâ kullanıcıdır. Yetkiyi `tx.origin` ile ölçen bir kontrol bu durumda geçer: aracının kim olduğunu hiç sormamış, yalnızca "bu işlemi kim başlattı" diye sormuştur.

Saldırının kullanıcı tarafı sıradan bir oltalamadır ([[phishing]]): yetkili kişiye zararsız görünen bir sözleşmeyle bir işlem yaptırılır. Kullanıcı imzaladığı şeyin kendi yetkisini bir başkasının eline verdiğini görmez.

## Nasıl çalışır?

Savunma tek cümledir ve istisnası yoktur: **yetkilendirmede her zaman `msg.sender` kullanılır.** Sözleşmenin bilmesi gereken şey işlemi kimin başlattığı değil, o an kapıda kimin durduğudur.

`tx.origin` bazen "karşımdaki bir sözleşme mi, gerçek bir kişi mi" ayrımı için de kullanılır. Bu ayrım da güvenilir değildir ve [[account-abstraction|hesap soyutlamasının]] yaygınlaştığı bir dünyada anlamını büsbütün yitirir: kullanıcıların kendisi de sözleşme olabilir.

## Örnek

```solidity
// AÇIK: yetki, işlemi başlatan hesaba bakılarak veriliyor
address public sahip;

function cek(address payable kime) external {
    require(tx.origin == sahip, "yetkisiz");
    kime.transfer(address(this).balance);
}
```

```solidity
// DÜZELTİLMİŞ: yetki, çağıranın kendisine bakılarak veriliyor
address public sahip;

function cek(address payable kime) external {
    require(msg.sender == sahip, "yetkisiz");
    kime.transfer(address(this).balance);
}
```

## Dikkat

Bu açık yalnızca sözleşme sahibini vurmaz. `tx.origin` ile yapılan her kural — beyaz liste, kara liste, kota, "yalnızca üyeler" kontrolü — aynı yolla atlatılabilir. Kural ne olursa olsun, sorduğu soru yanlıştır.

Kullanıcı tarafında korunma, sözleşmeye değil alışkanlığa dayanır: tanımadığın bir sözleşmeyle etkileşime geçmeden önce onun senin adına başka hangi sözleşmeleri çağırabileceğini düşün. Bir işlemin "sadece bir tıklama" görünmesi, zincirde tek bir adım attığı anlamına gelmez.

Yetkiyi doğru yerden okumak, erişim denetiminin tamamı değil başlangıcıdır ([[access-control-vulnerability|erişim denetimi açığı]]).
