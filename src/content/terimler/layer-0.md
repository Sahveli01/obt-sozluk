---
term: "Layer 0"
tr: "Katman 0"
aliases: ["katman 0", "l0"]
category: temeller
subcategory: "Temel kavramlar"
level: ileri
short: "Üzerinde birden çok bağımsız zincirin kurulmasını ve birbiriyle konuşmasını sağlayan altyapı katmanı."
related: [layer-1, interoperability, cross-chain, appchain, cosmos]
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

Layer 0, tek bir zincir değil, zincir kurmak için kullanılan ortak altyapıdır. Sağladığı şeyler kabaca üçtür: zincir oluşturmayı kolaylaştıran bir geliştirme çatısı, zincirler arasında standart bir mesajlaşma yolu ve çoğu zaman paylaşılan bir güvenlik katmanı.

Amaç, her yeni projenin kendi konsensüsünü ve doğrulayıcı ağını sıfırdan kurmak zorunda kalmamasıdır. Bunun yerine kendi [[appchain|uygulama zincirini]] alır, ihtiyacına göre ayarlar ve hazır bir ağa bağlanır.

## Nasıl çalışır?

İki tasarım yaygındır.

**Paylaşılan güvenlik.** Merkezde bir ana ağ durur ve ona bağlanan zincirler onun doğrulayıcı kümesinden güvenlik kiralar. Yeni zincir kendi doğrulayıcılarını toplamak zorunda kalmaz.

**Ortak standart.** Zincirler güvenliklerini kendileri sağlar ama aralarındaki iletişim ortak bir protokole uyar. [[cosmos|Cosmos]] ekosistemindeki [[inter-blockchain-communication-ibc|IBC]] bu yaklaşımın bilinen örneğidir; zincirler birbirinin durumunu [[light-client|hafif istemci]] üzerinden doğrular, aradaki mesaj bir üçüncü tarafa emanet edilmez.

Her iki tasarımda da kazanç aynı yerden gelir: yeni bir zincir başlatmanın maliyeti, sıfırdan bir doğrulayıcı ağı kurmaktan çok daha düşüktür. Bir ekip, uygulamasına özel kurallar yazıp haftalar içinde kendi zincirini ayağa kaldırabilir.

## Dikkat

"Layer 0" resmî bir sınıflandırma değil, pazarlama dilinde yerleşmiş bir etikettir; farklı projeler onunla farklı şeyler kastedebilir. Bazı kaynaklar aynı ifadeyle internetin fiziksel ağ altyapısını anlatır.

Değerlendirirken sorulacak somut soru şudur: bu zincirler güvenliklerini gerçekten paylaşıyor mu, yoksa yalnızca ortak bir yazılım çatısı mı kullanıyorlar? İkincisi, birincisinin sunduğu garantileri vermez.
