---
term: "BNB Chain"
tr: ""
aliases: ["BSC"]
category: aglar
subcategory: ""
level: orta
short: "Ethereum araçlarıyla uyumlu kalarak düşük ücret ve hızlı blok hedefleyen, doğrulayıcı kümesi dar tutulmuş blockchain ağı."
related: [evm-compatibility, proof-of-stake-pos, validator, blockchain-trilemma, ethereum]
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

BNB Chain, Ethereum'da yazılmış uygulamaların neredeyse hiç değiştirilmeden çalışabileceği, işlem ücretinin düşük ve blokların sık olduğu bir ortam kurmak üzere ortaya çıktı. Hedef kitlesi, ücret yükseldiğinde zorlanan gündelik kullanım: küçük tutarlı transferler, oyun içi işlemler, sık alım satım.

## Nasıl çalışır?

Ağ [[evm-compatibility|EVM uyumludur]]. Sözleşmeler [[solidity|Solidity]] ile yazılır, aynı adres biçimi ve aynı cüzdanlar kullanılır; geliştirici için öğrenme maliyeti neredeyse sıfırdır.

Blok üretimi [[proof-of-stake-pos|proof of stake]] temellidir, ancak belirleyici tasarım kararı sayıdadır: blok üreten [[validator|doğrulayıcı]] kümesi bilinçli olarak dar tutulur. Az sayıda düğümün anlaşması gerektiğinde tur süresi kısalır, bloklar sıklaşır ve işlem başına maliyet düşer.

## Dikkat

Bu bir ödünleşmedir, kusur ya da meziyet değil. Doğrulayıcı sayısı azaldıkça ağı durdurmak, bir işlemi sansürlemek ya da bir kuralı değiştirmek için ikna edilmesi gereken taraf sayısı da azalır; yani performans, dağıtıklıktan ödün verilerek alınır. [[blockchain-trilemma|Blockchain trilemması]] dediğimiz şeyin somut bir örneğidir: hız, güvenlik ve merkeziyetsizlik arasında bir yere konumlanmak zorunludur ve her ağ bu konumu kendisi seçer.

Yazıldığı tarih itibarıyla ağın üzerinde birden çok zincir ve ölçeklenme katmanı bulunur; "BNB Chain" adı tek bir zinciri değil bu bütünü anlatır.
