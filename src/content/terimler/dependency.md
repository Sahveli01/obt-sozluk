---
term: "Dependency"
tr: "Bağımlılık"
aliases: ["bağımlılık", "bağımlılıklar"]
category: programlama
subcategory: "Kod organizasyonu"
level: orta
short: "Projenin çalışabilmek için ihtiyaç duyduğu dış kod; şeyin değil, ilişkinin adı."
related: [package, package-manager, semantic-versioning, supply-chain-attack, library-yazilim]
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

Bağımlılık, projenin çalışabilmek için ihtiyaç duyduğu dış koddur. Kelime bir şeyin değil, bir ilişkinin adıdır: ortadaki şey bir [[package|paket]] ya da bir [[library-yazilim|kütüphanedir]], bağımlılık ise senin projenle o paket arasındaki "onsuz çalışmam" ilişkisidir.

Bağımlılıklar zincirleme ilerler. Kurduğun paketin kendi bağımlılıkları vardır, onların da başkaları; doğrudan üç paket kurup dolaylı olarak yüzlercesini projene almış olabilirsin. Doğrudan olanları sen seçersin, dolaylı olanları seçmezsin ama yine de senin projende çalışırlar.

Çoğu proje ayrıca geliştirme bağımlılıklarını ayrı tutar: test aracı ya da biçimlendirici yalnızca sen çalışırken gerekir, kullanıcıya giden üründe yer almaz.

## Nasıl çalışır?

Bağımlılıklar bir dosyada yazılıdır ve genelde kesin bir sürüm yerine bir sürüm aralığı belirtilir ([[semantic-versioning]]). [[package-manager|Paket yöneticisi]] bu aralıkları çözer, hangi sürümün kurulacağına karar verir ve sonucu bir kilit dosyasına yazar. Kilit dosyası sayesinde aynı proje başka bir bilgisayarda birebir aynı sürümlerle kurulur — "bende çalışıyordu" cümlesinin panzehiri büyük ölçüde budur.

## Benzetme

Her sabah seni işe bırakan komşun gibi. Arabası bozulduğu gün senin de günün aksar. Üstelik komşun da metroya bağlıdır; metro çalışmazsa o da gelemez. Ne metroyu sen seçtin ne de ona söz geçirebilirsin, ama sonucunu sen yaşarsın.

## Dikkat

Her bağımlılık, başkasının kodunu senin yetkilerinle çalıştırmak demektir. Bir paketin ele geçirilip zararlı bir sürümünün yayımlanması gerçekten görülmüş bir saldırı biçimidir ([[supply-chain-attack|tedarik zinciri saldırısı]]) ve zincirin en derinindeki paket bile seni etkiler.

Ters yönü de doğrudur: "hiç bağımlılık kullanma" bir çözüm değildir. Her şeyi kendin yazmak, o kodun hatalarını ve bakımını da üstlenmek demektir. Ölçü, paketin kazandırdığıyla getirdiği riski yan yana koymaktır.
