---
term: "web3.js"
tr: ""
aliases: ["web3js"]
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "Ethereum ile konuşan en eski JavaScript kütüphanelerinden biri; tek bir web3 nesnesi altında toplanmış ad alanları sunar."
related: [ethers-js, viem, json-rpc, application-binary-interface-abi, rpc-provider]
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

web3.js, Ethereum ile konuşmak için yazılmış ilk JavaScript kütüphanelerinden biridir. Ekosistemin erken yıllarında yazılmış öğreticilerin, belgelerin ve örneklerin çoğu bu kütüphaneyle yazıldığı için hâlâ çok sayıda kod tabanında ve belgede karşına çıkar.

Düzeni tek bir nesne etrafında kuruludur: bir sağlayıcı verip `web3` nesnesini oluşturur, sonra her şeye bu nesnenin ad alanlarından ulaşırsın — zincir işlemleri bir ad alanında, hesap ve imza işleri başka birinde, kodlama yardımcıları bir diğerinde durur.

## Nasıl çalışır?

Sağlayıcı, kütüphanenin ağla konuştuğu kanaldır: bir HTTP adresi, bir websocket bağlantısı ya da tarayıcıda cüzdanın sağladığı nesne olabilir. Kütüphane çağrılarını [[json-rpc|JSON-RPC]] isteklerine çevirip bu kanaldan gönderir.

Sözleşmeyle çalışmak için adres ve [[application-binary-interface-abi|ABI]] verip bir sözleşme nesnesi kurarsın. Burada ayırt edici bir ayrım vardır: bir işlevi çağırmak ile göndermek farklı yazılır. Çağırmak zinciri değiştirmez ve sonucu döndürür; göndermek bir işlem oluşturur, imza ister ve ücret öder. Aynı işlev adının iki farklı sonuç vermesi yeni başlayanların sık takıldığı noktadır.

## Dikkat

[[ethers-js|ethers.js]] ve [[viem|viem]] aynı işi yapan başka kütüphanelerdir; hangisinin kullanılacağı genellikle projede zaten ne olduğuna, ekibin neye alışkın olduğuna ve takip edilen belgelerin hangisiyle yazıldığına bakar.

Kütüphanenin farklı büyük sürümleri arasında ad alanı ve dönüş tipi farkları vardır. Ayrıca EVM uyumlu olmayan zincirlerde bu kütüphane çalışmaz; her zincirin kendi istemci kütüphanesi vardır.
