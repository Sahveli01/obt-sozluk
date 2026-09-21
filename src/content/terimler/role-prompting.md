---
term: "Role Prompting"
tr: ""
aliases: ["persona prompting"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Modele bir rol ya da bakış açısı vererek cevabın üslubunu ve odağını yönlendirme."
related: [system-prompt, few-shot-prompting, zero-shot-prompting, evals, prompt]
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

Role prompting, "sen deneyimli bir güvenlik denetçisisin" ya da "lise öğrencisine anlatan bir öğretmen gibi yaz" türü cümlelerle modele bir rol atamaktır. Genellikle [[system-prompt|sistem prompt'unun]] ilk satırında durur. Türkçede "rol verme" denebiliyor ama terim olarak İngilizcesi kullanılıyor.

## Nasıl çalışır?

Rol cümlesi modele yeni bir yetenek yüklemez; metnin devamını daraltır. Model o alana ait kelimelerin, kalıpların ve ayrıntı seviyesinin ağırlıklı olduğu bir bölgede üretim yapmaya başlar. Yani rol, modelin bildiklerinin hangi kısmını öne çıkaracağını etkiler — bilmediği bir şeyi bilmesini sağlamaz.

Rolün en somut faydası hedef kitleyi belirlemesidir. "Uzmansın" demek yerine "okuyucun konuyu ilk kez duyan biri" demek, çıktıyı çoğu zaman daha çok değiştirir.

## Dikkat

Bu maddede dürüst olmak gerekiyor: role prompting'in etkisi tartışmalıdır. Üslup, ton ve ayrıntı seviyesi gibi öznel işlerde gözle görülür fark yaratır. Buna karşılık matematik, kod doğruluğu ya da olgusal doğruluk gibi ölçülebilir görevlerde etkisi çoğu ölçümde küçüktür, bazen sıfırdır, bazı durumlarda zarar bile verir. "Sen bir uzmansın" cümlesi modeli uzman yapmaz; olsa olsa yanlış bilgiyi daha kendinden emin bir üslupla söyletir.

Pratik sonuç: rolü işe yarıyor varsayma, ölç ([[evals|eval]]). Ve rolü davranış kuralının yerine koyma — ne yapılacağını, neyin yasak olduğunu ve çıktının nasıl görüneceğini açıkça yazmak, rol atamaktan her zaman daha güvenilirdir.

Bu tekniğin [[zero-shot-prompting|zero-shot]] ve [[few-shot-prompting|few-shot]] ile karşılaştırması few-shot maddesinde.
