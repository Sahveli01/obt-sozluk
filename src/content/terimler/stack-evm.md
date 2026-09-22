---
term: "Stack (EVM)"
tr: "Yığın"
aliases: []
category: akilli-sozlesmeler
subcategory: "Bellek ve depolama"
level: ileri
short: "EVM'in hesaplarını üzerinde yaptığı, her öğesi 32 bayt olan ve en fazla 1024 öğe alan yığın."
related: [ethereum-virtual-machine-evm, opcode, memory-evm, stack-and-heap, gas]
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

[[ethereum-virtual-machine-evm|EVM]] bir yığın makinesidir: hesaplarını adlandırılmış kayıtlarda değil, stack denen tek bir yığının üzerinde yapar. İki sayıyı toplamak için ikisini yığına koyar, toplama komutunu çalıştırır, sonuç yığının tepesinde belirir.

Yığının her öğesi 32 bayttır ve yığın en fazla 1024 öğe alır. Bu alan da çağrıya özeldir; çağrı bittiğinde geriye bir şey kalmaz.

## Nasıl çalışır?

Her [[opcode|opcode]] operandlarını yığının tepesinden alır, sonucunu yine tepeye bırakır. Derleyici yerel değişkenleri elinden geldiğince burada tutmaya çalışır, çünkü yığın işlemleri EVM'in en ucuz işlemleri arasındadır: [[memory-evm|memory]]'ye ya da [[storage-evm|storage]]'a hiç uğramadan yapılan bir hesap, [[gas|gas]] faturasında neredeyse görünmez.

Sınır asıl burada devreye girer. Komutlar yığının istediği derinliğine uzanamaz; `DUP` ve `SWAP` komutları en fazla on altı öğe aşağıya erişebilir. Bir fonksiyonda aynı anda canlı duran parametre, yerel değişken ve dönüş değeri sayısı bu pencereyi aştığında derleyici aradığı değere uzanamaz ve meşhur **stack too deep** hatasını verir.

Bu bir mantık hatası değildir; kodun anlamı doğrudur, yerleşim sığmamıştır. Klasik üç çıkış yolu var: ilgili değişkenleri bir `struct` içinde gruplamak, işin bir bölümünü süslü parantezle ayrı bir kapsama alıp ara değerlerin ömrünü kısaltmak, ya da derleyicinin IR üzerinden üretim yapan `via-ir` yolunu açmak.

## Dikkat

Bu yığını programlamadaki [[stack-and-heap|yığın ve heap]] ayrımıyla karıştırma. Oradaki yığın, çalışan fonksiyonların çerçevelerini üst üste dizen bellek bölgesidir; buradaki stack ise komutların operandlarını tutan bir hesap yığınıdır. İkisi de "son giren ilk çıkar" mantığıyla çalışır, ama aynı şeyi anlatmazlar.

Pratikte 1024 sınırına çarpmak da nadirdir. Geliştiricinin gerçekten karşılaştığı duvar, on altı öğelik erişim penceresidir.
