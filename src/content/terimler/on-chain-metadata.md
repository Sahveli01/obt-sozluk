---
term: "On-chain Metadata"
tr: "Zincir üstü üstveri"
aliases: []
category: nft
subcategory: ""
level: ileri
short: "NFT'nin bilgilerini ve çoğu zaman görselin kendisini sözleşmenin içinde saklayan yaklaşım."
related: [nft-metadata, off-chain-metadata, token-uri, storage-evm, gas, immutability]
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

Zincir üstü metadata, bir NFT'nin bilgilerinin dışarıdaki bir dosyada değil, sözleşmenin kendi deposunda durmasıdır. `tokenURI` çağrıldığında sözleşme bir bağlantı döndürmek yerine belgeyi o anda üretir ve `data:` biçiminde doğrudan geri verir. Dışarıya hiç çıkılmaz: sunucu, alan adı, dosyayı barındıran bir taraf yoktur.

Getirisi açıktır — zincir ayakta olduğu sürece görüntü de ayaktadır ve bağlantının ucundaki içeriği kimse değiştiremez. Bedeli de açıktır: zincire veri yazmak pahalıdır.

## Nasıl çalışır?

Tipik kurulum şöyledir. Parçanın özellikleri [[storage-evm|sözleşmenin depolamasında]] küçük sayılar olarak tutulur — "arka plan 3, gözlük 0" gibi. `tokenURI` bir `view` fonksiyonudur, yani okunurken [[gas|gaz]] harcamaz; çağrıldığında bu sayılardan JSON metnini birleştirir, gerekiyorsa görseli de bir SVG olarak o anda çizer ve tamamını base64 ile kodlayıp `data:application/json;base64,...` biçiminde döndürür.

Asıl maliyet yazma tarafındadır: basım sırasında zincire yazılan her bayt ücretlendirilir. Bundan iki pratik sınır doğar. Metin kısa tutulur; uzun açıklamalar ve fotoğraf boyutunda görseller bu yöntemle taşınmaz. Görsel de dosya olarak değil, çizim talimatı olarak saklanır — SVG'nin tercih edilme sebebi budur, çünkü metindir ve parça parça üretilebilir.

Bu yüzden zincir üstü metadata pratikte belirli bir görsel diline yaslanır: geometrik biçimler, düz renkler, yazı. Karmaşık resimler yerine kuralla çizilebilen şeyler.

## Dikkat

Zincir üstü olmak içeriği doğru ya da özgün yapmaz; yalnızca sonradan kaybolamaz ve değiştirilemez yapar — o da ancak sözleşmede bu değerleri güncelleyen bir fonksiyon yoksa. [[immutability|Değiştirilemezlik]] burada da koda bakılarak anlaşılır, yöntemin adından çıkarılmaz.

İkinci nokta pratiktir: görüntüleyen tarafın `data:` adreslerini ve içindeki SVG'yi işleyebilmesi gerekir. Aynı token, bir arayüzde göründüğü hâliyle başka bir arayüzde görünmeyebilir. [[off-chain-metadata|Zincir dışı]] yaklaşımın yaygın olmasının sebeplerinden biri de budur.
