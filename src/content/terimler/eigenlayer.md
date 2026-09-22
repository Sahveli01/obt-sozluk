---
term: "EigenLayer"
tr: ""
aliases: ["eigen layer"]
category: aglar
subcategory: ""
level: ileri
short: "Ethereum'da kilitli teminatın, ek kesinti koşulları kabul edilerek başka hizmetleri de güvence altına almak için kullanılmasını sağlayan protokol."
related: [restaking, liquid-restaking-token-lrt, slashing, staking, validator, liquid-staking]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

EigenLayer, [[restaking|yeniden teminatlandırma]] fikrini uygulayan bir protokoldür. [[ethereum|Ethereum]]'da [[staking|stake edilmiş]] teminat, çekilmeden ve ağdaki asıl görevi bırakmadan, ikinci bir işin güvencesi olarak da taahhüt edilir. Amaç, yeni bir hizmetin sıfırdan kendi doğrulayıcı kümesini ve kendi teminat havuzunu kurmak zorunda kalmamasıdır.

## Nasıl çalışır?

Bir [[validator|doğrulayıcı]] çekim yetkisini protokolün sözleşmelerine yönlendirerek ya da likit staking jetonlarını yatırarak sisteme girer. Sonra desteklemek istediği hizmetleri seçer: bir veri erişilebilirliği ağı, bir [[oracle|oracle]] kümesi, bir köprünün imzacı kurulu gibi işler.

Her hizmet kendi kurallarını ve kendi [[slashing|kesinti]] koşullarını tanımlar; katılan taraf bu koşulları açıkça kabul eder. Düğüm işletmek istemeyenler teminatlarını bu işi yapan operatörlere devredebilir, böylece seçim sorumluluğu operatöre kayar.

## Dikkat

Risk fikrin kendisinde saklıdır: aynı teminat aynı anda birden çok yükümlülüğü taşır. Teminat iki kez harcanmaz ama iki kez söz verilmiştir. Bir hizmette ciddi bir kesinti yaşandığında aynı teminata bel bağlayan diğer hizmetlerin güvencesi de aynı anda zayıflar; etki tek bir protokolde kalmaz, bağlı olan her yere yayılır.

Buna üç şey eklenir. Katılan taraf, kendi yazmadığı ve denetlemediği bir yazılımın hatası yüzünden kesintiye uğrayabilir. Hizmetlerin kesinti kuralları teknik olarak karmaşıktır ve doğru anlaşıldığını kontrol etmek zordur. Teminatın az sayıda operatörde toplanması ise bağlantılı başarısızlık ihtimalini büyütür. Yazıldığı tarih itibarıyla bu modelin uzun vadeli etkileri hâlâ tartışılıyor.
