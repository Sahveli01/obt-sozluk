---
term: "Council"
tr: "Konsey"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Topluluk tarafından seçilen, belirli kararları tam oylamayı beklemeden alabilen küçük kurul."
related: [decentralized-autonomous-organization-dao, veto, working-group, multisig, vote-delegation, governance]
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

Her kararı bütün topluluğa oylatmak yavaştır: öneri yazılır, tartışma süresi dolar, oylama açılır, yeter sayı beklenir. Bir parametrenin aynı gün değişmesi gerektiğinde bu süre işe yaramaz.

Konsey, bu yüzden kurulur: topluluğun seçtiği, dönemlik görev yapan ve yetkisi önceden yazılmış küçük bir kuruldur. Kurul, kendisine tanınan dar alanda oylamayı beklemeden karar alır; alan dışındaki her şey normal sürece gider.

## Nasıl çalışır?

Üyeler genelde jeton sahiplerinin oyuyla ya da [[vote-delegation|vekâlet]] yoluyla toplanan oylarla seçilir; görev süresi doldukça seçim yenilenir.

Asıl mesele yetkinin nasıl sınırlandığıdır ve bu çoğu zaman yalnızca metinde değil, kodda da yapılır. Konsey bir [[multisig|çoklu imza]] ya da sözleşmede tanımlı bir rol üzerinden yalnızca belirli işlemleri çağırabilir: belirli bir tutarın altındaki harcamalar, önceden listelenmiş parametreler, acil durdurma. [[treasury|Hazineden]] büyük bir aktarım ya da sözleşme yükseltmesi listeye girmez.

Bazı tasarımlarda konseye ayrıca [[veto|veto]] yetkisi de verilir; o zaman kurul yalnızca karar almaz, alınmış kararı durdurabilir de.

## Dikkat

Konsey hız kazandırır, karşılığında merkeziyet ekler — bu bir kusur değil, bilinerek ödenen bir bedeldir. Değerlendirirken üç soruya bakılır: hangi yetkiler verildi, ne kadar süreyle, ve geri almanın yolu nedir.

Üçüncüsü en çok atlanandır. Bir kurulun yetkisi görev süresi dolmadan geri alınamıyorsa ya da geri alma önerisini yine kurul engelleyebiliyorsa, seçim bir temsil değil tek seferlik bir devir olur.
