---
term: "Agentic Workflow"
tr: ""
aliases: ["ajansal iş akışı", "agentic akış"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Bir işi, modelin serbestçe karar vermesi yerine önceden tanımlı aşamalara bölerek dil modeline yaptırma biçimi."
related: [ai-agent, orchestration, human-in-the-loop, prompt-engineering, evals]
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

Agentic workflow, bir işi modelin tamamen kendi seçtiği adımlara bırakmak yerine önceden tanımlanmış aşamalara bölüp her aşamada modele belirli bir görev vermektir. Akışın iskeletini insan çizer; modelin özgürlüğü aşamaların içiyle sınırlıdır.

Terimin yerleşmiş bir Türkçe karşılığı yok; "ajansal iş akışı" diyen var ama sektörde İngilizcesi kullanılıyor.

## Nasıl çalışır?

Tipik aşamalar şöyledir: girdiyi sınıflandır, uygun dalı seç, ilgili belgeleri getir, taslağı üret, kontrol et, biçimlendir. Her aşama ayrı bir [[prompt]] ve genellikle ayrı bir model çağrısıdır; aralarında sıradan kod çalışır. En sık görülen kalıplar yönlendirme, sıralı zincir, paralel dallar ve üretip-değerlendirme düzenidir.

Aşamalar ayrı olduğu için her birini tek başına ölçebilir, [[evals|değerlendirme]] yazabilir ve başarısız olanı düzeltebilirsin.

## Örnek

Destek taleplerini yanıtlayan bir akış: önce talebi konuya göre etiketle, sonra o konunun belgelerinde ara, sonra bulunan parçalarla yanıtı yaz, en sonunda yanıtın belgelerde geçmeyen bir şey iddia edip etmediğini ayrı bir çağrıyla kontrol et.

## Dikkat

Bu yaklaşımın [[ai-agent|ajana]] göre avantajı öngörülebilirlik, dezavantajı esnekliktir: beklemediğin bir girdi geldiğinde akış onu zorla bir dala sokar.

Çoğu üretim sistemi ikisini karıştırır — dış çerçeve sabit bir akıştır, içindeki tek bir aşama serbest ajan gibi çalışır. Hangi parçanın hangisi olduğunu bilmek, hata ayıklarken nereye bakacağını belirler.
