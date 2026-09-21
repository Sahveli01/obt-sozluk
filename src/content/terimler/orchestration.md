---
term: "Orchestration"
tr: "Orkestrasyon"
aliases: ["orkestrasyon"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Birden çok model çağrısını, aracı ve ajanı bir işi bitirecek biçimde sıraya koyan, hataları ve sınırları yöneten katman."
related: [multi-agent-system, agentic-workflow, subagent, ai-agent, human-in-the-loop]
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

Orkestrasyon, birden çok model çağrısını, aracı ve ajanı bir işi bitirecek biçimde sıraya koyan katmandır. Hangi adımın ne zaman çalışacağına, bir adım başarısız olunca ne yapılacağına ve sonuçların nasıl birleştirileceğine bu katman karar verir.

## Nasıl çalışır?

Tipik sorumlulukları şunlardır: adımları sıralamak ya da paralel çalıştırmak, [[multi-agent-system|birden çok ajan]] arasında veri taşımak, hata durumunda yeniden denemek, zaman aşımı ve adım sınırı uygulamak, ara sonuçları saklamak ki süreç yarıda kaldığında baştan başlanmasın, ve her adımı kaydedip sonradan incelenebilir kılmak.

Orkestratör ayrı bir ürün olmak zorunda değildir; adımları sırayla çağıran sıradan bir döngü de orkestratördür. Hazır [[framework|çerçeveler]] bu işi standartlaştırır.

## Örnek

Bir belge işleme akışında orkestratör dosyayı parçalara böler, her parçayı ayrı bir çağrıya gönderir, biri zaman aşımına uğrarsa yalnızca onu tekrar dener, hepsi bitince özetleri birleştirir ve sonucu [[human-in-the-loop|insan onayına]] düşürür.

## Dikkat

Modelin çıktısı belirsizdir; orkestrasyonun kendisi belirli olmalıdır. Yeniden deneme, sınır kontrolü ve durma koşulu modele bırakılırsa aynı hata pahalı biçimde tekrarlanır.

Kelimenin yazılımda başka bir kullanımı daha var: [[container|konteyner]] orkestrasyonu, sunuculardaki konteynerleri dağıtan, ölçekleyen ve ayakta tutan sistemleri anlatır. İki kullanım akrabadır ama aynı şey değildir.
