---
term: "Foundry"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "EVM geliştirme için komut satırı araç takımı; testleri de Solidity ile yazdırır."
related: [forge, cast, anvil, hardhat, solidity]
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

Foundry, EVM sözleşmeleriyle çalışmak için bir araç takımıdır. Tek bir program değil, aynı çatı altında dağıtılan birkaç komut satırı aracından oluşur. Yazıldığı tarih itibarıyla takımın parçaları şunlardır:

- [[forge|forge]] — derler, test eder, biçimlendirir, betik çalıştırır.
- [[cast|cast]] — bir ağa tek seferlik sorular sorar, işlem gönderir, veri biçimleri arasında çevirir.
- [[anvil|anvil]] — kendi makinende bir düğüm ayağa kaldırır.
- chisel — [[solidity|Solidity]] ifadelerini satır satır deneyebildiğin bir kabuk sunar.

## Nasıl çalışır?

Foundry'nin belirleyici tarafı testlerin de Solidity ile yazılmasıdır. Test dosyası bir sözleşmedir; test edilen sözleşmeyi doğrudan çağırır, araya bir istemci kütüphanesi ve ayrı bir dil girmez. Bunun pratik sonucu, sözleşme yazarken kafandaki modelin test yazarken de aynı kalmasıdır.

Proje kökünde bir `foundry.toml` dosyası durur: derleyici ayarları, kaynak ve kütüphane klasörleri, ağ adresleri orada tanımlanır. Bağımlılıklar çoğunlukla paket yöneticisi yerine doğrudan git deposu olarak projeye eklenir ve `lib/` altında durur; import yolları da `remappings` ile bu klasörlere bağlanır.

## Dikkat

Foundry ile [[hardhat|Hardhat]] karşılaştırması genellikle "hangisi iyi" diye sorulur ama gerçek ölçüt daha sıradandır: testlerini hangi dilde yazmak istiyorsun, ekibin neye alışkın, projenin arayüzüyle aynı dilde mi kalmak istiyorsun. Solidity ile test yazmak isteyen bir ekip için Foundry doğrudan cevap verir; JavaScript/TypeScript dünyasında duran bir ekip için tersi geçerlidir. İkisini aynı depoda birlikte kullanan projeler de yaygındır.

Foundry EVM dünyasına özeldir. EVM olmayan bir zincirde çalışıyorsan o zincirin kendi araçlarına bakman gerekir.
