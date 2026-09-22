---
term: "Node Synchronization"
tr: "Düğüm Senkronizasyonu"
aliases: ["senkronizasyon"]
category: konsensus
subcategory: "Ağ katmanı"
level: orta
short: "Yeni ya da geride kalmış bir düğümün zincirin geçmişini indirip doğrulayarak güncel duruma yetişmesi."
related: [node, full-node, weak-subjectivity, block-header, archive-node, genesis-block]
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

İlk kez açılan bir [[node|node]] zincir hakkında hiçbir şey bilmez. Senkronizasyon, o node'un komşularından geçmişi indirip doğrulayarak zincirin güncel durumuna yetişmesidir. Uzun süre kapalı kalmış bir node için de aynı süreç işler, yalnızca kapatıldığı andan bugüne kadarki kısım için.

Bitene kadar node güvenilir cevap veremez: elindeki zincir eksiktir.

## Benzetme

İkinci el araba almaya benzer. Ya bütün servis kayıtlarını, faturaları ve muayene raporlarını ilk günden bugüne tek tek inceler, aracın geçmişini kendin çıkarırsın. Ya da güvendiğin bir ekspertizin "şu tarihte, şu kilometrede araç şu durumdaydı" raporunu başlangıç kabul eder, yalnızca ondan sonrasına bakarsın. İkinci yol çok daha kısadır — karşılığında o raporu verene bir kez güvenmiş olursun.

## Nasıl çalışır?

Senkronizasyon yaklaşımları tek bir eksende ayrışır: node geçmişin ne kadarını kendi doğruluyor?

Bir uçta, [[genesis-block|genesis bloğundan]] başlayıp her bloğu sırayla işlemek var. Node bütün işlemleri baştan yeniden çalıştırır ve bugünkü duruma kendi hesabıyla varır. Kimsenin sözüne güvenmesi gerekmez; bedeli zamandır ve zincirin geçmişi uzadıkça uzar.

Öteki uçta, yakın bir noktadan başlamak var. Node o noktadaki durumu komşularından hazır alır, tutarlılığını [[block-header|blok başlıklarına]] karşı kontrol eder ve oradan ileri doğru kendi doğrulamasını yapar. Hızlıdır, ama başlangıç noktasının doğru olduğu varsayımına dayanır. [[weak-subjectivity|Zayıf öznellik]] tam da bu varsayımın adıdır: yeni katılan node'un güncel ve dışarıdan teyit edilmiş bir referansla başlaması beklenir.

## Dikkat

Senkronu bitmemiş bir node'a soru sormak yanlış cevap üretir: bakiye eksik görünür, var olan bir işlem "yok" sanılır. Bir uygulama kendi node'una bağlanıyorsa senkron durumunu kontrol etmeden sorgu göndermemelidir.

İkinci karışıklık: "senkron tamamlandı", "bütün geçmiş elimde" demek değildir. Pek çok node güncel durumu tutar ama eski blokların ayrıntısını saklamaz; geçmişe dönük sorgular için [[archive-node|archive node]] gerekir.
