---
term: "Memory Management"
tr: "Bellek yönetimi"
aliases: ["bellek yönetimi"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: orta
short: "Bir programın çalışırken ihtiyaç duyduğu belleği ayırma ve işi bitince geri verme düzeni."
related: [stack-and-heap, garbage-collection, memory-safety, pointer, runtime]
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

Bellek yönetimi, bir programın çalışırken ihtiyaç duyduğu yeri ayırma ve işi bitince geri verme düzenidir. Bellek sınırlıdır: ayırıp geri vermezsen program yaşadıkça kapladığı yer büyür ve sonunda bir duvara çarpar. Buna bellek sızıntısı denir.

İki soru bütün konuyu özetler. Bu veri nerede duruyor? Onu kim temizleyecek? Birincinin cevabı [[stack-and-heap|yığın ve heap]] maddesinde; ikincinin cevabı dilden dile değişir.

## Nasıl çalışır?

Üç yaygın yaklaşım var.

**Elle yönetim.** Yeri sen istersin, işin bitince sen geri verirsin (C'de `malloc` ve `free`). Denetim tamamen sendedir: ne zaman, ne kadar, nereye. Karşılığında iki klasik hata seni bekler — geri vermeyi unutmak (sızıntı) ve geri verdiğin yeri kullanmaya devam etmek.

**Otomatik toplama.** Dil, artık kimsenin ulaşamadığı belleği kendi bulup toplar ([[garbage-collection|çöp toplama]]). Java, Go, Python ve JavaScript böyle çalışır. Yazması rahattır; bedeli, temizliğin ne zaman yapılacağına senin karar vermemendir.

**Derleme anında karar.** Rust'ta her değerin bir sahibi vardır; sahip kapsam dışına çıktığında belleğin bırakılacağı, derleme sırasında kodun içine yazılır. Ne elle bir çağrı vardır ne de çalışırken ortalıkta dolaşan bir toplayıcı.

## Dikkat

Hangi yaklaşımın doğru olduğu ortama bağlıdır. Öngörülebilir gecikme isteyen yerlerde — gömülü cihazlar, oyun motorları, akıllı sözleşme çalıştıran sanal makineler — bir toplayıcının canı istediğinde devreye girmesi kabul edilemez; oralarda ya elle ya derleme anında yönetim tercih edilir.

Sızıntının en sinsi hâli de "bellek doldu" hatası değildir. Çoğu zaman belirtisi, haftalar içinde yavaşlayan ve haftada bir yeniden başlatılarak idare edilen bir sunucudur. [[pointer|İşaretçiyi]] elinde tutan ama bir daha kullanmayacak olan kod, o belleği kimseye bırakmaz.
