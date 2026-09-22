---
term: "Shared Sequencer"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Birden çok rollup'ın işlem sıralamasını ortak bir katmana devretmesi; zincirler arasında aynı turda sıralama yapılmasını mümkün kılar."
related: [sequencer, decentralized-sequencer, cross-chain-messaging, interoperability, rollup]
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

Her rollup kendi [[sequencer|sıralayıcısını]] kurar ve işletir. Ortak sıralayıcı bu işi dışarıdan bir katmana devretme fikridir: aynı küme birden çok zincirin işlemlerini toplar ve hepsinin sırasını aynı turda belirler. Terim Türkçeye çevrilmeden kullanılır.

## Nasıl çalışır?

Kullanıcılar ve uygulamalar işlemlerini bu ortak katmana gönderir. Katman her turda, hangi zincire ait hangi işlemin hangi sırada geleceğini içeren bir paket yayımlar. Paket, birden çok zinciri ilgilendiren işlemleri birlikte taşıyabilir: "ikisi de aynı turda sıraya girsin, yoksa hiçbiri girmesin" gibi koşullar kurulabilir.

Sıralamanın dışındaki her şey zincirlerin kendisinde kalır. Her rollup kendi işlemlerini kendi kurallarıyla çalıştırır, verisini kendi yayımlar ve doğruluğunu kendi kanıt ya da itiraz mekanizmasıyla güvenceye alır.

## Dikkat

En sık karıştırılan nokta şudur: ortak sıralama, işlemlerin **birlikte sıraya girmesini** garanti eder; **birlikte başarılı olmasını** değil. İki zincirden birinde işlem çalışırken hata verirse diğeri yine de geçerli kalabilir. Zincirler arası gerçek atomik yürütme, sıralamadan fazlasını gerektirir.

İkincisi, ortak bir katman ortak bir bağımlılıktır. Katman durursa ona bağlanan zincirlerin hepsi aynı anda etkilenir; katmanı yöneten küme sansür uygularsa sansür hepsine birden yayılır. Ortak sıralayıcı bu yüzden merkeziyetsizlik sorununu tek başına çözmez, yalnızca sorunun yerini değiştirir.

Değişmeyen şey güvenlik sınırıdır: ortak sıralayıcı da sıralama dışında bir yetki kazanmaz, geçersiz bir durumu hiçbir zincire kabul ettiremez.
