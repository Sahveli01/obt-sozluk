---
term: "Guardrails"
tr: ""
aliases: ["guardrail", "guardrails"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: baslangic
short: "Bir yapay zekâ sisteminin çalışma anında ne yapıp ne yapamayacağını belirleyen, modelin dışındaki sınırlar."
related: [alignment, prompt-injection, ai-agent, system-prompt, human-in-the-loop]
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

Guardrail, model çalışırken devreye giren sınırdır: hangi girdinin işleneceği, hangi çıktının kullanıcıya gideceği, modelin hangi aracı çağırabileceği bu katmanda belirlenir. Modelin içinde değil, etrafında durur ve modelin ne yapmak istediğinden bağımsız çalışır.

Terim Türkçeye çevrilmiyor; "korkuluk" kelimesi bu teknik anlamı taşımadığı için sektörde İngilizce hâliyle kullanılıyor.

## Benzetme

Bir sigorta, cihazın ne yapmaya çalıştığını bilmez; yalnızca eşiği aşan akımı keser. Cihazın doğru tasarlanmış olması ayrı bir iştir, sigorta yine de takılır — çünkü tasarımın yanılabileceği baştan kabul edilmiştir.

## Dikkat

Guardrail ile [[alignment]] sık karıştırılır. Alignment, modelin eğilimlerini eğitim yoluyla insan niyetine yaklaştırma işidir; guardrail ise o eğilime rağmen kalan riski dışarıdan kısar. Biri modelin kendisiyle, diğeri modelin etrafıyla ilgilenir.

[[system-prompt|Sistem promptu]] tek başına guardrail sayılmaz: o da modele verilen bir metindir ve işe yaraması modelin onu izlemesine bağlıdır. Gerçek sınır, model ne çıktı verirse versin uygulanan kontroldür — araç izinleri, çıktı filtreleri, harcama ve hız limitleri, riskli adımlarda [[human-in-the-loop|insan onayı]].
