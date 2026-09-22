---
term: "Cosmos"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "Her uygulamanın kendi egemen zincirini kurmasını ve zincirlerin IBC ile doğrudan konuşmasını hedefleyen ağ mimarisi."
related: [inter-blockchain-communication-ibc, tendermint-cometbft, appchain, light-client, polkadot]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Cosmos tek bir zincirin adı değil, bir yaklaşımın adıdır: bütün uygulamaları aynı zincirin içine tıkıştırmak yerine, her uygulama kendi zincirini kursun ve zincirler birbirine doğrudan konuşsun. Çıkış noktası, ortak bir zincirde bir uygulamanın yoğunlaşmasının başka bir uygulamanın kullanıcısını cezalandırmasıdır.

## Nasıl çalışır?

Zincir kurmak için hazır bir çatı ve bir uzlaşma motoru vardır. Motor [[tendermint-cometbft|CometBFT]] ailesindendir: doğrulayıcılar her blok için oy turları yapar, üçte ikilik çoğunluk sağlandığında blok geri alınamaz hâle gelir. Yani kesinlik beklemeli değil, tur biter bitmez gelen türdendir.

Zincirler arası konuşma [[inter-blockchain-communication-ibc|IBC]] ile kurulur. Bir zincir, karşı zincirin başlıklarını bir [[light-client|hafif istemci]] olarak takip eder ve gelen mesajın gerçekten orada onaylandığını kendisi doğrular. Böylece iki zincir, aralarında güvenilen bir aracı şirket ya da imzacı kurulu olmadan varlık ve mesaj taşıyabilir.

Geliştirici bu çatıyla kendi [[appchain|uygulama zincirini]] yazar: ücret kuralını, işlem türlerini, hatta blok üretiminin kime açık olduğunu kendisi belirler.

## Dikkat

Egemenliğin bedeli güvenliktir. Her zincir kendi doğrulayıcı kümesini toplamak ve o kümeyi ödüllendirecek bir ekonomi kurmak zorundadır. Yeni ve küçük bir zincirin ele geçirilmesi, büyük ve yerleşik bir ağın ele geçirilmesinden yapısal olarak daha kolaydır.

İkinci bedel dağınıklıktır: likidite, kullanıcı ve araçlar zincirlere bölünür; bir uygulamanın hangi zincirde yaşadığını bilmek kullanıcının işi hâline gelir. Yazıldığı tarih itibarıyla ekosistemde, küçük zincirlerin güvenliği daha büyük bir doğrulayıcı kümesinden ödünç almasına imkân veren yaklaşımlar da denenmektedir. [[polkadot|Polkadot]] aynı çoklu zincir fikrini farklı bir güvenlik modeliyle kurar.
