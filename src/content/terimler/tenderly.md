---
term: "Tenderly"
tr: ""
aliases: []
category: araclar
subcategory: "Blockchain geliştirici araçları"
level: orta
short: "EVM işlemlerini adım adım inceleme, çalıştırmadan benzetim yapma ve sözleşmeleri izleme aracı."
related: [debugging, mainnet-fork, monitoring, transaction, stack-trace, revert]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Tenderly, EVM ağlarında çalışan sözleşmeleri incelemek ve izlemek için kullanılan bir platformdur. Bir [[block-explorer|blok gezgini]] bir [[transaction|işlemin]] sonucunu gösterir; buradaki araçlar bir adım öteye geçip işlemin içinde ne olduğunu göstermeye çalışır.

Yazıldığı tarih itibarıyla öne çıkan parçaları: işlem ayrıntılandırıcı, benzetim (simulation), izleme ve uyarılar, bir de geliştirme için ayrılmış kopya ağlar.

## Nasıl çalışır?

Ayrıntılandırıcıya bir işlem kimliği verdiğinde, o işlemdeki çağrı zincirini iç içe bir [[stack-trace|çağrı yığını]] olarak görürsün: hangi sözleşme hangi işlevi hangi argümanlarla çağırmış, hangi adımda [[revert|geri dönmüş]], hangi depolama değerleri değişmiş. Sözleşmenin kaynağı yüklenmişse bunu satır düzeyinde takip edebilirsin. "İşlem başarısız oldu" cümlesini "şu satırdaki şu koşul sağlanmadı" cümlesine çeviren şey budur.

Benzetimde ise işlem hiç gönderilmez. Ağın belirli bir andaki durumu üzerinde çağrıyı çalıştırıp sonucunu, değişen değerleri ve [[gas|gas]] tüketimini görürsün — [[mainnet-fork|mainnet fork]] mantığının barındırılan bir hizmet olarak sunulmuş hâlidir. Bu, ücret ödemeden ve zincire dokunmadan "bu işlemi göndersem ne olurdu" sorusunu yanıtlar.

İzleme tarafında sözleşmelerine kural koyabilirsin: belirli bir olay yayıldığında ya da bir çağrı başarısız olduğunda haber veren [[monitoring|uyarılar]].

## Dikkat

Benzetim, seçtiğin andaki duruma göre yapılır. Gerçek işlem gönderildiğinde durum değişmiş, fiyatlar kaymış ya da başkaları araya girmiş olabilir; benzetimin başarılı olması gönderimin başarılı olacağını garanti etmez.

Sözleşme kaynağını yüklemek okunurluğu artırır ama bu, kodun üçüncü bir tarafa verilmesi anlamına gelir; henüz yayımlamadığın bir kodda bunu bilerek yap.
