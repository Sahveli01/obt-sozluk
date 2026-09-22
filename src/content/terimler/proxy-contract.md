---
term: "Proxy Contract"
tr: ""
aliases: ["proxy sözleşme"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Gelen çağrıları kendi deposu üzerinde çalışmak üzere başka bir sözleşmeye ileten, adresi hiç değişmeyen kabuk sözleşme."
related: [delegatecall, upgradeable-contract, transparent-proxy, uups-proxy, storage-slot, fallback-function]
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

Proxy, kendi başına neredeyse hiç iş yapmayan bir kabuk sözleşmedir. Kullanıcı hep proxy'nin adresine çağrı yapar; proxy bu çağrıyı asıl kodu taşıyan **mantık sözleşmesine** iletir, işi orada yaptırır, sonucu geri döndürür. Değerli olan yanı şudur: adres sabit kalırken arkadaki kod değiştirilebilir.

Terim Türkçeye yerleşmiş bir karşılıkla çevrilmez; kodda ve belgelerde "proxy" diye geçer.

## Benzetme

Kapı numarası hiç değişmeyen bir büro gibi. Postacı hep aynı kapıya gelir, evraklar hep aynı dosya dolaplarına konur. İçeride işi yapan ekip ise zamanla değişebilir. Yeni gelen ekip kendi ofisindeki dolapları değil, girdiği büronun dolaplarını kullanır — yazdığı her satır orada kalır, ekip gittiğinde de kalmaya devam eder.

## Nasıl çalışır?

Proxy'nin neredeyse hiç fonksiyonu olmadığı için gelen her çağrı [[fallback-function|`fallback`]]'ine düşer. `fallback` çağrıyı [[delegatecall]] ile mantık sözleşmesine aktarır.

İncelik burada: `delegatecall` ile çalıştırılan kod, kendi deposunda değil **çağıranın deposunda** çalışır. Yani mantık sözleşmesindeki satırlar proxy'nin depolama alanına yazar; `msg.sender` ve `msg.value` de bozulmadan korunur. Veri proxy'de, kod dışarıda durur.

Bunun iki doğrudan sonucu var. Birincisi, proxy ile mantık sözleşmesinin değişken düzeni — hangi [[storage-slot|depolama slotunda]] ne durduğu — birbirini tutmak zorundadır. İkincisi, mantık sözleşmesinin [[constructor|`constructor`]]'ı proxy için hiç çalışmaz: constructor yalnızca dağıtım sırasında ve kendi deposuna yazar, proxy'nin deposu o sırada boştur. Bu yüzden kurulum, dağıtımdan sonra bir kez çağrılan `initialize` adlı sıradan bir fonksiyona taşınır.

Yaygın iki düzen [[transparent-proxy|Transparent]] ve [[uups-proxy|UUPS]] proxy'dir; ikisi yükseltme mantığını farklı yerde tutar.

## Dikkat

Proxy'nin bütün riski, kodun başkasının deposunda çalışmasından doğar.

`initialize` sıradan bir fonksiyondur; korunmazsa onu ilk çağıran kişi kendini sahip yapar. Dağıtımla kurulum aynı işlemde yapılmazsa aradaki boşluğa bir başkası girebilir ([[uninitialized-proxy|initialize edilmemiş proxy]]).

Yeni sürümde değişkenlerin sırasını değiştirir, araya bir tane sokar ya da birini silersen eski veriler yanlış slotlardan okunur ([[storage-collision|depolama çakışması]]). Yeni değişkenler yalnızca listenin sonuna eklenir.

Son olarak adres sabit diye kodun da sabit olduğunu sanma. Asıl soru [[upgradeable-contract|yükseltme]] yetkisinin kimde olduğudur.
