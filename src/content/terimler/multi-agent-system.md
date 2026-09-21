---
term: "Multi-agent System"
tr: "Çok ajanlı sistem"
aliases: ["multi agent sistem"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Bir işi tek ajana yaptırmak yerine, her biri kendi rolü ve kendi bağlamı olan birden çok ajana bölen sistem."
related: [ai-agent, subagent, orchestration, agentic-workflow, context-window]
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

Çok ajanlı sistem, bir işi tek bir [[ai-agent|ajana]] yaptırmak yerine her biri kendi rolü, kendi araçları ve kendi bağlamı olan birden çok ajana bölmektir. Biri araştırır, biri yazar, bir üçüncüsü yazılanı eleştirir.

## Nasıl çalışır?

Üç şeyin tanımlanması gerekir: **roller** (her ajanın görevi ve hangi araçlara erişeceği), **iletişim** (birbirlerine ne göndereceği) ve **koordinasyon** (kimin kimi çağırdığı). En yaygın düzen, bir yönetici ajanın işi bölüp [[subagent|alt ajanlara]] dağıtması ve gelen sonuçları birleştirmesidir; ajanların ortak bir yazı tahtası üzerinden serbestçe konuştuğu düzenler de vardır.

Kazanç çoğu zaman hızdan değil bağlamdan gelir: her ajan yalnızca kendi işine ait bilgiyi taşır, [[context-window|bağlam penceresi]] alakasız ayrıntıyla dolmaz.

## Örnek

Bir rapor hazırlanırken üç arama ajanı farklı kaynakları aynı anda tarar ve her biri yalnızca özetini döndürür. Yazan ajan bu üç özetle çalışır; taranan sayfaların ham hâlini hiç görmez.

## Dikkat

Her iş bölünmeyi hak etmez. Ajan sayısı arttıkça maliyet ve gecikme artar, ajanlar birbirinin yanlışını doğru sanarak taşıyabilir, aynı işi iki kez yapabilirler. İyi tanımlanmış tek bir ajan, gevşek tanımlanmış üç ajandan çoğu zaman daha iyi sonuç verir.

Terim yapay zekâ sohbet araçlarından eskidir: dağıtık sistemler ve oyun kuramında "multi-agent system", birbiriyle etkileşen özerk yazılımların genel adıdır.
