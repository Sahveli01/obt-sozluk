---
term: "Checks-Effects-Interactions"
tr: ""
aliases: ["cei"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Bir fonksiyonu önce kontroller, sonra durum değişiklikleri, en son dış çağrılar sırasıyla yazma kuralı."
related: [reentrancy-attack, reentrancy-guard, require, pull-over-push-payments, call-low-level]
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

Checks-Effects-Interactions bir **sıralama kuralıdır**. Bir fonksiyonun gövdesi üç bölüme ayrılır ve bu bölümler hep aynı sırayla yazılır:

1. **Checks (kontroller)** — koşullar sağlanıyor mu? Yetki var mı, bakiye yetiyor mu?
2. **Effects (etkiler)** — sözleşmenin kendi durumu güncellenir. Bakiye düşülür, bayrak çevrilir.
3. **Interactions (etkileşimler)** — dışarıyla konuşulur. Para gönderilir, başka bir sözleşme çağrılır.

Kalıbın adı üç İngilizce kelimenin sırasından geldiği için çevrilmez; Türkçe metinlerde de "checks-effects-interactions" ya da kısaca CEI diye geçer.

## Benzetme

Vestiyer gibi düşün. Paltonu bırakırken sana numaralı bir fiş verilir. Almaya geldiğinde görevli önce fişi elinden alır, defterden numarayı siler, sonra paltoyu getirir. Ters sırayla çalışsaydı — önce paltoyu verip fişi sonra alsaydı — aynı fişle kapıya birkaç kez gelip her seferinde bir palto almak mümkün olurdu. Kayıt, teslimattan önce kapanmalıdır.

## Nasıl çalışır?

Kuralın bütün ağırlığı üçüncü adımdadır. Dışarıya yapılan her çağrı, kontrolü bir süreliğine karşı tarafa devretmektir. Karşı taraf bir sözleşmeyse kendi kodu çalışır ve o kod, senin fonksiyonun daha bitmeden seni yeniden çağırabilir. Durumu önceden güncellediysen ikinci çağrı ilk adımdaki kontrole takılır — bakiye zaten sıfırlanmıştır. Güncellemeyi sona bıraktıysan aynı bakiye defalarca ödenir ([[reentrancy-attack|yeniden giriş saldırısı]]).

Aynı mantık kontroller için de geçerli: [[require|`require`]] satırları en başta olduğunda işlem daha hiçbir şeye dokunmadan geri alınır.

## Örnek

```solidity
mapping(address => uint256) public bakiye;

function cek(uint256 miktar) external {
    require(bakiye[msg.sender] >= miktar, "yetersiz");  // kontrol
    bakiye[msg.sender] -= miktar;                       // etki
    (bool ok, ) = msg.sender.call{value: miktar}("");   // etkileşim
    require(ok, "transfer basarisiz");
}
```

## Dikkat

CEI **birinci savunmadır**, [[reentrancy-guard|yeniden giriş kilidi]] ikincisi. Sırası doğru bir fonksiyona kilit takmak zarar vermez ama asıl işi sıra yapar; kilidi takıp sırayı bozmak ise yanlış bir güven duygusu verir.

CEI her durumu da kapatmaz. Bazı akışlarda dış çağrı ortada olmak zorundadır — önce bir token çekilir, sonra hesap yapılır. Orada kilit şarttır. Ayrıca dış çağrıdan sonra okuduğun her değer bayatlamış olabilir: karşı taraf o sırada başka bir fonksiyonunu çağırıp durumu değiştirmiş olabilir ([[call-low-level|düşük seviye çağrı]]).

Dışarı çağrıyı büsbütün ortadan kaldırmak istiyorsan bir adım öteye geç: parayı sen göndermek yerine alıcının çekmesini iste ([[pull-over-push-payments|pull over push]]).
