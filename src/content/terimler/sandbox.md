---
term: "Sandbox"
tr: "Kum havuzu"
aliases: ["kum havuzu", "sandboxing"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Bir programı ya da ajanı, dışarıya zarar veremeyeceği sınırları önceden çizilmiş bir ortamda çalıştırma yöntemi."
related: [autonomous-agent, computer-use, principle-of-least-privilege, container, ai-agent]
disambiguation: [regulatory-sandbox]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Sandbox, bir programı ya da ajanı dışarıya zarar veremeyeceği sınırlı bir ortamda çalıştırma yöntemidir. Program çalışır ve iş görür; ama dokunabileceği dosyalar, erişebileceği ağ ve harcayabileceği kaynak önceden çizilmiş bir çerçevenin içindedir.

## Nasıl çalışır?

Sınır birkaç katmanda kurulur: yalnızca belirli klasörlerin görünür olması, ağ erişiminin izin verilen adreslerle sınırlanması, işlemci ve bellek kotaları, ve ortamın her iş sonunda silinip yeniden kurulması. Uygulamada en çok [[container|konteynerler]], sanal makineler ve işletim sisteminin kendi izin mekanizmaları kullanılır.

Yapay zekâ [[ai-agent|ajanlarında]] amaç biraz farklıdır: burada sınırlanmak istenen kötü niyetli bir program değil, iyi niyetli ama yanılabilen bir karar vericidir. Bu yüzden kum havuzu tek başına değil, [[principle-of-least-privilege|en az yetki ilkesi]] ve onay adımlarıyla birlikte kullanılır.

## Dikkat

Kum havuzu mutlak bir duvar değildir; kaçış açıkları bulunur ve yamanır. Tek savunma olarak görülmemelidir.

Sınırı çizerken en çok unutulan şey kimlik bilgileridir. Ortam kısıtlı olsa bile içine bir [[api-key|API anahtarı]] koyduysan, o anahtarın açtığı her kapı kum havuzunun dışındadır; ajanın yanlışlıkla silebileceği veri artık senin diskinde değil, uzaktaki hesaptadır.

Kelime finans düzenlemesinde de geçer: [[regulatory-sandbox|regulatory sandbox]], yeni ürünlerin denetim altında sınırlı ölçekte denenmesine izin verilen çerçeveyi anlatır. Aynı benzetme, farklı alan.
