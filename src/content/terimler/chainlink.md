---
term: "Chainlink"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Zincir dışındaki veriyi birden çok kaynaktan toplayıp birleştirerek akıllı sözleşmelere ulaştıran bir oracle ağı."
related: [oracle, price-feed, oracle-manipulation, verifiable-random-function-vrf, automation-keeper, smart-contract]
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

Chainlink bir [[oracle|oracle]] ağıdır. [[smart-contract|Akıllı sözleşmeler]] yalnızca kendi zincirlerinde yazılı olanı görebilir; bir döviz kuru, bir maç sonucu ya da başka bir zincirdeki olay onlar için görünmez. Chainlink, bu veriyi dışarıdan toplayıp zincire yazan bağımsız düğümlerden oluşur.

## Nasıl çalışır?

Yaygın kullanımı fiyat beslemesidir. Çok sayıda düğüm aynı veriyi farklı kaynaklardan çeker, aykırı değerler elenerek sonuçlar tek bir değerde birleştirilir, bu değer imzalanıp zincirdeki bir sözleşmeye yazılır. Güncelleme her blokta yapılmaz; fiyat belirlenen eşikten fazla saptığında ya da belirlenen süre dolduğunda tetiklenir, böylece zincire yazma maliyeti sınırlanır. Okuyan sözleşme [[price-feed|fiyat beslemesini]] tek bir çağrıyla alır.

Aynı ağ, doğrulanabilir rastgelelik ([[verifiable-random-function-vrf|VRF]]), koşul gerçekleştiğinde sözleşme çağıran [[automation-keeper|otomasyon]] ve zincirler arası mesajlaşma gibi işler için de kullanılır.

## Dikkat

Birden çok düğüm ve birden çok kaynak kullanmak riski azaltır, ortadan kaldırmaz. Sözleşmen bir beslemeyi okuduğu anda o ağın düğümlerine, kullandıkları veri kaynaklarına ve birleştirme mantığına güvenmiş olur. Kaynakların hepsi dolaylı olarak aynı piyasayı işaret ediyorsa çeşitlilik yalnızca görünüştedir.

İkinci tehlike bayat veridir: besleme durur ya da güncellenmezse sözleşme eski değerle işlem yapmaya devam eder. Bu yüzden ciddi sözleşmeler verinin yaşını kontrol eder ve makul aralığın dışındaki değerlerde işlemi durdurur. [[oracle-manipulation|Oracle manipülasyonu]], yazıldığı tarih itibarıyla zincir üstü sistemlerde hâlâ sık karşılaşılan bir saldırı biçimidir.
