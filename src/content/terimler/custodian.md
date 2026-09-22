---
term: "Custodian"
tr: "Saklamacı"
aliases: ["saklama kurulusu"]
category: piyasa
subcategory: "Fiat ve saklama"
level: orta
short: "Başkalarına ait varlıkları onlar adına tutan taraf; kripto tarafında anahtarları elinde bulunduran kurum."
related: [custody, custodial-wallet, centralized-exchange-cex, proof-of-reserves, bank-run, key-management]
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

Custodian, saklama işini üstlenen taraftır: varlıkları sahibi adına tutar, giriş çıkışları kaydeder, anahtarları yönetir. Merkezi borsalar ([[centralized-exchange-cex|CEX]]) müşterileri için fiilen bu rolü üstlenir; bunun dışında yalnızca kurumlara saklama hizmeti veren şirketler de vardır. Türkçede karşılığı yerleşiktir: saklamacı, ya da saklama kuruluşu.

## Nasıl çalışır?

İşin özü [[key-management|anahtar yönetimidir]]. Tipik bir kurulum varlıkların büyük bölümünü internete hiç bağlanmayan cihazlarda tutar ([[cold-wallet|soğuk cüzdan]]), günlük çekimleri karşılayacak küçük bir bakiyeyi çevrimiçi bırakır ([[hot-wallet|sıcak cüzdan]]) ve para çıkışını tek bir çalışanın tek başına yapamayacağı şekilde birden fazla onaya bağlar.

Rolün diğer yarısı teknik değildir: müşteri kayıtlarını tutmak, kimlik doğrulaması yapmak ([[kyc|KYC]]) ve faaliyet gösterilen ülkenin kurallarına uymak. Birçok ülkede saklama ayrı bir izin ya da lisans gerektirir ve müşteri varlıklarının kurumun kendi varlıklarından ayrı tutulması gibi yükümlülükler getirir. Bu kuralların kapsamı ve sıkılığı ülkeden ülkeye değişir.

## Dikkat

Bir saklamacı tanımı gereği tek arıza noktasıdır. Teknik bir ihlal, bir iç suistimal, bir mahkeme kararı ya da ödeme gücünü yitirmesi — her biri senin hiçbir hatan olmadan varlığına erişimini kesebilir. Müşterilerin aynı anda çekim istemesiyle ortaya çıkan tablo, bir [[bank-run|banka hücumunun]] aynısıdır: kurum varlığı yerinde olsa bile o anda karşılayamayabilir.

Bir kurumun elindeki varlıkları göstermesi bu riski ortadan kaldırmaz, çünkü ne kadar borcu olduğunu göstermez ([[proof-of-reserves]]). Saklamacıyla çalışmak bir teknolojiye değil, bir kuruma ve onun denetlendiği hukuki çerçeveye güvenmektir; bu çerçevenin ne olduğu ise [[custody|saklama]] tercihinin asıl konusudur.
