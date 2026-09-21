---
term: "AI Bias"
tr: "Yapay zekâda önyargı"
aliases: ["ai bias", "yapay zeka onyargisi", "model onyargisi"]
category: yapay-zeka
subcategory: "Güvenlik ve değerlendirme"
level: orta
short: "Modelin hatalarının rastgele dağılmayıp belirli gruplar ya da durumlar aleyhine sistematik biçimde sapması."
related: [training-data, ai-safety, evals, hallucination]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: ["https://arxiv.org/abs/1609.05807"]
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Her modelin hatası vardır. Önyargı, bu hataların rastgele dağılmaması, hep aynı yöne kaymasıdır. Rastgele hata gürültüdür ve herkese az çok eşit dağılır; önyargı sistematiktir ve kimin zarar göreceği baştan bellidir.

Bu yüzden ortalama başarı sayısına bakmak önyargıyı göstermez. Model genel olarak yüksek puan alırken belirli bir dilde, belirli bir bölgede ya da belirli bir grupla ilgili girdilerde tutarlı biçimde daha kötü olabilir; ortalama bunu örter.

## Benzetme

Sürekli iki yüz gram fazla gösteren bir mutfak tartısı bozuk gibi durmaz: sayı okunur, iş yürür. Ama her tartım aynı yöne kayar. Böyle bir hatayı yakalamak için tek bir ölçüme değil, ölçümlerin dağılımına bakmak gerekir.

## Nasıl çalışır?

Önyargı dört ayrı yerden girebilir.

**Veri.** [[training-data|Eğitim verisi]] dünyayı olduğu gibi değil, kaydedildiği gibi taşır. Bir grup veride az temsil ediliyorsa model o grupla ilgili girdilerde daha az pratik yapmış olur.

**Etiketleme.** "Doğru cevap"ı çoğu zaman insanlar işaretler. Etiketleyen kişilerin bakış açısı, yönergenin belirsiz kalan yerleri ve zaman baskısı doğrudan veriye geçer.

**Hedef seçimi.** Ölçmek istediğin şey ile ölçebildiğin şey aynı değildir. Kolay ölçülen bir vekil değişkeni hedef yaparsan, o vekilin kimi sistematik olarak dezavantajlı bıraktığını da hedeflemiş olursun.

**Dağıtım.** Model, eğitildiği koşullardan farklı bir yerde kullanıldığında — başka bir dil, başka bir kullanıcı kitlesi, başka bir iş akışı — eğitimdeki denge orada geçerli olmayabilir.

## Dikkat

Önyargı bir niyet meselesi değildir; kimse onu koda yazmaz, istatistikten gelir. Ama "veriden geliyor, yapacak bir şey yok" da doğru değildir: temsil dengesi, etiketleme yönergesi, hedefin tanımı ve yayın sonrası hangi ölçümün yapılacağı birer karardır.

Ölçmenin kendisi de kolay değildir. Adilliğin tek bir matematiksel tanımı yoktur ve makul tanımlar aynı anda sağlanamayacak biçimde birbiriyle çelişebilir; hangisinin uygun olduğu teknik değil, bağlama bağlı bir karardır. Bu yüzden önyargı, bir kez kapatılan bir açık değil, düzenli [[evals|ölçümle]] takip edilen bir konudur.
