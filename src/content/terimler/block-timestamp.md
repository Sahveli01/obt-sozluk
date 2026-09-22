---
term: "block.timestamp"
tr: ""
aliases: ["block timestamp", "now"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "İçinde bulunulan bloğun Unix zaman damgası; blok üreticisinin dar bir aralıkta belirlediği, saniye cinsinden bir değerdir."
related: [timestamp-dependence, weak-randomness, block, validator]
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

`block.timestamp`, kodun içinde çalıştığı [[block|bloğun]] zaman damgasıdır: 1 Ocak 1970'ten beri geçen saniye sayısı, yani Unix zamanı. Sözleşmelerin "şu an saat kaç" sorusuna verebildiği tek cevaptır.

Sözdizimi öğesi olduğu için çevrilmez. Eski kodlarda aynı değerin `now` takma adıyla yazıldığını görürsün; bu yazım artık kullanılmaz.

## Benzetme

Toplantı tutanağının başına yazılan saat gibi. Tutanağı tutan kişi saati saniyesi saniyesine yazmaz; birkaç dakika oynatabilir ve kimse fark etmez. Ama bir önceki toplantıdan erken bir saat yazamaz, çok ilerideki bir saati de kimse kabul etmez. Değer gerçeğe yakındır — ama bir ölçüm değil, birinin yazdığı bir beyandır.

## Nasıl çalışır?

Damgayı bloğu öneren üretici yazar ([[validator|doğrulayıcı]]). Ağ kuralları iki şeyi zorlar: değer bir önceki bloğun damgasından büyük olmalı ve diğer düğümlerin kabul edeceği makul bir pencerenin dışına taşmamalıdır. Bu pencerenin içinde üretici sayıyı birkaç saniye ileri ya da geri oynatabilir; kimse bunu hata saymaz.

Dolayısıyla `block.timestamp` gün, hafta, ay ölçeğindeki işler için rahatça kullanılır: kilit süresi dolmuş mu, oylama bitmiş mi, hak ediş dönemi başlamış mı. Saniye hassasiyetiyle alınan kararlar için uygun değildir.

Alternatifi `block.number`'dır. Blok numarası kesin ve öngörülebilir biçimde birer birer artar, ama bloklar arasındaki gerçek süre ağın durumuna göre değişebileceği için "kaç blok sonra" ile "kaç gün sonra" birebir aynı şey değildir.

## Örnek

```solidity
contract Kilit {
    uint256 public acilisZamani;

    function kilitle(uint256 sure) external {
        acilisZamani = block.timestamp + sure;
    }

    function cek() external view {
        require(block.timestamp >= acilisZamani, "henuz erken");
        // ... transfer
    }
}
```

## Dikkat

İki ayrı risk var ve ikisi de üreticinin damgayı dar bir aralıkta oynatabilmesinden çıkıyor.

Birincisi, çok kısa süre farklarına bağlanan kararlar. Bir saniyelik fark senin sözleşmende para ediyorsa, o farkı seçebilecek biri de vardır. Bu açık sınıfının adı [[timestamp-dependence|zaman damgası bağımlılığı]]dır; korunma yolu, eşikleri saniye değil saat ya da gün ölçeğinde kurmaktır.

İkincisi, rastgelelik. `block.timestamp`'i hash'leyip piyango çekmek zincirdeki en eski hatalardan biridir: sonucu belirleyen değeri, sonuçtan çıkarı olan taraf yazıyor. Zincir üstünde rastgelelik gerekiyorsa bunun için tasarlanmış bir kaynak kullanılır ([[weak-randomness|zayıf rastgelelik]]).
