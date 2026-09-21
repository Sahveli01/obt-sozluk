---
term: "Agent Instructions File (CLAUDE.md, AGENTS.md)"
tr: ""
aliases: ["claude.md", "agents.md", "ajan yönerge dosyası"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Projenin kökünde duran, orada çalışacak yapay zekâ ajanına işlerin nasıl yürüdüğünü anlatan markdown dosyası."
related: [ai-agent, agent-skill, context-engineering, system-prompt, readme]
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

Ajan yönerge dosyası, bir projenin kökünde duran ve o depoda çalışacak yapay zekâ [[ai-agent|ajanına]] burada işlerin nasıl yürüdüğünü anlatan markdown dosyasıdır. En sık görülen adlar `CLAUDE.md` ile araçtan bağımsız olması amaçlanan `AGENTS.md`'dir; hangi aracın hangi adı okuduğu yazıldığı tarih itibarıyla değişmeye devam ediyor.

Terimin yerleşmiş bir Türkçe karşılığı yok; dosya adıyla anılıyor.

## Nasıl çalışır?

Ajan oturuma başlarken bu dosyayı okur ve içeriği [[system-prompt|sistem promptunun]] yanında bağlama eklenir. İçine tipik olarak şunlar yazılır: projenin ne olduğu, çalıştırma ve test komutları, klasör yapısı, kod ve yazım kuralları, dokunulmaması gereken yerler, ve hangi kararların insana sorulacağı.

Fayda tekrardan kurtulmaktır. Aynı açıklamayı her oturumda elle yazmak yerine bir kez yazarsın; dosya [[version-control|sürüm kontrolünde]] durduğu için de ekipteki herkes aynı kuralla çalışır.

## Örnek

Bu sözlüğün kendi deposunda da böyle bir dosya var: terim şeması, gövde başlıklarının sırası, yazım kuralları ve "şu alanı asla sen doldurma" gibi açık yasaklar orada tanımlı.

## Dikkat

[[readme|README]] insanlar için, bu dosya ajan için yazılır; ikisini tek dosyada birleştirmek ikisini de zayıflatır.

Dosya uzadıkça her oturumda bağlam harcar ve çelişen kurallar biriktiğinde model hangisini seçeceğini bilemez. Kısa tut, emir kipiyle yaz ve yalnızca gerçekten uyulmasını beklediğin kuralları koy; uyulmayan bir kural yazılı olsa bile yok sayılır.
