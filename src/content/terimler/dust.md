---
term: "Dust"
tr: ""
aliases: ["dusting", "dust attack"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Hareket ettirmenin işlem ücretine değmeyeceği kadar küçük kalan miktar."
related: [utxo, balance, transaction-fee, chain-analysis, address-poisoning]
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

Dust, bir adreste duran ama hareket ettirmeye değmeyecek kadar küçük kalan miktara verilen addır. Küçüklük burada görecelidir: bir miktarı harcamanın [[transaction-fee|işlem ücreti]] o miktarın kendisinden pahalıysa, o miktar dust sayılır. Ücretler değiştikçe aynı tutar dust olmaktan çıkabilir ya da dust hâline gelebilir.

Türkçede "toz" diye çevrilmez; sektörde İngilizcesi kullanılır.

## Benzetme

Terzinin kutusundaki kumaş kırpıntıları gibi. Tek tek hiçbirinden bir şey çıkmaz; bir araya getirip işe yarar hâle getirmek de ayrıca emek ister.

## Nasıl çalışır?

Etkisi en çok [[utxo|UTXO]] modelinde görülür. Orada [[balance|bakiye]] ayrı ayrı parçalardan oluşur ve harcanan her parça işleme bir girdi olarak eklenir. İşlem büyüdükçe ücreti artar, dolayısıyla çok sayıda küçük parça biriktirmiş bir cüzdan aynı tutarı göndermek için daha çok öder. Ağlar da çok küçük çıktıları taşımaya genellikle isteksizdir.

Hesap modelinde ayrı çıktılar olmadığı için bu birikme sorunu yaşanmaz. Orada dust daha çok istenmeden gönderilmiş küçük miktarlar ve tanınmayan jetonlar biçiminde karşına çıkar.

## Dikkat

"Dusting" denen uygulama, çok sayıda adrese minicik miktarlar gönderip bu miktarların sonradan nereye gittiğini izlemektir. Amaç para çalmak değildir: gelen tozu kendi paranla birlikte harcarsan, iki adresin aynı kişiye ait olduğunu kendi elinle göstermiş olursun. Kuşun ayağına takılan numaralı halka gibi; halka kuşa zarar vermez, nereye uçtuğunu ele verir. Bu bir [[chain-analysis|zincir analizi]] yöntemidir, doğrudan hırsızlık değil.

Adresine düşen tozun kendisi anahtarlarını tehlikeye atmaz. Tehlikeli olan, yanında gelen adlar ve bağlantılardır: tanımadığın bir jetonu kurcalamak çoğu zaman bir [[phishing|oltalama]] sayfasına çıkar, benzer yazılışlı adreslerle yapılan [[address-poisoning|adres zehirleme]] de aynı mantıkla çalışır.
