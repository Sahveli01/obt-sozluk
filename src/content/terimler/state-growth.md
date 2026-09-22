---
term: "State Growth"
tr: ""
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: orta
short: "Zincirin tuttuğu durumun her yeni hesap ve sözleşmeyle kalıcı olarak büyümesi ve node çalıştırmayı giderek zorlaştırması."
related: [state-blockchain, state-expiry, stateless-client, pruning, full-node, storage-rent]
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

Bir zincirin [[state-blockchain|durumu]], o an geçerli olan her şeyin toplamıdır: hesap bakiyeleri, sözleşme kodları, sözleşmelerin içindeki değerler. Her [[full-node|tam node]] bu tabloyu diskinde tutar ve her yeni işlem onu biraz daha büyütür.

State growth, bu tablonun küçülmemesinden doğan sorundur. Yeni bir hesap açıldığında ya da bir sözleşme bir değer yazdığında, o satır silinene kadar ağdaki herkesin diskinde durmaya devam eder.

Türkçede "durum büyümesi" diye geçtiği olur ama yerleşik bir karşılığı yoktur.

## Benzetme

Her gün yeni kitap giren, hiçbir kitap çıkmayan bir kütüphane gibi. Rafları büyütmek zamanla pahalılaşır; asıl yük ise başka bir semtte aynı kütüphanenin bir eşini açmak isteyen kişidedir. O kişi bugüne kadar birikmiş her kitabı baştan kopyalamak zorundadır ve bu yük her yıl biraz daha artar.

## Nasıl çalışır?

Sorunun kaynağı ücretlendirmenin zamanla uyuşmamasıdır. Durumu büyüten kullanıcı bunun bedelini yazdığı anda bir kez öder; ağ ise o satırı sonsuza dek taşır.

Sonuç iki yerde görünür. Diske sığdırmak zorlaşır ve sıfırdan node kurup zinciri baştan senkronize etmek uzar. Node çalıştırmak zorlaştıkça çalıştıran kişi sayısı azalır, doğrulama az sayıda büyük sağlayıcıda toplanır — yani bu, disk sorunu gibi görünen bir [[decentralization|merkeziyetsizlik]] sorunudur.

## Dikkat

Durum büyümesi ile geçmiş verisinin büyümesi aynı şey değildir. Geçmiş bloklar bir kez doğrulandıktan sonra her node'un yanında taşıması şart değildir ve [[pruning|budanabilir]]. Durum ise budanamaz: bir sonraki işlemi doğrulamak için tam olarak gerekir. Bu yüzden [[state-expiry|state expiry]] ve [[stateless-client|durumsuz istemci]] gibi öneriler, sorunu doğrudan durumun kendisinde çözmeye çalışır.
