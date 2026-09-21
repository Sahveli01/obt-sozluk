---
term: "State (Blockchain)"
tr: "Durum"
aliases: ["zincir durumu"]
category: temeller
subcategory: "Bloklar ve işlemler"
level: orta
short: "Zincirin o anki durumu: bütün işlemler uygulandıktan sonra ortaya çıkan bakiyeler, sözleşme verileri ve hesaplar."
related: [state-transition, world-state, transaction, account-model, utxo]
disambiguation: [state-frontend]
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Durum, zincirin o ana kadarki bütün işlemleri uyguladıktan sonra ulaştığı sonuçtur: kimin ne kadar bakiyesi var, hangi sözleşme hangi veriyi tutuyor, hangi hesap kaç işlem göndermiş. Bloklarda saklanan şey durumun kendisi değil, ona götüren [[transaction|işlemlerdir]].

## Benzetme

Bir oyunun kayıt dosyası gibi. Oynadığın hamleler kayıt dosyasının içinde tek tek durmaz; dosya yalnızca hamlelerin sonucunu taşır. Hamle listesi elinde olduğu sürece kayıt dosyasını her zaman baştan üretebilirsin.

## Nasıl çalışır?

Zinciri iki katmanlı düşün. Altta değişmeyen bir kayıt vardır: bloklar ve içlerindeki işlemler. Üstte ise bu kayıt baştan sona işlendiğinde ortaya çıkan, her blokla değişen bir durum vardır. Her yeni blok bir [[state-transition|durum geçişi]] uygular ve yeni durumu üretir.

Durumun nasıl tutulduğu modele göre değişir: [[account-model|hesap modelinde]] hesapların alanları olarak, [[utxo|UTXO]] modelinde harcanmamış çıktıların kümesi olarak. İkisinde de sonuç aynı özelliği taşır: aynı işlem geçmişini aynı kurallarla işleyen herkes aynı duruma varır. Bu belirlenimlilik olmasa düğümler hiçbir zaman anlaşamazdı.

## Dikkat

Durum türetilmiş bir şeydir, birincil kayıt değildir. Bir düğüm durumu tamamen silse bile işlemleri baştan işleyerek yeniden üretebilir; tersi mümkün değildir. Bu yüzden zincirin özeti blok başlığında [[world-state|durum kökü]] olarak taşınsa da, asıl veri hep işlemlerdir.

Aynı kelime arayüz geliştirmede başka bir şey anlatır: [[state-frontend|frontend'deki state]] bir bileşenin bellekteki geçici verisidir ve yalnızca o kullanıcıya aittir; buradaki durum ise ağın tamamının üzerinde anlaştığı paylaşılan gerçekliktir.
