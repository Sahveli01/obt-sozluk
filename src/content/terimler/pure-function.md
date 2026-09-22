---
term: "Pure Function"
tr: "Saf fonksiyon"
aliases: ["pure", "saf fonksiyon"]
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Ne durumu okuyan ne de değiştiren fonksiyon; yalnızca parametrelerine bakar, aynı girdiye her zaman aynı çıktıyı verir."
related: [view-function, function, state-variable, gas]
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

`pure` işaretli bir fonksiyon sözleşmenin durumunu ne değiştirir ne de **okur**. Elinde yalnızca kendisine verilen parametreler vardır; sonucu tamamen onlardan hesaplar.

Genel programlamada aynı kavrama "saf fonksiyon" denir ve bu karşılık Türkçede yerleşmiştir: yan etkisi olmayan, aynı girdiye her zaman aynı çıktıyı veren [[function|fonksiyon]]. Solidity'nin `pure`'ü bu fikrin derleyici tarafından zorlanan hâlidir.

## Benzetme

Çarpım tablosu gibi. 7 × 8'in kaç ettiği odanın sıcaklığına, günün tarihine ya da defterde ne yazdığına bağlı değildir. Cevap 56'dır; dün de 56'ydı, kim sorarsa sorsun 56 olacaktır.

## Nasıl çalışır?

`pure`, [[view-function|`view`]]'ün daha katı hâlidir. `view` içinde yasak olan her şey burada da yasaktır, üstüne **okumak** da yasaklanır: bir [[state-variable|durum değişkenine]] bakamaz, `address(this).balance` gibi bakiyeleri göremez, `block.` ve `tx.` ile başlayan hiçbir değeri (`block.timestamp`, `block.number`, `tx.origin`) kullanamaz. `msg.` ailesinden yalnızca `msg.data` ve `msg.sig` serbesttir, çünkü bunlar zincirin durumu değil, çağrının kendisidir.

Gas tarafı `view` ile aynı mantıkta çalışır: zincir dışından çağrıldığında hesabı düğüm yapar ve [[gas|gas]] ödenmez; bir işlemin içinden çağrıldığında kod EVM'de çalışır ve her adımı ödenir. Saflık, maliyetsizlik demek değildir.

Pratikte `pure` fonksiyonlar yardımcı hesaplarda toplanır: birim dönüşümü, yüzde hesabı, bir hash alma, bir dizi değerin biçimlendirilmesi. Bunları ayrı ve `pure` tutmanın faydası okunabilirlikten fazlasıdır — test edilmeleri kolaydır, çünkü kurulacak bir dünya yoktur, yalnızca girdi ve beklenen çıktı vardır.

## Örnek

```solidity
contract Matematik {
    function kareAl(uint256 x) external pure returns (uint256) {
        return x * x; // yalnızca parametresine bakar
    }

    function yuzde(uint256 tutar, uint256 oran) external pure returns (uint256) {
        return (tutar * oran) / 100;
    }
}
```

## Dikkat

`pure` olmak doğru olmak değildir. Yukarıdaki `yuzde` fonksiyonu tamamen saftır ama büyük değerlerde `tutar * oran` çarpımı taşabilir; 0.8 sürümünden beri derleyici bunu yakalar ve işlemi geri alır. Aynı satır bir [[unchecked-block|`unchecked`]] bloğuna konursa o koruma da kalkar ve fonksiyon sessizce yanlış bir sayı döndürür.

Bir de sıralamaya dikkat: `pure` bir fonksiyon `view` bir fonksiyonu çağıramaz, çünkü o çağrı durumu okurdu. Kısıt hep katıdan gevşeğe doğru işler.
