---
term: "Appchain"
tr: ""
aliases: ["app-chain"]
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Tek bir uygulama ya da birbirine yakın birkaç uygulama için kurulan, kurallarını kendi belirleyen zincir."
related: [layer-3, modular-blockchain, rollup-as-a-service-raas, sovereign-rollup, blockchain-bridge, liquidity]
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

Appchain, tek bir uygulama ya da birbirine yakın birkaç uygulama için kurulan zincirdir. Genel amaçlı bir zincirde blok alanını herkesle paylaşırsın: başka bir uygulamanın yoğun günü senin kullanıcının ücretini yükseltir. Kendi zincirinde ise blok alanı senindir; ücret politikasını, blok süresini ve hangi işlemlere öncelik verileceğini sen belirlersin.

Terim "uygulamaya özel zincir" diye çevrilebilir ama toplulukta İngilizcesiyle kullanılır.

## Benzetme

Herkese açık bir oyun sunucusunda oynamakla kendi sunucunu açmak arasındaki fark gibi. Ortak sunucuda kalabalık hazır gelir ama kuralları başkası koyar ve yoğun saatte herkesle birlikte beklersin. Kendi sunucunda haritayı da kuralları da sen belirlersin; buna karşılık oyuncuyu da, düzeni sağlayacak kişiyi de kendin bulmak zorundasın.

## Nasıl çalışır?

İki kurulum yolu vardır ve fark, güvenliğin nereden geldiğidir.

Kendi doğrulayıcı kümesiyle bağımsız bir zincir kurabilirsin ([[sovereign-rollup|egemen]] tasarımlar bu uca yakındır). Her şeyi kontrol edersin, ama ağın güvenliğini sıfırdan inşa etmen, doğrulayıcı bulman ve onları sürdürülebilir biçimde ödüllendirmen gerekir.

Ya da zinciri bir [[rollup|rollup]] olarak kurar, güvenliği alttaki zincirden ödünç alırsın; [[rollup-as-a-service-raas|hazır rollup hizmetleri]] bu kurulumu birkaç ayara indirger. Karşılığında alttaki zincirin kurallarına, ücretlerine ve takvimine bağlı kalırsın.

Her iki yolda da zincir dışarıya kapalı doğar: kullanıcı ve [[liquidity|likidite]] başka ağlardadır. Dışarıyla konuşmak için bir [[blockchain-bridge|köprü]] ya da [[cross-chain-messaging|zincirler arası mesajlaşma]] kurmak zorunludur ve bu parça çoğu zaman sistemin en kırılgan yeridir.

## Dikkat

"Kendi zincirim" bağımsızlık gibi görünür, ama sorumluluk da devredilmez. Doğrulayıcıyı kim işletiyor, zinciri kim durdurabilir, bir hata çıktığında yükseltmeye kim karar veriyor? Pek çok appchain'de bu soruların cevabı az sayıda taraftır; kullanıcının güven varsayımı, genel amaçlı bir zincirdekinden dar olabilir.

Bir de dağılma maliyeti vardır: her yeni zincir kullanıcıyı ve likiditeyi biraz daha böler. Kendi zincirine geçmek, ancak paylaşılan blok alanı sana gerçekten dar geldiğinde kazançlıdır.
