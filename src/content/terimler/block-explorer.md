---
term: "Block Explorer"
tr: "Blok gezgini"
aliases: ["blok gezgini", "zincir gezgini"]
category: temeller
subcategory: "Ağ ve node"
level: baslangic
short: "Blokları, işlemleri ve adresleri arayıp insanın okuyabileceği biçimde gösteren web arayüzü."
related: [transaction-hash-txid, block, node, indexer, mainnet]
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

Blok gezgini, bir zincirdeki verileri arayabildiğin bir web sitesidir. Bir işlem kimliği ([[transaction-hash-txid|TxID]]), bir adres ya da bir [[block|blok]] numarası yapıştırırsın; karşına o işlemin onaylanıp onaylanmadığı, ne zaman hangi bloğa girdiği, ne kadar ücret ödendiği ve adresin geçmişi çıkar.

Zincirdeki veri aslında herkese açıktır ama ham haliyle okunacak gibi değildir. Gezgin bu veriyi sürekli toplayıp düzenler ve insan diline çevirir.

## Benzetme

Şehrin toplu taşıma uygulaması gibidir. Otobüslerin nerede olduğunu, hangi seferin geçtiğini, durağa ne zaman varacağını gösterir — ama otobüsleri o uygulama çalıştırmaz. Veri zaten ortadadır; uygulama onu okunur hâle getirir. Aynı veriden başka biri bambaşka bir uygulama yapabilir ve ikisi de doğru sonucu verir.

## Örnek

Bir uygulamada "işlem gönderildi" yazdı ama cüzdanına bir şey gelmedi. İşlem kimliğini gezgine yapıştırırsın. Üç ihtimal görürsün: işlem hiç görünmüyordur (ağa ulaşmamıştır), beklemede görünüyordur (henüz bloğa girmemiştir) ya da "failed" görünüyordur — bu durumda işlem zincire yazılmış ama başarısız olmuştur; ücreti yine de ödenmiştir.

## Dikkat

Blok gezgini merkezi bir servistir ve zincirin kendisi değildir. Gösterdiği şey, kendi [[node|node'undan]] ve [[indexer|indeksleyicisinden]] çıkardığı yorumdur; geri kalabilir, hata yapabilir ya da erişilemez olabilir. Etiketler ("borsa cüzdanı", "dolandırıcı") çoğunlukla gezginin kendi eklediği bilgidir, zincirde yazmaz.
