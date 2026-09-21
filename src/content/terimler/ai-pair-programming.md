---
term: "AI Pair Programming"
tr: "Yapay zekâyla eşli programlama"
aliases: ["eşli programlama", "pair programming"]
category: yapay-zeka
subcategory: "Ajanlar ve araçlar"
level: orta
short: "Eşli programlamadaki ikinci kişinin yerini bir dil modelinin aldığı çalışma biçimi."
related: [coding-agent, code-completion, vibecoding, code-review, copilot]
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

Eşli programlama, iki geliştiricinin aynı kod üzerinde birlikte çalışmasıdır: biri yazar, diğeri düşünür ve itiraz eder. Yapay zekâyla eşli programlamada ikinci kişinin yerini bir dil modeli alır. Rol iki yönde de kurulabilir: sen yazarsın model eleştirir, ya da model yazar sen incelersin.

## Nasıl çalışır?

Döngü şöyledir: ne istediğini olabildiğince somut anlatırsın, model bir öneri üretir, sen okuyup kabul eder ya da yönlendirirsin.

Modelin güçlü olduğu yerler bellidir — tekrar eden kod, tanımadığın bir kütüphanenin kullanımı, test yazmak, hata mesajını yorumlamak, bir fonksiyonun ne yaptığını anlatmak. Zayıf olduğu yerler de bellidir: projenin yazılı olmayan bağlamı, ekibin kuralları ve "neden böyle yaptık" sorusunun cevabı.

## Dikkat

Klasik eşli programlamanın asıl faydası ikinci bir zihnin itiraz etmesiydi. Dil modelleri itiraz etmeye değil, istenen şeyi üretmeye eğilimlidir; "bu doğru mu" diye sorarsan çoğu zaman doğrular. Daha işe yarar soru şudur: "bu çözümün riskleri ve alternatifleri neler?"

İkinci nokta hız yanılsamasıdır. Kod hızlı çıkar ama anlama hızı aynı kalmaz; okumadığın kod, ekibe senin adına verilmiş bir sözdür. [[vibecoding|Vibecoding]] ile arasındaki fark tam burada: eşli programlamada çıkan kodu okumak sürecin tanımı gereği parçasıdır. [[code-review|Kod incelemesi]] hâlâ ayrı bir adımdır.
