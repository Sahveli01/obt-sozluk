---
term: "Virtual DOM"
tr: "Sanal DOM"
aliases: []
category: web
subcategory: "Frontend"
level: orta
short: "Sayfanın bellekte tutulan hafif bir kopyası; değişiklik önce burada hesaplanır, gerçek sayfaya yalnızca fark yazılır."
related: [dom, react, component, state-frontend]
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

Sanal DOM, arayüzün o anki hâlini tarif eden ve bellekte sıradan nesneler olarak tutulan hafif bir kopyadır. Gerçek [[dom|DOM]]'a dokunmak pahalıdır: her dokunuş tarayıcıyı yeniden ölçüm ve boyamaya zorlar. Bellekteki kopyayı değiştirmek ise ucuzdur, çünkü kimse onu çizmez.

## Benzetme

Bir odanın yerleşimini değiştirmek gibi. Bütün mobilyayı ortaya yığıp odayı baştan dizebilirsin; sonuç doğru olur ama gün biter. Onun yerine yeni yerleşimi kâğıt üstünde çıkarır, eski yerleşimle karşılaştırır ve yalnızca yeri gerçekten değişen koltuğu taşırsın. Oda ikisinde de aynı görünür; harcanan güç aynı değildir.

## Nasıl çalışır?

[[state-frontend|Veri]] değiştiğinde kütüphane arayüzün yeni hâlini baştan üretir — ama sayfaya değil, belleğe. Sonra eski ağaçla yeni ağacı karşılaştırır ve aradaki farkı çıkarır. Gerçek sayfaya yalnızca bu fark uygulanır: değişen metin yazılır, eklenen [[component|bileşen]] takılır, silinen düğüm çıkarılır.

Asıl kazanç hız değil, kurabildiğin zihinsel modeldir: "veri değişti, ekran baştan çizilsin" diye düşünürsün; hangi düğüme dokunulacağını kütüphane hesaplar.

## Dikkat

Sanal DOM her durumda daha hızlı demek değildir. Tek bir düğümü elle güncelleyen kod her zaman daha azını yapar; karşılaştırma işinin de bir bedeli vardır. Vaat edilen şey en yüksek hız değil, arayüz büyüdükçe kodun okunabilir kalmasıdır.

Ayrıca bütün arayüz kütüphaneleri bu tekniği kullanmaz. Bir kısmı hangi verinin nereye bağlı olduğunu derleme sırasında — yani kod tarayıcıya gitmeden önce — çözer ve doğrudan gerçek DOM'u günceller.
