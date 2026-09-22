---
term: "Byzantine Fault Tolerance (BFT)"
tr: "Bizans hatası toleransı"
aliases: ["bizans hatası toleransı"]
category: konsensus
subcategory: "Mekanizmalar"
level: orta
short: "Katılımcıların bir kısmı çökse, yalan söylese ya da farklı düğümlere farklı şey söylese bile sistemin tek bir kararda anlaşabilmesi özelliği."
related: [byzantine-generals-problem, practical-byzantine-fault-tolerance-pbft, consensus-mechanism, safety-consensus, liveness, nakamoto-consensus]
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

Dağıtık bir sistemde arızanın iki türü vardır. Düğüm ya susar — çöker, ağı kaybeder — ya da aktif olarak yanlış davranır: yalan söyler, çelişkili mesajlar yollar, birine bir şey, diğerine başkasını der. İkinci türe **Bizans hatası** denir; adı [[byzantine-generals-problem|Bizans Generalleri problemine]] dayanır.

Bizans hatası toleransı, böyle düğümlerin varlığında bile geri kalanın tek bir kararda anlaşabilmesi özelliğidir. Bir protokolün "BFT" olması, hata sayısı belirli bir sınırın altında kaldığı sürece bu garantiyi vermesi demektir.

## Nasıl çalışır?

Klasik sonuç bir sınır koyar: katılımcıların üçte birinden azı Bizans davranışı gösterdiği sürece anlaşma mümkündür, bu oranın üstünde genel olarak değildir. Sebebi, mesajların hem sahte hem çelişkili olabilmesidir; sistemin, aynı anda iki farklı gerçeğe ikna edilmiş iki grubun oluşmasını engellemesi gerekir.

Bu yüzden BFT protokolleri tek mesajla değil, birkaç turda karar verir. Her düğüm gördüğünü diğerlerine aktarır; yeterli sayıda düğümün de aynı şeyi gördüğünü doğruladıktan sonra kararı benimser. Amaç iki özelliği birlikte korumaktır: hiçbir zaman çelişen iki kararın verilmemesi ([[safety-consensus|safety]]) ve sistemin er geç bir karara varması ([[liveness|liveness]]).

## Dikkat

BFT "kötü niyetli düğüm azsa çalışır" demek değildir. Tolerans sınırı, katılımcı kümesinin **bilinmesi** varsayımına yaslanır. Kimin katılımcı sayıldığı bilinmiyorsa bir saldırgan istediği kadar sahte düğüm açarak üçte bir sınırını anlamsızlaştırır ([[sybil-attack|Sybil saldırısı]]).

Bu yüzden BFT protokolleri ya katılımcıların önceden bilindiği ağlarda ([[permissioned-blockchain|izinli zincirler]]) ya da düğüm olmanın pahalı bir kaynağa bağlandığı ağlarda kullanılır. Sınırın kendisi de tasarıma göre değişir: bazı protokoller yalnızca çöken düğümlere karşı dayanıklıdır ve Bizans davranışına karşı hiçbir şey vaat etmez.
