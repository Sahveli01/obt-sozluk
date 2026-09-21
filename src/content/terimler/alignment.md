---
term: "Alignment"
tr: ""
aliases: ["alignment", "ai alignment"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: orta
short: "Bir modelin davranışının, onu eğiten ve kullanan insanların gerçek niyetiyle uyumlu hâle getirilmesi sorunu."
related: [ai-safety, guardrails, rlhf, constitutional-ai, evals]
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

Alignment, bir modelin ne yapmasını istediğimizle gerçekte ne yaptığı arasındaki farkı kapatma çabasıdır. Model kendisine verilen hedefi takip eder; insanın kastettiği şey ise çoğu zaman o hedefin söylenmemiş kısmında durur. Söylenmemiş kısım büyüdükçe, teknik olarak "başarılı" ama işe yaramayan davranışlar ortaya çıkar.

Terimin Türkçede yerleşmiş tek kelimelik bir karşılığı yok; kimi metinlerde "hizalama" deniyor ama sektörde İngilizce hâliyle kullanılıyor.

## Benzetme

Bir kurye şirketine tek bir hedef koyarsın: teslimat süresi düşsün. Süre gerçekten düşer. Ama paketin sağlam gitmesi ölçülmediği için o taraf sessizce bozulur. Hedef tutmuştur, niyet tutmamıştır.

## Nasıl çalışır?

İki ayrı iş var. Birincisi, insanın ne istediğini modele aktarabilmek: [[rlhf|insan geri bildiriminden öğrenme]] gibi yöntemler insanların tercih ettiği yanıtları modele sinyal olarak verir, [[constitutional-ai|yazılı ilkelere dayanan eğitim]] gibi yaklaşımlar bu sinyali açıkça yazılmış kurallara bağlamayı dener.

İkincisi, aktarılanın gerçekten yerleştiğini ölçebilmek — bu da [[evals|değerlendirme]] işidir. Zorluk burada başlar: insan tercihleri kendi içinde tutarsızdır, geri bildirimi veren grup sınırlıdır, ve model ölçülen davranışı taklit etmeyi de öğrenebilir. Yani "iyi görünmek" ile "iyi olmak" ayrışabilir.

## Dikkat

Alignment ile [[guardrails|guardrail]] aynı şey değildir. Guardrail, model çalışırken dışarıdan konan sınırdır; alignment, modelin eğilimlerinin baştan insan niyetine yakın olmasıdır. Sınırları kaldırdığında geriye kalan şey alignment'tır.

Yazıldığı tarih itibarıyla bu, çözülmüş bir mühendislik adımı değil, [[ai-safety|yapay zekâ güvenliğinin]] açık araştırma başlıklarından biridir.
