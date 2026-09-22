---
term: "Lock-and-Mint"
tr: ""
aliases: ["lock and mint"]
category: olceklenme
subcategory: "Köprüler ve zincirler arası"
level: orta
short: "Varlığı kaynak zincirde kilitleyip hedef zincirde onu temsil eden yeni bir token basan köprü yöntemi."
related: [burn-and-mint, wrapped-token, blockchain-bridge, bridge-exploit, liquidity-network-bridge, cross-chain-messaging]
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

Köprülerin en yaygın yöntemi. Varlık kaynak zincirdeki bir kilit sözleşmesine yatırılır ve orada durur; hedef zincirde onu bire bir temsil eden yeni bir token basılır ([[wrapped-token|sarmalanmış token]]). Geri dönüşte temsil yakılır ve kilit açılır.

Türkçede yerleşik bir karşılığı yok; metinlerde İngilizce hâliyle geçer.

## Nasıl çalışır?

1. **Yatırma.** Kullanıcı varlığı kilit sözleşmesine gönderir, sözleşme bunu bir olay olarak yayımlar.
2. **Hüküm.** Bu olayın gerçekten olduğu bilgisi hedef zincire taşınır ve orada doğrulanır ([[cross-chain-messaging|zincirler arası mesajlaşma]], [[relayer]]).
3. **Basım.** Hedef zincirdeki sözleşme aynı miktarda temsil basar. Basma yetkisi yalnızca bu doğrulanmış hükümle tetiklenebilir — köprünün bütün güvenliği bu tek bağlantıdadır.
4. **Dönüş.** Temsil yakılır, kilit sözleşmesi aslı serbest bırakır.

Düzenin dayandığı eşitlik basittir: kilitli miktar, dolaşımdaki temsil miktarına eşit olmalıdır. Sahte bir hüküm kabul edilirse fazladan temsil basılır ve eşitlik sessizce bozulur.

## Dikkat

Kilitli teminat tek bir sözleşmede birikir: o köprüden geçmiş herkesin varlığı aynı adrestedir ve büyüdükçe daha çekici bir hedef olur. Neden köprülerin sık sık saldırıya uğradığını [[bridge-exploit|köprü istismarı]] açıklıyor.

Elindeki temsil bir varlık değil, bir alacak hakkıdır: kilitteki aslı geri isteme hakkı. Kilit boşaltılırsa token hedef zincirde durmaya devam eder, arkasındaki karşılık kalmaz.

Bu yöntemde hedef zincirdeki arz, kaynak taraftaki kilide bağımlıdır. Kilidi olmayan, arzı doğrudan taşıyan yaklaşım için [[burn-and-mint]] terimine bak.
