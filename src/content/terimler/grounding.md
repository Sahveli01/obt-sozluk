---
term: "Grounding"
tr: ""
aliases: ["dayanaklandırma"]
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Modelin cevabını eğitimden kalan hafızası yerine kendisine verilen kaynaklara dayandırma yaklaşımı."
related: [hallucination, retrieval-augmented-generation-rag, knowledge-base, context-engineering, tool-use-function-calling]
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

Grounding, modele bir soruyu çıplak hâlde sormak yerine cevabın dayanacağı metni de birlikte verip "yalnızca buna dayanarak cevapla" demektir. Amaç, cevabı modelin eğitimden kalan belirsiz hafızasından çıkarıp denetlenebilir bir kaynağa bağlamaktır. Türkçede yerleşmiş bir karşılığı yok; "dayanaklandırma" gibi çeviriler denenir ama alanda terim İngilizce kullanılır.

## Benzetme

Tamirciye "ezberden söyleme, kataloğa bak" demek gibi. Usta bir parçanın ölçüsünü hafızadan da söyleyebilir ve çoğu zaman tutturur. Üretici kataloğunu açıp okuduğundaysa iki şey birden kazanırsın: cevap daha isabetli olur ve hangi sayfadan geldiğini gösterebilir.

## Nasıl çalışır?

En basit hâli metni doğrudan isteme koymaktır: sözleşmeyi yapıştırıp soruyu sormak gibi. Kaynaklar büyüyünce hepsi isteme sığmaz; bir [[knowledge-base|bilgi tabanında]] tutulur ve soruyla ilgili parçalar arayıp getirilir. Bu düzenin adı [[retrieval-augmented-generation-rag|RAG]]'dir. Kaynak sabit bir belge değil de canlı bir sistemse — bir fiyat listesi, bir takvim — model veriyi [[tool-use-function-calling|araç çağırarak]] kendisi ister.

Üçünde de mantık aynıdır: dayanak istemin içine girer, model ona bakarak cevaplar ve alıntı yapabilecek durumda olur.

## Dikkat

Dayanak vermek [[hallucination|halüsinasyonu]] azaltır, bitirmez. Model verilen metni yanlış okuyabilir, iki kaynağı birbirine karıştırabilir ya da metinde olmayan bir ayrıntıyı cevaba ekleyebilir.

Kaynağın kalitesi cevabın tavanıdır. Eski ya da hatalı bir belgeye dayandırılan cevap, kendinden emin ve kaynaklı bir yanlış olur; bu hâli tespit etmek dayanaksız yanlışı tespit etmekten daha zordur.

Bu yüzden modelden cevabın hangi bölüme dayandığını göstermesini istemek işe yarar: gösterdiği yeri okuyup karşılaştırabilirsin. Neyin isteme konulacağına karar vermek ise başlı başına bir iştir; bu tarafına [[context-engineering|bağlam mühendisliği]] denir.
