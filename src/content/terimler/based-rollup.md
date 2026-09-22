---
term: "Based Rollup"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Sıralamayı kendi işletmecisine değil, doğrudan ana zincirin blok üreticilerine bırakan rollup tasarımı."
related: [sequencer, rollup, proposer, proposer-builder-separation-pbs, layer-1]
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

Çoğu rollup'ta sırayı ayrı bir [[sequencer|sıralayıcı]] belirler. "Based" tasarımda böyle bir kurum yoktur: rollup işlemleri doğrudan ana zincire gönderilir ve o bloğu üreten [[proposer|öneren]] onları sıraya dizer. Sıralama, ana zincirin normal blok üretim sürecinin bir parçası hâline gelir. Terim İngilizcesiyle kullanılır; buradaki "based", [[based|jargondaki]] övgü anlamıyla değil, "temeli ana zincire dayandırılmış" anlamıyla kullanılır.

## Nasıl çalışır?

İşlemler ana zincirin blok alanına yazılır. Blok üreticisi kendi işlemlerini seçerken rollup'a ait işlemleri de seçer; blok kesinleştiğinde rollup'ın sırası da kesinleşmiş olur. Yürütme ve doğruluk mekanizması değişmez — yığın yine çalıştırılır, sonuç yine kanıt ya da itirazla güvenceye alınır.

Sonuç olarak sansür direnci ve çalışmaya devam etme garantisi ana zincirden miras alınır: rollup'a ait bir "kapatma düğmesi" kimsenin elinde değildir.

## Dikkat

Bedeli hız ve gelirdedir.

Hız: sıra ana zincirin blok ritmine bağlanır. Ayrı bir sıralayıcının saniyeler içinde verdiği ön onaylar burada aynı biçimde verilemez; kullanıcı deneyimi bu boşluğu kapatacak ek tasarımlar ister.

Gelir: işlem ücretleri ve sıralamadan doğan [[maximal-extractable-value-mev|değer]] rollup'ın kasasına değil, ana zincirin blok üreticilerine akar. Bu, ana zincir açısından bir kazanç, rollup'ın kendini finanse etmesi açısından bir kısıttır.

Tasarımın özü basit bir takastır: sıralama yetkisini devretmek yerine, onu hiç kurmamak.
