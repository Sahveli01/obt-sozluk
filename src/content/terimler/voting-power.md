---
term: "Voting Power"
tr: "Oy gücü"
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Bir adresin bir oylamada taşıdığı ağırlık; çoğu tasarımda tutulan token miktarından türetilir."
related: [token-weighted-voting, vote-delegation, quorum, governance-token, vote-escrowed-token-vetoken, quadratic-voting]
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

Oy gücü, bir adresin belirli bir oylamada kaç birim ağırlık taşıdığıdır. "Bir kişi bir oy" kuralının geçerli olmadığı sistemlerde iki soru belirleyicidir: bu ağırlık neyden türetiliyor ve ne zaman ölçülüyor?

## Nasıl çalışır?

Türetme kuralı tasarıma göre değişir:

- Doğrudan bakiye: tutulan her token bir oydur ([[token-weighted-voting|token ağırlıklı oylama]]).
- Süreyle çarpılmış bakiye: token belirli bir süre kilitlenir, ağırlık kilidin uzunluğuyla birlikte artar ([[vote-escrowed-token-vetoken|veToken]]).
- Bakiyenin karekökü: büyük bakiyelerin ağırlığı bilinçli olarak bastırılır ([[quadratic-voting]]).
- Kişi başına bir oy: en sezgiseli, ama izinsiz bir ağda tek bir kişinin binlerce adres açmasını engellemek ayrı ve zor bir problemdir ([[sybil-attack|Sybil saldırısı]]).

Ölçüm anı en az kural kadar önemlidir. Oy gücü neredeyse her zaman geçmiş bir blokta ölçülür; böylece oylama sürerken ağırlık toplayıp sonucu çevirmek mümkün olmaz.

Ağırlığın durduğu yer de sabit değildir: oy gücü [[vote-delegation|devredilebilir]]. Token cüzdanda kalırken ağırlık başka bir adreste sayılabilir. Bazı sözleşmelerde ağırlığın sayılabilmesi için kullanıcının onu önce kendi adresine devretmesi bile gerekir.

## Dikkat

Oy gücü ile bakiye aynı şey değildir. Bakiyen yerinde dururken oy gücün sıfır olabilir (devretmediysen) ya da hiç token tutmadığın hâlde yüksek olabilir (sana devredildiyse). [[quorum|Yeter sayı]] hesapları da bakiyeye değil bu ağırlığa bakar.

İkincisi: oy gücü satın alınabilen, kiralanabilen, bazı durumlarda kısa süreliğine ödünç alınabilen bir şeydir. Bu yüzden yüksek oy gücü ile protokolü uzun vadede sahiplenme arasında kendiliğinden bir bağ yoktur.
