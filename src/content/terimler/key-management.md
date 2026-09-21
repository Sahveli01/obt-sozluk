---
term: "Key Management"
tr: "Anahtar yönetimi"
aliases: ["anahtar yönetimi"]
category: cuzdanlar
subcategory: "Anahtarlar ve adresler"
level: orta
short: "Anahtarların üretilmesi, saklanması, yedeklenmesi, kimin kullanacağı ve gerektiğinde değiştirilmesi için kurulan düzen."
related: [seed-phrase, private-key, key-rotation, multisig, hardware-wallet, secrets-management]
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

Anahtar yönetimi, bir anahtarın üretildiği andan kullanımdan kalktığı ana kadar başına gelecek her şeyin önceden düşünülmesidir: nasıl üretildiği, nerede durduğu, kaç kopyası olduğu, kimin imza atabildiği ve bir şey ters gittiğinde ne yapılacağı.

Zincirde parola sıfırlama ya da işlemi geri alma olmadığı için, kayıpların çoğu kriptografinin kırılmasından değil bu düzenin baştan kurulmamış olmasından doğar.

## Benzetme

Yangın güvenliği gibi. Binaya söndürücü almak tek başına güvenlik değildir; tüpün dolu olması, nerede durduğunun bilinmesi, kimin kullanmayı bildiği ve tatbikatın yapılmış olması güvenliktir. Anahtar da böyle: bir yere yazmak başlangıçtır, sistem değil.

## Nasıl çalışır?

Pratikte birkaç soruya verilen cevaplardan oluşur. Anahtar yeterince rastgele üretildi mi ([[entropy|entropi]])? Nerede duruyor: internete bağlı günlük cihazda mı, imzayı cihazın içinde yapan bir [[hardware-wallet|donanım cüzdanında]] mı? Yedeği var mı ve o yedek, aslıyla aynı yangında ya da aynı hırsızlıkta birlikte gider mi? Tek bir kişi tek başına imza atabiliyor mu, yoksa [[multisig|çoklu imza]] gibi bir eşik mi var? Bir anahtarın sızdığından şüphelenilirse ne olacak ([[key-rotation|anahtar değişimi]])?

Kurumlarda bu sorular yazılı bir politikaya dönüşür. Bireyde ise birkaç alışkanlığa iner: hangi anahtarın ne kadar değer taşıdığını bilmek ve büyük değerleri günlük kullanılan cihazdan ayırmak.

## Dikkat

Kopya sayısı iki yönlü bir ayardır: az kopya kaybetme riskini, çok kopya çalınma riskini büyütür. İkisini aynı anda sıfıra indiren bir seçenek yoktur; karar, hangi riskin senin için daha olası olduğuna bağlıdır.

Sunucudaki API anahtarları ve gizli değerler de aynı disiplini ister ama başka araçlarla yönetilir ([[secrets-management|secrets management]]). Zincirdeki bir anahtarla bir sunucu parolası arasındaki fark, birincisinin kaybının telafisi olmamasıdır.
