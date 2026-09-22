---
term: "Mining"
tr: "Madencilik"
aliases: ["madencilik"]
category: konsensus
subcategory: "Madencilik"
level: orta
short: "Blok başlığını farklı sayılarla tekrar tekrar özetleyip protokolün koyduğu hedefin altına düşen bir çıktı arama işi."
related: [proof-of-work-pow, miner, hashrate, difficulty, block-reward, asic]
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

Madencilik, adı yüzünden en çok yanlış anlaşılan terimlerden biridir. Ortada kazılan, çıkarılan ya da topraktan ayıklanan hiçbir şey yoktur. Yapılan iş tek bir şeydir: bir [[block-header|blok başlığını]], içindeki bir sayıyı değiştire değiştire tekrar tekrar [[hash|özetlemek]] ve çıkan değerin protokolün koyduğu hedefin altına düşmesini beklemek.

Bu aramanın kısa yolu yoktur. Özet fonksiyonu girdiyi tanınmaz hâle getirdiği için hangi sayının işe yarayacağı önceden hesaplanamaz; tek yöntem denemektir. Buna karşılık bulunan sonucu doğrulamak tek bir işlem sürer: herkes aynı başlığı bir kez özetler ve hedefin altında olup olmadığına bakar.

Ödül bu işin amacı değil, yan ürünüdür. Asıl amaç blok yazmayı pahalı kılmaktır; [[block-reward|blok ödülü]] de bu masrafı karşılayıp işin sürmesini sağlar. Mekanizmanın tamamı [[proof-of-work-pow|iş ispatı]] maddesindedir — burada anlatılan, onun madenci tarafından görünen yüzüdür.

## Benzetme

Rakamlı bir bisiklet kilidini şifresini bilmeden açmaya çalışmak gibi. Ne kadar zeki olduğunun önemi yoktur; kombinasyonları tek tek çevirmekten başka yol olmadığı için en hızlı çeviren en önce açar. Ama kilidin açıldığını anlamak için kimsenin uğraşması gerekmez — yanından geçen herkes bir bakışta görür.

## Nasıl çalışır?

Bir [[miner|madenci]] önce bloğa koyacağı işlemleri [[mempool|bekleyen işlemler havuzundan]] seçip başlığı kurar. Sonra başlıktaki sayıyı değiştirip özetler, çıkan değere bakar, tutmazsa sayıyı yine değiştirir. Saniyede yapılan deneme sayısına [[hashrate|hash gücü]] denir; bu iş için üretilmiş [[asic|özel donanımlar]] o sayıyı tek başına akla gelmeyecek seviyelere çıkarır. Hedefin ne kadar dar olduğunu ise [[difficulty|zorluk]] belirler.

Uygun çıktı bulunduğunda madenci bloğu ağa yayınlar. Diğerleri tek bir özet alarak doğrular ve blok zincire eklenir.

## Dikkat

Madencilik "para basmak" değildir. Madencinin yeni birim yaratma yetkisi yoktur; protokolün o blok için tanımladığı ödülü bloğun içine yazar ve bu ödül ancak blok herkesçe kabul edilirse geçerli olur. Kuralın dışına çıkan bir ödül yazılmış blok reddedilir.

Bir de madencilik her zincirde yoktur. [[proof-of-stake-pos|Hisse ispatı]] kullanan ağlarda blok üreticisi aranarak değil seçilerek belirlenir; orada madenci diye bir rol yoktur.
