---
term: "Attention Mechanism"
tr: "Dikkat mekanizması"
aliases: ["dikkat mekanizması"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin, bir parçayı işlerken diğer parçaların hangilerine ne kadar ağırlık vereceğini kendisinin belirlemesini sağlayan yöntem."
related: [self-attention, transformer, token-ai, neural-network, embedding]
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

Dikkat mekanizması, bir modelin önündeki parçalardan hangisine ne kadar önem vereceğini kendisinin belirlemesini sağlayan yöntemdir. Bir kelimeyi anlamak için bazen iki kelime öncesi, bazen paragrafın başı gerekir. Mekanizma her adımda "şu an işlediğim parça için diğerlerinin her biri ne kadar ilgili?" sorusunu sorar ve bulduğu ağırlıklara göre bilgiyi harmanlar. Dil modellerinde en çok kullanılan biçimi [[self-attention]]'dır.

## Benzetme

Kalabalık bir odada herkes aynı anda konuşurken bile bir masadaki sohbeti takip edebilirsin. Kulağın bütün sesleri alır ama hepsine aynı ağırlığı vermez; ilgili olana yaslanır, gerisini arka plana iter. Üstelik bu odak sabit değildir, konu değiştikçe kayar.

## Nasıl çalışır?

Her parça için iki soru vardır: "ben ne arıyorum?" ve "bende ne var?". Model bu ikisini karşılaştırarak parça çiftlerinin her birine bir ilgi derecesi biçer. İlgisi yüksek çıkan parçaların taşıdığı bilgi daha çok, düşük çıkanlarınki daha az aktarılır. Ortaya, o anki parçanın bağlamıyla zenginleşmiş yeni bir temsili çıkar.

Önemli nokta: bu ağırlıklar elle yazılmaz. Hangi kelimenin hangisine bakması gerektiğini kimse kurallaştırmaz; model bunu eğitim sırasında, çok sayıda örnekten kendisi çıkarır.

Mekanizma dil modellerinden önce de vardı: çeviri sistemlerinde, kaynak cümlenin hangi kısmına bakılacağını seçmek için kullanılıyordu. Yeni olan, mimarinin tamamının bu fikrin üstüne kurulmasıdır.

## Dikkat

"Dikkat" sözcüğünü insandaki dikkatle karıştırmamak gerekir; burada bilinç ya da niyet yoktur, öğrenilmiş bir ağırlıklandırma vardır.

Ağırlıklara bakıp "model şuraya baktı, demek ki cevabı oradan aldı" demek de güvenli değildir. Ağırlıklar bir açıklama değil, ara bir hesaptır; [[transformer]] gibi mimarilerde onlarca katman boyunca birbirine karışır.
