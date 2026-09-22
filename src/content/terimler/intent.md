---
term: "Intent"
tr: ""
aliases: []
category: defi
subcategory: "MEV ve işlem akışı"
level: baslangic
short: "Kullanıcının işlemin nasıl yapılacağını değil, sonucun ne olması gerektiğini beyan etmesi."
related: [solver, request-for-quote-rfq, order-flow, swap, account-abstraction]
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

Alışıldık bir işlem bir **talimattır**: hangi sözleşmenin hangi fonksiyonunun hangi değerlerle çağrılacağını sen yazarsın, zincir de dediğini yapar. Yol senin sorumluluğundadır.

Intent ise bir **istektir**: "elimdeki şu varlıktan şu kadarını vereyim, karşılığında en az şu kadar şunu alayım, şu saate kadar geçerli." Hangi havuzdan geçileceğini, kaç parçaya bölüneceğini, hangi zincirde bittiğini sen söylemezsin. Sonucu ve sınırı tarif eder, yolu [[solver|solver]] denen taraflara bırakırsın.

Kelimenin karşılığı "niyet"tir ama terim olarak sektörde İngilizce kullanılır.

## Benzetme

Kuru temizlemeciye ceket bırakmak gibi. "Şu lekeyi çıkar" dersin; hangi kimyasalla, kaç derecede, kaç kez denenerek çıkacağını konuşmazsın. Teslim alırken de yöntemi denetlemezsin, tek bir şeye bakarsın: leke gitti mi, ceket bozuldu mu.

## Dikkat

Intent imzaladığında yolu değil, **sınırı** belirlemiş olursun. O yüzden sınırı gevşek koymak pahalıdır: "en az şu kadar alayım" dediğin rakamın bir tık üstü sana verilip aradaki farkın tamamı karşı tarafta kalabilir, ve bu teknik olarak dediğinin yerine getirilmiş olmasıdır.

İkinci nokta: imzaladığın şey bir işlem değil, bir yetkidir. Ne kadar süreyle ve hangi varlık üstünde geçerli olduğuna bakmadan imzalamak, o pencerede yapılacak her şeyi peşinen kabul etmek demektir.
