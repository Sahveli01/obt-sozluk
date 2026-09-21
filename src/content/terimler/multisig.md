---
term: "Multisig"
tr: "Çoklu imza"
aliases: ["çoklu imza", "multi-signature", "multisig wallet"]
category: cuzdanlar
subcategory: "Hesap soyutlama"
level: orta
short: "Bir işlemin geçerli olması için birden çok anahtarın onayını şart koşan kurulum; genellikle 'N anahtardan M tanesi' biçiminde."
related: [social-recovery, smart-contract-wallet, treasury, decentralized-autonomous-organization-dao, access-control]
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

Multisig, bir hesabın hareket edebilmesi için tek imzanın yetmediği kurulumdur. Kural genellikle "M/N" diye yazılır: toplam N anahtar tanımlıdır, işlemin geçerli olması için bunların M tanesinin onayı gerekir. Türkçede "çoklu imza" karşılığı yerleşmiştir.

Neden kullanıldığı açık: tek anahtar tek hata noktasıdır. Ekip hazineleri, [[decentralized-autonomous-organization-dao|DAO]] fonları ve protokollerin yükseltme yetkileri bu yüzden çoğunlukla multisig arkasında durur.

## Benzetme

İki ayrı kilidi olan bir kasa gibi: anahtarlardan biri sende, biri ortağında, ikisi birden çevrilmeden kapak açılmaz. Böyle bir kasada anahtarlardan birinin çalınması tek başına bir saldırı olmaktan çıkar — hırsızın elinde yalnızca yarım bir çözüm kalır.

## Nasıl çalışır?

İki yaygın uygulama biçimi var.

Birincisi sözleşme tarafındadır: hesap bir [[smart-contract-wallet|akıllı sözleşme cüzdanıdır]] ve sahip listesini, eşiği kendi deposunda tutar. Biri işlemi önerir, diğerleri onaylar, onay sayısı eşiğe ulaşınca sözleşme işlemi yürütür. Onaylar zincire tek tek yazıldığı için kimin neyi ne zaman onayladığı herkese açıktır; hazine denetiminde işe yarayan özellik budur. Kural kodda durduğu için [[access-control|yetki]] listesi sonradan da değiştirilebilir.

İkincisi kriptografi tarafındadır: birden çok tarafın payları birleşerek tek bir geçerli imza üretir ([[multi-party-computation-mpc|MPC]] ve eşik imzası yöntemleri). Zincir tek imza gördüğü için kurulum dışarıdan sıradan bir hesap gibi görünür; buna karşılık onay süreci zincirde iz bırakmaz.

Eşik seçimi bir dengedir. Yüksek eşik güvenlidir ama bir imzacı kaybolduğunda hesabı kilitleyebilir; düşük eşik kullanışlıdır ama az sayıda anahtarın ele geçirilmesi yeterli hale gelir.

## Dikkat

Multisig imzacıların dürüstlüğünü değil, yalnızca sayısını garanti eder. Anahtarların hepsi aynı kişideyse, aynı cihazda ya da aynı bulut hesabındaysa kurulum kâğıt üzerinde çoklu, gerçekte tek imzalıdır. Bir hazineye bakarken ilk sorulacak soru imzacı sayısı değil, imzacıların gerçekten birbirinden bağımsız olup olmadığıdır.

[[social-recovery|Sosyal kurtarmayla]] karıştırma: orada onay verenler hesabın parasını harcayamaz, yalnızca anahtarın değişmesini sağlar. Multisig'de ise imzacılar doğrudan işlem yapar.
