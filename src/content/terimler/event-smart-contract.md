---
term: "Event (Smart Contract)"
tr: ""
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: orta
short: "Sözleşmenin dışarıya duyuru yapmak için kullandığı bildirim; tetiklendiğinde zincire bir log kaydı düşer."
related: [log, indexer, subgraph, erc-20, storage-evm, application-binary-interface-abi]
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

`event`, bir sözleşmenin "şu oldu" demek için kullandığı bildirimdir. Önce sözleşmenin başında tanımlanır, sonra `emit` ile tetiklenir. Tetiklendiğinde sözleşmenin durumunda hiçbir şey değişmez; zincire yalnızca bir [[log|log kaydı]] düşer.

Türkçede yerleşik bir karşılık kullanılmıyor; kodda anahtar sözcük olduğu için `event` diye anılır.

## Benzetme

Otogardaki kalkış ekranı gibi. Ekrana düşen satır otobüsü kaldırmaz, kalkmış otobüsü geri de getirmez; yalnızca olanı bitenden haberi olmayanlara duyurur. Şoför ekrana bakmaz, yolculuğunu ekran yönetmez. Ama peronda bekleyen, karşılamaya gelen, "kalktı mı" diye merak eden herkes gözünü oraya diker.

## Nasıl çalışır?

Tanımda parametrelerin bir kısmını `indexed` işaretleyebilirsin. `indexed` olanlar kaydın aranabilir alanlarına, diğerleri veri bölümüne yazılır; bu ayrımın baytlara nasıl döküldüğü log tarafının konusudur.

Event'lerin iki büyük faydası vardır. Birincisi ucuzluk: bir değeri log'a yazmak, [[storage-evm|depolamaya]] yazmanın yanında çok az tutar. Kullanıcıya göstermen gereken ama sözleşmenin hesap yaparken ihtiyaç duymadığı her şey buraya gider.

İkincisi takip edilebilirlik. Bir arayüz tek bir adresi dinleyip "transferin gerçekleşti" diyebilir; [[indexer|indeksleyiciler]] ve [[subgraph|subgraph]]'ler geçmiş kayıtları tarayıp sorgulanabilir bir veritabanına çevirir. [[erc-20|ERC-20]] gibi standartların hangi event'in ne zaman yayımlanacağını şarta bağlamasının sebebi budur: cüzdanların ve gezginlerin transfer geçmişini çıkarabilmesi buna dayanır.

## Örnek

```solidity
contract Kasa {
    event Yatirildi(address indexed kimden, uint256 miktar);

    mapping(address => uint256) public bakiye;

    function yatir() external payable {
        bakiye[msg.sender] += msg.value;
        emit Yatirildi(msg.sender, msg.value);
    }
}
```

## Dikkat

`indexed` her tipte aynı şekilde çalışmaz. `string` ya da `bytes` gibi uzunluğu değişen bir parametreyi `indexed` yaparsan aranabilir alana değerin kendisi değil özeti yazılır. Aradığın metni zaten biliyorsan eşleşmeyi bulursun, ama kayda bakıp o metni geri okuyamazsın. Okunması gereken metinleri `indexed` yapma; aramak istediklerini yap.

Bir de event tanımı sözleşmenin dış yüzünün parçasıdır: adını ya da parametre tiplerini değiştirmek, seni dinleyen bütün araçların [[application-binary-interface-abi|ABI]]'sini eskitir.
