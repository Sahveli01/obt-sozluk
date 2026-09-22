---
term: "unchecked Block"
tr: ""
aliases: ["unchecked"]
category: programlama
subcategory: "Solidity kavramları"
level: ileri
short: "Aritmetik taşma kontrolünü blok içinde kapatan yapı; yalnızca taşmanın imkânsız olduğu yerlerde gas kazanmak için kullanılır."
related: [integer-overflow-and-underflow, gas-optimization, integer, assert]
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

Solidity 0.8 sürümünden beri her aritmetik işlem bir taşma kontrolüyle birlikte derlenir: sonuç tipin sınırını aşarsa işlem `Panic` hatasıyla geri alınır. `unchecked { ... }` bloğu bu kontrolü yalnızca kendi içinde kapatır; blok içindeki toplama, çıkarma ve çarpma sınırı aştığında sessizce başa döner.

Sözdizimi öğesi olduğu için çevrilmez; kodda `unchecked` diye yazılır.

## Benzetme

Sirkte ağsız çalışmak gibi. Ağ her gösteride kurulur, zaman alır ve gösterinin ritmini biraz düşürür. Belirli bir numarada düşmenin fiziksel olarak mümkün olmadığını bilen usta ağı kaldırabilir. Ama ağın kalktığı yerde artık bir uyarı yoktur: hesap yanlışsa sonuç durdurulmadan gerçekleşir.

## Nasıl çalışır?

0.8 öncesinde taşma dilin normal davranışıydı. Sekiz bitlik bir [[integer|tam sayıda]] 255'e 1 eklemek sonucu 0 yapardı ve hiçbir yerde hata çıkmazdı; SafeMath gibi kütüphaneler bunu elle kontrol etmek için yazılmıştı. 0.8 ile kontrol dilin içine girdi, ama her işleme birkaç ek [[opcode|opcode]] ekledi. `unchecked`, bu eki ödemek istemediğin dar yerler içindir.

Meşru kullanımın kitabî örneği döngü sayacıdır: `i` değişkeni `dizi.length`'ten büyük olamayacağı için artırımın taşması matematiksel olarak imkânsızdır. Benzer biçimde, bir çıkarmadan hemen önce `a >= b` kontrolü yapılmışsa `a - b` de taşamaz.

Blok yalnızca içindeki doğrudan aritmetiği etkiler. İçinden çağrılan bir fonksiyonun gövdesinde kontrol açık kalır.

## Örnek

```solidity
contract Toplam {
    function topla(uint256[] calldata d) external pure returns (uint256 t) {
        for (uint256 i = 0; i < d.length;) {
            t += d[i];         // burada taşma kontrolü açık
            unchecked { ++i; } // i, dizi boyunu aşamaz
        }
    }
}
```

## Dikkat

`unchecked` bir eniyileştirme değil, bir korumanın elle kapatılmasıdır. Kapatmadan önce taşmanın **matematiksel olarak imkânsız** olduğunu gösterebiliyor olman gerekir; "herhalde o kadar büyümez" bir gerekçe değildir. Gerekçe tutmadığında 0.8 öncesinin klasik açığı geri gelir: sayı sessizce başa döner, bakiye kontrolü tersine döner ve kod hiçbir şey olmamış gibi devam eder ([[integer-overflow-and-underflow|tam sayı taşması]]).

Kazancı da abartma. Taşma kontrolü işlem başına küçük bir maliyettir; uzun bir döngüde ölçülebilir, tek bir toplamada okunabilirlik kaybına değmez. `unchecked` ölçtükten sonra, gerekçesi yanına yazılarak eklenir ([[gas-optimization|gas eniyileştirme]]).

Son olarak, blok içinde taşma artık `Panic` üretmez — yani derleyicinin otomatik ağı orada yoktur. Korumak istediğin bir varsayım varsa onu bloğun dışında, açıkça kontrol etmelisin ([[assert|`assert`]] ya da bir ön koşul ile).
