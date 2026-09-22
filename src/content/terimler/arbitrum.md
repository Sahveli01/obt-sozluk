---
term: "Arbitrum"
tr: ""
aliases: []
category: aglar
subcategory: ""
level: orta
short: "İşlemleri geçerli sayıp itiraza açık bırakan ve anlaşmazlığı tek bir makine adımına kadar daraltarak çözen bir Ethereum katman 2 ağı."
related: [optimistic-rollup, fraud-proof, challenge-period, sequencer, layer-2, ethereum]
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

Arbitrum, [[ethereum|Ethereum]] üzerinde çalışan bir [[optimistic-rollup|iyimser rollup]]'tır. İşlemler ana zincirin dışında yürütülür, verisi ve sonucu Ethereum'a yazılır; ana zincir bu sonucu tek tek yeniden hesaplamaz, doğru varsayar ve itiraza açık bırakır.

## Nasıl çalışır?

Ağın ayırt edici tercihi, itirazın nasıl çözüldüğüdür. İki taraf bir sonuçta anlaşamadığında bütün hesap ana zincirde tekrarlanmaz; karşılıklı turlarda anlaşmazlık ikiye bölünerek daraltılır ve sonunda geriye tek bir makine adımı kalır. Ethereum'daki sözleşme yalnızca o adımı çalıştırıp kimin haklı olduğunu belirler. Buna çok turlu, etkileşimli [[fraud-proof|hile ispatı]] denir; amacı pahalı ana zincirde yapılan işi olabildiğince küçültmektir.

Yürütme tarafında ağ, Ethereum istemci kodunu farklı bir hedefe derleyip kendi ortamında çalıştırır; bu sayede Solidity ile yazılmış sözleşmeler çoğunlukla değiştirilmeden taşınır. Sözleşmeleri yükseltme ve parametreleri değiştirme yetkisi bir [[decentralized-autonomous-organization-dao|DAO]] üzerinden jeton sahiplerine verilmiştir.

## Dikkat

Çekim süresi doğrudan bu tasarımdan doğar. Varlığını Ethereum'a geri çekerken sonucun itiraz edilebileceği pencerenin, yani [[challenge-period|itiraz süresinin]] kapanmasını beklersin. Bu bekleme bir yavaşlık kusuru değil, güvenlik varsayımının bedelidir: en az bir dürüst tarafın zamanında itiraz edeceği varsayılır.

İkinci soru sıralamadır. Yazıldığı tarih itibarıyla işlemleri sıraya koyan [[sequencer|sıralayıcı]] merkezî olarak işletiliyor. Sıralayıcı paranı alamaz — veri ana zincire yazıldığı için durum dışarıdan yeniden kurulabilir — ama işlemleri geciktirebilir ve sıralamayı belirleyebilir.
