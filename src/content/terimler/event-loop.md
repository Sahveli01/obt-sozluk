---
term: "Event Loop"
tr: "Olay döngüsü"
aliases: ["olay döngüsü"]
category: programlama
subcategory: "Çalışma zamanı ve bellek"
level: ileri
short: "Tek bir iş parçacığı üstünde kuyruktaki işleri sırayla alıp çalıştıran, hiç bitmeyen döngü."
related: [callback, promise, async-await, concurrency, node-js]
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

Olay döngüsü, tek bir [[thread|iş parçacığı]] üstünde çalışan ve hiç bitmeyen bir döngüdür: kuyrukta iş var mı diye bakar, varsa alır, sonuna kadar çalıştırır, sonra başa döner. [[javascript|JavaScript]]'in hem tarayıcıda hem [[node-js|Node.js]]'te aynı anda binlerce işi idare edebilmesinin sebebi budur.

## Benzetme

Halka bir hatta çalışan tek otobüs gibi. Güzergâhı hiç bitmez: durakları sırayla dolaşır, bekleyen varsa alır, sonra bir sonrakine geçer. Aynı anda iki durakta olamaz, ama turu hızlı attığı için herkese yetişir. Asıl mesele şudur: biri kapıda durup ineceğim mi inmeyeceğim mi diye düşünmeye başlarsa, hattaki bütün duraklar birden bekler. Bir işin döngüyü uzun süre meşgul etmesi tam olarak budur.

## Nasıl çalışır?

Döngü, beklemesi gereken işleri kendisi beklemez. Ağ isteği, zamanlayıcı ya da dosya okuma dışarıya devredilir — işletim sistemine ya da tarayıcıya. İş orada tamamlandığında sonucu işleyecek [[callback|callback]] kuyruğa bırakılır; döngü elindeki işi bitirince onu alır.

Buradan iki kural çıkar. Birincisi, bir iş başladıktan sonra kesilmez: döngü sıradakine ancak o iş bitince geçer. İkincisi, dolayısıyla, uzun süren tek bir hesap bütün programı bekletir. Tarayıcıda sayfanın donması, sunucuda bütün isteklerin aynı anda yavaşlaması budur.

Kuyruk da tek değildir. [[promise|Promise]] sonuçları için önceliği yüksek ayrı bir sıra vardır, zamanlayıcılar başka sırada bekler. Bu yüzden `setTimeout(fn, 0)` yazdığında `fn` "hemen" çalışmaz; "elimdeki iş bitince ve bekleyen promise'ler halledilince" çalışır.

## Dikkat

Tek iş parçacığı olması işlerin sırayla yapıldığı anlamına gelir, ama programın tek iş yaptığı anlamına gelmez: beklemeler dışarıda yürüdüğü için binlerce bağlantı aynı anda açık kalabilir ([[concurrency|eşzamanlılık]]).

Öte yandan bu model ağır hesap işine uygun değildir. Uzun süren hesaplar ayrı bir iş parçacığına ya da ayrı bir sürece verilir; yoksa döngüyü kilitler ve modelin bütün avantajı kaybolur.
