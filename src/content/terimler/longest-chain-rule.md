---
term: "Longest Chain Rule"
tr: "En uzun zincir kuralı"
aliases: ["en uzun zincir kuralı"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "İki geçerli zincirden arkasında en çok iş birikmiş olanı seçen dal seçim kuralı; ölçü blok sayısı değil, toplam zorluktur."
related: [fork-choice-rule, nakamoto-consensus, proof-of-work-pow, difficulty, chain-reorganization-reorg, ghost-protocol]
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

Adı yanıltıcıdır. Kural "daha çok blok içeren zinciri seç" demez; **arkasında en çok iş birikmiş** zinciri seç der. Ölçüt, zincirdeki blokların [[difficulty|zorluk]] değerlerinin toplamıdır. Bu yüzden İngilizce metinlerde de sık sık "heaviest chain" ya da "most work" ifadeleri kullanılır. İş ispatı kullanan ağlarda uygulanan [[fork-choice-rule|dal seçim kuralının]] en bilinen hâlidir.

## Nasıl çalışır?

Çoğu zaman iki ölçüt aynı cevabı verir, çünkü aynı ağda ardışık blokların zorluğu birbirine yakındır; blok saymak pratikte iş toplamını saymakla aynı kapıya çıkar. Önemli olan, ayrıştıkları durumdur: düşük zorlukta üretilmiş uzun bir zincir, yüksek zorlukta üretilmiş kısa bir zinciri geçemez.

Kural bunu net söylemeseydi açık bir kaçamak doğardı: saldırgan, zorluğun düştüğü bir dalda ucuza çok sayıda blok üretip yalnızca blok sayısıyla öne geçmeye çalışırdı.

Bir düğüm daha ağır bir zincir duyduğunda kendi ucundaki blokları geri alıp yeni dalı benimser ([[chain-reorganization-reorg|reorg]]). Geri alınan bloklardaki işlemler çoğunlukla [[mempool|mempool'a]] döner ve yeniden işlenir; o işlemler için sayılmış onaylar sıfırlanır.

## Dikkat

Kural bir güvenlik garantisi değil, bir seçim yöntemidir. "En çok iş" ölçüsünün anlamlı olması, işin gerçekten pahalı olmasına bağlıdır. Üretim gücünün çoğunluğu tek elde toplanırsa aynı kural, saldırganın ürettiği zinciri geçerli ilan eder ([[51-attack|%51 saldırısı]]).

İkincisi: kural yalnızca **geçerli** zincirler arasından seçim yapar. Kurallara aykırı bir blok ne kadar iş taşırsa taşısın düğümler tarafından reddedilir. Ağır olmak, geçerli olmak değildir.
