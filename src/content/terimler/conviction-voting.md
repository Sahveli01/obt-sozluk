---
term: "Conviction Voting"
tr: ""
aliases: []
category: yonetisim
subcategory: ""
level: orta
short: "Desteğin, oy bir öneride bekletildikçe zamanla birikmesine dayanan oylama yöntemi."
related: [governance-proposal, governance-attack, treasury, token-weighted-voting, quadratic-voting]
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

Conviction voting, oyun tek seferde sayılmadığı bir yöntemdir. Belirli bir günde sandık açılıp kapanmaz; oyunu bir öneriye bırakırsın ve o öneriye düşen destek, oy orada bekledikçe artar. Destek önerinin eşiğine ulaştığı anda öneri geçer.

Oyunu geri çeker ya da başka bir öneriye taşırsan, biriken destek erimeye başlar. Böylece ölçülen şey kaç jetonun olduğu değil, o jetonun ne kadar süredir aynı şeyin arkasında durduğudur.

Türkçede yerleşmiş bir karşılığı yoktur; metinlerde İngilizce adıyla geçer.

## Benzetme

Çayın demlenmesi gibi. Demlik ne kadar beklerse çay o kadar koyulaşır; erken alırsan açık kalır. Oyunu bir öneriden çekip başkasına taşımak da demliği boşaltıp yeniden doldurmaya benzer — koyuluk sıfırdan başlar.

## Nasıl çalışır?

Her zaman adımında bir önerinin birikimi, üstüne bekleyen oy gücü kadar artar ve aynı anda sabit bir oranda azalır. Bu iki kuvvet, desteği bir tavana doğru yaklaştıran bir eğri üretir: yeni gelen oy ilk anda az, günler geçtikçe daha çok katkı yapar.

Eşik genelde önerinin isteğine bağlıdır. [[treasury|Hazineden]] büyük bir pay isteyen öneri için gereken birikim, küçük bir harcamadan yüksektir.

Sonuç, ani güç yığınaklarını etkisizleştirir: bir [[governance-proposal|öneriyi]] geçirmek için jetonu birkaç saatliğine ödünç almak yetmez, onu haftalarca tutmak gerekir. Bu, [[governance-attack|yönetişim saldırısının]] maliyetini doğrudan zamana çevirir.

## Dikkat

Aynı özellik, yöntemin bedelidir de: kararlar yavaşlar. Acil bir güvenlik yaması ya da bir parametrenin hızla değiştirilmesi gereken durum için ayrıca hızlı bir yol tanımlanmazsa, yavaşlık kendisi bir risk hâline gelir.

Zaman boyutu servet boyutunu da ortadan kaldırmaz. Çok jetonu olan kişi eşiğe yine herkesten önce ulaşır; yalnızca bunu bir anda değil, bekleyerek yapar.
