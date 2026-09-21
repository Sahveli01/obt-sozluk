---
term: "Blockchain"
tr: "Blok zinciri"
aliases: ["blok zinciri", "blokzincir", "blokzinciri"]
category: temeller
subcategory: "Temel kavramlar"
level: baslangic
short: "Kayıtları bloklar hâlinde tutan, her bloğu bir öncekine kriptografiyle bağlayan ve kopyası binlerce bilgisayarda duran defter."
related: [ledger, block, node, decentralization, immutability, distributed-ledger-technology-dlt]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Blockchain, kayıtları **blok** denen paketler hâlinde saklayan ve her bloğu bir öncekine kriptografiyle bağlayan bir [[ledger|defter]] türüdür. Bu defterin tek bir kopyası yoktur: ağa katılan her [[node]] kendi kopyasını tutar ve yeni kayıtların ne olacağı konusunda diğerleriyle anlaşır.

Bağlantı şöyle kurulur. Her [[block|blok]], kendinden önceki bloğun özetini taşır. Eski bir bloğu değiştirmeye kalkarsan o bloğun özeti değişir, sonraki bloğun içindeki kayıt tutmaz ve zincir kopar. Bu yüzden geçmişi sessizce düzeltmek pratikte imkânsızdır; buna [[immutability|değiştirilemezlik]] denir.

## Benzetme

Sınıftaki herkesin aynı defterden bir kopyası olduğunu düşün. Yeni bir satır yazılacağı zaman herkes onu kendi defterine geçiriyor ve her sayfanın köşesine bir önceki sayfanın mührü vuruluyor. Biri gizlice eski bir sayfayı yırtıp yerine başkasını koyarsa mühürler tutmaz; otuz defterle karşılaştırıldığında sahtesi hemen belli olur.

## Dikkat

Blockchain, veritabanının daha iyisi değil; başka bir şeydir. Tek bir kurumun kontrol ettiği ve hızlı güncellenmesi gereken veriler için sıradan bir veritabanı hemen her zaman daha uygundur. Blockchain'in anlam kazandığı yer, birbirine güvenmeyen tarafların ortak bir kayıt üzerinde anlaşması gereken durumlardır.

Bir de şu: blockchain kaydın **değişmezliğini** sağlar, **doğruluğunu** değil. Zincire yanlış bir veri yazılırsa o yanlış da aynı sağlamlıkla orada durur.
