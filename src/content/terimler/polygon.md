---
term: "Polygon"
tr: ""
aliases: ["matic"]
category: aglar
subcategory: ""
level: orta
short: "Ethereum'u ölçeklendirmeye dönük birden çok farklı mimariyi zaman içinde aynı marka altında toplamış bir proje ailesi."
related: [ethereum, rollup, layer-2, zkevm, blockchain-bridge]
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

Polygon tek bir zincirin adı değildir. Matic adıyla başlayan ve zamanla [[ethereum|Ethereum]]'u ölçeklendirmeye dönük birden çok yaklaşımı aynı marka altında toplayan bir proje ailesidir.

Bu yüzden "Polygon nedir" sorusunun dürüst cevabı tek cümle değildir: yazıldığı tarih itibarıyla çatının altında hem kendi doğrulayıcı kümesine sahip bir [[proof-of-stake-pos|hisse ispatı]] zinciri, hem [[zk-rollup|geçerlilik ispatına]] dayanan bir [[zkevm|zkEVM]] hattı, hem de başkalarının kendi zincirini kurması için hazırlanmış bir araç takımı bulunur.

## Nasıl çalışır?

Ailenin ilk üyesi, Ethereum'dan ayrı çalışan bağımsız bir zincirdir. İşlemler orada yürütülür, zincirin durumu düzenli aralıklarla Ethereum üzerindeki sözleşmelere özet olarak yazılır ve varlık geçişi bir [[blockchain-bridge|köprü]] üzerinden yapılır.

Bu tasarım [[rollup|rollup]] mantığından farklıdır: bir rollup işlem verisini ana zincire yazar ve güvenliğini oradan devşirir; kendi doğrulayıcı kümesi olan bir zincir ise güvenliğini kendi doğrulayıcılarından alır. Çatının daha yeni üyeleri ise ispat üreten [[layer-2|katman 2]] tasarımına yaklaşır.

## Dikkat

Ödünleşme burada açıktır: kendi doğrulayıcı kümesiyle çalışan bir zincirde güven, o kümenin ve köprüyü yöneten anahtarların dürüstlüğüne bağlıdır — Ethereum'un güvenliği kendiliğinden devralınmaz. Yükseltme yetkisinin kimde olduğu da her üye için ayrı bir sorudur.

İkinci tuzak adlandırmadır. "Polygon üzerinde çalışıyor" denen bir uygulamanın hangi mimaride durduğu bu cümleden anlaşılmaz; okurken hangi zincirden söz edildiğini ayrıca sormak gerekir.
