---
term: "Chain of Thought"
tr: "Düşünce zinciri"
aliases: ["CoT", "adım adım düşünme"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelden cevaba geçmeden önce ara adımları yazmasını istemek; çok adımlı işlerde isabeti artırır."
related: [reasoning-model, prompt-engineering, few-shot-prompting, test-time-compute, prompt]
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

Düşünce zinciri, modelden bir soruya doğrudan cevap vermek yerine ara adımları sırayla yazmasını istemektir. Bu bir model değil, bir [[prompt-engineering|istem yöntemidir]]: aynı modele "önce adımları yaz, sonra sonucu söyle" diyerek elde edilir. Çok adımlı işlerde — hesap, kıyas, koşullu kural uygulama — isabeti belirgin biçimde artırdığı gözlenmiştir.

## Nasıl çalışır?

Model bir cevabı tek hamlede üretmek zorunda kaldığında bütün ara ilişkileri o tek adımda kurmuş olması gerekir. Ara adımları yazdırmak, üretilen her adımı bir sonraki adımın girdisi hâline getirir: model kendi yazdığına bakarak devam eder. Böylece iş, birçok küçük ve daha kolay adıma bölünür.

Yöntem birkaç biçimde uygulanır: [[prompt|isteme]] açıkça "adım adım ilerle" yazmak, ara adımları gösterilmiş birkaç örnek vermek ([[few-shot-prompting|few-shot]]), ya da modelden önce planı, sonra sonucu ayrı başlıklar altında istemek.

## Dikkat

Yazılan adımlar modelin gerçek işleyişinin kaydı değildir. Model sonuca başka bir yoldan varıp adımları sonradan makul görünecek biçimde yazabilir; araştırmalarda adımlarla sonuç arasında tutarsızlıklar görülmüştür. Yani düşünce zinciri bir açıklama değil, bir çalışma biçimidir — üretilen metni "modelin gerekçesi" diye okumak yanıltır.

İki pratik sonuç: adımların doğru görünmesi sonucu doğrulamaz, ve her soruda adım yazdırmak gereksiz uzunluk ve [[test-time-compute|çalışma anı maliyeti]] üretir.

Ayrıca [[reasoning-model|akıl yürütme modelleri]] bu davranışı zaten kendiliğinden yapar; onlara ayrıca "adım adım düşün" demek çoğu zaman bir şey katmaz.
