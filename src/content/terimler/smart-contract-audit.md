---
term: "Smart Contract Audit"
tr: "Akıllı Sözleşme Denetimi"
aliases: ["akıllı sözleşme denetimi"]
category: guvenlik
subcategory: "Temel kavramlar"
level: orta
short: "Bir sözleşmenin belirli bir sürümünün, belirli bir kapsamda ve sürede güvenlik açıkları için incelenmesi."
related: [auditor, static-analysis, formal-verification, bug-bounty, contract-verification, threat-model]
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

Denetim, bir sözleşmenin yayına girmeden önce (bazen sonra) bağımsız bir gözle okunmasıdır. Amaç, kodun ne yapması gerektiğiyle gerçekte ne yaptığı arasındaki farkı bulmaktır. Çıktısı bir onay damgası değil, bulguların ciddiyet derecesine göre sıralandığı bir rapordur.

## Benzetme

Bir binanın deprem risk raporu gibi. Rapor belirli bir tarihte, belirli katlardan alınan örneklerle ve eldeki projeye göre yazılır. "Rapor aldık" cümlesi "bina sağlam" demek değildir. Raporun kapsamına girmeyen bodrum katı hakkında rapor bir şey söylemez; rapordan sonra bir kolon kesilmişse, elindeki belge artık başka bir binayı anlatıyordur.

## Nasıl çalışır?

Önce **kapsam ve sürüm dondurulur**: hangi dosyalar, hangi [[commit]]. Denetçiler projenin belgelerini ve varsa [[threat-model|tehdit modelini]] okur; sözleşmenin ne yapması gerektiğini anlamadan ne yaptığını yanlış bulmak mümkün değildir.

Sonra inceleme gelir. Bilinen kalıp hataları aramak için [[static-analysis|statik analiz]] araçları, belirli bir kuralın her durumda geçerli kaldığını sınamak için [[invariant-testing|değişmez testleri]], kritik parçalarda matematiksel kanıt için [[formal-verification|biçimsel doğrulama]] kullanılabilir. Asıl iş yine de elle okumadır: iş mantığındaki bir yanlış varsayımı araç bulamaz, çünkü araç doğrunun ne olduğunu bilmez.

Bulgular raporlanır, ekip düzeltir, düzeltmeler yeniden kontrol edilir. Rapor genellikle bu son hâliyle yayımlanır.

## Dikkat

**Denetlenmiş olmak güvenli olmak değildir.** Rapor tek bir sürümü, tek bir kapsamı ve sınırlı bir süreyi anlatır. Kapsam dışında kalan sözleşme, denetimden sonra değişen satır ve kimsenin bulamadığı açık her zaman mümkündür — [[upgradeable-contract|yükseltilebilir bir sözleşmede]] bugünkü kodun denetlenmiş kod olduğunu doğrulamak sana kalır.

Bu, [[contract-verification|doğrulanmış kaynak koduyla]] da karıştırılmamalıdır: o, zincirdeki kodun yayımlanan kaynakla aynı olduğunu gösterir; denetim ise o kaynağın okunduğunu. İkisi de "burada açık yok" demez.

"X firması denetledi" cümlesi tek başına bilgi taşımaz. Raporun kendisine bakılır: kapsam neydi, kaç bulgu çıktı, hangileri düzeltildi, hangileri "riski kabul edildi" diye kapatıldı.
