---
term: "IPFS"
tr: ""
aliases: ["interplanetary file system"]
category: araclar
subcategory: "Altyapı ve veri"
level: orta
short: "Dosyaları bulundukları yere göre değil içeriklerine göre adresleyen eşler arası dosya paylaşım protokolü."
related: [content-identifier-cid, pinning, decentralized-storage, filecoin, peer-to-peer-p2p, nft-metadata]
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

IPFS (InterPlanetary File System), dosyaları adresleme ve eşler arasında taşıma protokolüdür; [[decentralized-storage|dağıtık depolama]] denince ilk akla gelen sistemdir. Web'de bir adres "şu sunucudaki şu klasördeki şu dosya" der. IPFS'te adres "şu içeriğe sahip dosya" der ve bu adres, dosyanın içeriğinden hesaplanan [[content-identifier-cid|CID]]'dir.

Bu sayfadaki en önemli cümle şudur: **IPFS bir depolama hizmeti değildir.** Dosyayı saklamaz, saklayanları birbirine bağlar. Bir dosyanın "IPFS'te olması" diye bir durum yoktur; o dosyayı o anda diskinde tutan en az bir makine varsa erişilebilir, yoksa adres geçerlidir ama cevap veren yoktur.

## Nasıl çalışır?

Bir dosyayı eklediğinde IPFS onu parçalara böler, her parçanın [[hash|hash'ini]] alır ve parçaları bir ağaç yapısında birleştirir; tepedeki değer dosyanın CID'i olur. Dosyanın tek bir baytı değişse CID tamamen değişir.

Bir CID istediğinde node önce kendinde var mı diye bakar; yoksa ağa "bu parça kimde?" diye sorar. Cevabı, hangi makinenin hangi parçayı tuttuğunu kaydeden dağıtık bir dizin verir. Parçalar bulundukları makinelerden indirilir ve indirirken sen de o parçaları bir süre başkalarına sunar hâle gelirsin.

Diskler dolmasın diye node'lar bir süre sonra kullanılmayan parçaları temizler. Bir içeriğin bu temizlikten muaf tutulması için işaretlenmesi gerekir; buna [[pinning|pinning]] denir. Tarayıcıdan erişim ise genellikle bir ağ geçidi (gateway) üzerinden olur: HTTP ile CID istersin, geçit senin yerine ağa bağlanıp dosyayı getirir — ama o anda o geçidi işleten tarafa güvenmiş olursun.

## Dikkat

IPFS adresi içerikten türediği için bir NFT'nin metadata'sını IPFS'e koymak içeriğin sonradan sessizce değiştirilmesini engeller. Ama içeriğin var olmaya devam etmesini garanti etmez. Bunlar iki ayrı sorundur; ikincisinin cevabı pinning ya da [[filecoin|Filecoin]] gibi saklamayı anlaşmaya bağlayan ağlardır.

Bir de IPFS gizlilik aracı değildir: ağa eklediğin içerik, CID'i bilen herkese açıktır.
