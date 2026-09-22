---
term: "Key Rotation"
tr: "Anahtar Değişimi"
aliases: ["anahtar değişimi"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Kullanılan bir anahtarı yenisiyle değiştirip eskisini geçersiz kılmak."
related: [key-management, secrets-management, smart-contract-wallet, social-recovery, incident-response]
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

Anahtar değişimi, kullanılan bir anahtarı yenisiyle değiştirip eskisini geçersiz kılmaktır. İki durumda yapılır: planlı olarak, bir anahtarın kaç kişinin elinden geçtiği belirsizleştiğinde; ve acil olarak, sızdığından şüphelenildiğinde.

Mantığı şudur: bir anahtar ne kadar uzun süre kullanılırsa, farkında olmadan bir yerde kopyalanmış olma ihtimali o kadar artar. Değişim, o ihtimalin geçmişe doğru birikmesini keser.

## Nasıl çalışır?

Zincir dışında iş görece düzdür. Yeni anahtar üretilir, sistemler yeni anahtarı kullanacak şekilde geçirilir, sonra eskisi iptal edilir. Sunucu anahtarları ve API anahtarları böyle yönetilir ([[secrets-management|sır yönetimi]]).

Zincir üstünde işin zorluğu cüzdanın türüne bağlıdır.

**[[externally-owned-account-eoa|EOA]] hesaplarda anahtar değiştirilemez.** Adres, anahtardan matematiksel olarak türer; ikisi tek bir şeydir. Yapılabilecek tek şey yeni bir anahtar üretip varlıkları yeni adrese taşımak ve eskisini kullanımdan kaldırmaktır. Adres değişir, yani onu bilen herkese haber vermen gerekir. Verdiğin token onaylarının eski adreste kaldığını da unutma; taşınmak onları iptal etmez.

**[[smart-contract-wallet|Akıllı sözleşme cüzdanında]] hesap ile anahtar ayrıdır.** Hesabı yöneten imza yetkisi bir kayıt olarak tutulduğu için değiştirilebilir; adres ve bakiye yerinde kalır. [[social-recovery|Sosyal kurtarma]] da tam olarak bunun üzerine kuruludur.

Sözleşmelerde aynı soru yetki adresleri için sorulur: sahip ya da rol adresi yenisiyle değiştirilebilir ([[key-management|anahtar yönetimi]] bunun planını içerir).

## Dikkat

En tehlikeli durum yarım kalmış değişimdir: yeni anahtar tanımlanmış ama eskisi hâlâ yetkili. Bu noktada sistemin bir değil iki kapısı vardır ve ikincisini kimse izlemiyordur. İş, eski anahtarın yetkisi kaldırıldığında biter.

İkincisi zamanlamadır. "Belki sızmamıştır" diye beklemek, kararı saldırgana bırakmaktır; şüphe varsa değişim [[incident-response|olay müdahalesinin]] ilk adımlarından biridir.
