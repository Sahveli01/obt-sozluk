---
term: "DeFi Primitive"
tr: ""
aliases: ["defi yapı taşı"]
category: defi
subcategory: "Temeller"
level: orta
short: "DeFi'de tek bir temel finansal işlevi yapan, başka protokollerin üstüne inşa edebileceği en küçük yapı taşı."
related: [money-legos, composability, decentralized-exchange-dex, lending-protocol, stablecoin, decentralized-finance-defi]
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

DeFi primitive, tek bir finansal işlevi yapan ve başkalarının üstüne inşa edebileceği en küçük yapı taşıdır. İki varlığı takas eden bir havuz, teminat karşılığı borç veren bir protokol, değeri bir varlığa sabitlenmiş bir [[stablecoin|stablecoin]] — her biri tek başına anlamlı ve tek başına çalışır.

Terimin yerleşik bir Türkçe karşılığı yok; metinlerde çoğu zaman "yapı taşı" diye açıklanır ama terimin kendisi İngilizce kullanılır.

## Nasıl çalışır?

Bir sözleşmenin primitive sayılması için üç şey gerekir.

**Dar iş tanımı.** [[decentralized-exchange-dex|Takas protokolü]] yalnızca iki varlığı değiştirir; kimin neden takas yaptığıyla ilgilenmez. [[lending-protocol|Borç verme protokolü]] yalnızca teminat ile borç arasındaki ilişkiyi yönetir. Dar olmak bir eksiklik değil, tekrar tekrar kullanılabilmenin şartıdır.

**Açık arayüz.** Fonksiyonlar herkese görünür ve doğrudan çağrılabilirdir; kullanmak için kimseyle anlaşma yapılmaz.

**Birleşebilme.** Bir primitive'in çıktısı bir başkasının girdisi olabilir. Bunu mümkün kılan özelliğe [[composability|birleştirilebilirlik]], taşların üst üste dizilmesiyle kurulan yapılara ise [[money-legos]] denir.

## Dikkat

Her protokol primitive değildir. Birkaç protokolü arka arkaya çağırıp kullanıcıya tek düğme olarak sunan bir ürün bir bileşimdir; altındaki parçalar olmadan yapacak hiçbir işi yoktur. Ayrım önemlidir, çünkü bir şey ters gittiğinde hatanın hangi katmanda olduğunu bu ayrım söyler.

Kelimenin kriptografideki kullanımı ayrıdır: orada "primitive", karma fonksiyonu ya da imza şeması gibi temel bir yapı taşı anlamına gelir. Aynı kelime, başka alan.
