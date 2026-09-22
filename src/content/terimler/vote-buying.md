---
term: "Vote Buying"
tr: "Oy satın alma"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Oy gücünün bedel karşılığı el değiştirmesi; oy hakkının devredilebildiği her sistemde ortaya çıkabilen bir sonuç."
related: [vote-incentives-bribes, governance-attack, vote-delegation, token-weighted-voting, plutocracy]
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

Oy hakkı devredilebilir bir varlığa bağlanmışsa, o hak satılabilir ya da kiralanabilir de. Oy satın alma, bir kararın sonucunu etkilemek için oy gücünün geçici olarak bedel karşılığı edinilmesidir.

Bunu ayrı bir saldırı türü gibi düşünmemek gerekir. Jeton hem alınıp satılabiliyor hem de oy taşıyorsa, oyun fiyatlanması tasarımın kendi sonucudur; engellenmesi için ayrıca bir şey yapılması gerekir.

## Nasıl çalışır?

Açık biçiminde kimse bir şey gizlemez: belirli bir yönde oy kullanan ya da [[vote-delegation|vekâletini]] belirli bir adrese veren cüzdanlara ödeme yapılacağı ilan edilir. Sektörde bunlara "bribe" denir, ama ilan edilmiş bir teşvik programıdırlar ([[vote-incentives-bribes|oy teşvikleri]]).

Örtük biçiminde oy hiç el değiştirmez, jeton el değiştirir: oylamanın sayım anından hemen önce jeton kiralanır, ödünç alınır ya da toplanır; karar geçtikten sonra geri verilir. Sayım anlık bakiyeye bakıyorsa bu yeterlidir ([[snapshot-token|anlık görüntü]]).

İki biçimde de mekanizma aynıdır: oyu kullanan kişi ile kararın sonucunu taşıyan kişi birbirinden ayrılır. Oy veren, kararın uzun vadeli etkisini üstlenmez.

## Dikkat

Denenen karşı önlemler bu ayrılmayı zorlaştırmaya çalışır: oy gücünü kilit süresine bağlamak ([[vote-escrowed-token-vetoken|vetoken]]), desteği zamana yaymak ([[conviction-voting|conviction voting]]), anlık bakiye yerine geçmişe yayılmış ağırlık kullanmak, oy hakkını devredilemez kılmak. Hepsi maliyeti artırır, hiçbiri sorunu bitirmez.

Sınır nerede başlar sorusunun net bir cevabı yoktur: bir uçta ilan edilmiş bir teşvik, diğer uçta hazineyi hedefleyen bir [[governance-attack|yönetişim saldırısı]] vardır. Aradaki fark ölçek ve niyettir; mekanizma değişmez.
