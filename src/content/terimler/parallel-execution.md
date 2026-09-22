---
term: "Parallel Execution"
tr: "Paralel Yürütme"
aliases: []
category: olceklenme
subcategory: "Temeller"
level: orta
short: "Birbirinin verisine dokunmayan işlemleri aynı anda çalıştırarak blok işleme süresini kısaltan yürütme yaklaşımı."
related: [execution-layer, deterministic-execution, state-blockchain, parallelism, scalability]
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

Paralel yürütme, bir bloğun içindeki işlemleri tek tek sıraya dizmek yerine, birbirine dokunmayanları aynı anda çalıştırma yaklaşımıdır. Klasik yürütmede blok ne kadar dolu olursa olsun işlemler ardı ardına işlenir ve işlemcinin çekirdeklerinin çoğu boş durur ([[parallelism|paralellik]] kullanılmaz). Paralel yürütme bu boş kapasiteyi değerlendirmeyi hedefler.

## Benzetme

Üç marangozun çalıştığı bir atölye gibi. Herkes kendi tezgâhında ayrı bir parçayla uğraşıyorsa üçü de aynı anda ilerler. Ama ikisi aynı planya makinesine ihtiyaç duyuyorsa biri beklemek zorundadır; atölyenin hızını tezgâh sayısı değil, paylaşılan makineler belirler.

## Nasıl çalışır?

Zor kısım, hangi işlemlerin birbirine dokunduğunu bilmektir. İki yaygın yol vardır.

Birincisinde işlem, hangi veriye erişeceğini önceden bildirir. Planlayıcı bu listelere bakıp çakışmayanları ayrı çekirdeklere dağıtır; bildirimi eksik olan işlem çalıştırılmaz. Yük geliştiricinin üstündedir, karşılığında planlama ucuzdur.

İkincisinde iyimser davranılır: bütün işlemler aynı anda çalıştırılır ve her birinin neyi okuyup neye yazdığı kaydedilir. Sonunda çakışanlar tespit edilip asıl sıraya göre yeniden çalıştırılır. Geliştirici hiçbir şey bildirmez, bedeli yeniden çalıştırmalardır.

Hangi yol seçilirse seçilsin nihai sonuç tek olmalıdır: hangi çekirdeğin önce bittiği çıktıyı değiştirmemelidir. Aksi hâlde [[deterministic-execution|deterministik yürütme]] bozulur ve node'lar farklı [[state-blockchain|duruma]] varır.

## Dikkat

Paralellik ancak işlemler dağınıksa işe yarar. Herkesin aynı anda tek bir popüler sözleşmeye dokunduğu anlarda — tek bir havuza yığılan alım satım gibi — çakışma oranı yükselir ve kazanç erir; iyimser yöntemde yeniden çalıştırmalar işi büsbütün yavaşlatabilir.

Bedeli de vardır: paralellikten faydalanmak çok çekirdekli node donanımı bekler. Kapasiteyi artırırken node çalıştırmayı pahalılaştırmak, [[scalability|ölçeklenmenin]] her zamanki takasıdır.
