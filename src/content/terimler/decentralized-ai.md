---
term: "Decentralized AI"
tr: "Merkeziyetsiz yapay zekâ"
aliases: ["merkeziyetsiz yapay zeka", "decentralized ai"]
category: yapay-zeka
subcategory: "Yapay zekâ ve blockchain"
level: orta
short: "Yapay zekânın model, hesaplama ve doğrulama halkalarını tek bir şirketin elinden çıkarmayı hedefleyen yaklaşımların şemsiye adı."
related: [on-chain-ai-agent, zkml, verifiable-inference, ai-oracle, depin, decentralized-compute]
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

Bugün bir yapay zekâ modeli kullanmak çoğunlukla tek bir şirketin sunucusuna istek göndermek demektir. O şirket modeli değiştirebilir, erişimi kesebilir, fiyatı belirler ve gönderdiğin metni görür. Merkeziyetsiz yapay zekâ, bu bağımlılığın azaltılabileceği noktaları arayan yaklaşımların ortak adıdır — tek bir teknoloji değil, bir şemsiye.

Şemsiyenin altında birbirinden bağımsız dört soru durur: model kimin, hesaplama nerede yapılıyor, çıktının doğruluğu kanıtlanabiliyor mu, ve sonuç zincire nasıl bağlanıyor.

## Benzetme

Bir ilacın dört durağı vardır: onu bulan araştırmacı, üreten tesis, taşıyan dağıtımcı ve veren eczane. "Bu ilaç bağımsız" cümlesi, dört duraktan hangisi için söylendiği bilinmeden bir şey anlatmaz. Merkeziyetsiz yapay zekâ da öyledir; hangi halkanın merkezden çıktığını sormadan cevabı yoktur.

## Nasıl çalışır?

Halkalar ayrı ayrı ele alınır.

**Model:** Ağırlıkları indirilebilen [[open-weight-model|açık ağırlıklı modeller]] şemsiyenin bugün en olgun parçasıdır; kimseden izin almadan kendi donanımında çalıştırabilirsin.

**Hesaplama:** Modeli çalıştıran makineler tek bir sağlayıcının veri merkezi yerine birçok bağımsız sahibin elinde olabilir ([[decentralized-compute|dağıtık hesaplama]]); bu donanımın toplanma biçimlerinden biri de [[depin|DePIN]] modelidir.

**Doğrulama:** Bir çıktının gerçekten söylenen modelden geldiğini kanıtlama sorunu [[verifiable-inference|doğrulanabilir çıkarım]] başlığı altında, bir tekniği olarak da [[zkml|zkML]] adıyla çalışılır.

**Zincirle bağ:** Sonucu [[smart-contract|akıllı sözleşmeye]] taşıyan [[ai-oracle|AI oracle]] ve kendi işlemini gönderen [[on-chain-ai-agent|zincir üstü AI ajanı]] bu halkanın adlarıdır.

## Dikkat

Halkalardan birinin merkezden çıkması diğerlerini kurtarmaz. Açık ağırlıklı bir modeli tek bir şirketin bulutunda çalıştırıyorsan bağımlılık yer değiştirmiş, yok olmamıştır.

Yazıldığı tarih itibarıyla bu başlığın altındaki işlerin olgunluğu birbirinden çok farklıdır: model ağırlıklarını paylaşmak günlük pratiktir, doğrulama tarafı büyük ölçüde araştırma aşamasındadır. "Merkeziyetsiz AI" ifadesini gördüğünde hangi halkadan söz edildiğini sormak, cümlenin ne kadarının bugün çalıştığını anlamanın en hızlı yoludur.
