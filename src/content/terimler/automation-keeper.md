---
term: "Automation (Keeper)"
tr: ""
aliases: ["keeper"]
category: akilli-sozlesmeler
subcategory: "Dış dünya ve verimlilik"
level: orta
short: "Zincirde hiçbir kod kendi kendine çalışmadığı için, koşul oluştuğunda sözleşmeyi tetikleyen işlemi gönderen dış hizmet."
related: [smart-contract, liquidation, oracle, transaction, view-function, gas]
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

Zincirde zamanlayıcı yoktur. Bir [[smart-contract|akıllı sözleşmenin]] kodu, ancak birisi o fonksiyonu çağıran bir [[transaction|işlem]] gönderdiğinde çalışır. "Her gün saat dokuzda şunu yap" ya da "fiyat şu seviyeye inince kendiliğinden devreye gir" diye bir şey yazamazsın; yazabildiğin tek şey, biri çağırdığında ne olacağıdır.

Automation ya da keeper ağları bu eksiği dışarıdan kapatır: koşulları zincir dışında izler ve koşul sağlandığında tetikleyen işlemi kendileri gönderir.

"Keeper" sektörde İngilizce kullanılıyor, yerleşmiş bir Türkçe karşılığı yok.

## Benzetme

Sokağa asılmış park yasağı levhası gibi. Levha kimsenin aracını kaldırmaz. Aracın çekilmesi için birinin durumu görmesi, çekiciyi çağırması ve çekicinin yola çıkması gerekir — çekici de bunu karşılığında ücret aldığı için yapar. Ücret düşükse ya da o gün kimse bakmıyorsa araç günlerce orada durur. Kural yerinde, uygulayan yoksa kural kendi kendine işlemez.

## Nasıl çalışır?

Yerleşik kalıp iki parçalıdır. Sözleşmede "şu an yapılacak bir iş var mı?" sorusuna cevap veren bir okuma fonksiyonu ([[view-function|view]]) ve işi gerçekten yapan ikinci bir fonksiyon bulunur. Keeper ağındaki botlar ilkini zincir dışında, bedavaya sorar; cevap evet olduğunda ikincisini çağıran işlemi gönderip [[gas|gas]] ücretini öder.

Botun bunu neden yaptığı önemlidir. Kazanç ya protokolün ödediği bir ücrettir ya da işin içinden çıkan paydır — tasfiyede tasfiye primi gibi.

Tipik işler: teminatı yetersiz kalan pozisyonların [[liquidation|tasfiyesi]], süresi dolan emirlerin ve pozisyonların kapatılması, faiz ya da ödül birikimlerinin periyodik olarak işlenmesi.

## Dikkat

Tetikleyen tarafın gelmemesi bir arıza değil, sistemin baştan kabul ettiği bir ihtimaldir. Ağ tıkalıysa, gas pahalıysa ya da prim masrafı karşılamıyorsa iş yapılmaz. Tasarımda "birisi nasılsa çağırır" diye düşünemezsin; doğru cümle "çağırmak kârlı olduğu sürece çağrılır"dır. Gecikmesi pahalıya patlayan işlerde ödülün de buna göre olması gerekir.

Bir de şu: tetikleyici fonksiyonu genellikle herkes çağırabilir. Keeper'ın koşulu kontrol etmiş olmasına güvenip sözleşmede aynı koşulu bir daha kontrol etmemek, kapıyı zamanı gelmeden iş yaptırmaya açar.
