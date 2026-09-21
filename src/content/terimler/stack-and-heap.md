---
term: "Stack and Heap"
tr: ""
aliases: ["heap"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Belleğin iki kullanım biçimi: sırası ve boyutu önceden belli olan yığın (stack) ile boyutu çalışırken belirlenen heap."
related: [memory-management, pointer, garbage-collection, memory-safety, recursion]
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

Bir program çalışırken belleği iki farklı biçimde kullanır.

Yığın (stack), çalışan fonksiyonların yerel değişkenlerinin durduğu sıkı düzenli bölgedir: bir fonksiyon çağrıldığında üste bir kat eklenir, fonksiyon bittiğinde o kat olduğu gibi kalkar. Heap ise boyutu ya da ömrü önceden belli olmayan verilerin konduğu serbest bölgedir.

Türkçede stack için "yığın" yaygındır; heap için "öbek" ve "yığın" gibi karşılıklar denenmiş ama hiçbiri yerleşmemiş, üstelik ikisi birbirine karışır hâle gelmiştir. Bu yüzden terim ikilisi için burada bir çeviri verilmedi.

## Benzetme

Yemekhanedeki tepsi kulesi gibi. Tepsiyi en üstten alırsın, bırakırken yine en üste koyarsın; sıra hiç şaşmadığı için kimsenin defter tutmasına gerek yoktur ve iş çok hızlıdır. Ama kule ancak tavana kadar çıkar. Heap ise arka taraftaki ambardır: istediğin boyutta yer bulunur, karşılığında nereye ne koyduğunu birinin bilmesi ve boşalan yeri birinin toplaması gerekir.

## Nasıl çalışır?

Yığında yer ayırmak tek bir işaretin kaydırılmasından ibarettir; neredeyse bedavadır ve temizlik kendiliğinden olur, çünkü fonksiyon döndüğünde katı kalkar. Karşılığında iki kısıt gelir: boyutun derleme anında bilinmesi ve toplam alanın sınırlı olması. Derine giden bir [[recursion|özyineleme]] bu sınırı aşar ve program "stack overflow" diyerek durur.

Heap'te yer ayırmak daha pahalıdır; uygun boşluğun bulunması gerekir. Buna karşılık büyük, boyutu çalışırken belli olan ya da fonksiyon bittikten sonra da yaşaması gereken veriler oraya konur. Oradaki bir veriye genelde yığında duran bir [[pointer|işaretçi]] ya da [[reference|referans]] üzerinden ulaşılır; yani ikisi birlikte çalışır.

Heap'in temizliği ise elle, [[garbage-collection|çöp toplayıcıyla]] ya da derleme anında verilmiş kararlarla yapılır ([[memory-management|bellek yönetimi]]).

## Dikkat

"Yığın hızlıdır" doğrudur ama "her şeyi yığına koy" sonucu çıkmaz: büyük bir veriyi yığına koymaya çalışmak sınırı zorlar ve programı beklenmedik bir yerde düşürür.

Bir de bu ayrımı [[stack-evm|EVM'deki stack]] ile karıştırma. Oradaki stack sanal makinenin komut yığınıdır, burada anlatılan bellek düzeni değildir.
