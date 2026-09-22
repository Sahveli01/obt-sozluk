---
term: "Contract Verification"
tr: "Sözleşme doğrulama"
aliases: []
category: akilli-sozlesmeler
subcategory: "Dağıtım ve arayüz"
level: orta
short: "Yayımlanan kaynak kodun, zincirdeki bytecode ile gerçekten aynı koddan çıktığının kanıtlanması."
related: [bytecode, contract-deployment, block-explorer, source-code, solidity-compiler-solc, application-binary-interface-abi]
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

Zincirde sözleşmenin kaynak kodu durmaz; yalnızca derlenmiş [[bytecode|bytecode]]'u durur ve o hâliyle insan gözüyle okunmaz. Geliştirici "bu adreste çalışan kod işte şu dosyadır" der, ama bunu söylemek tek başına bir kanıt değildir. Doğrulama, o iddianın kanıtlanmasıdır.

## Benzetme

Noterdeki "aslı gibidir" kaşesi gibi. Noter elindeki fotokopiyi aslıyla karşılaştırır ve ikisinin aynı olduğunu onaylar. Belgede yazanın doğru, adil ya da senin lehine olup olmadığı onu hiç ilgilendirmez; onayladığı tek şey, okuduğun kâğıdın gerçekten o belge olduğudur.

## Nasıl çalışır?

Kanıtlamanın yolu kodu yeniden derlemektir. [[block-explorer|Blok gezginine]] [[source-code|kaynak kodu]], derleyici sürümünü, optimizer ayarlarını ve [[constructor|constructor]] argümanlarını verirsin. Gezgin aynı ayarlarla [[solidity-compiler-solc|solc]]'u çalıştırır ve çıkan bytecode'u zincirdekiyle karşılaştırır.

Ayarlardan biri bile tutmazsa sonuç da tutmaz: aynı kaynak kod, farklı bir derleyici sürümüyle farklı baytlar üretir. Bu yüzden doğrulama, kodu yüklemekten çok "hangi şartlarda derlendiğini" bildirmektir.

Eşleşme sağlandığında gezgin kaynak kodu herkese açar ve [[application-binary-interface-abi|ABI]]'yi kullanarak fonksiyonları tek tek çağırabileceğin bir arayüz çıkarır. Bir sözleşmenin ABI'sine ulaşmanın en yaygın yolu da budur.

## Dikkat

Doğrulanmış olmak güvenli olmak değildir. Onay yalnızca şunu söyler: okuduğun kod, çalışan kodun ta kendisi. O kodun içinde bütün parayı tek bir adrese çeken bir fonksiyon da olabilir — doğrulama kimin yazdığına, ne yaptığına ya da bir açığı olup olmadığına bakmaz. Kodun güvenli olduğu iddiası ancak okumaktan ve [[auditor|denetimden]] çıkar.

Tersi de mutlak değildir: doğrulanmamış her sözleşme kötü niyetli demek değildir. Ama ne yaptığını göremiyorsan, güvenini dayandıracağın bir şey de yok demektir.
