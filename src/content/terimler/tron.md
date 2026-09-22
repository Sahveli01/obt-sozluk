---
term: "Tron"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "Ucuz ve sık transferi hedefleyen, blok üreticilerini oyla belirleyen EVM uyumlu blockchain ağı."
related: [delegated-proof-of-stake-dpos, evm-compatibility, stablecoin, validator, blockchain-trilemma]
disambiguation: []
tags: []
status: taslak
reviewedBy: []
dateSensitive: true
sources: []
added: 2026-09-21
updated: 2026-09-22
---

## Nedir?

Tron, içerik paylaşımı ve doğrudan ödeme etrafında kurgulanmış bir ağ olarak ortaya çıktı; zamanla ağırlığı yüksek hacimli ve düşük tutarlı transferlere kaydı. Yazıldığı tarih itibarıyla ağın yoğun biçimde kullanıldığı alan [[stablecoin|stabilcoin]] gönderimidir.

## Nasıl çalışır?

Ağ [[evm-compatibility|EVM uyumludur]]: sözleşmeler [[solidity|Solidity]] ile yazılır ve Ethereum tarafındaki geliştirme alışkanlıkları büyük ölçüde geçerlidir.

Blok üretimi [[delegated-proof-of-stake-dpos|delege edilmiş proof of stake]] ailesindendir. Token sahipleri oy kullanır, oyların belirlediği sınırlı sayıda üretici blokları sırayla üretir. Kimin blok üreteceği kurayla değil seçimle belirlendiği için üretici kümesi küçük ve bilinen bir grup olarak kalır.

Ücret tarafında ikinci bir tercih daha vardır: kullanıcı her işlemde ücret ödemek yerine token kilitleyerek bant genişliği ve hesaplama kaynağı edinebilir. Sık işlem yapan bir kullanıcı için maliyet böylece işlem başına değil, kilitlenen miktar üzerinden kurulur.

## Dikkat

Kabul edilen bedel açıktır: oy gücü az sayıda elde toplandığında blok üretimi de aynı ellerde toplanır ve ağın bir işlemi sansürlemesi ya da kuralını değiştirmesi için ikna edilmesi gereken taraf sayısı azalır. [[blockchain-trilemma|Trilemmada]] hız ve maliyet tarafına yaslanan her ağ gibi Tron da bunu dağıtıklıktan ödün vererek yapar.

Kaynak kiralama modeli de sadeliği azaltır: bir işlemin gerçek maliyetini anlamak için ücretin yanında kilitli bakiyeyi de hesaba katmak gerekir.
