---
term: "Signature Verification (ecrecover)"
tr: "İmza doğrulama"
aliases: ["ecrecover"]
category: akilli-sozlesmeler
subcategory: "Düşük seviye çağrılar"
level: ileri
short: "Bir imzadan onu atan adresi geri hesaplayarak, mesajın gerçekten o adresin sahibinden geldiğini zincirde kanıtlama."
related: [digital-signature, ecdsa, eip-712, signature-replay, signature-malleability, precompile]
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

Zincirde bir imzayı doğrulamanın yolu, onu bilinen bir örnekle karşılaştırmak değildir. [[ecdsa|ECDSA]] imzalarında imzanın kendisinden imzalayanın adresi geri hesaplanabilir. `ecrecover` tam olarak bunu yapar: ona imzalanan mesajın 32 baytlık özetini ve imzanın üç parçasını (`v`, `r`, `s`) verirsin, o da sana bir adres döndürür. Çıkan adres beklediğin adresse, mesajı gerçekten o adresin [[private-key|özel anahtarı]] imzalamıştır.

Faydası büyük: kullanıcının onayını, o hiç işlem göndermeden alabilirsin. İmza cüzdanda ücretsiz atılır, zincire taşıma işini başkası üstlenir.

## Benzetme

Bir imzaya bakıp "bunu kim attı" sorusunu, elinde hiçbir örnek olmadan cevaplayan bir makine düşün. Makine imzanın kıvrımlarından doğrudan bir isim hesaplar. Ama önüne anlamsız bir karalama koyarsan "bu imza değil" demez; omuz silker ve boş bir isim söyler.

## Nasıl çalışır?

`ecrecover` bir [[precompile|ön derlenmiş sözleşmedir]]: kodda sıradan bir fonksiyon gibi yazılır, arkasında EVM'in kendi hesabı çalışır. Altındaki elliptik eğri matematiği normal kodla çok pahalıya gelirdi.

İki ayrıntı sık tökezletir. Birincisi, cüzdanlar düz mesajları imzalarken özetin başına sabit bir önek ekler; sözleşmede aynı öneki eklemezsen çıkan adres tutmaz. İkincisi, kütüphaneler imzayı tek parça 65 baytlık bir dizi olarak verir; `v`, `r`, `s` o diziden ayrıştırılır. Bunu elle yazmak yerine denetlenmiş bir kütüphane kullanmak yerleşik alışkanlıktır.

## Örnek

```solidity
function imzalayan(bytes32 ozet, uint8 v, bytes32 r, bytes32 s)
    internal
    pure
    returns (address)
{
    address a = ecrecover(ozet, v, r, s);
    require(a != address(0), "gecersiz imza");
    return a;
}
```

## Dikkat

En sık yapılan hata şudur: `ecrecover` geçersiz imzada **hata vermez**, sıfır adresini döndürür. Sonucu sıfıra karşı kontrol etmezsen, uydurma bir imzayla gelen biri sıfır adresi olarak kabul edilir. Yetkili adres alanı hiç doldurulmamışsa — varsayılan değeri sıfırdır — kapı ardına kadar açılır.

İkincisi, imza bir kâğıt değil, kopyalanabilir bir veridir. Bir kez kabul ettiğin imzayı ikinci kez kabul etmemek senin işindir: imzalanan mesajın içine tekrarlanmayan bir [[nonce-kriptografi|nonce]] ve bir son kullanma tarihi koy, harcanan imzaları işaretle ([[signature-replay|imza tekrarı]]). Aynı imzadan matematiksel olarak ikinci bir geçerli biçim türetilebildiği için, "bu baytları daha önce görmedim" kontrolü tek başına yetmez ([[signature-malleability|imza esnekliği]]).

Üçüncüsü, imzanın hangi sözleşme ve hangi zincir için atıldığı mesajın içinde yazmalı; yazmıyorsa bir uygulamada alınan imza başka yerde kullanılabilir. [[eip-712|EIP-712]] bu alan ayrımını standartlaştırır; yan faydası, kullanıcının cüzdanında ne imzaladığını okunur biçimde görmesidir ([[digital-signature|dijital imza]]).
