---
term: "Pragma"
tr: ""
aliases: ["pragma solidity"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Bir kaynak dosyanın hangi derleyici sürümleriyle derlenebileceğini söyleyen, dosyanın en üstündeki bildirim."
related: [solidity-compiler-solc, spdx-license-identifier, solidity, compilation, semantic-versioning]
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

`pragma`, kaynak dosyanın en üstünde duran ve [[compiler|derleyiciye]] yazılan bir nottur. Programın kendisi değildir, zincire de gitmez; yalnızca dosyanın nasıl derleneceğini belirler.

[[solidity|Solidity]]'de en çok gördüğün biçimi sürüm bildirimidir. `pragma solidity ^0.8.20;` satırı şunu der: "bu dosyayı 0.8.20 ya da daha yeni bir sürümle derle, ama 0.9'a geçme."

Kelimenin Türkçe karşılığı yoktur; derleyiciye verilen yönerge anlamında pek çok dilde aynı biçimde kullanılır ve Solidity'de bir anahtar kelimedir.

## Benzetme

Bir yedek parçanın kutusundaki "2015–2020 model uyumludur" ibaresi gibi. İbare parçanın ne işe yaradığını anlatmaz, yalnızca hangi araca takılabileceğini söyler. Yanlış modele takmaya kalkarsan usta işe hiç başlamadan durdurur.

## Nasıl çalışır?

Derleyici dosyayı okumaya başladığında önce bu satıra bakar. Kendi sürümü belirtilen aralığın dışındaysa derlemeyi hiç başlatmaz, doğrudan hata verir. Aralık `^0.8.20` gibi bir işaretle yazılır: şapka işareti "bu sürüm ya da daha yenisi, ama bir sonraki büyük adıma kadar" demektir; ayrıntısı [[semantic-versioning|anlamsal sürümleme]] maddesinde.

Aralığı dar tutmanın sağlam bir sebebi var. Solidity sürümleri arasında davranış değişiklikleri olur — 0.8 ile gelen taşma denetimi bunun en bilinen örneğidir. Test ettiğin derleyiciden bambaşka bir sürümle derleyip zincire göndermek, hiç denemediğin bir kodu yayınlamak anlamına gelir.

Sürümle ilgisi olmayan `pragma` satırları da vardır, ama günlük işte karşına çıkan neredeyse her zaman sürüm satırıdır.

## Örnek

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Sayac {
    uint256 public deger;
}
```

## Dikkat

`^0.8.20` bir aralıktır, bir seçim değil. Takımdaki herkes farklı bir 0.8 sürümüyle derlerse ortaya farklı [[bytecode]] çıkar ve [[contract-verification|sözleşme doğrulama]] adımında kaynağın çıktıyla eşleştiğini göstermek zorlaşır. Yayına giderken sürümü tek bir değere sabitlemek bu yüzden yaygın bir alışkanlıktır.
