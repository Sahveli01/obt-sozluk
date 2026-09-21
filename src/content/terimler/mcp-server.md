---
term: "MCP Server"
tr: "MCP sunucusu"
aliases: ["mcp sunucusu"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "MCP protokolünü konuşarak bir yapay zekâ istemcisine belirli araçları ve veri kaynaklarını açan küçük program."
related: [model-context-protocol-mcp, tool-use-function-calling, ai-agent, sandbox, api]
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

MCP sunucusu, [[model-context-protocol-mcp|Model Context Protocol]] konuşarak bir yapay zekâ istemcisine belirli araçları ve veri kaynaklarını açan küçük programdır. Genellikle tek bir alanla ilgilenir: bir dosya sistemi sunucusu, bir veritabanı sunucusu, bir hata takip sistemi sunucusu.

## Nasıl çalışır?

Sunucu üç tür şey sunabilir: çağrılabilir **araçlar** ("görev oluştur"), okunabilir **kaynaklar** (bir dosyanın içeriği) ve hazır **promptlar**. Her aracın adı, açıklaması ve parametre şeması vardır; istemci bu tanımları modele gösterir, model hangi aracı hangi argümanlarla çağıracağına karar verir.

Çalışma biçimi iki türlüdür: senin makinende yerel bir süreç olarak ya da uzakta erişilen bir servis olarak. Yerelde sunucu doğrudan makinendeki kaynaklara erişir; uzakta ise kimlik doğrulaması gerekir.

## Örnek

Bir proje yönetim aracının MCP sunucusu "görevleri listele", "görev oluştur" ve "yorum ekle" araçlarını açar. [[ai-agent|Ajan]] artık o aracın [[api|API]] belgelerini ayrıca öğrenmek zorunda kalmaz; araç listesini sunucudan okur.

## Dikkat

Bir MCP sunucusu kurmak, üçüncü taraf bir kodu kendi makinende çalıştırmak ve ona bir anahtar vermektir. Kaynağına bak, yetkisini dar tut, mümkünse [[sandbox|kum havuzunda]] çalıştır.

Sunucunun döndürdüğü içerik de güvenilir talimat değildir. Bir sayfa, bir dosya ya da bir kayıt içine yazılmış "şunu yap" cümlesi modele aynı kanaldan ulaşır; bu yüzden dışarıdan gelen veriyi veri olarak işleyen bir tasarım gerekir.
