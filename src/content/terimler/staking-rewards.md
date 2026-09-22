---
term: "Staking Rewards"
tr: "Stake ödülleri"
aliases: []
category: konsensus
subcategory: "Staking ve validator'lar"
level: orta
short: "Doğrulayıcılara görevlerini yerine getirdikleri için ödenen, yeni ihraç ve işlem ücretlerinden oluşan gelir."
related: [staking, validator, block-reward, token-inflation, attestation, apy]
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

Staking ödülü, doğrulayıcıların yaptığı iş karşılığında aldığı ödemedir. Parası iki kaynaktan gelir: protokolün yeni ürettiği birimler ve kullanıcıların ödediği işlem ücretleri. Bazı ağlarda buna blok içeriğinin sıralanmasından doğan ek gelir de eklenir ([[maximal-extractable-value-mev|MEV]]).

## Nasıl çalışır?

Ödül "yatırınca işleyen" bir getiri değil, yapılan göreve bağlı bir ücrettir. Zamanında yayımlanan [[attestation|oylar]] ve sırası geldiğinde önerilen bloklar ödülü artırır; kaçırılan görev ödülü eksiltir. Çalışmayan bir doğrulayıcı ödül almaz.

Kişi başına düşen miktar iki büyüklüğün oranıdır: senin kilitli miktarın ve ağdaki toplam kilitli miktar. Ağ, belirli bir dönemde dağıtacağı toplamı kendi kuralıyla belirler; o toplam aynı kalırken daha çok kişi stake ederse kişi başına düşen pay azalır. Bu yüzden bir arayüzde gördüğün yıllık oran ([[apy|APY]]) verilmiş bir söz değil, o anki katılıma göre değişen bir tahmindir.

## Dikkat

Ödül ağın kendi biriminden ödenir. Elindeki birim sayısının artması, o birimlerin karşılığının arttığı anlamına gelmez: ödülün yeni ihraçtan gelen kısmı aynı zamanda [[token-inflation|arz artışıdır]] ve stake etmeyen herkesin payını seyreltir. Oranlara bakarken bu iki hareketi ayrı ayrı görmek gerekir.

[[block-reward|Blok ödülüyle]] de karıştırılır. Blok ödülü tek bir bloğu üretene ödenir; staking ödülü ise blok üretmediği turlarda bile görevini yapan bütün doğrulayıcılara dağılır. Blok üretmek bu ödülün yalnızca bir parçasıdır.
