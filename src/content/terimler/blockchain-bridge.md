---
term: "Blockchain Bridge"
tr: "Blokzincir köprüsü"
aliases: ["bridge", "köprü"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "İki zincir arasında varlık ve mesaj geçişini sağlayan, geçişin gerçekliğine bir güven mekanizmasıyla hükmeden düzenek."
related: [canonical-bridge, third-party-bridge, lock-and-mint, wrapped-token, bridge-exploit, cross-chain-messaging]
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

Köprü, iki zincir arasında varlık ya da mesaj geçiren düzenektir. Kilit soru "nasıl taşıyor" değil, **kime güveniyorsun**dur; köprü türleri arasındaki bütün fark bu cevapta toplanır.

Önce şunu netleştirmek gerekir: hiçbir şey gerçekten karşıya geçmez. Kaynak zincirdeki jeton kaynak zincirde kalır. Hedef zincirde ya onu temsil eden yeni bir token basılır ya da orada zaten duran bir havuzdan sana ödeme yapılır.

## Nasıl çalışır?

Her köprü iki ayrı karar verir.

**Hükmü kim veriyor?** "Kaynak zincirde şu gerçekten oldu" cümlesini birinin söylemesi gerekir. Bu ya dışarıdan bir imzacı kümesidir (genelde bir [[multisig|çoklu imza]] ya da bağımsız bir doğrulayıcı grubu), ya da karşı zincirin konsensüsünü doğrudan doğrulayan bir [[light-client|hafif istemci]] koduna bağlıdır. Bu ayrım [[canonical-bridge|kanonik köprü]] ile [[third-party-bridge|üçüncü taraf köprü]] arasındaki farkın da özüdür.

**Varlık nasıl yer değiştiriyor?** Üç temel yöntem var: kaynakta kilitleyip hedefte basmak ([[lock-and-mint]]), kaynakta yakıp hedefte basmak ([[burn-and-mint]]) ve iki tarafta hazır havuzlar tutup hedefteki havuzdan ödemek ([[liquidity-network-bridge|likidite ağı köprüsü]]).

Aradaki mesajı fiilen taşıyan yazılıma [[relayer]] denir; taşımak ile hüküm vermek ayrı işlerdir ve iyi tasarımlarda ayrı taraflardadır.

## Dikkat

Köprüden geçirdiğin varlık hedef tarafta bir alacak hakkına dönüşür: elindeki token, kaynaktaki aslı geri isteme sözüdür. Sözü veren düzenek çalışmazsa token zincirde durmaya devam eder, karşılığı durmaz.

Köprülerin saldırganlar için neden bu kadar çekici olduğunu ve nelere dikkat edilmesi gerektiğini [[bridge-exploit|köprü istismarı]] ayrıca anlatıyor.
