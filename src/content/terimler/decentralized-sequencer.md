---
term: "Decentralized Sequencer"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Sıralama yetkisini tek bir tarafta değil, aralarında uzlaşan bir küme arasında dağıtan rollup tasarımı."
related: [sequencer, shared-sequencer, based-rollup, consensus-mechanism, forced-withdrawal-escape-hatch]
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

Tek bir [[sequencer|sıralayıcı]] hızlı ve basittir, ama ağın çalışmaya devam etmesi ile senin işlemine yer bulman tek bir tarafın kararına bağlı kalır. Merkeziyetsiz sıralayıcı, bu yetkiyi birden çok bağımsız işletmeciye dağıtır: hangi işlemin hangi sırada olacağına aralarında bir uzlaşı süreciyle karar verirler. Terim İngilizcesiyle kullanılır.

## Nasıl çalışır?

Küme üyeleri teminat yatırır ve kendi aralarında bir [[consensus-mechanism|uzlaşı mekanizması]] işletir. Sıralama hakkı ya sırayla dolaşır ya da her turda seçilen bir üyeye verilir; üretilen sıra diğerlerinin imzasıyla onaylanır. Kurallara aykırı davranan üyenin teminatı kesilebilir.

Ana zincire karşı hiçbir şey değişmez: yığınlar yine yayımlanır, doğruluk yine kanıtla ya da itirazla güvenceye alınır. Değişen tek şey, o yığını kimin oluşturduğudur.

## Dikkat

**Neyi çözer:** tek noktanın durmasıyla ağın durması sorununu ve keyfî sansürü. Artık bir kullanıcıyı dışarıda bırakmak için tek bir kararın değil, kümenin yeterli bir bölümünün anlaşması gerekir.

**Neyi çözmez:** sıralama gücünün yarattığı [[maximal-extractable-value-mev|değer çıkarımı]] ortadan kalkmaz, yalnızca paylaşılır — üyeler kendi aralarında anlaşırsa aynı davranış kolektif olarak sürebilir. Küme kapalı ve küçükse "merkeziyetsiz" sıfatı sayıdan ibaret kalır; kimin üye olabildiği sorusu, kaç üye olduğu sorusundan daha önemlidir.

Bedeli de vardır: üyeler arasında anlaşma turu, tek sıralayıcıya göre gecikme ve karmaşıklık ekler.

Bu yüzden merkeziyetsizleşme, [[forced-withdrawal-escape-hatch|zorunlu çıkışın]] yerini tutmaz. Acil kapı, sıralama kim tarafından yapılırsa yapılsın gereklidir.
