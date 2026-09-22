---
term: "Scalability"
tr: "Ölçeklenebilirlik"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: baslangic
short: "Bir ağın artan talebi, ucuzluğundan ve herkesin doğrulayabilmesinden ödün vermeden karşılayabilmesi."
related: [blockchain-trilemma, transactions-per-second-tps, layer-2, blockspace, modular-blockchain]
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

Ölçeklenebilirlik, bir ağın talep arttığında ne yaptığıyla ilgilidir. Bir zincirde herkes aynı [[blockspace|blok alanı]] için sıraya girer: alan sabit, talep değişkendir. Kullanıcı sayısı katlandığı hâlde işlemler ucuz ve hızlı kalıyorsa o ağ ölçekleniyordur; ücretler fırlayıp işlemler bekliyorsa ölçeklenmiyordur.

Zor kısım şudur: kapasiteyi artırmak teknik olarak kolaydır — blokları büyütürsün, blok süresini kısaltırsın. Asıl mesele bunu yaparken başka bir şeyi bozmamaktır. Her [[node|node]] her işlemi baştan çalıştırdığı için, kapasite büyüdükçe zinciri kendi bilgisayarında doğrulamak pahalılaşır.

## Benzetme

Mahallenin su şebekesi gibi düşün. Borular aynı kaldığı hâlde eve ev eklendikçe sabah saatlerinde musluktan akan su incelir. Çözüm "daha kalın boru" demek kadar kolay değildir: kalın boru yolu kazmayı ve daha pahalı bir bakımı gerektirir. Kapasite bedavaya gelmez.

## Dikkat

Kapasiteyi artırmanın bedeli genellikle merkeziyetsizlikten ya da güvenlikten ödenir; bu gerilimi anlatan çerçeveye [[blockchain-trilemma|trilemma]] denir. Trilemma kanıtlanmış bir teorem değil, tasarım tartışmalarını düzenleyen bir gerilimdir; "çözdük" diyen bir cümleye değil, hangi köşeden ne kadar ödün verildiğine bak.

Bir de ölçeklenebilirlik ile hız aynı şey değildir. [[transactions-per-second-tps|Saniyedeki işlem sayısı]] yüksek bir ağ, işlemlerin geri alınamaz hâle gelmesi uzun sürüyorsa kullanıcı için hızlı sayılmaz.
