---
term: "Emission Schedule"
tr: "Emisyon takvimi"
aliases: []
category: tokenlar
subcategory: "Tokenomi"
level: orta
short: "Yeni token'ların zaman içinde hangi hızla ve hangi kurala göre basılacağını önceden belirleyen takvim."
related: [token-inflation, halving, block-reward, mint, max-supply, tokenomics]
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

Emission schedule, yeni token'ların ne zaman ve ne kadar basılacağını belirleyen kuraldır. "Her blokta şu kadar", "belirli aralıklarla yarıya iner", "kilitli miktara göre değişir" gibi ifadelerin hepsi bir emisyon takvimi tarifidir.

## Nasıl çalışır?

Takvimler kabaca üç biçimde kurulur.

**Sabit**: her blokta aynı miktar basılır; [[block-reward|blok ödülü]] zamanla değişmez. **Azalan**: ödül belirli aralıklarla düşürülür — Bitcoin'in [[halving|yarılanması]] bu türün en bilinen örneğidir. **Değişken**: basım miktarı ağdaki bir büyüklüğe bağlanır, örneğin stake edilmiş toplam miktara.

Takvimin nerede durduğu ayrı bir sorudur. Protokolün kendi kurallarına gömülü bir takvim ancak bir ağ yükseltmesiyle değişir; bir sözleşmede tutulan takvim, yetkili adres ya da yönetişim kararıyla değiştirilebilir.

## Dikkat

Takvimi sonucuyla karıştırma. Emission schedule basımın **planıdır**; [[token-inflation|token enflasyonu]] ise o planın arz üzerindeki **sonucudur**. İkisi çoğu zaman aynı yöne bakar ama aynı şey değildir: aynı takvim altında yakma varsa arzdaki net artış takvimin söylediğinden küçük olur, [[max-supply|azami arza]] ulaşıldığında ise takvim ne derse desin yeni [[mint|basım]] yapılmaz.

İkincisi, takvimin kodda yazılı olması onu değiştirilemez yapmaz. Takvimin ne dediği kadar, onu kimin değiştirebildiği de takvimin bir parçasıdır.
