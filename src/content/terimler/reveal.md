---
term: "Reveal"
tr: ""
aliases: []
category: nft
subcategory: ""
level: orta
short: "Basım sırasında gizli tutulan NFT görsellerinin ve özelliklerinin belirlenen anda hepsi birden açılması."
related: [nft-metadata, token-uri, nft-collection, commit-reveal-scheme, rarity, mint]
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

Reveal, bir koleksiyonun parçaları basılırken hepsinin aynı geçici görseli göstermesi, gerçek görsellerle özelliklerin ise sonradan ve tek seferde açılmasıdır. Basım sürerken kimse hangi numaranın ne çıkaracağını bilmez; açılış anından sonra herkes aynı anda görür.

Amaç basımı adil tutmaktır. Özellikler baştan görünür olsaydı sıra önceden okunabilir, [[rarity|nadir]] çıkacağı bilinen numaralar seçilerek alınabilirdi. Türkçede yerleşmiş bir karşılığı yok; "reveal" ya da gündelik konuşmada "açılış" deniyor.

## Benzetme

Aynı kâğıda sarılmış hediye paketleri gibi. Masadakilerin hepsi dışarıdan tıpatıp aynıdır, kimse elindekinin içinde ne olduğunu bilmez ve paketler ancak saat gelince hep birlikte açılır. Kâğıdı erken yırtan biri çıkarsa düzen bozulur — reveal mekanizmasının bütün zorluğu da o kâğıdı sağlam tutmaktır.

## Nasıl çalışır?

En yaygın kurulum [[token-uri|token URI]] üzerinden yürür. Basım sırasında sözleşme her numara için aynı geçici adresi döndürür; açılış anında sahibi kök adresi gerçek [[nft-metadata|metadata]] klasörüyle değiştirir. Bu tek bir işlemdir ve o andan sonra her numara kendi belgesini gösterir.

Buradaki gizlilik kendiliğinden gerçek bir gizlilik değildir. Dosyalar çoğu zaman açılıştan önce yüklenmiştir; adresi tahmin eden ya da bir yerden öğrenen biri sonuçları erkenden okuyabilir. Bu yüzden "gizli" olduğu söylenen bir koleksiyonun gerçekten gizli olup olmadığı, dosyaların nereye ve ne zaman konduğuna bağlıdır.

Daha sağlam kurulumlar iki şey ekler. Birincisi, bütün dosyaların [[hash|hash'i]] basım başlamadan zincire yazılır; böylece açılışta gösterilenin sonradan değiştirilmediği kanıtlanabilir. İkincisi, numaraların görsellerle eşleşmesi açılış anında belirlenen bir sayıyla kaydırılır — dosyaları önceden görmüş biri bile hangi numaranın hangisine denk geleceğini bilemez. Bu, [[commit-reveal-scheme|commit-reveal]] düzeninin NFT'ye uyarlanmış hâlidir.

## Dikkat

Reveal'i yapabilen taraf, adresi değiştirebilen taraftır. Aynı yetki açılıştan sonra da yerinde durur: kök adres dondurulmadıysa koleksiyonun tamamı ikinci kez, bu sefer kimseye haber verilmeden değiştirilebilir. Bakılacak yer, sözleşmede bu yetkiyi kalıcı olarak kapatan bir fonksiyonun bulunup bulunmadığıdır.
