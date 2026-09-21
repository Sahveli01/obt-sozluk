---
term: "Orphan Block"
tr: "Öksüz blok"
aliases: ["öksüz blok", "stale block"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Kurallara uygun üretildiği hâlde ağın benimsediği zincirin dışında kalan ve sonunda terk edilen blok."
related: [block, uncle-block, chain-reorganization-reorg, longest-chain-rule, mempool, block-time]
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

Öksüz blok, kurallara uygun biçimde üretilmiş ama ağın üzerinde anlaştığı zincirin dışında kalmış bir [[block|bloktur]]. İçindeki işlemler geçersiz değildir; blok yalnızca kaybeden dala düşmüştür.

## Nasıl çalışır?

Böyle bir blok, iki üreticinin neredeyse aynı anda aynı [[block-height|yükseklikte]] blok yayınlamasıyla ortaya çıkar. Ağın bir kısmı önce birini, bir kısmı diğerini duyar ve zincir kısa süreliğine ikiye ayrılır. Düğümler [[fork-choice-rule|fork tercih kuralını]] uygular — iş ispatı kullanan ağlarda bu genellikle [[longest-chain-rule|en uzun zincir kuralıdır]] — ve bir sonraki blok hangi dalın üstüne gelirse o dal kazanır, diğeri terk edilir.

Terk edilen bloktaki işlemler kaybolmaz: çoğu zaman [[mempool|mempool'a]] geri düşer ve kazanan zincirdeki sonraki bloklara girer. Ancak o işlemler için sayılmış onaylar sıfırlanır.

Bu olayların sıklığı [[block-time|blok süresiyle]] ilgilidir; bloklar ne kadar sık üretilirse çakışma ihtimali o kadar artar.

## Dikkat

"Öksüz" kelimesi tarihsel olarak iki ayrı şey için kullanılmıştır: ebeveyni bilinmeyen blok ve geçerli ama terk edilmiş blok. Bugün yaygın kullanım ikincisidir; İngilizcede buna "stale block" da denir.

Bazı ağlarda bu bloklar tamamen çöpe gitmez, [[uncle-block|amca blok]] olarak kısmen ödüllendirilir. Kullanıcı tarafındaki dersi ise şu: az sayıda onay taşıyan bir işlemi kesinleşmiş sayma, terk edilecek bir dalda olabilir.
