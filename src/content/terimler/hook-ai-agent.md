---
term: "Hook (AI Agent)"
tr: ""
aliases: ["ajan hook", "agent hook"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Ajanın çalışma döngüsünde belirli bir an geldiğinde otomatik çalışan, önceden tanımlanmış komut ya da kural."
related: [ai-agent, agent-instructions-file-claude-md-agents-md, slash-command, git, ci-cd]
disambiguation: [hook-react]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Hook, bir [[ai-agent|ajanın]] çalışma döngüsünde belirli bir an geldiğinde otomatik olarak çalışan kuraldır. Ajandan "her değişiklikten sonra testleri çalıştır" diye rica etmek yerine o anı yakalayan bir komut tanımlarsın; komut modelin o anki kararına bağlı olmadan her seferinde çalışır.

Türkçede "kanca" diye anlatılabilir ama araçların belgelerinde hook olarak geçer; yerleşmiş bir karşılığı yok.

## Nasıl çalışır?

Araçlar belirli olay noktaları sunar: bir araç çağrılmadan önce, çağrıldıktan sonra, oturum başlarken, ajan işini bitirdiğinde. Her noktaya kendi komutunu bağlarsın. Komut genellikle sıradan bir kabuk komutudur; çıktısı ajana geri verilebilir, hatta çıkış koduyla o işlemi tamamen engelleyebilir.

Fikir yazılımda eskidir: [[git]] deposundaki commit öncesi kancalar ya da [[ci-cd|CI]] tetikleyicileri de aynı mantıkla çalışır — olay olur, bağlı komut çalışır.

## Örnek

Bir dosya her düzenlendiğinde biçimlendiriciyi çalıştıran bir hook. Model biçimlendirmeyi unutsa da dosyalar düzgün kalır. İkinci bir örnek: belirli klasörlere yazma girişimini olay anında durduran ve ajana gerekçeyi döndüren bir kural.

## Dikkat

Hook'lar modelin kararına bağlı olmadığı için ajanı disipline etmenin en güvenilir yoludur. Aynı nedenle hatalı yazılmış bir hook her adımda tekrar tekrar sorun çıkarır ve sebebi ajanın çıktısında görünmediği için bulunması zordur.

[[hook-react|React'taki hook]] ile karıştırma: orada hook, bir bileşenin durum ve yaşam döngüsü özelliklerini kullanmasını sağlayan bir fonksiyondur; buradaki hook ise ajanın olay akışına dışarıdan iliştirilen bir komuttur. Ortak olan tek şey belirli bir ana kanca takma fikridir.
