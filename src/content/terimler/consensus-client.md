---
term: "Consensus Client"
tr: "Konsensüs İstemcisi"
aliases: []
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Blokların sırasına ve hangi dalın geçerli sayılacağına karar veren istemci katmanı; işlemleri kendisi çalıştırmaz."
related: [execution-client, client-blockchain, validator, attestation, fork-choice-rule]
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

Konsensüs istemcisi, node'un "hangi blok, hangi sırada" sorusuyla ilgilenen yarısıdır. İşlemlerin içeriğine karışmaz; blokların sırasını, zamanlamasını ve zincirin hangi dalının geçerli sayılacağını takip eder.

Üç işi vardır: diğer node'larla blok ve oy mesajlarını paylaşmak, [[fork-choice-rule|dal seçim kuralını]] uygulayarak zincirin ucunu belirlemek, kesinleşme durumunu izlemek.

## Nasıl çalışır?

Bir bloğu kabul etmeden önce içeriğinin geçerli olduğundan emin olması gerekir, ama bunu kendisi hesaplamaz: bloğun gövdesini yanındaki [[execution-client|yürütme istemcisine]] verir ve "bu geçerli mi" diye sorar. Cevap olumsuzsa blok reddedilir; olumluysa konsensüs kuralları işlemeye devam eder. İki yazılım ayrıdır ama karar tek bir node'un kararıdır.

Node bir doğrulayıcı işletiyorsa ([[validator|validator]]) imzaların üretildiği taraf da burasıdır: sıra kendisine geldiğinde blok önerir, gelmediğinde gördüğü blok hakkındaki görüşünü imzalar ([[attestation|attestation]]). Çoğu kurulumda imzalama anahtarları ayrı bir süreçte tutulur; amaç, internete açık çalışan yazılım ile anahtarı elinde tutan yazılımı birbirinden ayırmaktır.

## Dikkat

Konsensüs istemcisi çalışmadan yürütme istemcisi tek başına zincirin ucunu bilemez. İkisinden biri durduğunda node'un tamamı işlevsiz kalır; ayrı yazılım olmaları onları ayrı node yapmaz.

İkinci karışıklık: konsensüs istemcisi çalıştırmak seni doğrulayıcı yapmaz. Node olarak ağı izlemek ile doğrulayıcı olmak ayrı şeylerdir; ikincisi teminat yatırmayı ve imzalama anahtarlarını devreye almayı gerektirir ([[staking|staking]]).
