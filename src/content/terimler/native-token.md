---
term: "Native Token"
tr: "Yerel token"
aliases: ["yerel token"]
category: temeller
subcategory: "Para birimleri ve ücretler"
level: orta
short: "Bir ağın protokol düzeyinde tanıdığı, ücret ödemede ve ağ güvenliğinde kullanılan kendi para birimi."
related: [coin, gas, transaction-fee, staking, token-blockchain, layer-1]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: false
sources: []
added: 2026-09-21
updated: 2026-09-21
---

## Nedir?

Native token, bir zincirin protokolüne gömülü para birimidir. "Gömülü" demek, onu tanımlayan ayrı bir sözleşme olmaması demektir: bakiyeler doğrudan ağın durumunda tutulur, kuralları da düğüm yazılımının içinde yazılıdır. [[coin]] kelimesi çoğu zaman aynı şeyi anlatır; "native token" ifadesi ise o paranın ağ içindeki **rolünü** vurgular.

## Nasıl çalışır?

Bir native token genellikle üç işi birden görür:

- **Ücret ödeme.** Zincire yazdığın her [[transaction|işlemin]] ücreti bu parayla ödenir; protokol başka bir varlığı kabul etmez.
- **Güvenlik.** [[proof-of-stake-pos|Hisse ispatı]] kullanan ağlarda doğrulayıcılar bu parayı [[staking|kilitler]] ve kural ihlalinde bir kısmını kaybeder. İş ispatı kullanan ağlarda ise madencilerin ödülü bu parayla verilir.
- **Hesap birimi.** Protokolün içindeki ödüller, cezalar ve ücret hesapları hep bu birimle ifade edilir.

## Dikkat

Cüzdanında bir sürü [[token-blockchain|token]] olması işlem yapabileceğin anlamına gelmez. Ücreti ödeyecek native token'ın yoksa elindeki hiçbir token'ı gönderemezsin; yeni başlayanların en sık takıldığı yer burasıdır.

Ayrıca her ağda tek bir cevap yoktur: [[layer-2|Layer 2]] ağlarının çoğu ücreti ana zincirin native token'ıyla alır, bazıları kendi belirlediği bir varlığı kullanır. Bir ağa geçmeden önce ücreti neyle ödeyeceğine bakmak gerekir.
