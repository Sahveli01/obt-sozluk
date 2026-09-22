---
term: "Polkadot"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: ileri
short: "Özelleşmiş zincirleri ortak bir doğrulayıcı kümesinin güvencesi altında çalıştırmayı hedefleyen çoklu zincir mimarisi."
related: [webassembly-wasm, appchain, validator, interoperability, cosmos]
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

Polkadot, birbirinden farklı işler yapan zincirlerin tek tek kendi güvenliğini kurmak zorunda kalmasını bir israf olarak görür. Önerdiği çözüm, güvenliği ortak bir havuzda toplamaktır: uygulamalar kendi zincirlerini yazsın, ama o zincirlerin doğru çalıştığını tek bir doğrulayıcı kümesi güvence altına alsın.

## Nasıl çalışır?

Merkezde bir koordinasyon zinciri vardır. Ona bağlanan zincirler kendi mantığını ve kurallarını kendileri belirler, ancak ürettikleri bloklar merkezî kümedeki [[validator|doğrulayıcılara]] atanmış gruplar tarafından kontrol edilir ve sonuç koordinasyon zincirine kaydedilir. Bağlı bir zincire saldırmak, ağın tamamının güvencesiyle karşılaşmak demektir; yeni zincir ilk gününden itibaren bu güvenceyi devralır.

Zincirlerin mantığı [[webassembly-wasm|WebAssembly]] olarak ifade edilir ve bu mantık zincirin kendi durumunda saklanır. Pratik sonucu şudur: bir yükseltme, bütün düğümlerin yeni yazılım kurmasını gerektiren bir çatallanma olmadan, zincir üstü bir kararla yapılabilir. Zincirler arası mesajlaşma da merkezî katman üzerinden yürür.

## Dikkat

Ortak güvenlik bedava değildir. Bağlanma kapasitesi kıt bir kaynaktır ve tahsis edilir; bir zincirin orada yer tutması bir maliyet doğurur. Yazıldığı tarih itibarıyla bu tahsisin biçimi zaman içinde değişmiştir, dolayısıyla güncel koşulları protokolün kendi belgelerinden doğrulamak gerekir.

İkinci bedel özerkliktir: bağlı zincir, ortak doğrulama çerçevesinin kabul ettiği biçimde çalışmak zorundadır. [[cosmos|Cosmos]] tarafındaki "kendi doğrulayıcını kendin bul, karşılığında kuralını tamamen kendin yaz" dengesi burada tersine kurulur.
