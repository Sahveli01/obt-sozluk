---
term: "Subagent"
tr: "Alt ajan"
aliases: ["sub-agent"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Ana ajanın belirli bir alt işi devrettiği, kendi bağlam penceresinde çalışıp yalnızca sonucu döndüren yardımcı ajan."
related: [multi-agent-system, ai-agent, context-window, orchestration, claude-code]
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

Alt ajan, bir ana [[ai-agent|ajanın]] belirli bir alt işi devrettiği yardımcı ajandır. Kendi talimatı, kendi araç kümesi ve en önemlisi kendi [[context-window|bağlam penceresi]] vardır; işi bitince ana ajana bütün ayrıntıyı değil yalnızca sonucu döndürür.

## Nasıl çalışır?

Ana ajan bir alt ajan başlatırken ona dar bir görev tanımı verir: "şu klasörde bu fonksiyonun nerede tanımlandığını bul". Alt ajan onlarca dosya okuyabilir, ama bu okumaların hepsi kendi bağlamında kalır; ana ajana dönen şey birkaç cümlelik cevaptır.

Bu yüzden alt ajanlar iki işe yarar: uzun ve dağınık aramaları ana bağlamdan uzak tutmak, ve birbirinden bağımsız işleri aynı anda çalıştırmak.

## Örnek

Bir hatanın kaynağını ararken ana ajan üç alt ajan başlatır: biri testleri çalıştırır, biri ilgili modülü okur, biri son değişiklikleri inceler. Üçü de sadece bulgusunu yazar; ana ajan bu üç bulguyla karar verir ve düzeltmeyi kendisi yapar.

## Dikkat

Alt ajan, ana ajanın gördüğü her şeyi görmez. Görev tanımı eksikse yanlış soruya doğru cevap döndürür ve bunu fark etmek zordur, çünkü ana ajan alt ajanın gerekçesini değil sonucunu okur.

Devredilen iş, birkaç cümlede özetlenebilecek kadar kapalı uçlu olmalıdır. "Bu özelliği tasarla" gibi açık uçlu bir iş devredildiğinde ana ajan sonucu değerlendirecek bağlamdan yoksun kalır; o zaman iki ajan da işin tamamını bilmiyor demektir.
