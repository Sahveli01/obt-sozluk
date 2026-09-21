---
term: "KISS"
tr: ""
aliases: ["keep it simple stupid"]
category: programlama
subcategory: "Paradigmalar ve tasarım"
level: baslangic
short: "\"Keep It Simple, Stupid\": çözümün, çözdüğü problemden daha karmaşık olmamasını hatırlatan kural."
related: [dry, solid, clean-code, refactoring]
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

KISS, "Keep It Simple, Stupid" sözünün kısaltmasıdır ve çözümün, çözdüğü problemden daha karmaşık olmaması gerektiğini hatırlatır. Kısaltmanın sonundaki sert kelime aslında yazana değil, çözüme bakar: "bunu bu kadar dolandırmaya gerek var mıydı?"

Kural en çok, henüz var olmayan bir ihtiyaç için tasarım yapıldığında hatırlanır. Üç kullanıcısı olan bir hackathon projesine milyonlarca kullanıcı için ölçeklenecek bir mimari kurmak, bugünün işini bitirmez ama bugünün kodunu okunmaz yapar. Aynı şey erkenden eklenen ayar dosyaları, eklenti sistemleri ve "ileride lazım olur" diye bırakılan kancalar için de geçerlidir.

## Dikkat

"Basit" ile "kısa" aynı şey değildir. Üç işlemi tek satıra sıkıştırmak kodu kısaltır ama okunmasını zorlaştırır; bu KISS'in istediği şey değildir. Ölçü satır sayısı değil, kodu anlamak için aynı anda kaç şeyi akılda tutman gerektiğidir.

Kuralın ters yönde bir tuzağı da var: bazı problemler gerçekten karmaşıktır. Eşzamanlılık, para hesabı, imza doğrulama — buralarda "basit tutalım" diye atılan adım, kodu basitleştirmez, yalnızca karmaşıklığı görünmez yapar ve hatayı sonraya saklar. Basitlik problemi kırpmak değil, çözümü problemin ölçüsünde tutmaktır.

Bu maddedeki ölçülülük uyarısının ayrıntısını [[dry|DRY]] maddesinde bulabilirsin; [[solid|SOLID]] ilkeleri için de aynısı geçerli.
