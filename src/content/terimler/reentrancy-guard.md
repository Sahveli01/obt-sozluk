---
term: "Reentrancy Guard"
tr: "Yeniden giriş kilidi"
aliases: ["yeniden giriş kilidi", "nonreentrant"]
category: akilli-sozlesmeler
subcategory: "Tasarım kalıpları"
level: orta
short: "Bir fonksiyona, o fonksiyon daha bitmeden ikinci kez girilmesini engelleyen kilit."
related: [reentrancy-attack, checks-effects-interactions, modifier, openzeppelin, fallback-function]
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

Reentrancy guard bir **kilittir**. Korunan fonksiyon çalışmaya başlarken kilidi kapatır, işi bitince açar. Fonksiyon daha bitmemişken aynı fonksiyona ikinci bir çağrı gelirse kilit kapalı bulunur ve işlem geri alınır.

Neye karşı? [[reentrancy-attack|Yeniden giriş saldırısına]]. Sözleşmen dışarıya para gönderdiğinde karşı tarafın kodu çalışır ([[fallback-function|`fallback`]]) ve o kod, senin fonksiyonun daha bitmeden seni yeniden çağırabilir.

## Benzetme

Uçak tuvaletinin kapısındaki sürgü gibi. İçeri girersin, sürgüyü çevirirsin, dışarıdaki tabela "DOLU" olur. O tabela yanarken kapıyı kimse açamaz — sen bile. Çıkıp sürgüyü geri çevirmeden sıradaki kimse giremez. Kilit kimin girdiğine bakmaz, yalnızca "şu anda içeride biri var mı" sorusuna cevap verir.

## Nasıl çalışır?

Sözleşmede bir durum değişkeni tutulur: "içeride miyiz". Bir [[modifier|modifier]] fonksiyonun gövdesinden önce bu değişkeni kontrol edip "içerideyiz"e çevirir, gövde bittikten sonra geri alır. İkinci giriş denemesi kontrole takılır.

Hazır uygulamalar bunu bir depolama yazması olarak yapar ve bu yazma [[gas]] maliyeti getirir. Bu yüzden guard'ı gerçekten dış çağrı içeren fonksiyonlara koymak, her fonksiyona serpiştirmemek gerekir. Kilidi sıfırdan yazmak yerine denetlenmiş bir kütüphaneden almak ([[openzeppelin|OpenZeppelin]]) yaygın tercihtir.

## Dikkat

Guard **ikinci savunmadır**. Birincisi, fonksiyonu doğru sırayla yazmaktır: önce kontrol, sonra durum, en son dış çağrı ([[checks-effects-interactions|Checks-Effects-Interactions]]). Sırası doğru yazılmış bir fonksiyon zaten yeniden girişten etkilenmez; kilit, gözden kaçan durumlar için ağın altındaki ikinci ağdır.

Daha önemlisi, kilit yalnızca **aynı kilidi paylaşan** fonksiyonlara girişi engeller. Saldırgan senin `cek` fonksiyonuna değil, aynı bakiyeye dokunan ve kilitsiz bırakılmış `devret` fonksiyonuna yeniden girerse guard hiçbir şey yapmaz. Buna çapraz fonksiyon yeniden girişi denir; çaresi, aynı veriye dokunan bütün fonksiyonları aynı kilidin altına almaktır.

Kilit tek bir sözleşmenin içindedir. İki sözleşmenin birbirini çağırdığı kurgularda zincirin tamamını ayrıca düşünmen gerekir.
