---
term: "Prompt"
tr: ""
aliases: ["istem"]
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: baslangic
short: "Modele ne yapmasını istediğini anlatan metin; modelin ürettiği her şey bu metne verilmiş cevaptır."
related: [prompt-engineering, system-prompt, context-window, token-ai, large-language-model-llm]
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

Prompt, bir dil modeline verdiğin girdidir: soru, talimat, yapıştırdığın metin, hepsi birden. [[large-language-model-llm|Büyük dil modeli]] senin niyetini okumaz; yalnızca önüne konan metnin nasıl devam etmesi gerektiğini tahmin eder. Bu yüzden çıktının kalitesi çoğu zaman girdinin netliğiyle doğrudan ilgilidir.

Türkçede "istem" önerilmiş olsa da yerleşmedi; sektörde herkes prompt diyor, bu yüzden burada da çevrilmedi.

Bir prompt tek cümle olabilir, sayfalarca bağlam da olabilir. Model onu işlerken metni [[token-ai|token]]'lara böler ve bir seferde alabileceği miktar [[context-window|bağlam penceresi]] kadardır.

## Benzetme

Kuaförde "kısa kes" demekle, istediğin kesimin fotoğrafını gösterip "yanlar bu kadar, üst şöyle kalsın" demek arasındaki fark. İkisi de geçerli bir tariftir; sonucu belirleyen hangisini verdiğindir.

## Dikkat

Prompt'ta yazdığın her şey tek bir metin akışının parçasıdır: senin talimatınla yapıştırdığın verinin arasında kalın bir duvar yoktur. Bu yüzden dışarıdan gelen metni prompt'a koymak [[prompt-injection|prompt injection]] riski doğurur.

Uzun prompt her zaman iyi prompt değildir: metin uzadıkça hem ücret hem gecikme artar, hem de ilgisiz ayrıntılar modeli yanlış ize sürebilir.
