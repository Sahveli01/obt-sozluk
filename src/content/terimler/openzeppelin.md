---
term: "OpenZeppelin"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Token, erişim denetimi ve yükseltme gibi tekrar eden sözleşme parçalarının hazır uygulamalarını sunan Solidity kütüphanesi."
related: [solidity, erc-20, erc-721, access-control, upgradeable-contract, library-solidity]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

OpenZeppelin, [[solidity|Solidity]] ile yazılmış bir sözleşme kütüphanesidir. Hemen her projede tekrar eden parçaların hazır uygulamalarını içerir: [[erc-20|ERC-20]] ve [[erc-721|ERC-721]] gibi token standartları, [[access-control|erişim denetimi]] kalıpları, duraklatma ve yeniden giriş koruması gibi güvenlik yardımcıları, [[upgradeable-contract|yükseltilebilir sözleşmelerin]] arkasındaki vekil kalıpları.

Kendi sözleşmeni bu parçalardan miras alarak ya da içine gömerek yazarsın; sıfırdan bir token uygulaması yazmak yerine standardın tanımladığı davranışı hazır alır, üstüne kendi mantığını eklersin.

## Benzetme

Ev yaparken kapı ve pencere kasalarını kendin yontmak yerine standart ölçüde hazır kasa almaya benzer. Duvarın yerini, oda düzenini, evin nasıl kullanılacağını yine sen tasarlarsın; ama binlerce kez takılmış, ölçüsü oturmuş bir parçayı yeniden icat etmezsin. Yanlış yere kapı koyarsan kasanın kalitesi seni kurtarmaz — o kısım hâlâ senin kararın.

## Nasıl çalışır?

Kütüphaneyi projeye bir paket olarak ya da doğrudan bir depo kopyası olarak eklersin; sonra ihtiyacın olan dosyayı `import` edip sözleşmeni ondan türetirsin. Davranışı değiştirmek istediğin yerde ilgili işlevi `override` ile yeniden yazar, üst uygulamayı çağırıp çağırmayacağına sen karar verirsin.

Önemli bir ayrıntı: miras alınan kod ayrı bir adreste durmaz, senin sözleşmenin derlenmiş çıktısının içine girer. Bu yüzden kütüphaneden ne kadar parça çektiğin sözleşmenin boyutunu ve gönderim maliyetini doğrudan etkiler.

## Dikkat

Kütüphanenin geniş biçimde incelenmiş olması senin sözleşmeni güvenli yapmaz. Hatalar çoğunlukla hazır parçanın içinde değil, onu nasıl bağladığında çıkar: sahipliği kimde bıraktığın, hangi işlevi kimin çağırabildiği, yükseltme anahtarının nerede durduğu senin sorumluluğundadır.

Sürümler arasında isimler ve davranışlar değişebilir; bir öğreticiden kopyaladığın kod, projendeki sürümde birebir karşılık bulmayabilir. Hangi sürümü kullandığını sabitle ve o sürümün belgelerini oku.

Yükseltilebilir sözleşmeler için ayrı bir paket kullanılır; normal paketle yükseltilebilir paketin dosyalarını karıştırmak, kurucu işlevlerin çalışma biçiminden kaynaklanan sessiz hatalara yol açar.
