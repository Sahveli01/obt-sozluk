---
term: "AI Oracle"
tr: ""
aliases: ["ai oracle", "yapay zeka oracle"]
category: yapay-zeka
subcategory: "Yapay zekâ ve blockchain"
level: orta
short: "Bir yapay zekâ modelinin çıktısını akıllı sözleşmelerin okuyabileceği biçimde zincire taşıyan oracle türü."
related: [oracle, verifiable-inference, on-chain-ai-agent, oracle-manipulation, decentralized-ai, prompt-injection]
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

Klasik bir [[oracle|oracle]] zincirin göremediği bir olguyu zincire taşır: bir fiyat, bir hava ölçümü, bir maç sonucu. Taşıdığı şey dışarıda zaten vardır ve prensipte birden çok kaynaktan aynı cevap alınabilir.

AI oracle ise zincire bir ölçüm değil, bir yargı taşır: bir metnin kuralları çiğneyip çiğnemediği, bir görselin neyi gösterdiği, bir başvurunun şartları karşılayıp karşılamadığı. Cevap dışarıda hazır durmaz; bir model çalıştırılarak üretilir.

## Benzetme

Tartı sana kilogramı söyler ve iki tartı aynı cevabı verir. Jüri ise bir yorum verir; aynı dosyaya bakan iki jüri farklı puan verebilir ve hangisinin haklı olduğunu ölçecek bir alet yoktur. Klasik oracle tartıdır, AI oracle jüridir.

## Nasıl çalışır?

İskelet klasik oracle ile aynıdır: zincir dışında bir istek alınır, model çalıştırılır, sonuç imzalanıp zincire yazılır ve bir [[smart-contract|akıllı sözleşme]] bunu okur.

Fark, güven sorusunun nereye kaydığındadır. Fiyat taşıyan bir oracle'da birden çok bağımsız kaynağın ortancası alınabilir, aykırı değer atılabilir. Modelin yargısında karşılaştırılacak bir "gerçek değer" yoktur; aynı soruya farklı sağlayıcılar farklı cevap verebilir.

Bu yüzden bu başlıkta iki ek soru sorulur: çıktının gerçekten o modelden geldiği kanıtlanabiliyor mu ([[verifiable-inference|doğrulanabilir çıkarım]]), ve birden çok sağlayıcının cevabı nasıl uzlaştırılıyor — oylamayla, çoğunlukla ya da bir itiraz süreciyle.

## Dikkat

AI oracle, [[oracle-manipulation|oracle manipülasyonu]] riskini ortadan kaldırmaz; yüzeyini genişletir. Fiyat besleyen bir oracle'ı yanıltmak için piyasayı oynatmak gerekirken, bir modeli yanıltmak için özenle hazırlanmış bir girdi ([[prompt-injection|prompt injection]]) yetebilir.

Yazıldığı tarih itibarıyla bu tür oracle'lar erken uygulama aşamasındadır. Model çıktısına geri alınamaz bir para kararı bağlamadan önce, cevap yanlış olursa ne olacağını tasarlamak gerekir.

"Oracle" kelimesinin yerleşik bir Türkçe karşılığı yok; sektörde İngilizce kullanılıyor.
