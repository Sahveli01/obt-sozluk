---
term: "Hardhat"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "EVM sözleşmelerini derleyen, test eden ve ağa gönderen, Node.js üzerinde çalışan geliştirme ortamı."
related: [foundry, local-blockchain, solidity, deployment-script, mainnet-fork]
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

Hardhat, EVM için sözleşme geliştirme ortamıdır. [[solidity|Solidity]] dosyalarını derler, testleri koşturur, sözleşmeyi ağa gönderir ve bütün bunları tek bir proje klasöründen yönetir. Node.js üzerinde çalışır; projenin ayarları JavaScript ya da TypeScript ile yazılan bir yapılandırma dosyasında durur.

İki özelliği onu tanıdık kılar. Birincisi kendi [[local-blockchain|yerel zincirini]] içinde taşımasıdır: test koştururken ayrıca bir ağ kurmana gerek kalmaz. İkincisi eklenti düzenidir — sözleşme doğrulama, test kapsamı, [[gas-reporter|gas raporu]] gibi işler çekirdeğe değil, ayrı paketlere bırakılmıştır ve yapılandırma dosyasından açılır.

## Nasıl çalışır?

Derleme adımında Solidity kaynağından [[bytecode|bytecode]] ve [[application-binary-interface-abi|ABI]] üretilir; bunlar proje içinde bir çıktı klasörüne yazılır ve testler ile [[deployment-script|dağıtım betikleri]] sözleşmeye bu çıktılar üzerinden ulaşır.

Test aşamasında Hardhat bellekte bir zincir ayağa kaldırır, hazır ve bakiyeli hesaplar verir, her testi bu zincire karşı çalıştırır. Yazıldığı tarih itibarıyla testler çoğunlukla JavaScript veya TypeScript ile yazılır ve sözleşmeye bir istemci kütüphanesi üzerinden konuşur. Aynı yerel zinciri ayrı bir süreç olarak da çalıştırıp tarayıcıdaki arayüzünü ona bağlayabilirsin.

## Örnek

```bash
npx hardhat compile
npx hardhat test
npx hardhat node
```

## Dikkat

Hardhat ile [[foundry|Foundry]] arasındaki seçim bir kalite sıralaması değildir; ekibin hangi dilde test yazmak istediğiyle ilgilidir. Testlerini ve araçlarını zaten JavaScript/TypeScript ile yazan, arayüzüyle aynı dilde kalmak isteyen ekipler için Hardhat doğal bir seçimdir. İki aracı aynı projede yan yana kullanan ekipler de vardır.

Yerel zincirde geçen test, gerçek ağda geçeceği anlamına gelmez: orada sıra rekabeti, ücret piyasası ve başkalarının işlemleri vardır.
