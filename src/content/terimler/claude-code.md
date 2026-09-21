---
term: "Claude Code"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Anthropic'in terminalde çalışan kodlama ajanı; bulunduğu dizinde dosya okur, düzenler ve komut çalıştırır."
related: [coding-agent, claude-model, agent-instructions-file-claude-md-agents-md, slash-command, subagent]
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

Claude Code, [[anthropic|Anthropic]]'in terminalde çalışan [[coding-agent|kodlama ajanıdır]]. Bulunduğu dizinde dosya arar, okur, düzenler ve komut çalıştırır; yani sohbet penceresine kod kopyalamak yerine ajan doğrudan projenin içinde çalışır. Altında [[claude-model|Claude]] modelleri çalışır.

## Nasıl çalışır?

Komut satırından başlatılır ve editör eklentileriyle de kullanılabilir. Dosya ve terminal araçlarına erişimi izinlerle yönetilir: hangi komutların sorulmadan çalışacağını kullanıcı belirler.

Çevresinde birkaç yapılandırma kavramı vardır: depo kökündeki [[agent-instructions-file-claude-md-agents-md|yönerge dosyası]], tekrar eden işleri tek isimle çağıran [[slash-command|slash komutları]], belirli anlarda otomatik çalışan [[hook-ai-agent|hook]]'lar, işin devredildiği [[subagent|alt ajanlar]] ve dış araçlara bağlanmak için [[model-context-protocol-mcp|MCP]] desteği.

Terminalde çalışan kodlama ajanı fikri bu araca özgü değildir; başka sağlayıcıların komut satırı ajanları ve [[cursor|Cursor]] gibi editör tabanlı yaklaşımlar da aynı işi farklı biçimlerde yapar.

## Dikkat

Ajanın yetkisi senin kabuğunun yetkisidir: çalıştırdığı komut senin adına çalışır, sildiği dosya gerçekten silinir. Bu yüzden [[version-control|sürüm kontrolü]] altındaki bir dizinde çalıştırmak, izinleri dar tutmak ve üretim ortamına bağlı kabuklarda ayrıca dikkatli olmak gerekir.

Ürün kapsamı, komutlar ve varsayılan davranışlar hızla değiştiği için buradaki tarif yazıldığı tarih itibarıyla geçerlidir.
