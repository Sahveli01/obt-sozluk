---
term: "Hallucination"
tr: "Halüsinasyon"
aliases: ["uydurma", "konfabülasyon"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin gerçek olmayan bir bilgiyi, doğru cevaplarıyla aynı kendinden emin tonda üretmesi."
related: [grounding, knowledge-cutoff, retrieval-augmented-generation-rag, evals, inference]
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

Halüsinasyon, bir modelin gerçekte var olmayan bir bilgiyi — olmayan bir kaynak, yanlış bir tarih, çalışmayan bir fonksiyon adı — doğru cevaplarıyla aynı akıcılıkta üretmesidir. Asıl mesele modelin yanlış bilmesi değil, yanlış bildiğini bilmemesidir. Model yalan söylemez: yalan söylemek için doğruyu bilip saklamak gerekir.

## Benzetme

Bir olayı anlatan görgü tanığı gibi. Tanık hatırlamadığı ayrıntıları çoğu zaman farkında olmadan, olması muhtemel olanla doldurur. Kimseyi kandırmaya çalışmaz; anlattığının bir kısmının hatıra değil tamamlama olduğunu kendisi de ayırt edemez.

## Nasıl çalışır?

Dil modeli cevabını bir veri tabanından çekmez; sıradaki parçayı, gördüğü metinlerdeki örüntülere bakarak üretir. "Makul devam" ile "doğru devam" çoğu zaman örtüşür; örtüşmediği yerde model yine makul olanı üretir. Uydurulmuş bir kaynak künyesi doğru biçimde görünür, çünkü model künyelerin nasıl göründüğünü öğrenmiştir — o künyenin var olup olmadığını denetleyen bir mekanizma yoktur.

Risk, modelin veride az gördüğü yerlerde artar: nadir isimler, yerel ayrıntılar, çok belirli sayılar ve [[knowledge-cutoff|kesim tarihinden]] sonraki olaylar.

## Dikkat

Terimin kendisi de tam oturmuş değil; "halüsinasyon" kelimesi modelin bir algısı varmış izlenimi verir. Kastedilen şey basitçe uydurmadır.

Pratik sonucu şudur: modelden gelen doğrulanabilir her iddiayı — isim, tarih, sayı, alıntı, bağlantı — kullanmadan önce kaynağından teyit et. Cevabın dayanacağı metni modele kendin vermek ([[grounding|dayanaklandırma]]) riski azaltır, sıfırlamaz. Modelin "eminim" demesi de bir ölçü değildir; emin olup olmadığını gösteren güvenilir bir iç göstergesi yoktur, bu yüzden kendinden emin ton bir güvence olarak okunmamalıdır.

Öte yandan bu, modeli kullanılmaz kılmaz. Hata payı işe göre değişir; özetleme ve yeniden yazma gibi kaynağı elinde olan işlerde düşüktür. Bunu ölçmenin yolu [[evals|değerlendirme]] yapmaktır, tahmin etmek değil.
