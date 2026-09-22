---
term: "Client (Blockchain)"
tr: "İstemci"
aliases: []
category: konsensus
subcategory: "Ağ katmanı"
level: baslangic
short: "Bir blockchain protokolünün kurallarını uygulayan yazılım; aynı protokolün birbirinden bağımsız birden çok istemcisi olabilir."
related: [node, protocol, execution-client, consensus-client, client-diversity]
disambiguation: [client-web]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Blockchain'de istemci, protokolün kurallarını uygulayan yazılımdır. Bir [[node|node]] çalıştırmak, bu yazılımlardan birini kendi bilgisayarında çalıştırmak demektir.

Protokol ile istemci aynı şey değildir. [[protocol|Protokol]] kuralların kendisidir: bir bloğun ne zaman geçerli olduğunu, node'ların birbirine ne söyleyeceğini tarif eder. İstemci o tarifin bir uygulamasıdır. Aynı protokolü farklı ekipler, farklı programlama dillerinde, birbirinden habersiz yazabilir; hepsi aynı ağda birlikte çalışır.

Bazı ağlarda istemcinin işi ikiye ayrılmıştır: işlemleri çalıştıran [[execution-client|yürütme istemcisi]] ile sıraya karar veren [[consensus-client|konsensüs istemcisi]] yan yana çalışır.

## Benzetme

Satranç kuralları ile satranç programları gibi. Kurallar tek bir yerde yazılıdır ve yoruma açık değildir. O kuralları çalıştıran onlarca ayrı program vardır; içleri bambaşkadır, kimi hızlıdır kimi yavaş. Ama "bu hamle geçerli mi" sorusuna hepsi aynı cevabı vermek zorundadır. Biri başka cevap veriyorsa hata kurallarda değil, o programdadır.

## Dikkat

Adın parantezli olmasının sebebi şu: yazılımda "istemci" genellikle bir sunucudan hizmet isteyen taraf demektir — tarayıcın bir web sunucusuna istek gönderir ([[client-web|web'deki istemci]]). Blockchain'de üstünde anlaşılmış böyle bir sunucu yoktur. İstemciler birbirine eşit düzeyde bağlanır ve her biri kuralları kendi başına, baştan sona uygular.
