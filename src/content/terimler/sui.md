---
term: "Sui"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "Durumu tek bir küresel tablo yerine sahipli nesneler olarak modelleyen, Move tabanlı blockchain ağı."
related: [move, resource-oriented-programming, parallel-execution, finality, smart-contract]
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

Sui, veri modelini baştan değiştirerek ölçeklenmeyi hedefleyen bir blockchain ağıdır. Çoğu zincirde defter tek bir büyük durum tablosudur ve her işlem bu tablonun bir yerine dokunur. Sui'de ise durum, her birinin sahibi ve kimliği olan **nesnelerden** oluşur: bir token, bir oyun eşyası ya da bir sözleşme kaydı ayrı birer nesnedir.

## Nasıl çalışır?

Bu model, işlemleri ikiye ayırmayı mümkün kılar. Yalnızca tek bir hesabın sahip olduğu nesnelere dokunan bir işlem başka kimsenin durumuyla çakışamaz; dolayısıyla bütün ağın ortak bir sıraya dizmesine gerek kalmadan, doğrulayıcıların onayıyla kesinleşebilir. Birden çok kullanıcının paylaştığı nesnelere dokunan işlemler ise tam sıralamadan geçer, çünkü orada "kim önce" sorusunun cevabı sonucu değiştirir.

Sözleşmeler [[move|Move]] dilinin nesne modeline uyarlanmış bir sürümüyle yazılır; varlıkların kopyalanamaz ve kaybolamaz olması [[resource-oriented-programming|kaynak temelli programlama]] yaklaşımından gelir. Çakışmayan işler doğal olarak [[parallel-execution|paralel]] ilerler.

## Dikkat

Tercih, geliştiriciye iş devreder. Bir uygulamanın hızlı yoldan yararlanabilmesi için verisinin nesnelere doğru bölünmüş olması gerekir; her şeyin paylaşılan tek bir nesnede toplandığı bir tasarım kazancın çoğunu geri verir. Ayrıca [[smart-contract|sözleşme]] yazım biçimi [[ethereum-virtual-machine-evm|EVM]] alışkanlıklarına benzemez: araçlar, cüzdan entegrasyonları ve denetim pratiği ayrı bir ekosistem olarak öğrenilir. Yazıldığı tarih itibarıyla bu ekosistem hâlâ genç sayılır.
