---
term: "Burn-and-Mint"
tr: ""
aliases: ["burn and mint"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Tokenı kaynak zincirde yakıp hedef zincirde aynı miktarı basan yöntem; kilitli teminat havuzu yoktur, arz yer değiştirir."
related: [lock-and-mint, token-burn, mint, total-supply, cross-chain-messaging, omnichain]
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

Kilitlemek yerine yakmaya dayanan yöntem. Token kaynak zincirde [[token-burn|yakılır]], yani kalıcı olarak yok edilir; hedef zincirde aynı miktar [[mint|basılır]]. Ortada bekleyen bir teminat havuzu yoktur.

Bu yöntem, tokenın ihraççısının her zincirdeki sözleşmede basım yetkisini elinde tuttuğu durumlarda mümkündür. O zaman hedef zincirdeki token bir köprünün temsili değil, aynı tokenın o zincirdeki sürümüdür.

Türkçede yerleşik bir karşılığı yok; İngilizce kullanılır.

## Nasıl çalışır?

Yakma işlemi kaynak zincirde bir kayıt bırakır. Bu kaydın gerçekliği hedef zincire taşınıp doğrulanır ([[cross-chain-messaging|zincirler arası mesajlaşma]]) ve ancak doğrulanmış mesaj basımı tetikleyebilir.

Arz muhasebesi burada korunur: her zincirdeki [[total-supply|toplam arz]]ın toplamı sabit kalır, yalnızca dağılımı değişir. [[lock-and-mint]]'teki "kilitli miktar = dolaşımdaki temsil" eşitliğinin yerini "yakılan miktar = basılan miktar" eşitliği alır.

Güven varsayımı da yer değiştirir. Boşaltılacak bir havuz olmadığı için "kilidi soy" tipi bir saldırı yoktur; ama sahte bir mesaj kabul edilirse karşılıksız basım olur ve bu, tek bir zinciri değil tokenın tüm zincirlerdeki arzını sulandırır. Ayrıca her zincirde kimin basabileceğine ihraççı karar verir: bu, tasarımın içine yerleşmiş merkezî bir yetki noktasıdır.

## Dikkat

Yakmak geri alınabilir bir işlem değildir. Hedef taraftaki basım herhangi bir sebeple gerçekleşmezse kaynak taraftaki miktar kendiliğinden geri gelmez; çözüm, mesajın teslim edilip işlenmesidir. Bu yüzden bu tasarımlarda teslim edilememiş mesajların ne olacağı ayrıca kurala bağlanır.

Kullanıcı açısından görünür farkı şudur: elinde sarmalanmış bir sürüm değil, tokenın kendisi olur; bu da aynı varlığın birbirinin yerine geçmeyen kopyalarının çoğalmasını engeller.
