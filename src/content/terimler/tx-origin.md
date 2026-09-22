---
term: "tx.origin"
tr: ""
aliases: ["tx origin"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "İşlemi imzalayıp başlatan cüzdanın adresi; çağrı zinciri boyunca hiç değişmez ve yetkilendirmede kullanılmaz."
related: [msg-sender, tx-origin-phishing, access-control, transaction]
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

`tx.origin`, bütün çağrı zincirini başlatan dış hesabın — yani imzayı atan cüzdanın — adresidir. Zincir kaç sözleşmeden geçerse geçsin bu değer hiç değişmez.

Sözdizimi öğesi olduğu için çevrilmez; kodda `tx.origin` diye yazılır ve Türkçe bir karşılığı yoktur.

## Nasıl çalışır?

Her [[transaction|işlem]] bir cüzdanın imzasıyla doğar; sözleşmeler kendiliğinden işlem başlatamaz. `tx.origin` bu imzayı atan adresi taşır ve bu yüzden **asla bir sözleşme adresi olamaz**, her zaman bir dış hesaptır.

Farkı [[msg-sender|`msg.sender`]] ile yan yana koyunca netleşir. Cüzdan A, B sözleşmesini çağırsın; B de C'yi çağırsın. C'nin içinde `msg.sender` B'dir, `tx.origin` ise hâlâ A'dır. Yani `msg.sender` "beni kim çağırdı", `tx.origin` "bu işi kim başlattı" sorusunun cevabıdır.

Meşru kullanım alanı dardır. Ücret iadesi yaparken imzayı atana geri ödemek ya da bir günlük kaydına işlemi başlatan adresi yazmak gibi, yetkiyle ilgisi olmayan yerlerde kullanılır. Bir de `msg.sender == tx.origin` karşılaştırmasıyla "çağrı araya sözleşme girmeden doğrudan bir cüzdandan mı geldi" sorusu sorulur; bu kontrol de kesin bir güvence değildir, yalnızca kaba bir filtredir.

## Örnek

```solidity
contract Kasa {
    address public sahip;

    // doğrusu: doğrudan çağıran adrese bak
    function yetkiliMi() external view returns (bool) {
        return msg.sender == sahip;
    }

    // yanlışı: araya giren sözleşme tx.origin'i değiştirmez
    function yetkiliMiYanlis() external view returns (bool) {
        return tx.origin == sahip;
    }
}
```

## Dikkat

**Yetkilendirmede `tx.origin` kullanılmaz.** Sebebi şu: bir kullanıcı tanımadığı bir sözleşmeyle etkileşime girdiğinde o sözleşme, aynı işlemin içinde senin sözleşmene de çağrı yapabilir. O çağrıda `msg.sender` araya giren sözleşmedir — ama `tx.origin` hâlâ kurbanın cüzdanıdır. `tx.origin`'e bakan bir kontrol bu durumu "sahibin kendisi geldi" diye okur ve kapıyı açar. Kurbanın imzası, farkında olmadan saldırganın sözleşmesi üzerinden geçmiş olur. Bu saldırı sınıfının adı [[tx-origin-phishing|tx.origin oltalaması]]'dır.

Doğru kalıp tek cümledir: kimin ne yapmaya yetkili olduğunu soruyorsan `msg.sender`'a bak ([[access-control|erişim kontrolü]]). `tx.origin` bu soruya cevap veremez, çünkü aradaki halkaları görmez.
