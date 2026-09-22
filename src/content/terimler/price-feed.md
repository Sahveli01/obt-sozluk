---
term: "Price Feed"
tr: "Fiyat beslemesi"
aliases: ["fiyat beslemesi"]
category: akilli-sozlesmeler
subcategory: "Dış dünya ve verimlilik"
level: orta
short: "Bir varlığın fiyatını birçok kaynaktan toplayıp zincirde güncel tutan, tek işe adanmış oracle."
related: [oracle, oracle-manipulation, time-weighted-average-price-twap, flash-loan-attack, liquidation, chainlink]
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

Price feed, tek bir işi olan [[oracle|oracle]] türüdür: bir varlığın fiyatını zincirde okunabilir ve güncel tutmak. [[decentralized-finance-defi|DeFi]]'nin büyük kısmı buna bağlıdır — teminatın değeri, [[liquidation|tasfiye]] sınırı, bir türev ürünün ödemesi hep bu sayıdan hesaplanır.

## Nasıl çalışır?

Üç parçası var: toplama, güncelleme, okuma.

**Toplama.** Birbirinden bağımsız operatörler fiyatı kendi kaynaklarından çeker. Tek bir borsanın değil, işlem hacmine göre harmanlanmış birçok piyasanın fiyatı kullanılır. Gelen cevaplar birleştirilirken ortalama yerine genellikle **ortanca** (median) alınır: ortanca, bir iki kaynağın uçuk bir değer bildirmesinden etkilenmez.

**Güncelleme.** Fiyatı her blokta yazmak pahalıdır, o yüzden yazma iki koşuldan birine bağlanır. Birincisi **sapma eşiği**: fiyat zincirde duran değerden belirli bir yüzde uzaklaşırsa yeni değer yazılır. İkincisi **üst süre sınırı**: sapma olmasa bile belirlenen süre dolunca yine yazılır. Sonuç olarak zincirdeki fiyat piyasanın hep biraz gerisindedir ve bu gecikme, ondan beslenen protokollerin hesaba katması gereken bir paydır.

**Okuma.** Sözleşme yalnızca sayıyı değil, o sayının en son ne zaman yazıldığını da okumalıdır. Operatörler durursa beslemedeki değer olduğu yerde kalır; kontrol etmezsen saatler önceki bir fiyatla bugünün kararını verirsin. Buna bayat fiyat (stale price) kontrolü denir.

## Örnek

```solidity
interface IFeed {
    function latestRoundData()
        external view returns (uint80, int256, uint256, uint256, uint80);
}

function guvenliFiyat(IFeed feed) view returns (int256) {
    (, int256 fiyat, , uint256 guncellendi, ) = feed.latestRoundData();
    require(fiyat > 0, "gecersiz fiyat");
    require(block.timestamp - guncellendi < 1 hours, "bayat fiyat");
    return fiyat;
}
```

## Dikkat

Tek bir havuzun o anki fiyatını doğrudan okumak, yeni başlayanların en sık yaptığı hatadır. Bir havuzun fiyatı havuzdaki oranla belirlenir, o oranı da büyük bir işlem tek blok içinde bozabilir; parayı [[flash-loan-attack|flash loan]] ile ödünç alıp aynı işlemde geri vermek mümkün olduğu için bu saldırının sermaye şartı da yoktur.

Bu yüzden ya zamana yayılmış ortalama ([[time-weighted-average-price-twap|TWAP]]) ya da birçok kaynaktan beslenen hazır bir feed kullanılır. İkisi de manipülasyonu imkânsız kılmaz, yalnızca pahalı hâle getirir; saldırganın hangi maliyete katlanacağını hesaplamak sana kalır ([[oracle-manipulation|oracle manipülasyonu]]).
