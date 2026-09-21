---
term: "Accuracy"
tr: "Doğruluk"
aliases: ["dogruluk"]
category: yapay-zeka
subcategory: "Temeller"
level: baslangic
short: "Modelin verdiği cevapların ne kadarının doğru çıktığını gösteren en basit ölçü; dengesiz verilerde yanıltıcıdır."
related: [precision-and-recall, classification, benchmark, dataset, overfitting]
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

Doğruluk, bir modelin verdiği cevapların ne kadarının doğru çıktığını gösterir: doğru cevapların tüm cevaplara oranı. Anlaması kolay olduğu için ilk bakılan sayıdır. Aynı sebeple en çok yanıltan sayıdır da, çünkü tek bir rakam iki farklı hata türünü birbirine karıştırarak sunar.

## Benzetme

Plajda her seferinde "metal yok" diyen bir metal dedektörü düşün. Kumda metal nadir olduğu için neredeyse hep haklı çıkar. Yine de işe yaramaz; çünkü aramanın amacı, kumun çoğunun boş olduğunu teyit etmek değil, o nadir parçayı bulmaktır.

## Dikkat

Asıl sorun dengesiz verilerde çıkar. Aradığın durum nadirse, o durumu hiç bulamayan bir model bile yüksek doğruluk verir. Hastalık taraması, dolandırıcılık tespiti ya da arıza yakalama gibi işlerde doğruluk tek başına anlamsızdır; [[precision-and-recall|kesinlik ve duyarlılık]] gibi ölçüler hataların türünü ayırdığı için oralarda esas ölçü onlardır.

İkinci bir tuzak, hangi veride ölçüldüğünün söylenmemesidir. Modelin eğitim sırasında gördüğü veride ölçülen doğruluk, [[overfitting|ezberi]] gizler. Bir doğruluk rakamı ancak şu üç bilgiyle birlikte anlam taşır: hangi veride ölçüldü, sınıflar ne kadar dengeli ve hangi hatanın bedeli daha ağır.
