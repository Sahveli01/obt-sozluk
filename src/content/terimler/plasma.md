---
term: "Plasma"
tr: ""
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: ileri
short: "İşlemleri zincir dışında yürütüp ana zincire yalnızca özet yazan, kullanıcıya kanıtla çıkış hakkı bırakan erken ölçeklenme tasarımı."
related: [rollup, optimistic-rollup, data-availability, merkle-tree, forced-withdrawal-escape-hatch, challenge-period]
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

Plasma, 2017'de önerilen bir ölçeklenme tasarımıdır. Fikir şudur: işlemler ana zincirin dışında, bir operatörün işlettiği alt zincirde yürütülsün; ana zincire düzenli aralıklarla yalnızca o alt zincirin durumunu özetleyen bir [[merkle-root|Merkle kökü]] yazılsın.

Bu tasarımın adıdır, bir kavram değil; o yüzden Türkçeye çevrilmez.

Plasma'nın asıl iddiası hız değil, çıkış hakkıydı: operatör kötü davransa bile kullanıcı, parasının kendisine ait olduğunu ana zincirde kanıtlayıp çıkabilmeliydi.

## Nasıl çalışır?

Operatör alt zincirde blok üretir ve her bloğun kökünü ana zincirdeki sözleşmeye yazar. İşlemlerin kendisi ana zincire gitmez.

Kullanıcı çıkmak istediğinde, sahip olduğu bakiyenin bu köklerden birinin altında yer aldığını gösteren bir [[merkle-proof|Merkle kanıtı]] sunar. Çıkış hemen gerçekleşmez: bir [[challenge-period|itiraz penceresi]] açılır. Bu pencerede başka biri, çıkanın o parayı daha önce harcadığını gösteren bir kanıt sunarak çıkışı iptal ettirebilir.

## Dikkat

Tasarımın kırılma noktası [[data-availability|veri erişilebilirliğidir]]. Operatör bir bloğun kökünü yazıp verisini yayımlamazsa, kullanıcı çıkış kanıtını üretemez. Bu yüzden Plasma'da kullanıcı kendi geçmiş verisini saklamak ve gerektiğinde itiraz penceresini kaçırmadan harekete geçmek zorundadır. Herkesin aynı anda çıkmaya çalıştığı bir senaryoda ana zincirin bu çıkışları yetiştirmesi de ayrı bir kısıttır.

Genel amaçlı akıllı sözleşmeleri desteklemek de zordu: "kimin neyi çıkarmaya hakkı var" sorusu basit token transferlerinde cevaplanabiliyor, paylaşılan durumda cevaplanamıyordu. Bu kısıtlar, sonraki çalışmaların veriyi doğrudan ana zincire yazan [[rollup|rollup]] tasarımlarına yönelmesinin başlıca sebebi oldu.
