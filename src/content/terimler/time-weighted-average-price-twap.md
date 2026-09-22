---
term: "Time-Weighted Average Price (TWAP)"
tr: "Zaman ağırlıklı ortalama fiyat"
aliases: ["twap"]
category: defi
subcategory: "MEV ve işlem akışı"
level: orta
short: "Bir fiyatın belirli bir süre boyunca aldığı değerlerin zamana göre ortalaması."
related: [price-impact, oracle-manipulation, price-feed, slippage, oracle]
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

TWAP, bir fiyatın anlık değeri yerine belirli bir süre boyunca aldığı değerlerin zamana göre ortalamasıdır. Zincir üstünde iki ayrı işte kullanılır ve ikisi de aynı fikre dayanır: tek bir ana bakmamak.

Birincisi **büyük bir işlemi zamana yaymak**. Emrin tamamını tek seferde yaparsan havuzun fiyatını kendi elinle bozarsın; parçalara bölüp aralıklarla yaparsan her parçanın [[price-impact|fiyat etkisi]] küçülür ve aradaki sürede havuza likidite geri gelir.

İkincisi **bir fiyat kaynağını dayanıklı hâle getirmek**. Bir sözleşme karar verirken anlık fiyata bakıyorsa, o fiyatı tek bir blok içinde bozan biri sözleşmeyi de yanıltabilir. Ortalamaya bakıyorsa aynı etkiyi elde etmek için fiyatı uzun süre bozuk tutmak gerekir; bu hem pahalıdır hem de bu süre boyunca herkesin tersine işlem yapmasına açıktır.

## Benzetme

Otoyoldaki ortalama hız kontrolü gibi. Sistem tek bir noktadan ne kadar hızlı geçtiğine bakmaz, iki nokta arasını kaç dakikada aldığını hesaplar. Kamerayı gördüğün yerde bir anlığına yavaşlamak seni kurtarmaz; yol boyunca yavaş gitmen gerekir. Aynı sebepten, o ortalama senin şu anki hızını da söylemez.

## Nasıl çalışır?

Ortalama "zaman ağırlıklı"dır: her fiyat, geçerli kaldığı süreyle çarpılır. Bir saniye görünen fiyatla bir saat süren fiyat aynı ağırlığa sahip olmaz.

Zincirde bunu her ölçümü saklayarak yapmak pahalı olurdu. Yaygın çözüm kümülatif bir toplam tutmaktır: fiyat her değiştiğinde, eski fiyat geçerli kaldığı süreyle çarpılıp toplama eklenir. İki zaman noktasındaki toplamların farkını aradaki süreye bölersen o aralığın TWAP'ını elde edersin. Böylece geçmişin tamamı tek bir sayıda taşınır.

## Dikkat

TWAP manipülasyonu zorlaştırır, imkânsız kılmaz. Pencere kısaysa ya da ortalama sığ bir piyasadan alınıyorsa, fiyatı gereken süre boyunca bozuk tutmanın maliyeti saldırganın eline geçecek tutarın altında kalabilir — [[oracle-manipulation|oracle manipülasyonu]] bu yüzden TWAP kullanan sistemlerde de görülür. Bir [[price-feed|fiyat kaynağına]] bakarken sorulacak soru "TWAP mı kullanıyor" değil, "hangi pencere ve hangi piyasa üzerinden" olmalıdır.

İkinci nokta gecikmedir. Ortalama tanımı gereği geçmişe bakar; fiyat hızla düştüğünde TWAP bir süre daha eski, yüksek değeri gösterir. Teminatı bu ortalamayla ölçen bir borç sistemi, kapatması gereken pozisyonu geç kapatır ve aradaki fark [[bad-debt|kötü borç]] olarak sistemde kalır.
