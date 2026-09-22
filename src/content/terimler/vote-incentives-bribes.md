---
term: "Vote Incentives (Bribes)"
tr: ""
aliases: []
category: defi
subcategory: "Getiri"
level: ileri
short: "Yönetişim oylamasında oy gücünü belirli bir yöne çevirmeleri için oy sahiplerine yapılan açık ödeme."
related: [vote-escrowed-token-vetoken, governance-attack, governance-token, liquidity-mining, protocol-owned-liquidity]
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

Vote incentives, bir yönetişim oylamasında oy gücünü belirli bir yöne çevirmeleri için oy sahiplerine yapılan ödemedir. Sektörde bu ödemelere kısaca "bribe" — yani rüşvet — de denir. Bu ad bir suç iddiası değil, mekanizmanın açıkça benimsenmiş takma adıdır: ödeme gizli yapılmaz, çoğu zaman bunun için kurulmuş, herkesin teklifleri görebildiği bir platform üzerinden yapılır.

Türkçede yerleşik bir karşılığı yok; "oy teşviki" diye açıklanır ama terim olarak İngilizcesi kullanılır.

## Nasıl çalışır?

Zemin şudur: bazı protokoller dağıttıkları ödülleri hangi havuza ne oranda vereceklerini periyodik bir oylamayla belirler. Oy gücü genellikle kilitlenmiş token miktarıyla ölçülür — [[vote-escrowed-token-vetoken|ve-token]] modeli bunun yaygın hâlidir.

Havuzuna ödül akmasını isteyen bir protokol, oy sahiplerine doğrudan teklif verir: "bu dönem oyunu şu havuza yönlendirirsen karşılığında sana şu token'dan veririm." Hesap iki taraf için de sadedir. Teklif eden, ödediği tutar karşılığında havuzuna akacak ödülü satın almış olur; oy sahibi ise oyunu kendi kanaatine göre kullanmak yerine kiraya vermiş olur. Ortaya, oy gücünün dönem dönem fiyatlandığı ayrı bir piyasa çıkar.

## Dikkat

Bu mekanizma oylamanın cevapladığı soruyu değiştirir. Masadaki soru artık "protokol için en iyisi hangisi" değil, "bu dönem en çok kim ödüyor" hâline gelir. Oy veren için bu ikisi aynı şey değildir: ödeme bugün cebine girer, kararın protokole maliyeti ise zamana yayılır ve oy gücü kiralanmışsa o maliyet oy verenin üstünde kalmayabilir.

Ödeme tarafından bakınca soru bir güvenlik sorusuna dönüşür: oy gücünün yeterince büyük kısmı satın alınabiliyorsa, yönetişimden geçen kararlar da parayla belirlenebilir demektir. Uç durumda bu bir [[governance-attack|yönetişim saldırısıyla]] aynı kapıya çıkar; aradaki tek fark, birinde ödemenin ilan edilmiş bir teşvik, diğerinde sessiz bir devralma olmasıdır.

Sonuç kalıcı da değildir. Teşvikle yönlendirilen ödül, kiralanan likiditeyle ([[liquidity-mining]]) aynı döngüye tabidir: ödeme durduğu anda oy da, onun getirdiği likidite de başka bir havuza gider. Protokollerin kendi oy gücüne ya da [[protocol-owned-liquidity|kendi likiditesine]] sahip olmayı tartışması bu yüzdendir.
