---
term: "assert"
tr: ""
aliases: []
category: programlama
subcategory: "Solidity kavramları"
level: orta
short: "Asla bozulmaması gereken bir içsel varsayımı koruyan denetim; tetiklenirse kullanıcı değil, kod hatalıdır."
related: [require, revert, integer-overflow-and-underflow, unchecked-block]
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

`assert(kosul)`, sözleşmenin hiçbir koşulda bozulmaması gereken bir iç varsayımını korur. Koşul sağlanmazsa işlem geri alınır — ama `require`'dan farklı olarak bu bir "kullanıcı yanlış girdi verdi" durumu değil, "kodun kendisi tutarsız bir hâle düştü" durumudur.

Sözdizimi öğesi olduğu için çevrilmez; kodda `assert` diye yazılır.

## Benzetme

Muhasebedeki mizan gibi. Dönem sonunda borç toplamı ile alacak toplamı birbirine eşit çıkmak zorundadır; bu bir tercih değil, defterin tanımı gereğidir. Eşit çıkmıyorsa müşteriye ya da faturaya kızılmaz, çünkü sorun onlarda değildir: kayıt düzeninin kendisinde bir yanlış vardır ve bulunana kadar defter kapatılmaz.

## Nasıl çalışır?

Başarısız bir `assert`, `Panic(uint256)` hatası üretir; kod `0x01` "assert başarısız" anlamına gelir. Aynı hata ailesinde başka kodlar da vardır: `0x11` aritmetik taşma, `0x12` sıfıra bölme, `0x32` dizi sınırının dışına erişim. Yani `Panic` gördüğünde sözleşme sana "beklemediğim bir şey oldu" der, "sen yanlış yaptın" değil.

Solidity 0.8 öncesinde `assert` kalan bütün gas'ı yakardı; artık [[require|`require`]] gibi geri alır ve harcanmamış gas iade edilir. Hangi denetimin nerede kullanılacağının karşılaştırması `require` maddesindedir.

`assert` en çok değişmez kuralları (invariant) korumak için yazılır: toplam payların toplam arzı geçmemesi, bir havuzun iki tarafının aynı anda boşalmaması gibi. Kuralı kod içinde yazılı hâle getirmenin de ayrı bir faydası var: hem okuyan kişi varsayımı görür hem de denetim araçları o satırı kırmaya çalışır.

## Örnek

```solidity
contract Havuz {
    uint256 public toplamPay;
    mapping(address => uint256) public pay;

    function payVer(address kime, uint256 miktar) external {
        pay[kime] += miktar;
        toplamPay += miktar;
        assert(toplamPay >= pay[kime]); // hiçbir koşulda bozulmamalı
    }
}
```

## Dikkat

Kullanıcı girdisini `assert` ile denetleme. Yanlış bir parametre yüzünden `Panic` dönen sözleşme cüzdanda "beklenmeyen hata" olarak görünür; kullanıcı neyi düzelteceğini anlayamaz. Girdi denetimi `require` ya da [[revert|`revert`]] işidir.

`assert` satırları zincirde çalışır ve gas harcar; testte kalıp üretimde silinen bir araç değildir. Bu yüzden her satıra serpiştirilmez, gerçekten kritik varsayımlara konur.

Son olarak: 0.8'den beri aritmetik taşma zaten kendiliğinden `Panic` üretir, ayrıca `assert` ile kontrol etmeye gerek yoktur ([[integer-overflow-and-underflow|tam sayı taşması]]). Ama bir [[unchecked-block|`unchecked`]] bloğu içinde bu otomatik koruma kapalıdır — oradaki varsayımı elle korumak gerekir.
