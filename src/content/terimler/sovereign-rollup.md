---
term: "Sovereign Rollup"
tr: ""
aliases: []
category: olceklenme
subcategory: "Rollup'lar"
level: ileri
short: "Verisini bir veri katmanına yayımlayan, ama işlemlerinin geçerliliğine bir L1 sözleşmesinin değil kendi node'larının karar verdiği rollup."
related: [rollup, data-availability-layer, settlement-layer, modular-blockchain, fork-blockchain]
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

Klasik bir [[rollup|rollup]] iki şeyi birden başka bir zincire emanet eder: verisinin yayımlanmasını ve sonucunun geçerli sayılıp sayılmayacağını. İkincisi, ana zincirdeki sözleşmelerde karara bağlanır.

Egemen rollup yalnızca birincisini devreder. Verisini bir [[data-availability-layer|veri erişilebilirlik katmanına]] yazar, ama "hangi zincir doğru zincirdir" sorusuna orada cevap aranmaz; cevabı, o rollup'ın kurallarını çalıştıran kendi node'ları verir. Terim İngilizcesiyle kullanılır.

## Benzetme

Gazeteye ilan vermek gibi. Gazete ilanını basar, tarihini ve sırasını kayda geçirir; böylece "böyle bir ilan vardı, şu gün yayımlandı" tartışması kapanır. Ama gazete ilandaki iddianın doğruluğunu onaylamaz. Onu okuyanlar kendi kurallarına göre değerlendirir.

## Nasıl çalışır?

Veri katmanı iki iş yapar: yayımlanan verinin sırasını sabitler ve herkesin ona erişebildiğini garanti eder.

Rollup'ın kendi yazılımını çalıştıran node'lar bu veriyi okur, kuralları uygular ve geçersiz işlemleri kendileri eler. Kuralları değiştirmek, bir yükseltme yapmak ya da bir [[fork-blockchain|çatallanmayı]] çözmek o topluluğun kararıdır — dışarıdaki bir sözleşmenin onayına bağlı değildir. Adındaki "egemenlik" budur.

## Dikkat

Esnekliğin bedeli, hakemin ortadan kalkmasıdır. Klasik rollup'ta ana zincirdeki köprü, sonucun geçerliliğini kendisi denetlediği için çıkış güvenliğini de üstlenir. Egemen rollup'ta böyle bir denetleyici yoktur; o zincirle bir başka zincir arasındaki köprü, ayrıca kurulması ve ayrıca güvenilmesi gereken bir yapıdır.

Karşılaştırmayı tek soruyla yapabilirsin: *anlaşmazlıkta son sözü kim söylüyor?* Klasik rollup'ta bir sözleşme, egemen rollup'ta zincirin kendi topluluğu.
