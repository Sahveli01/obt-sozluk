---
term: "Central Bank Digital Currency (CBDC)"
tr: "Merkez bankası dijital parası"
aliases: ["cbdc"]
category: piyasa
subcategory: "Fiat ve saklama"
level: orta
short: "Merkez bankasının doğrudan ihraç ettiği dijital para; kripto paranın aksine ihraç ve kural yetkisi tek merkezdedir."
related: [fiat, cryptocurrency, stablecoin, permissioned-blockchain, permissionless, custody]
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

CBDC, bir merkez bankasının kendi para birimini dijital biçimde doğrudan ihraç etmesidir. Bugün banka hesabında gördüğün tutar aslında ticari bir bankaya karşı alacaktır; CBDC'de ise elindeki tutar doğrudan merkez bankasının yükümlülüğüdür. Yeni bir para birimi değildir — karşılığı [[fiat|fiat paranın]] kendisidir, yalnızca tutulma ve aktarılma biçimi değişir.

## Nasıl çalışır?

Tasarım tercihleri sonucu belirler ve bunlar birbirinden bağımsız seçilebilir.

Kim kullanacak: perakende tasarım vatandaşın günlük ödemesi için, toptan tasarım yalnızca finans kurumları arasındaki mutabakat için düşünülür.

Kayıt biçimi: hesap tabanlı tasarımda tutar bir kimliğe bağlı hesapta durur; jeton tabanlı tasarımda dijital bir birim cüzdandan cüzdana geçer ve çevrimdışı ödeme gibi seçenekler teknik olarak mümkün olabilir.

Dağıtım: merkez bankası hesapları doğrudan kendisi açabilir, ya da ihracı üstlenip kullanıcı tarafını bankalara bırakabilir.

Altta [[blockchain|blokzincir]] kullanılması şart değildir; kullanıldığında da katılımın izne bağlı olduğu bir ağ olur ([[permissioned-blockchain|izinli blokzincir]]).

## Dikkat

[[cryptocurrency|Kripto paralarla]] karıştırılır, oysa üç noktada ters yöndedir: ihraççı merkezîdir, arz politikası merkez bankasınındır ve ağa katılım herkese açık değildir ([[permissionless|izinsiz katılım]] yoktur). Bir [[stablecoin|stablecoin]] de değildir: stablecoin özel bir ihraççının bir para birimine sabitlemeye çalıştığı bir varlıktır, CBDC ise paranın kendisidir.

Tartışmanın merkezinde iki konu var: gizlilik ve programlanabilirlik. Kayıtları kimin görebildiği, harcamaya kural konulup konulamayacağı teknik bir zorunluluk değil, tasarım tercihidir — hesap tabanlı bir kayıt işlemleri kimliğe bağlar, farklı tasarımlar farklı sonuçlar doğurur. Yazıldığı tarih itibarıyla ülkeler bu tercihlerde ortaklaşmış değildir; kimi yerlerde araştırma, kimi yerlerde sınırlı denemeler yürütülüyor.
