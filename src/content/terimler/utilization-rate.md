---
term: "Utilization Rate"
tr: "Kullanım oranı"
aliases: ["kullanım oranı"]
category: defi
subcategory: "Borç verme ve alma"
level: orta
short: "Havuzdaki varlığın ne kadarının borç olarak dışarıda olduğunu gösteren oran; faizin tek girdisidir."
related: [interest-rate-model, money-market, lending-protocol, liquidity-pool, borrowing-defi, bad-debt]
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

Kullanım oranı, bir borç havuzuna yatırılmış varlığın ne kadarının borç olarak dışarıda olduğunu söyler.

```
kullanım oranı = borç olarak verilmiş miktar / havuza yatırılmış toplam miktar
```

Sıfıra yakınsa havuz atıl duruyordur: borç veren var, isteyen yok. 1'e yaklaştıkça havuzda çekilecek varlık kalmıyordur.

## Nasıl çalışır?

Bu oran bir rapor kalemi değil, sistemin en önemli kontrol düğmesidir: [[interest-rate-model|faiz oranı modelinin]] tek girdisi odur.

Döngü şöyle kapanır. Borç talebi artar, oran yükselir, faiz yükselir. Yüksek faiz borçluyu pozisyonunu kapatmaya iter ve dışarıda daha az varlık kalır; aynı anda havuza yeni arz çeker ve payda büyür. Her iki hareket de oranı aşağı çeker.

Oran kendiliğinden de değişir. Sen hiçbir şey yapmasan bile başka birinin borç alması ya da bir [[liquidation|tasfiyenin]] gerçekleşip borcu kapatması oranı oynatır.

## Dikkat

Oran tavana dayandığında mevduat sahipleri paralarını çekemez. Havuzda varlık kalmamıştır çünkü hepsi dışarıdadır.

Bu bir iflas değildir: borçlar duruyordur, faiz işlemeye devam ediyordur, teminatlar yerindedir. Ama sen o an paranı alamazsın ve çıkışı bekleyen tek kişi de sen değilsindir; borçlar kapandıkça ya da yeni arz geldikçe havuz açılır. Ne zaman açılacağını kimse taahhüt etmez.

Yüksek kullanım oranını "bu havuz çok rağbet görüyor" diye okumak da yanıltıcıdır. Aynı sayı, aynı anda "çıkış dar" demektir — ve bir panik anında herkesin aynı anda çıkmak istediği yer tam olarak burasıdır.
