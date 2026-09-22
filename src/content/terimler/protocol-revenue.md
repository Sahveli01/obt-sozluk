---
term: "Protocol Revenue"
tr: "Protokol geliri"
aliases: ["protokol geliri"]
category: defi
subcategory: "Temeller"
level: orta
short: "Bir protokolün topladığı ücretlerden kendisine kalan kısım; likidite sağlayıcılara dağıtılan pay bundan ayrıdır."
related: [real-yield, treasury, buyback, governance-token, decentralized-exchange-dex]
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

Protokol geliri, bir protokolün topladığı ücretlerden kendisine kalan kısımdır. Kullanıcının ödediği toplam ücretle aynı şey değildir: bir [[decentralized-exchange-dex|takas protokolünde]] ücretin büyük bölümü havuza para koyan [[liquidity-provider-lp|likidite sağlayıcıya]] gider. Protokole ayrılmış bir pay varsa gelir odur; yoksa protokolün geliri yok demektir.

## Nasıl çalışır?

Gelir kalemleri protokolün işine göre değişir: takas ücretinin protokol payı, borç verenlere dağıtılan faizden kesilen rezerv payı, kasalardan alınan performans ücreti, teminatlı borçlarda işleyen [[stability-fee|istikrar ücreti]].

Toplanan tutarın nereye gideceği ayrı bir karardır. Çoğu protokolde gelir önce [[treasury|hazineye]] girer; geliştirme, güvenlik denetimi ve teşvik bütçesi oradan ödenir. Token sahiplerine dağıtılması zorunlu değildir; ancak bir [[governance-token|yönetişim]] oylamasıyla açılırsa olur. İngilizcede bu karara *fee switch* denir.

## Dikkat

Gelir ile kâr aynı şey değildir. Teşvik olarak dağıtılan token, denetim ve altyapı masrafı gelirden düşülmemiştir; bir protokol aynı dönemde topladığından fazlasını teşvike harcıyor olabilir.

İkincisi, gelirin token'a yansıması otomatik değildir. Dağıtım ya da [[buyback|geri alım]] kararı yoksa gelir hazinede birikmeye devam eder. "Protokol gelir üretiyor" cümlesi tek başına token sahibinin eline bir şey geçtiği anlamına gelmez.

Üçüncüsü, gelirin nasıl sayıldığı veri kaynağına göre değişir: bazı panolar kullanıcının ödediği toplam ücreti, bazıları yalnızca protokole kalan payı "gelir" diye gösterir. İki sayıyı karşılaştırmadan önce hangisinin ne saydığına bakmak gerekir.
