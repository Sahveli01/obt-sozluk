---
term: "Emergent Abilities"
tr: "Ortaya çıkan yetenekler"
aliases: ["beliren yetenekler"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: ileri
short: "Küçük modellerde görülmeyen bir becerinin ölçek büyüyünce birden belirdiği yönündeki tartışmalı gözlem."
related: [scaling-laws, benchmark, evals, large-language-model-llm, pretraining]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: ["https://arxiv.org/abs/2304.15004"]
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Ortaya çıkan yetenekler, küçük modellerde hiç görülmeyen bir becerinin ölçek belirli bir noktayı geçtiğinde birden belirmesi diye tarif edilir. Örnek olarak çok basamaklı aritmetik ya da alışılmadık bir talimatı ilk seferde doğru uygulamak gibi işler gösterilir: küçük modellerde başarı sıfıra yakın seyreder, bir eşikten sonra hızla yükselir.

## Nasıl çalışır?

Gözlemin kaynağı ölçüm grafikleridir. Aynı iş için farklı boyutlardaki modeller [[benchmark|karşılaştırma testlerine]] sokulur ve başarı, model boyutuna karşı çizilir. Bazı işlerde bu eğri yumuşak yükselmez; uzun süre yerde kalır, sonra sıçrar.

Buna karşı ciddi bir itiraz var: sıçrama modelde değil, ölçüm biçiminde olabilir. "Tamamen doğru mu" diye soran, kısmi doğruluğa hiç puan vermeyen bir ölçüt, altta yavaş yavaş iyileşen bir beceriyi uzun süre sıfır gösterir; eşik aşıldığında da ani bir sıçrama gibi görünür. Aynı işler kısmi puan veren ölçütlerle yeniden ölçüldüğünde eğrinin düzgünleştiği gösterilmiştir.

## Dikkat

Terim bu yüzden tartışmalıdır. "Ölçek büyüyünce modelde yeni bir şey doğuyor" iddiası da "bu yalnızca ölçüm biçiminin yarattığı bir görüntü" iddiası da tek başına kanıtlanmış sayılmaz. Hangi işte hangisinin geçerli olduğu iş bazında incelenir ve yazıldığı tarih itibarıyla alanda ortak bir sonuç yoktur. [[scaling-laws|Ölçekleme yasaları]] hatanın düzgün düştüğünü söyler; bu iki gözlemin nasıl uzlaştığı tartışmanın kendisidir.

Pratik karşılığı şudur: bir modelin "yeni bir yetenek kazandığını" duyduğunda önce hangi ölçütle ölçüldüğüne bak — eşikli mi, kısmi puanlı mı, kaç deneme verilmiş. Değerlendirme tasarımı ([[evals|evals]]) çoğu zaman sonucun kendisi kadar belirleyicidir.

Bir de kelimenin çağrışımına dikkat: "ortaya çıkma" burada bir açıklama değil, bir adlandırmadır. Neden olduğunu söylemez, yalnızca grafikte görüleni anlatır.
