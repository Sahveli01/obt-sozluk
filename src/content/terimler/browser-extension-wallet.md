---
term: "Browser Extension Wallet"
tr: "Tarayıcı eklentisi cüzdanı"
aliases: ["tarayici eklentisi cuzdani", "eklenti cuzdan"]
category: cuzdanlar
subcategory: "Cüzdan türleri"
level: orta
short: "Tarayıcıya eklenti olarak kurulan, sitelerin cüzdanla konuşmasını sağlayan ve imzayı senden onay isteyerek atan cüzdan."
related: [software-wallet, dapp, signing-request, wallet-drainer, hot-wallet]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Tarayıcı eklentisi cüzdanı, tarayıcıya kurulan ve ziyaret ettiğin sitelere cüzdanınla konuşma imkânı veren bir [[software-wallet|yazılım cüzdanıdır]]. [[dapp|dApp]] kullanmanın en yaygın yolu budur: siteye girersin, "cüzdanı bağla" dersin, işlem gerektiğinde eklenti bir onay penceresi açar.

## Benzetme

Aranızda duran bir tercüman gibi: site seninle doğrudan konuşmaz, söyleyeceğini tercümana söyler; tercüman sana aktarır ve senin ağzından yalnızca senin söylediğini iletir.

## Nasıl çalışır?

Eklenti, açtığın sayfaya küçük bir arayüz yerleştirir. Site bu arayüz üzerinden "adresini öğrenebilir miyim", "şu işlemi imzalar mısın" gibi isteklerde bulunur. Site [[private-key|özel anahtarı]] hiçbir zaman göremez; yalnızca bir [[signing-request|imza isteği]] gönderebilir ve cevabı bekler.

Adresini görmesi için bile açık onayın gerekir; bağlantıyı aynı yerden kesebilirsin. Yani eklenti bir kapı görevlisi gibidir: her isteği sana taşır, kararı sen verirsin.

## Dikkat

Eklenti, tarayıcının risklerini de devralır. Sahte bir eklenti kopyası, ele geçirilmiş bir site ya da yanlış yazılmış bir alan adı; imzaladığında varlıklarını başkasına devreden bir işlemi önüne koyabilir ([[wallet-drainer|cüzdan boşaltıcı]]). Bu türde kayıpların çoğu, onay penceresindeki metin okunmadan "onayla" denmesinden gelir.

Onay penceresi her zaman "para gönder" demez: bir sözleşmeye sınırsız harcama izni veren bir [[approve]] işlemi de aynı pencereden geçer ve etkisi kalıcıdır. Riskli denemeleri ayrı bir cüzdanda yapmak yaygın bir alışkanlıktır ([[burner-wallet]]).
