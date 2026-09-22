---
term: "Execution Layer"
tr: "Yürütme Katmanı"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Modüler bir yığında işlemleri çalıştırıp yeni durumu hesaplama işini üstlenen katman."
related: [consensus-layer, settlement-layer, data-availability-layer, execution-client, modular-blockchain, state-transition]
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

Yürütme katmanı, işlemleri fiilen çalıştıran ve yeni durumu hesaplayan roldür. Sırası belirlenmiş işlemleri alır, her birini protokolün kurallarına göre işler, bakiyeleri ve sözleşme verilerini günceller. Ortaya çıkan sonuç zincirin yeni [[state-blockchain|durumudur]]; bu hesaba [[state-transition|durum geçişi]] denir.

Ücretlendirme de bu katmana aittir: bir işlemin ne kadar iş yaptığı, dolayısıyla ne kadar [[gas|gas]] harcadığı burada ölçülür.

## Nasıl çalışır?

Yürütme katmanı "hangi işlem önce gelecek" sorusunu sormaz; o soruyu [[consensus-layer|konsensüs katmanı]] cevaplar. Sıra hazır geldiğinde yürütme katmanının işi tek başına belirlenmiştir: aynı sırayı aynı kurallarla işleyen herkes aynı sonuca varmak zorundadır.

Rolü ayırmanın asıl getirisi şudur: yürütme katmanı tek bir zincir olmak zorunda değildir. Bir [[rollup|rollup]] kendi yürütme katmanını işletir, sırayı ve veriyi başka bir zincire bırakır. Aynı alt katmanın üstünde, birbirinden habersiz çalışan onlarca ayrı yürütme katmanı bulunabilir; her biri kendi kural setini, hatta kendi sanal makinesini seçebilir.

Bu esnekliğin bedeli, yürütme katmanlarının birbirini doğrudan çağıramamasıdır. Aynı katman içinde tek işlemde biten bir çağrı, iki ayrı katman arasında mesajlaşmaya ve beklemeye dönüşür.

## Dikkat

Katman ile istemciyi karıştırmamak gerekir. Yürütme katmanı bir iş tanımıdır, kurulabilir bir şey değildir; o işi senin makinende yapan program ise [[execution-client|yürütme istemcisidir]]. Aradaki sayılar da birbirini tutmaz: tek bir yürütme katmanının arkasında bağımsız yazılmış birkaç istemci olabileceği gibi, tek bir alt zincirin üstünde düzinelerce ayrı yürütme katmanı da olabilir.
