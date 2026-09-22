---
term: "Sybil Resistance"
tr: "Sybil Direnci"
aliases: ["sybil direnci"]
category: konsensus
subcategory: "Kesinlik ve güvenlik özellikleri"
level: orta
short: "Oy hakkını kimliğe değil, üretilmesi maliyetli bir kaynağa bağlayarak sahte kimlik kalabalığını anlamsız kılmak."
related: [sybil-attack, proof-of-work-pow, proof-of-stake-pos, permissionless, consensus-mechanism, staking]
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

Kimliğin bedava üretilebildiği bir ağda "bir kişi bir oy" kuralı işlemez; tek bir kişi binlerce adresle binlerce kişi gibi görünebilir ([[sybil-attack|Sybil saldırısı]]). **Sybil direnci**, bu kalabalığın bir işe yaramamasını sağlayan tasarım özelliğidir.

Çözümün yolu kimlikleri saymak değildir. Söz hakkı kimliğe değil, üretilmesi maliyetli bir kaynağa bağlanır. Bin adres açmak bin kat güç vermez, çünkü ölçülen şey adres sayısı değildir.

## Benzetme

Müzayede salonuna girerken kapıda bırakılan teminat gibi. Görevli senin kim olduğunu araştırmaz, adını listeden kontrol etmez. Yalnızca teminatını alır ve teklif verme hakkını ona göre tanır. On ayrı adla kayıt yaptırman bir işe yaramaz: on kat teminat yatırman gerekir ve ondan sonra zaten on ayrı ad olmanın bir anlamı kalmaz.

## Nasıl çalışır?

[[permissionless|İzinsiz]] ağlarda kullanılan iki ana yol vardır ve ikisi de aynı fikrin farklı uygulamasıdır.

**Harcanan iş.** [[proof-of-work-pow|İş ispatında]] bir blok önermek gerçek bir hesaplama maliyeti gerektirir. Ölçülen şey elindeki üretim gücüdür; kimliğin kaç tane olduğu hiç sorulmaz.

**Kilitlenen sermaye.** [[proof-of-stake-pos|Pay ispatında]] söz hakkı [[staking|kilitlenen]] teminata bağlanır. Aynı teminatı yüz adrese bölmek toplam ağırlığı büyütmez, yalnızca aynı ağırlığı yüze böler.

İkisinin de kendine özgü baskıları vardır: maliyetin tek bir yerde toplanması ucuza geldiğinde güç, sayısı az ve büyük oyunculara doğru kayabilir. Bu, mekanizmadan bağımsız olarak "maliyete bağlı söz hakkı" fikrinin ortak gerilimidir.

## Dikkat

Sybil direnci kimlik doğrulaması değildir. Kimsenin gerçek kişi olduğunu kanıtlamaz; yalnızca sahte kalabalık kurmayı pahalı hâle getirir.

Bu yüzden insan başına bir hak dağıtmak gereken yerlerde — oy, dağıtım, itibar — konsensüs mekanizması tek başına yetmez. Orada iş, kimliği başka bir yoldan pahalılaştıran çözümlere düşer: doğrulama adımları, devredilemez kayıtlar ya da gerçekten yapılması gereken eylemler.
