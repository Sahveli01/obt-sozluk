---
term: "Lazy Minting"
tr: ""
aliases: []
category: nft
subcategory: ""
level: orta
short: "Token'ı listelenirken değil, ilk alıcı ödemeyi yaptığı anda zincire yazan basım yöntemi."
related: [mint, gas, nft-marketplace, digital-signature, eip-712, non-fungible-token-nft]
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

Lazy minting, bir NFT'nin ortaya çıktığı anda değil, ilk kez satıldığı anda zincire yazılmasıdır. Yaratıcı parçayı hazırlar ve satışa koyar, ama o aşamada hiçbir işlem gönderilmez — zincirde henüz o token yoktur. Alıcı ödemeyi yaptığında [[mint|basım]] ve devir aynı işlemin içinde gerçekleşir.

Amacı maliyeti kaydırmaktır: basımın [[gas|gaz]] ücreti yaratıcıdan alıcıya geçer ve satılmayan bir parça için kimse hiçbir şey ödemez. Türkçede yerleşik bir karşılığı yok; "tembel basım" birebir çeviri olarak kalıyor, kullanımda İngilizcesi geçiyor.

## Nasıl çalışır?

Yaratıcı, parçanın koşullarını — numara, metadata adresi, fiyat, telif oranı — içeren bir veri parçasını [[digital-signature|imzalar]]. Bu imzalı belge zincire gitmez; [[nft-marketplace|pazar yerinin]] sunucusunda durur ve listelemede gösterilen şey odur. İmza, yaratıcının o parçayı bu koşullarla basmaya razı olduğunun kanıtıdır.

Alıcı satın aldığında belgeyi ödemesiyle birlikte sözleşmeye gönderir. Sözleşme imzayı doğrular, imzalayanın basım yetkisi olduğunu kontrol eder, token'ı yaratır ve doğrudan alıcının adresine yazar. İmzalanan verinin okunabilir olması için genellikle [[eip-712|EIP-712]] biçimi kullanılır — imzalayan taraf cüzdanında neyi onayladığını görebilmelidir.

## Dikkat

Zincirde olmayan bir şey zincirin güvencesinde de değildir. Satın alınmadan önce parça yalnızca bir sunucudaki imzalı kayıttır; o pazar yeri kapanırsa listeleme kaybolur ve geriye zincirde hiçbir iz kalmaz.

İmzanın kendisi de dikkat ister. Bir imza iptal edilmediği sürece geçerlidir ve aynı belgenin ikinci kez kullanılmasını engelleyen bir sayaç ya da kullanılmış imzaları işaretleyen bir kayıt yoksa aynı parça iki kez basılabilir. Bu, [[signature-replay|imza tekrarı]] probleminin NFT'deki hâlidir.
