---
term: "Tokenizer"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Büyük dil modelleri"
level: orta
short: "Metni token'lara bölen ve üretilen token'ları tekrar metne çeviren bileşen; modelin kelime dağarcığını belirler."
related: [token-ai, large-language-model-llm, context-window, embedding, max-tokens]
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

Tokenizer, metni modelin işleyebileceği parçalara bölen ve üretilen parçaları tekrar okunabilir metne çeviren bileşendir. Modelin önündeki ilk ve arkasındaki son duraktır: her girdi buradan geçer, her çıktı buradan döner. Hangi parçaların var olacağı eğitimden önce belirlenip sabit bir listeye yazılır; bu listeye modelin kelime dağarcığı denir. "Tokenlaştırıcı" gibi çeviriler yerleşmediği için terim İngilizce kullanılır.

## Nasıl çalışır?

Yaygın yöntem şu fikre dayanır: metinde sık yan yana gelen harf grupları tek bir parça olarak listeye alınır, nadir olanlar küçük parçalar hâlinde kalır. Böylece sık kullanılan kelimeler tek [[token-ai|token]] olur, hiç görülmemiş bir kelime bile bilinen küçük parçalardan kurulabilir — yani "listede olmayan kelime" diye bir sorun kalmaz.

Liste hangi metinle oluşturulduysa ona göre şekillenir. İngilizce ağırlıklı bir derlemeyle kurulmuş bir tokenizer İngilizce kelimeleri az parçaya, başka dillerdeki kelimeleri daha çok parçaya böler.

## Örnek

Türkçe gibi eklemeli bir dilde "kitaplarımızdan" tek kelimedir, ama tokenizer bunu kökü ve ekleri andıran birkaç parçaya ayırabilir. Aynı anlamı taşıyan kısa bir İngilizce karşılık tek parça kalabilir. Sonuç: aynı içerik, yazıldığı dile göre farklı miktarda yer kaplar ve farklı maliyet çıkarır.

## Dikkat

Tokenizer modelin ayrılmaz parçasıdır; bir model başka bir modelin tokenizer'ıyla çalıştırılamaz, çünkü parça numaraları eğitimdekiyle aynı şeyi göstermez.

Bir de şu tuhaflık var: model harfleri değil parçaları gördüğü için "bu kelimede kaç tane a var" ya da "kelimeyi tersten yaz" gibi harf düzeyindeki işlerde beklenmedik hatalar yapabilir. Bilgisizlik değil, gördüğü birimin harf olmamasıdır.
