---
term: "Cross-chain Messaging"
tr: "Zincirler arası mesajlaşma"
aliases: ["general message passing", "GMP"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Bir zincirdeki sözleşmenin başka bir zincirdeki sözleşmeyi tetikleyebilmesi; varlık transferi bunun özel bir hâlidir."
related: [blockchain-bridge, light-client, relayer, inter-blockchain-communication-ibc, interoperability, bridge-exploit]
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

Köprüyü "varlık taşıyan şey" diye düşünmek dar kalır. Altta yatan iş daha geneldir: bir zincirde olan bir şeyin başka bir zincirde kanıtlanıp bir eyleme çevrilmesi. Taşınan mesaj bir transfer emri olabileceği gibi bir oylama sonucu, bir veri ya da doğrudan bir sözleşme çağrısı da olabilir. Varlık transferi bu genel yeteneğin yalnızca en çok kullanılan hâlidir.

## Nasıl çalışır?

Üç parça vardır ve güvenlik tamamen ortadakindedir.

**Yayımlama.** Kaynak zincirdeki sözleşme mesajı üretir; içeriği bloğa yazılır ve artık zincirde kanıtlanabilir bir kayıttır.

**Doğrulama.** Hedef zincir bu mesajın gerçekliğine hükmeder. Ya karşı zincirin konsensüsünü kendi doğrular ([[light-client|hafif istemci]]), ya dışarıdaki bir imzacı kümesinin imzalarına bakar, ya da iyimser kurguda bir itiraz süresi boyunca bekleyip kimse itiraz etmezse kabul eder.

**Teslim ve yürütme.** Mesajı ve kanıtını hedefe taşıyan taraf [[relayer]]'dır; hedefteki sözleşme doğrulamayı yapar ve ilgili fonksiyonu çağırır.

Ayrıntılar bu üç adımın etrafında toplanır: aynı mesajın iki kez işlenmesini engelleyen tekrar koruması, mesajların sırası, hedefte yürütmenin başarısız olabilmesi ve teslim edilemeyen mesajlar için zaman aşımı ile iade kuralları.

## Dikkat

Bir uygulamanın kaç zincirde çalıştığı güvenliği hakkında bir şey söylemez. Güvenlik, kullandığı doğrulama yollarının **en zayıfı** kadardır; tek bir zayıf yol bütün kurulumu aşağı çeker ([[bridge-exploit|köprü istismarı]]).

Mesajın teslim edilmiş olması, hedefteki işin başarıyla bittiği anlamına gelmez: çağrı hedefte geri dönebilir. Bu iki durum ayrı ayrı ele alınmadığında varlık ne kaynakta ne hedefte kullanılabilir hâlde kalır.
