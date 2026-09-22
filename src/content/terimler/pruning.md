---
term: "Pruning"
tr: "Budama"
aliases: []
category: olceklenme
subcategory: "Diğer yaklaşımlar"
level: orta
short: "Bir node'un artık ihtiyaç duymadığı eski blok ve durum verisini kendi diskinden silerek yer açması."
related: [full-node, archive-node, state-growth, state-expiry, node-synchronization]
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

Pruning, bir [[full-node|tam node]]'un zincirin geçmişine ait eski verileri kendi diskinden silmesidir. Node zinciri baştan sona doğrulamıştır; doğrulama bittikten sonra o eski blokların gövdelerini ve aradaki eski durum sürümlerini saklamaya devam etmesi zorunlu değildir.

Silinen şey geçmiştir, bugün değil. Node güncel durumu ve son blokları tutmaya devam eder, yani yeni gelen her bloğu tam olarak doğrulamayı sürdürür.

## Benzetme

Bodrumda yıllardır biriken eski gazeteleri atmak gibi. Gazeteler dünyadan silinmez; başkalarının arşivinde durmaya devam eder. Sadece senin bodrumunda yer açılır. Bir gün o sayıya gerçekten ihtiyacın olursa, saklayan birine gidip yeniden bakarsın.

## Nasıl çalışır?

Node hangi verinin doğrulama için gerekli olduğunu ayırır. Güncel durum ve son blok aralığı kalır; daha eskisi silinir. Böylece disk ihtiyacı zincirin yaşıyla değil, tutulan pencerenin genişliğiyle orantılı olur.

Bedeli, geçmişe dair soruların cevaplanamamasıdır. "Bu adresin üç yıl önceki bakiyesi neydi" sorusunu budanmış bir node cevaplayamaz. Bunu cevaplayabilmek için hiçbir şeyi silmeyen [[archive-node|arşiv node]] gerekir; blok gezginleri ve analiz araçları bu yüzden arşiv node'larına dayanır.

## Dikkat

En sık karıştırılan nokta budur: pruning, protokolün durumunu değiştirmez. Tamamen bir node'un kendi disk kararıdır, ağdaki hiçbir veriyi yok etmez ve başka node'ları hiç ilgilendirmez.

[[state-expiry|State expiry]] ise bunun tersidir: orada kural ağın tamamı için değişir ve durumun bir parçası herkesin gözünde etkin olmaktan çıkar. Budama "ben bunu tutmuyorum" demektir; state expiry "artık kimse bunu tutmuyor" demektir. Budanmış veri gerekirse [[node-synchronization|yeniden senkronizasyonla]] geri getirilebilir.
