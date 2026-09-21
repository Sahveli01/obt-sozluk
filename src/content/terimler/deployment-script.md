---
term: "Deployment Script"
tr: ""
aliases: ["dagitim betigi"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Sözleşmelerin hangi sırayla, hangi parametrelerle ve hangi ayarlarla gönderileceğini yazıya döken, tekrar çalıştırılabilir betik."
related: [contract-deployment, forge, hardhat, contract-verification, secrets-management, deployment]
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

Deployment script, sözleşmelerin ağa gönderilme adımlarını elle tıklanan işlemler yerine koda çeviren betiktir. Türkçede "dağıtım betiği" denebilir ama yerleşmiş bir karşılığı yoktur; çoğu ekip İngilizcesini kullanır.

Gerçek bir gönderim tek bir işlemden ibaret değildir. Birden fazla sözleşme belirli bir sırayla gönderilir, sonrakiler öncekilerin adresini kurucu parametresi olarak alır, gönderim biter bitmez roller dağıtılır, sahiplik bir çoklu imza cüzdanına devredilir ve bazı değerler baştan ayarlanır. Bunların hepsini elle yapmak, üçüncü adımda birini unutmak demektir.

## Nasıl çalışır?

Betik önce bir prova çalıştırmasıyla başlar: işlemler gerçek ağa gönderilmeden benzetilir, hata veren olursa orada görülür. Sonra aynı betik gerçekten gönderim yapacak biçimde çalıştırılır ve gönderilen işlemler kaydedilir.

Betik ağa özgü değerleri kodun içine gömmez; adresler, sahip cüzdanı ve parametreler yapılandırmadan ya da ortam değişkenlerinden okunur. Aynı betik böylece [[local-blockchain|yerel zincirde]], testnette ve ana ağda aynı biçimde çalışır.

Çıktısında en az sözleşme kadar önemli bir şey vardır: hangi ağda hangi adrese ne gönderildiğinin kaydı. Bu kayıt, arayüzün okuduğu adres listesi ve [[contract-verification|kaynak doğrulama]] adımı için de kullanılır. [[forge|Forge]] betikleri Solidity ile, [[hardhat|Hardhat]] betikleri JavaScript/TypeScript ile yazılır.

## Dikkat

Bu betikler özel anahtarla çalışır. Anahtarı kaynağa yazmak, geçmişe düşen ve geri alınamayan bir sızıntıdır; [[secrets-management|sır yönetimi]] kurallarını buraya da uygula.

Betiğin hangi ağa bağlandığını çalıştırmadan önce doğrula. Ana ağa yanlışlıkla gönderilen bir sözleşmenin geri alınması yoktur; en fazla terk edilir.

Bir betik iki kez çalıştırıldığında ne olacağını da düşün: aynı sözleşmeyi ikinci kez gönderip yeni bir adres mi üretecek, yoksa var olanı tanıyıp atlayacak mı?
