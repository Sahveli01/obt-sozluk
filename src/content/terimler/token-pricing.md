---
term: "Token Pricing"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Dil modeli kullanımının istek sayısına değil, işlenen token miktarına göre ücretlendirilmesi."
related: [token-ai, tokenizer, prompt-caching, llm-api, max-tokens, context-window]
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

Model sağlayıcıları kaç kere istek attığını değil, ne kadar metin işlediğini ölçer. Metin [[token-ai|token]]'lara bölünür ve fatura token sayısına göre çıkar. Bu ayrıntı bütün maliyet mantığını belirler: hesabını küçültmenin yolu daha az istek atmak değil, her istekte gidip gelen metni kısaltmaktır. Terimin yerleşik bir Türkçe karşılığı yok; "token başına ücretlendirme" diye tarif edilir ama kullanılan ad budur.

## Nasıl çalışır?

Üç ayrım üzerine kurulur:

- **Girdi ve çıktı ayrı fiyatlanır.** Modele gönderdiğin token'lar ile modelin ürettiği token'lar farklı kalemlerdir; üretim genellikle daha pahalı tarafta durur, çünkü her çıktı token'ı ayrı bir hesap adımı demektir.
- **Model büyüklüğüne göre değişir.** Aynı sağlayıcının küçük ve büyük modelleri aynı işi çok farklı ücretle yapar; kolay işleri küçük modele vermek en büyük tek kazanç kalemidir.
- **Tekrar eden sabit bağlam indirimli olabilir.** Önbelleğe alınmış bir önek yeniden hesaplanmadığı için daha düşük ücretlendirilir ([[prompt-caching]]).

Burada bilinçli olarak hiçbir rakam yok. Fiyatlar, birimler ve indirim oranları sık değişir; yazıldığı tarih itibarıyla doğru olan bir sayı birkaç ay sonra yanıltıcı olur. Güncel değeri yalnızca sağlayıcının kendi fiyat sayfasından doğrula.

Bir isteğin girdi maliyeti kabaca şunların toplamıdır: sistem talimatı + araç tanımları + getirilen belgeler + o ana kadarki konuşma geçmişi. Geçmiş her turda yeniden gönderildiği için uzun sohbetlerde maliyet doğrusal değil, birikerek artar.

## Dikkat

"Token = kelime" değildir. Türkçe gibi eklerle uzayan dillerde aynı cümle, İngilizcesine göre belirgin biçimde daha fazla token'a bölünebilir; bu da aynı işin daha pahalıya gelmesi demektir ([[tokenizer]]).

Maliyeti kontrol etmenin üç somut yolu: üretime [[max-tokens|üst sınır]] koymak, gereksiz belge göndermemek ve dolan [[context-window|bağlamı]] sıkıştırmak ([[context-compaction]]).
