---
term: "Blob (EIP-4844)"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: orta
short: "Rollup verisi için tasarlanmış, ucuz ve yalnızca sınırlı bir süre saklanan veri alanı; içeriği zincirin kalıcı durumuna girmez."
related: [rollup, data-availability, kzg-commitment, danksharding, calldata, gas]
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

Bir [[rollup|rollup]] işlem verisini ana zincire yayımlamak zorundadır. Bu veri uzun süre sıradan işlem verisi ([[calldata|calldata]]) olarak yazıldı ve rollup maliyetinin en büyük kalemi oldu — çünkü calldata sonsuza kadar bloklarda durur ve bunun için ödeme yapılır.

EIP-4844 bu iş için ayrı bir alan tanımladı: blob. Blob, bir işleme iliştirilen büyük bir veri paketidir, kendi ücret piyasası vardır ve en önemli farkı, kalıcı olmamasıdır.

## Benzetme

Bir toplantının ses kaydıyla tutanağı gibi. Tutanak kalıcı olarak dosyalanır. Ham kayıt ise itiraz süresi boyunca saklanır — "tutanakta yazan şey gerçekten söylendi mi" sorusunu ancak o sürede soran olur — sonra silinir. Kaydın sonsuza kadar durması gerekmez; herkesin ona erişebildiği bir dönem geçmiş olması yeter.

## Nasıl çalışır?

Blob'un içeriği sözleşmeler tarafından okunamaz; zincirin yürütme ortamına hiç girmez. Zincirde kalıcı olarak duran şey blob'un kriptografik özetidir — bir [[kzg-commitment|KZG taahhüdü]]. Bu taahhüt sayesinde biri sana blob'un içeriğini verdiğinde, onun yayımlanan veriyle aynı olduğunu ispatlayabilirsin.

Blob'un kendisi ağdaki node'larda sınırlı bir süre tutulur, sonra düşürülür. O süre içinde ilgilenen herkes veriyi indirip kendi kopyasını saklayabilir.

## Dikkat

Buradaki tasarım kararı şuna dayanır: [[data-availability|veri erişilebilirliği]] "veri sonsuza kadar zincirde dursun" demek değil, "veri bir kez, herkesin alabileceği biçimde yayımlanmış olsun" demektir. İtiraz etmek, durumu yeniden hesaplamak ya da rollup'ı sıfırdan kurmak isteyen bir tarafın bunu yapabilmesi için pencere açıktır.

Bu yüzden blob kalıcı depolama değildir. Uzun vadede veriye ihtiyacı olan — arşivciler, gezginler, rollup işletmecileri — kendi kopyasını tutar. Kesin saklama süresi ağın parametrelerine bağlıdır ve yükseltmelerle değişebilir; yazıldığı tarih itibarıyla kalıcı sayılmayacak kadar kısadır.
