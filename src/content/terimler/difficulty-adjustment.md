---
term: "Difficulty Adjustment"
tr: "Zorluk ayarı"
aliases: ["zorluk ayarı", "zorluk ayarlaması"]
category: konsensus
subcategory: "Madencilik"
level: orta
short: "Blokların hedeflenen hızda gelmesi için zorluğun, geçmiş bloklara bakılarak düzenli olarak yeniden hesaplanması."
related: [difficulty, block-time, mining, hashrate, timestamp, proof-of-work-pow]
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

Madenciliğe ayrılan donanım miktarı sabit değildir; cihazlar eklenir, çıkar, bazen büyük bir bölümü bir anda ağdan ayrılır. Hiçbir şey yapılmazsa bunun sonucu doğrudan blok hızına yansır: güç arttıkça bloklar sıklaşır, azaldıkça seyrekleşir.

Zorluk ayarı bunu engelleyen geri besleme mekanizmasıdır. Protokol belirli aralıklarla geçmiş blokların ne kadar sürede geldiğine bakar ve [[difficulty|zorluğu]] yeniden hesaplar: bloklar hedeflenenden hızlı geldiyse zorluk artar, yavaş geldiyse azalır. Amaç, ağa kaç cihaz bağlı olursa olsun [[block-time|blok süresini]] aynı ortalamanın etrafında tutmaktır.

## Benzetme

Bir kovayı hep aynı sürede doldurmaya çalışmak gibi. Şebekenin basıncına karışamazsın; kimi saat güçlü akar, kimi saat zayıf. Elindeki tek ayar musluktur: kovanın ne kadar sürede dolduğunu ölçer, bir sonraki sefer için musluğu biraz kısar ya da biraz açarsın. Ayarladığın şey akışın kendisi değil, ona bıraktığın açıklıktır.

## Nasıl çalışır?

Hesabın ne sıklıkta yapıldığı ağa göre değişir; kimi zincir belirli sayıda blokta bir, kimi her blokta yeniden hesaplar. Yöntem aynıdır: protokol geçmiş blokların [[timestamp|zaman damgalarına]] bakar, aradaki süreyi hedeflenen süreyle karşılaştırır ve çıkan oranı zorluğa uygular.

Hesabın tamamı zincirdeki veriden yapılır. Bu yüzden her düğüm yeni zorluğu kendi başına bulur; oylama, duyuru ya da bir otoriteye başvurma gerekmez. Ani sıçramaları sınırlamak için çoğu tasarımda ayarın tek seferde ne kadar değişebileceğine üst sınır konur.

## Dikkat

Ayar geçmişe bakar, geleceği bilmez. [[hashrate|Hash gücünün]] büyük bölümü bir anda çekilirse bloklar bir sonraki hesaplamaya kadar yavaş gelmeye devam eder — üstelik hesaplama belirli sayıda bloğa bağlıysa o an da gecikir. Bu gecikme tasarımın bilinen bir zayıf noktasıdır ve küçük ağlarda çok daha sert hissedilir.

İkincisi, zaman damgalarını blokları üretenler yazar. Protokol bu yüzden damgalara kabul edilebilir bir aralık koyar; yine de mekanizma, damgaların kabaca dürüst olduğu varsayımına dayanır. [[proof-of-work-pow|İş ispatının]] güvenlik varsayımlarından biri de budur.
