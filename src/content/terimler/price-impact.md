---
term: "Price Impact"
tr: "Fiyat etkisi"
aliases: []
category: defi
subcategory: "Takas ve likidite"
level: orta
short: "Bir takasın kendi büyüklüğü yüzünden havuzun fiyatını oynatması ve alınan ortalama fiyatın kötüleşmesi."
related: [slippage, automated-market-maker-amm, constant-product-formula, liquidity-pool, market-depth, dex-aggregator]
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

Bir [[liquidity-pool|havuzda]] fiyat, havuzdaki iki miktarın oranından çıkar. Takas ilerledikçe bu oran değişir. Yani aldığın ilk birimle son birim aynı fiyattan gelmez: alım sürdükçe fiyat senin aleyhine kayar.

Ödediğin ortalama fiyatla işleme başlamadan önce ekranda gördüğün fiyat arasındaki fark, fiyat etkisidir. Bunu işlemi göndermeden önce hesaplayabilirsin; havuzun içindeki sayılar herkese açık olduğu için sonuç bellidir.

## Nasıl çalışır?

Etkinin büyüklüğünü iki şey belirler: takasın büyüklüğü ve havuzun derinliği. [[constant-product-formula|Sabit çarpım formülünde]] aynı takas, daha derin bir havuzda daha küçük bir etki yaratır; havuz sığ olduğunda ise mütevazı bir işlem bile fiyatı ciddi biçimde oynatabilir.

Bu yüzden büyük takaslar tek bir havuza yüklenmek yerine birden çok havuza bölünür ya da farklı güzergâhlara dağıtılır; [[dex-aggregator|toplayıcıların]] yaptığı iş tam olarak budur.

## Dikkat

Fiyat etkisi bir ücret değildir. Kimse onu kesip cebine koymaz: havuzun fiyatı gerçekten oynamıştır. Havuz dışarıdaki fiyatın gerisinde kaldığı sürece de bu boşluğu [[arbitrage|arbitraj]] işlemleri kapatır.

Fiyat etkisini [[slippage|kaymayla]] karıştırma. Fiyat etkisi senin kendi işleminin sonucudur ve önceden bellidir; kayma, işlemin gönderilmesiyle işlenmesi arasında başkalarının yol açtığı farktır.
