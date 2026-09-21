---
term: "Chunking"
tr: ""
aliases: []
category: yapay-zeka
subcategory: "Prompt ve kullanım"
level: orta
short: "Uzun belgeleri, aranabilir ve prompt'a sığacak büyüklükte anlamlı parçalara bölme."
related: [retrieval-augmented-generation-rag, embedding, vector-database, reranking, context-window]
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

Yüz sayfalık bir kılavuzu olduğu gibi modele veremezsin: hem [[context-window|bağlam penceresine]] sığmaz, hem de arama yaparken koca belgenin tamamı "biraz ilgili" görünür ve hiçbir şey öne çıkmaz. Chunking, belgeyi kendi içinde anlamlı parçalara böler; arama, saklama ve getirme bu parçalar üzerinden yapılır. [[retrieval-augmented-generation-rag|RAG]] kuran herkesin ilk verdiği ve en sık pişman olduğu karar budur. Türkçede "parçalama" denebiliyor ama terim olarak İngilizcesi kullanılıyor.

## Benzetme

Çekmecedeki kabloları tek tek poşetleyip üstlerine ne olduklarını yazmak gibi. Aradığın kabloyu bulmak için çekmecenin tamamını yere dökmen gerekmez ve yanlışlıkla üç kablo birden gelmez.

## Nasıl çalışır?

Parça boyutu iki yönlü bir dengedir. Çok küçük parçalar bağlamı kaybeder: cümle bir parçada, o cümlenin neyden bahsettiği başka parçada kalır. Çok büyük parçalar ise ilgisiz metni de beraberinde sürükler, hem maliyeti artırır hem modelin dikkatini dağıtır.

İşe yarayan birkaç pratik: belgenin kendi yapısını izle (başlık, bölüm, madde sınırlarından böl, rastgele karakter sayısından değil); parçalar arasında küçük bir örtüşme bırak ki sınırda kesilen bir cümle ikisinde de bulunabilsin; her parçaya hangi belgenin neresinden geldiğini söyleyen bir başlık bilgisi ekle, çünkü parça tek başına dolaşacak.

Kod, tablo ve liste düz metinle aynı kuralla bölünmemeli; ortasından kesilen bir tablo hiçbir işe yaramaz.

## Dikkat

"Sabit uzunlukta böl" en kolay yöntemdir, en iyisi ise nadiren. Kötü parçalama sonraki hiçbir adımla tam olarak telafi edilemez: [[reranking|yeniden sıralama]] listedeki parçayı yukarı taşıyabilir, içinde olmayan bilgiyi ekleyemez.

Strateji değiştirdiğinde tüm [[embedding|embedding'leri]] yeniden üretmen gerekir; bu yüzden parça tasarımını baştan ciddiye al.
