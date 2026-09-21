---
term: "Verifiable Inference"
tr: "Doğrulanabilir çıkarım"
aliases: ["verifiable inference", "dogrulanabilir cikarim"]
category: yapay-zeka
subcategory: "Yapay zekâ ve blockchain"
level: orta
short: "Bir yapay zekâ çıktısının gerçekten belirtilen modelden ve girdiden geldiğinin bağımsız olarak kanıtlanabilmesi hedefi."
related: [zkml, inference, ai-oracle, decentralized-ai, on-chain-ai-agent]
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

Bir modele soru sorup cevap aldığında, cevabın gerçekten o modelden geldiğini nereden bilirsin? Sağlayıcı sessizce daha küçük ve ucuz bir modele geçmiş, girdiyi değiştirmiş ya da çıktıyı elle düzeltmiş olabilir. Normal şartlarda tek dayanağın ona duyduğun güvendir.

Doğrulanabilir çıkarım, bu güveni kanıtla değiştirme hedefidir: "şu model, şu girdide, şu çıktıyı üretti" cümlesinin bağımsız olarak kontrol edilebilmesi. Tek bir teknik değil, bir amaçtır; altında farklı yollar denenir.

## Nasıl çalışır?

Üç ana yaklaşım vardır ve üçü farklı şeye güvenir.

**Kriptografik ispat:** Hesabın doğru yapıldığına dair bir sıfır bilgi ispatı üretilir ([[zkml|zkML]]). Garantisi en güçlü olan yoldur, çünkü kimseye güvenmen gerekmez; bedeli, ispat üretmenin [[inference|çıkarımın]] kendisinden kat kat pahalı olmasıdır.

**Güvenilir donanım:** Çıkarım, işlemcinin yalıtılmış bir bölgesinde çalışır ve donanım sonucu imzalar. Hızlıdır, ama garantisi donanım üreticisine ve o bölgenin kırılmamış olmasına dayanır.

**İyimser doğrulama:** Sonuç önce doğru kabul edilir; itiraz eden çıkarsa hesap yeniden yapılır ve haksız taraf cezalandırılır. Ucuzdur, ama bir [[challenge-period|itiraz süresi]] ve gerçekten kontrol etmek isteyen tarafların varlığını gerektirir.

## Dikkat

Doğrulanabilirlik doğruluk değildir. Kanıtlanan şey hesabın sadakatle yapılmış olmasıdır; modelin yanıldığı, [[hallucination|halüsinasyon]] gördüğü ya da taraflı olduğu bir çıktı da pürüzsüzce doğrulanabilir.

Yazıldığı tarih itibarıyla bu üç yoldan hiçbiri büyük modellerde ucuz ve yaygın değildir; alan aktif araştırma altındadır. Yine de çözmeye çalıştığı sorun somuttur: bir [[smart-contract|akıllı sözleşme]] geri alınamaz biçimde para hareket ettiriyorsa, girdisinin nereden geldiğini sormak zorundadır.
