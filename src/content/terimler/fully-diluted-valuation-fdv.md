---
term: "Fully Diluted Valuation (FDV)"
tr: ""
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Bir token'ın güncel fiyatının dolaşımdaki arzla değil, toplam ya da azami arzla çarpılmasıyla bulunan değerleme."
related: [market-capitalization, circulating-supply, total-supply, max-supply, token-unlock]
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

FDV, bir token'ın güncel fiyatının **dolaşımdaki arzla değil**, toplam ya da azami arzla çarpılmasıyla bulunan sayıdır. Sorduğu soru şudur: var olabilecek her token bugünkü fiyattan değerlenseydi ortaya hangi rakam çıkardı?

Türkçede yerleşmiş bir karşılığı yok; "tam seyreltilmiş değerleme" gibi çeviriler denense de sektörde FDV kısaltmasıyla geçer.

## Nasıl çalışır?

Hesap tek satırdır: güncel fiyat, toplam ya da azami arzla çarpılır. Hangi arzın kullanıldığı kaynaktan kaynağa değişir, bu yüzden aynı token için farklı FDV rakamları görmek olağandır. [[max-supply|Azami arzı]] olmayan bir token'da FDV'nin tanımı da belirsizleşir.

Aynı hesabın [[circulating-supply|dolaşımdaki arzla]] yapılan hâli [[market-capitalization|piyasa değeridir]]. İki rakam arasındaki fark, henüz dolaşıma çıkmamış token'lara bugünkü fiyattan biçilen karşılıktır.

## Dikkat

FDV'nin ne ölçtüğünü ve ne ölçemediğini ayırmak gerekir.

Ölçtüğü şey tek bir varsayımın sonucudur: bugünkü fiyat, henüz basılmamış ya da kilitli duran token'lara da uygulanırsa toplam ne eder.

Ölçemedikleri ise şunlar: o token'ların gerçekten basılıp basılmayacağı, hangi tarihlerde [[token-unlock|dolaşıma gireceği]], o tarihte fiyatın ne olacağı ve talebin ne yapacağı. Hesap bugünün fiyatını geleceğin arzına sabitler; oysa arz değişirken fiyatın sabit kalması için bir sebep yoktur.

Bu yüzden FDV tek başına bir hüküm değil, bir karşılaştırma aracıdır — ve ancak karşılaştırdığın iki rakam aynı arz tanımıyla hesaplandıysa anlamlıdır. [[total-supply|Toplam arz]] rakamının kendisi de zamanla değiştiği için FDV sabit bir büyüklük değildir.
