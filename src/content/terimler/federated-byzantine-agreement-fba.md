---
term: "Federated Byzantine Agreement (FBA)"
tr: ""
aliases: ["fba"]
category: konsensus
subcategory: "Mekanizmalar"
level: ileri
short: "Her düğümün kimlerin onayını şart koştuğunu kendi seçtiği, bu kümeler yeterince örtüştüğünde ağın tek bir karara vardığı BFT türü."
related: [byzantine-fault-tolerance-bft, practical-byzantine-fault-tolerance-pbft, consensus-mechanism, sybil-resistance, permissionless, node]
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

Klasik [[byzantine-fault-tolerance-bft|BFT]] protokollerinde katılımcı listesi herkes için aynıdır ve merkezî olarak belirlenir. FBA bu listeyi merkezden alıp her düğüme bırakır: düğüm, "bir şeye karar vermek için kimlerin hemfikir olmasını şart koşuyorum" sorusunu kendisi cevaplar. Bu kişisel kümeye quorum dilimi denir. Adı bir protokol ailesinin özel adıdır, Türkçeye çevrilmez.

## Benzetme

Çarşıdaki bir toptancı, yeni bir müşteriye vadeli mal verip vermeyeceğine kendi tanıdıklarına sorarak karar verir. Kimin sözüne itibar edeceğini ona kimse dayatmaz, listeyi kendisi kurar. Herkesin listesi başkalarınınkiyle kesiştiği sürece çarşı aynı isimlerde buluşur. İki grubun tanıdıkları hiç kesişmezse çarşı ikiye bölünür: bir tarafın kefil saydığı kişiye öbür taraf hiç itibar etmez.

## Nasıl çalışır?

Bir düğüm, kendi dilimindeki düğümlerin aynı değerde anlaştığını gördüğünde o değeri benimser. Benimseme komşulara yayıldıkça ağ tek bir karara doğru kilitlenir; karar verildiğinde geri alınmaz.

Bütünlük tek bir şarta bağlıdır: dilimlerin yeterince örtüşmesi. Örtüşme zayıfsa iki küme birbirinden habersiz iki ayrı karara varabilir ve ağ ikiye ayrılır. Bu yüzden FBA ağlarında kimin kimi listesine aldığı, protokol kadar önemli bir yapı bilgisidir.

Katılım kapıda izne bağlı değildir; istediğin an bir [[node|düğüm]] açarsın. Ama kimsenin seni kendi dilimine koyma zorunluluğu yoktur, dolayısıyla ağa fiilen dahil olmak başkalarının seni listelemesiyle olur.

## Dikkat

FBA, izinli ve izinsiz ağlar arasında ayrı bir yerde durur: kapıda tek bir liste yoktur ama her düğümün kendi listesi vardır. [[sybil-attack|Sybil]] sorununu maliyetle değil seçimle çözer — sahte düğüm açmak serbesttir, kimse onları dilimine almadığı sürece ağırlıkları olmaz.

Bedeli şudur: güvenin kimde toplandığı protokolün dışında kalan bir meseledir. Düğümlerin çoğu listesine aynı birkaç ismi koyarsa ağ fiilen o isimlere bağlanır ve bunu protokolün kendisinden okuyamazsın; [[permissionless|izinsiz]] görünen bir ağ pratikte dar bir çekirdeğe dayanıyor olabilir.
