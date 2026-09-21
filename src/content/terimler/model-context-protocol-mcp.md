---
term: "Model Context Protocol (MCP)"
tr: ""
aliases: ["mcp", "model context protocol"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Yapay zekâ uygulamalarının dış araçlara ve veri kaynaklarına bağlanması için tanımlanmış açık bir protokol."
related: [mcp-server, tool-use-function-calling, ai-agent, anthropic, api]
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

Model Context Protocol (MCP), yapay zekâ uygulamalarının dış araçlara ve veri kaynaklarına bağlanması için tanımlanmış açık bir protokoldür. Amacı, her model ile her araç arasında ayrı bir entegrasyon yazma zorunluluğunu ortadan kaldırmaktır: araç bir kez MCP konuşacak şekilde yazılır, protokolü destekleyen bütün istemciler onu kullanabilir.

Protokol [[anthropic|Anthropic]] tarafından geliştirilip açık bir standart olarak yayımlandı. Yazıldığı tarih itibarıyla başka sağlayıcıların istemcileri de destekliyor. Terimin Türkçe karşılığı yok; kısaltmasıyla anılıyor.

## Nasıl çalışır?

İki taraf vardır: **istemci** (asistan ya da ajan uygulaması) ve **sunucu** ([[mcp-server|MCP sunucusu]], araçları dışarı açan program). İstemci bağlandığında sunucuya ne sunduğunu sorar; sunucu araçlarını, veri kaynaklarını ve hazır promptlarını açıklamalarıyla birlikte listeler. Model bir aracı kullanmak istediğinde istemci çağrıyı sunucuya iletir, dönen sonucu modele geri verir.

Yani MCP yeni bir yetenek icat etmez; modelin zaten yapabildiği [[tool-use-function-calling|araç çağırma]] işini ortak bir bağlantı biçimine kavuşturur.

## Dikkat

MCP bir bağlantı standardıdır, güvenlik katmanı değildir. Bir sunucuya verdiğin yetki doğrudan ajanın yetkisi olur; salt okunur bir veritabanı kullanıcısıyla bağlanmakla yazma yetkisiyle bağlanmak arasındaki farkı protokol değil sen belirlersin.

Ayrıca araç adları ve açıklamaları modele metin olarak gider. Güvenmediğin bir sunucunun açıklama alanına yazdığı metin de modelin okuduğu talimatın parçası olur; bu, [[prompt-injection|prompt enjeksiyonu]] için bir giriş noktasıdır.
