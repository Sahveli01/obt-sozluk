---
term: "Integer Overflow and Underflow"
tr: "Tam sayı taşması ve alttan taşma"
aliases: ["tam sayı taşması", "overflow", "underflow"]
category: guvenlik
subcategory: "Sözleşme açıkları"
level: orta
short: "Sabit genişlikli bir sayının sınırını aşınca başa sarması; Solidity 0.8 öncesinde ve unchecked bloklarında sessizce olur."
related: [integer, unchecked-block, solidity, require, revert, assert]
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

Bir `uint256` değişken 0 ile çok büyük ama **sonlu** bir üst sınır arasında değer tutar. Bu aralığın dışına çıkan bir işlem sayıyı büyütmez ya da eksiye düşürmez; **başa sarar**. Üst sınıra bir eklersen sıfır olursun, sıfırdan bir çıkarırsan üst sınıra fırlarsın. Birincisine taşma (overflow), ikincisine alttan taşma (underflow) denir.

Sözleşmelerde tehlikeli olan ikincisidir. Bakiyesi 0 olan bir hesaptan 1 birim düşülürse bakiye devasa bir sayıya döner ve ondan sonraki bütün "yeterli bakiyesi var mı" kontrolleri geçer ([[integer|tam sayı]]).

**Solidity 0.8 ile varsayılan davranış değişti:** derleyici her aritmetik işleme taşma kontrolü ekler ve taşma olduğunda işlem `Panic` ile geri alınır. 0.8 ve sonrasıyla yazıyorsan sıradan aritmetikte korunuyorsun.

## Nasıl çalışır?

Risk 0.8 sonrasında üç yerde sürer.

**`unchecked` blokları.** Gas kazanmak için kontrolü kapatan bir [[unchecked-block|`unchecked { }`]] bloğu, içindeki her işlemi eski davranışa döndürür. O bloktaki bir çıkarmanın negatife düşemeyeceğini artık **sen** garanti edersin.

**Küçük tipe dönüştürme.** `uint128(buyukSayi)` gibi açık bir daraltma taşma kontrolüne girmez; sığmayan üst bitler sessizce atılır. 0.8 korumasının kapsamadığı, en sık atlanan yer burasıdır.

**Assembly.** Elle yazılmış düşük seviyeli kodda hiçbir otomatik kontrol yoktur.

Savunma üçünde de aynı: sınırı [[require|`require`]] ile açıkça yaz ve `unchecked` bloğunu yalnızca taşmanın imkânsız olduğunu kanıtlayabildiğin yerde kullan.

## Örnek

```solidity
// AÇIK: unchecked içinde bakiye kontrolü yok, çıkarma başa sarabilir
mapping(address => uint256) public bakiye;

function gonder(address kime, uint256 tutar) external {
    unchecked {
        bakiye[msg.sender] -= tutar; // tutar > bakiye ise devasa bir sayi
        bakiye[kime] += tutar;
    }
}
```

```solidity
// DÜZELTİLMİŞ: kontrol açıkça yazıldı, aritmetik denetimli bırakıldı
mapping(address => uint256) public bakiye;

function gonder(address kime, uint256 tutar) external {
    require(bakiye[msg.sender] >= tutar, "yetersiz bakiye");
    bakiye[msg.sender] -= tutar;
    bakiye[kime] += tutar;
}
```

## Dikkat

0.8 öncesinde taşmayı elle kontrol eden kütüphaneler (SafeMath gibi) yerleşik bir alışkanlıktı. 0.8 sonrasında aynısını kullanmak yanlış değil ama gereksizdir: iki kez kontrol edilen işlem için boşuna [[gas]] ödersin.

Taşmanın geri alınması bir çözüm değil, bir frendir. `Panic` ile duran işlem kullanıcı için çalışmayan bir özelliktir; hesabın neden sınırı aştığını asıl mantıkta düzeltmen gerekir.

Zincirdeki her sözleşme senin derleyicinle yazılmadı; eski bir sözleşmeyle çalışıyorsan aritmetiğinin denetimli olduğunu varsayma ([[solidity|Solidity]] sürümü doğrulanmış kaynakta yazar).
