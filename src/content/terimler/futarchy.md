---
term: "Futarchy"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: ileri
short: "Hedefin oylamayla, hedefe hangi kararın ulaştıracağının ise tahmin piyasalarıyla belirlenmesini öneren yönetişim tasarımı."
related: [prediction-market, governance, decentralized-autonomous-organization-dao, oracle, governance-proposal]
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

Futarchy, iktisatçı Robin Hanson'ın 2000 yılında ortaya attığı bir yönetişim önerisidir. Tek cümlelik özeti şudur: **değerleri oyla, gerçekleri piyasaya sor.**

Ayrım şuna dayanır. "Neyi istiyoruz?" bir değer sorusudur; buna ancak topluluk karar verebilir. "Bunu hangi karar sağlar?" ise bir tahmin sorusudur; bunun bir doğru cevabı vardır ve gelecekte ölçülebilir. Futarchy birinciyi oylamaya, ikinciyi [[prediction-market|tahmin piyasasına]] bırakmayı önerir.

Uydurulmuş bir kelimedir ve Türkçeye çevrilmez; metinlerde İngilizce yazılışıyla geçer.

## Nasıl çalışır?

Önce topluluk ölçülebilir bir başarı ölçütü seçip oylar: neyin yükselmesini istiyoruz?

Ardından her [[governance-proposal|öneri]] için iki koşullu piyasa açılır. Birincisi "bu öneri kabul edilirse ölçüt bir yıl sonra nerede olur", ikincisi "reddedilirse nerede olur" sorusunu fiyatlar. Karar anında iki piyasanın fiyatı karşılaştırılır; ölçütü daha yükseğe taşıyacağı tahmin edilen yol seçilir. Gerçekleşmeyen senaryodaki işlemler iptal edilir, çünkü o dünya hiç var olmamıştır.

Fikrin dayanağı, bir tahminin arkasına kendi parasını koyan kişinin dikkatli olacağı ve fiyatın dağınık bilgiyi tek bir sayıda toplayacağıdır.

## Dikkat

Futarchy pratikte çok az denenmiş bir tasarım önerisidir; uygulanan bir standart değil, tartışılan bir fikir olarak okunmalıdır.

Bilinen üç zorluk var. Ölçüt sorunu: ölçülen şey istenen şeyin tamamını temsil etmiyorsa, sistem ölçütü iyileştirip asıl amacı bozabilir. İncelik sorunu: az işlem gören bir piyasada fiyatı oynatmak ucuzdur, dolayısıyla kararı da oynatmak ucuzdur. Ölçme sorunu: dönem sonunda ölçütün gerçek değerini kimin bildireceği başlı başına bir [[oracle|kâhin]] meselesidir.

Bu terim bir yönetişim mekanizmasını anlatır; hiçbir piyasada pozisyon alma önerisi taşımaz.
