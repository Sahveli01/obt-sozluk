---
term: "AI Agent"
tr: "Yapay zekâ ajanı"
aliases: ["ai ajanı", "yapay zeka ajanı"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Bir hedef verildiğinde adımlarına kendi karar veren, araç çağırarak iş yapan dil modeli tabanlı yazılım."
related: [agentic-workflow, autonomous-agent, tool-use-function-calling, orchestration, human-in-the-loop]
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

AI agent, bir dil modelinin etrafına "gözlemle, karar ver, araç çağır" döngüsü kurulmuş hâlidir. Sıradan bir sohbette model soruya cevap verir ve durur. Ajanda ise ona bir hedef verilir; hangi adımı atacağına kendisi karar verir, [[tool-use-function-calling|araç çağırarak]] dosya okur, komut çalıştırır, arama yapar, sonucu görüp bir sonraki adımı seçer.

Türkçede "ajan" karşılığı yerleşmiştir; casus anlamında değil, "biri adına iş yapan" anlamındadır.

## Nasıl çalışır?

Bir ajanın üç parçası vardır. **Model** kararı verir. **Araçlar** onun elleridir: dosya sistemi, terminal, [[api|API]] çağrıları, veritabanı. **Döngü** ise şudur: modelin istediği araç çağrısı çalıştırılır, çıktı [[context-window|bağlam penceresine]] geri yazılır, model bu yeni bilgiyle devam eder.

Döngünün ne zaman duracağı da tasarımın parçasıdır: hedefe ulaşınca, adım sınırına gelince ya da [[human-in-the-loop|insana]] soracak bir şey çıkınca.

## Örnek

"Şu testi çalıştır, kırmızıysa düzelt" dediğinde ajan testi çalıştırır, hata çıktısını okur, ilgili dosyayı açar, bir değişiklik yapar ve testi yeniden çalıştırır. Hiçbir adımı sen tek tek söylemedin; sıralamayı çıktılara bakarak o kurdu.

## Dikkat

"Ajan" etiketi çok geniş kullanılıyor. Adımları önceden senin tanımladığın bir akış aslında [[agentic-workflow|agentic workflow]]'tur; insan onayı almadan uzun süre tek başına çalışan bir sistem ise [[autonomous-agent|otonom ajandır]]. Üçü arasındaki fark özerklik derecesidir.

Bir ajan yanlış kararı da aynı kararlılıkla uygular. Bu yüzden ajana verilen yetki, hata yaptığında göze alabileceğin zararla sınırlı tutulur.
